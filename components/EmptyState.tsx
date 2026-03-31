export function EmptyState({ title, detail }: { title: string; detail: string }) {
  return (
    <div
      className="surface"
      style={{
        borderRadius: 24,
        padding: 22,
        textAlign: "center",
        display: "grid",
        gap: 8,
      }}
    >
      <p style={{ margin: 0, fontWeight: 700, fontSize: "1.05rem" }}>{title}</p>
      <p className="muted" style={{ margin: 0 }}>{detail}</p>
    </div>
  );
}