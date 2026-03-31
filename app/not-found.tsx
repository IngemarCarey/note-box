import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <section className="surface" style={{ borderRadius: 28, padding: 28, display: "grid", gap: 12, textAlign: "center", maxWidth: 420 }}>
        <p className="section-title">Not Found</p>
        <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "-0.05em" }}>This note is not in the archive.</h1>
        <p className="muted" style={{ margin: 0 }}>Return to the workspace and open another entry.</p>
        <Link href="/" className="primary-button" style={{ padding: "12px 16px", borderRadius: 16 }}>
          Back to Hub
        </Link>
      </section>
    </main>
  );
}