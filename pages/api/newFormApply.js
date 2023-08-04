// import {MongoClient} from "mongodb";
// import reservationCollection from "mongodb/lib/collection";
//
// async function handler(req, res){
//   if (req.method === 'POST'){
//       try {
//           const data = req.body;
//
//           const{title, image, address, description} = data;
//
//           const client = await MongoClient.connect('mongodb://127.0.0.1:27017/');
//
//           const db = client.db('HotelReservation')
//
//           const reservationCollection = db.collection('Reservations')
//
//           const result = await reservationCollection.insertOne({data})
//
//           console.log(result)
//
//           await client.close();
//
//           res.status(200).json({message: 'Data inserted successfully'})
//
//       }catch (e){
//           console.log('Error occurred while inserting data:', e.message);
//
//           res.status(500).json({ error: 'An error occurred' });
//   }
//
//   }
// }
//
// export default handler;