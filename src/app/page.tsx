import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import GetUser from "@/libs/getUser";
import GetDentists from "@/libs/getDentist";

export default async function App() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await GetUser(session.user.token);
  const create = new Date(profile.data.createdAt);

  const dentists = await GetDentists(session.user.token);
  const bookings = [];

  for (let i = 0; i < dentists.count; i++) {
    const dentistBookings = dentists.data[i].bookings;
    for (let j = 0; j < dentistBookings.length; j++) {
      bookings.push(dentistBookings[j]);
    }
  }

  var userBookings;
  if (session.user.role === "user")
    userBookings = bookings.filter((book) => book.user === session.user._id);
  else userBookings = bookings;

  return (
    <main>
      <h1 className="text-2xl text-center mt-[100px] font-bold">
        Welcome User
      </h1>
      <div
        className="bg-slate-100 m-5 p-5 w-[60%] mx-auto"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          borderRadius: "10px",
        }}
      >
        <div className="text-2xl font-semibold ml-2">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2">
          <tbody>
            <tr>
              <td className="text-xl font-semibold">Telephone:</td>
              <td className="text-xl">{profile.data.telephone}</td>
            </tr>
            <tr>
              <td className="text-xl font-semibold">Email:</td>
              <td className="text-xl">{profile.data.email}</td>
            </tr>
            <tr>
              <td className="text-xl font-semibold">Created:</td>
              <td className="text-xl">{create.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="bg-slate-100 m-5 p-5 w-[60%] mx-auto"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          borderRadius: "10px",
        }}
      >
        <div>
          {userBookings.map((booking, index) => (
            <table
              key={booking._id}
              className="table-auto border-separate border-spacing-2"
            >
              <caption className="text-left text-xl font-semibold ml-2">
                Booking
              </caption>
              <tbody>
                <tr>
                  <td className="text-xl font-semibold">Dentist:</td>
                  <td className="text-xl">{booking.dentist}</td>
                </tr>
                <tr>
                  <td className="text-xl font-semibold">Book Date:</td>
                  <td className="text-xl">{booking.bookDate}</td>
                </tr>
                <tr>
                  <td className="text-xl font-semibold">Status:</td>
                  <td className="text-xl">{booking.status}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </main>
  );
}
