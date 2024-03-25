import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import GetUser from "@/libs/getUser";

export default async function App() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await GetUser(session.user.token);

  return (
    <main>
      <h1 className="text-center p-5 mt-[50px]">
        {profile ? "Hello " + profile.data.name : "Hello"}
      </h1>
    </main>
  );
}
