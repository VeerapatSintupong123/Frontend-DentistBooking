'use client'
import DentistCard from "@/components/DentistCard";
import DentistCatalog from "@/components/DentistCatalog";
import DentistPanel from "@/components/DentistPanel";
import GetDentists from "@/libs/getDentist";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useState } from "react";

export default async function Dentist() {
  // const [dentists, setDentists] = useState([
  //   { dentistName: "Veeraphat", imgSrc: "/img/Veeraphat.jpg" },
  //   { dentistName: "Schwynn", imgSrc: "/img/Schwynn.jpg" },
  //   { dentistName: "Kankawin", imgSrc: "/img/Kankawin.jpg" },
  //   { dentistName: "Kankawin", imgSrc: "/img/Kankawin.jpg" },
  //   { dentistName: "Schwynn", imgSrc: "/img/Schwynn.jpg" },
  //   { dentistName: "Kankawin", imgSrc: "/img/Kankawin.jpg" },
  //   { dentistName: "Kankawin", imgSrc: "/img/Kankawin.jpg" },
  //   { dentistName: "Schwynn", imgSrc: "/img/Schwynn.jpg" },
  // ]);

  // const dentistCards = dentists.map((dentist, index) => (
  //   <DentistCard key={index} dentistName={dentist.dentistName} imgSrc={dentist.imgSrc} />
  // ));

//   const dentistCardRows = [];
//     for (let i = 0; i < dentistCards.length; i += 4) {
//     dentistCardRows.push(dentistCards.slice(i, i + 4));
// }

const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

const dentists = await GetDentists(session.user.token);


  return (
    <main className="pt-[50px]">
      <div className="text-5xl text-center py-[25px] font-mono">Dentist List</div>
      <DentistCatalog dentJson={dentists}/>
    </main>
  );
}
