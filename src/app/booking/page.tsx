import DateTimeReserve from "@/components/DateTimeReserve"

export default function Booking() {

  return (
    <main>
      <h1 className="text-center p-5 mt-[50px]">Booking Page</h1>
      <div className="flex flex-row justify-around">
        <DateTimeReserve />
      </div>
      
    </main>
  );
}
