export function shortenAddress(address?: string) {
  if (!address) return "Wallet not connected";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}