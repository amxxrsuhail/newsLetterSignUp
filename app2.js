// const express = require("express");
// const app = express();
// const port = 3000;

// const url = "https://us21.admin.mailchimp.com/lists/6078fe4028";
// const options = {
//   method: "POST",
//   auth: "ameer:4ce10ff17c9d6f5a6b6e8d91492d9fa7-us21",
// };

// // * below static method is used when we wanna load local files, for that we shud move the files to a seperate folder and check the "html of this" file for the rest
// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/signUp.html`);
// });

// app.post("/", (req, res) => {
//   const fName = req.body.firstName;
//   const lName = req.body.lastName;
//   const email = req.body.emailAddress;
//   console.log(req.body.firstName);
//   console.log(req.body.lastName);
//   console.log(req.body.emailAddress);

//   // * syntax for sending user inputs to mail chimp
//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: "subscribed",
//         merge_fields: {
//           FNAME: fName,
//           LNAME: lName,
//         },
//       },
//     ],
//   };
//   const jsonData = JSON.stringify(data);
//   const request = https.request(url, options, (response) => {
//     response.on("data", function (data) {
//       console.log(JSON.parse(data));
//     });
//   });
//   request.write(jsonData);
//   req.end();
// });

// app.listen(port, () => {
//   console.log(`Server started listening on port ${port}`);
// });

// // 4ce10ff17c9d6f5a6b6e8d91492d9fa7-us21 app id
// // 6078fe4028 list id
