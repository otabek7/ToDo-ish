import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); //what does this do?

var taskList = ["Learn how to use todo-ish"];
var completedList = ["Water the rocks"];

app.get("/", (req, res) => {
  res.render("index", { task: taskList, complete: completedList }); //what does this do?
});

app.post("/addtask", (req, res) => {
  var currInput = req.body.newtask;
  taskList.push(currInput);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  var requestedtodoId = req.body.deleteTask;

  for (var index = 0; index <= requestedtodoId; index++) {

    if (index == requestedtodoId) {
      taskList.splice(index, 1);
      break;
    } 
  }

  res.redirect("/");
});

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
