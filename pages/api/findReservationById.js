// import {MongoClient} from "mongodb";
//
//     try {
//         const client = await MongoClient.connect('mongodb://127.0.0.1:27017/');
//
//         const db = client.db('HotelReservation');
//
//         const reservationCollection = db.collection('Reservations');
//
//         const reservation = await reservationCollection.findOne({
//             _id: new ObjectId(reservationId),
//         });
//
//         client.close;
//
//
//         return {
//             props: {
//                 reservationData: {
//                     name: reservation.data.name,
//                     from: reservation.data.from,
//                     to: reservation.data.to,
//                     address: reservation.data.address,
//                     room: reservation.data.room,
//                     id: reservation._id.toString(),
//                 }
//             },
//             revalidate: 1
//         };
//     } catch (e) {
//         console.log('Error occurred while inserting data:', e.message);
//     }