// import { MongoClient } from "mongodb";
//
// export default async function handler(req, res) {
//     if (req.method !== "GET") {
//         return res.status(405).end(); // Method Not Allowed
//     }
//
//     const client = await MongoClient.connect("mongodb://127.0.0.1:27017/");
//     const db = client.db("HotelReservation");
//     const reservationCollection = db.collection("Reservations");
//     const reservations = await reservationCollection
//         .find({ "data.room": { $in: req.query.rooms.split(",") } })
//         .toArray();
//     await client.close();
//
//     return res.status(200).json(reservations);
// }
