import type { Scholarship } from "../../data";

const MONTHS: Record<string, string> = {
  jan:"01", january:"01", feb:"02", february:"02", mar:"03", march:"03",
  apr:"04", april:"04", may:"05", jun:"06", june:"06", jul:"07", july:"07",
  aug:"08", august:"08", sep:"09", september:"09", oct:"10", october:"10",
  nov:"11", november:"11", dec:"12", december:"12"
};

export function parseExplicitDeadline(value: string): string | null {
  const iso = value.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if (iso) return iso[0];
  const date = value.match(/\b(\d{1,2})\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(20\d{2})\b/i);
  if (!date) return null;
  const day = Number(date[1]);
  const month = MONTHS[date[2].toLowerCase()];
  const year = Number(date[3]);
  const candidate = new Date(Date.UTC(year, Number(month) - 1, day));
  if (candidate.getUTCFullYear() !== year || candidate.getUTCMonth() !== Number(month) - 1 || candidate.getUTCDate() !== day) return null;
  return `${year}-${month}-${String(day).padStart(2,"0")}`;
}

function escapeIcs(value: string): string {
  return value.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;");
}

export function buildDeadlineCalendar(items: Scholarship[], generatedAt = new Date()): string {
  const stamp = generatedAt.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z");
  const events = items.flatMap(item => {
    const date = parseExplicitDeadline(item.deadline);
    if (!date) return [];
    const dateStamp = date.replace(/-/g,"");
    return [
      "BEGIN:VEVENT",
      `UID:grantly-${item.id}-${dateStamp}@grantly.app`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${dateStamp}`,
      `DTEND;VALUE=DATE:${dateStamp}`,
      `SUMMARY:${escapeIcs(`Scholarship deadline: ${item.name}`)}`,
      `DESCRIPTION:${escapeIcs(`Verify deadline and eligibility on the official source: ${item.source}`)}`,
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeIcs(`Deadline tomorrow: ${item.name}`)}`,
      "END:VALARM",
      "END:VEVENT"
    ].join("\r\n");
  });
  return ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Grantly//Scholarship Deadline Calendar//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH",...events,"END:VCALENDAR"].join("\r\n");
}
