"use client";

import { useSession } from "next-auth/react";

export default function App() {
  const { data: session } = useSession();

  return (
    <main>
      <h1 className="text-center p-5 mt-[50px]">
        {session ? "Hello " + session : "No One Here"}
      </h1>
    </main>
  );
}
