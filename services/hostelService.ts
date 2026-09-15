export async function getHostels() {
  const response = await fetch("/api/hostels");

  if (!response.ok) {
    throw new Error("Failed to fetch hostels");
  }

  return response.json();
}