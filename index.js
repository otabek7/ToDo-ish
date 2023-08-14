import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); //what does this do?

app.use(bodyParser.urlencoded({ extended: true }));

var taskList = ["Learn how to use ToDoish"];

app.get("/", (req, res) => {
  //   res.render("index.ejs");
  res.render("index", { task: taskList /*, complete: complete*/ }); //what does this do?
});

app.post("/addtask", (req, res) => {
  var currInput = req.body.newtask;
  taskList.push(currInput);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
