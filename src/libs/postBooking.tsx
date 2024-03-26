export default async function postBooking(
    user: string,
    dentistId: string,
    bookDate: string,
  ) {
    const respone = await fetch(`http://localhost:5000/api/v1/dentists/${dentistId}/bookings`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        bookDate: bookDate,
        user: user,
      }),
    });
  
    if (!respone.ok) throw new Error("Failed to Book");
  
    const lastRes = await respone.json();
    return lastRes;
  }