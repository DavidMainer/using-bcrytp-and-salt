import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

// main idea of the code is to use salt and bcrypt to encrypt password so that they are safely stored in the database
// am using salt to generate random as i say giberish   before the bcrypted password
// the higher the salt the longer the time to encrypt the stronger the password
// the reason of using salt is that if many users have the same passwords there passwords in the database wont be the same
// am mainer this is my practice

const password = "Main@345673";
const salt = bcrypt.genSaltSync(12);
const hash = await bcrypt.hash(password, salt);
console.log(hash);

const port = 3000;
app.listen(`${port}`, () => {
  console.log(`Server running on port ${port}`);
});
