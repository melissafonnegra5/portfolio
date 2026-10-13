/**
 * Content section template: container, h2 title wired to aria-labelledby
 * and an optional lead paragraph.
 * @param {{
 *   id: string,
 *   title: string,
 *   lead?: string,
 *   component: string,
 *   children: React.ReactNode,
 * }} props
 */
export default function Section({ id, title, lead, component, children }) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className="section" aria-labelledby={titleId} data-component={component}>
      <div className="container">
        <h2 id={titleId} className="section-title">
          {title}
        </h2>
        {lead && <p className="section-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
