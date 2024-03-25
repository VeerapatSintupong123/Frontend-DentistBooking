export default async function RegisterUser(
  name: string,
  tel: string,
  email: string,
  password: string
) {
  const respone = await fetch("http://localhost:5000/api/v1/auth/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: name,
      telephone: tel,
      email: email,
      role: "user",
      password: password,
    }),
  });

  if (!respone.ok) throw new Error("Failed to Register");

  const lastRes = await respone.json();
  console.log(lastRes);
  return lastRes;
}
