// import { MongoClient } from "mongodb";
//
// async function fetchAllReservations(req, res) {
//     try {
//         const client = await MongoClient.connect("mongodb://127.0.0.1:27017/");
//         const db = client.db("HotelReservation");
//         const reservationCollection = db.collection("Reservations");
//         const reservations = await reservationCollection.find().toArray();
//         await client.close();
//
//         return res.status(200).json(reservations);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// }
//
// export default fetchAllReservations;
