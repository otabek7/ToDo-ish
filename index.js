import express from "express";
const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  