export default async function GetUser(token: string) {
  const respone = await fetch("http://localhost:5000/api/v1/auth/me", {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });

  if (!respone.ok) return new Error("Failed to fetch");
  return await respone.json();
}
