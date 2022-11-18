const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();
const port = 3000;

mailchimp.setConfig({
  apiKey: "4ce10ff17c9d6f5a6b6e8d91492d9fa7-us21",
  server: "us21",
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signUp.html`);
});

app.post("/", (req, res) => {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.emailAddress;

  async function run() {
    const listId = "6078fe4028";
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fName,
        LNAME: lName,
      },
    });
  }
  run();
  if (res.statusCode == 200) {
    res.send(
      "<h1 style='padding: 40vh 0 30vh; text-align: center; color:rgb(28, 97, 193) ;'>You Have Successfully subscribed!!!!!</h1>"
    );
  } else {
    res.send(
      "<h1 style='padding: 40vh 0 30vh; text-align: center; color:rgb(193, 28, 28) ;'>You Have Failed to Subscribe!!!!!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
