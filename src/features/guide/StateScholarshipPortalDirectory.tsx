import { useMemo, useState } from "react";
import { ExternalLink, MapPin, Search } from "lucide-react";
import { scholarshipPortals } from "./portalDirectory";

export default function StateScholarshipPortalDirectory() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().normalize("NFKC").toLocaleLowerCase();
    if (!term) return scholarshipPortals;
    return scholarshipPortals.filter(item =>
      [item.state, item.portal, item.routeNote, ...(item.alternate ?? []).map(link => link.name)]
        .join(" ").normalize("NFKC").toLocaleLowerCase().includes(term)
    );
  }, [query]);

  return <section className="state-portal-directory" aria-labelledby="state-portal-heading">
    <div className="state-portal-heading">
      <div className="state-portal-icon"><MapPin size={19}/></div>
      <div><div className="eyebrow">STATE & UNION TERRITORY ROUTES</div><h3 id="state-portal-heading">Find your official scholarship portal</h3><p>Search by state or UT to start at the relevant government portal. Some states operate multiple portals by department or student category.</p></div>
    </div>
    <label className="state-portal-search">
      <Search size={17}/>
      <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search state, UT or portal…" aria-label="Search state or scholarship portal"/>
      {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear portal search">Clear</button>}
    </label>
    <p className="state-portal-count" aria-live="polite">Showing {filtered.length} of {scholarshipPortals.length} state and UT portal routes</p>
    {filtered.length ? <div className="state-portal-grid">{filtered.map(item => <article className="state-portal-card" key={item.state}>
      <div className="state-portal-card-top"><span className="state-portal-pin"><MapPin size={13}/></span><strong>{item.state}</strong></div>
      <a className="state-portal-main-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.portal}<ExternalLink size={13}/></a>
      <p>{item.routeNote}</p>
      {item.alternate?.map(link => <a className="state-portal-alt-link" href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>{link.name}<ExternalLink size={12}/></a>)}
    </article>)}</div> : <div className="state-portal-empty">No state or portal matches “{query}”. Try a state name or use the <a href="https://scholarships.gov.in/All-Scholarships" target="_blank" rel="noopener noreferrer">National Scholarship Portal</a>.</div>}
    <p className="state-portal-footnote">Portal links are a discovery index, not a complete list of every state scheme. Application routes, academic-year availability and deadlines can change. Confirm the current official notice before applying. Grantly does not collect portal passwords, OTPs or identity documents.</p>
  </section>;
}
