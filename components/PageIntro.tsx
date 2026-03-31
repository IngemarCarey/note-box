export function PageIntro({ eyebrow, title, detail }: { eyebrow: string; title: string; detail: string }) {
  return (
    <section style={{ display: "grid", gap: 8 }}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{detail}</p>
    </section>
  );
}