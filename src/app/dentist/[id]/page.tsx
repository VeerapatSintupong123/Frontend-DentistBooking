import Image from "next/image";
import GetDentist from "@/libs/getOneDentist";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CarDetailPage({params} : {params:{id:string}}) {

    // const mockCarRepo = new Map()
    // mockCarRepo.set("001", {name: "Honda Civic", image: "/img/Veeraphat.jpg"});
    // mockCarRepo.set("002", {name: "Honda Accord", image: "/img/Kankawin.jpg"});
    // mockCarRepo.set("003", {name: "Toyota Fortuner", image: "/img/Schwynn.jpg"});
    // mockCarRepo.set("004", {name: "Tesla Model 3", image: "/img/Veeraphat.jpg"});

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const dentist = await GetDentist(params.id, session.user.token);

    console.log(dentist)

    return(
        <main className="text-center pt-[50px]">
            <h1>{dentist.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={'/img/Schwynn.jpg'}
                alt='Dent Image'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]" />
                <div className="tex-md mx-5">{dentist.name}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'},]
}