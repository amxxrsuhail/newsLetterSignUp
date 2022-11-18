const express = require("express");
const app = express();
const port = 3000;
// * below static method is used when we wanna load local files, for that we shud move the files to a seperate folder and check the "html of this" file for the rest
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signUp.html`);
});

app.post("/",(req,res)=>{
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.emailAddress);
})

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
