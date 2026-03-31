export function SaveNoteButton({ disabled, isSaving }: { disabled?: boolean; isSaving?: boolean }) {
  return (
    <button
      type="submit"
      className="primary-button"
      disabled={disabled}
      style={{
        padding: "14px 18px",
        border: "none",
        borderRadius: 18,
        fontWeight: 700,
        fontSize: "0.98rem",
        width: "100%",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {isSaving ? "Saving Note..." : "Save Note"}
    </button>
  );
}