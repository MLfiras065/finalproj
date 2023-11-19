// const stripe =require("stripe")("sk_test_51O7xr1FBTzNlZioJpUXM980w565hSIsBSegabCS0pQbzpKttWA1C0yq1baCGoambNr30OJOrTJ1E8hrvnaSSj3eZ00ghqy13af")
// module.exports={
//     intents: async (req,res)=>{
//         try {
            
//             const paymentIntent = await stripe.paymentIntents.create({
//               amount: req.params.amount,
//               currency: 'EUR',
//               automatic_payment_methods: {
//                 enabled: true,
//               }
//             })
        
//             res.json({ paymentIntent: paymentIntent.client_secret })
//           } catch (e) {
//             res.status(400).json({
//               error: e.message,
//             });
//           }
//         }
// }