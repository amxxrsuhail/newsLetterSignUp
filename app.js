const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();
const port = 3000;

mailchimp.setConfig({
  apiKey: "5a35895ca39a50a6e478a936f5778-us21",
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
    //*try catch is used to response based on status
    try {
      const listId = "6078fe4028";
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      });
      res.sendFile(`${__dirname}/success.html`);
    } catch (err) {
      res.sendFile(`${__dirname}/failure.html`);
    }
  }
  run();
});

app.post("/failure.html", (req, res) => {
  res.redirect("/");
});
// * process.env.PORT is used to so that heroku can assign the port as they like 
app.listen(process.env.PORT || port, () => {
  console.log(`Server started listening on port ${port}`);
});
