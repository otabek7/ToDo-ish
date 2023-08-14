import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs"); //what does this do?

// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/addtask", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
