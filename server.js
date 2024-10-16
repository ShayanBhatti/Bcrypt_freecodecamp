'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
 


// async function hashcompare(myPlaintextPassword,saltRounds){
//  const hashs =  await bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//         console.log(hash);
// const  hashscompare = await bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//             console.log(res);
//           });
//         });
// }

async function hashAndComparePassword(myPlaintextPassword, saltRounds) {
    try {
      // Hash the password asynchronously
      const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
  
      // Simulate user input (replace with actual user input)
      const userProvidedPassword = 'myPlaintextPassword'; // Replace with actual input
  
      // Compare the hashed password with the user-provided password asynchronously
      const match = await bcrypt.compare(userProvidedPassword, hashedPassword);
  
      console.log('Hashed password:', hashedPassword); // Remove this line in production
      console.log('Password match:', match);
    } catch (error) {
      console.error('Error:', error);
    }
  }
//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
