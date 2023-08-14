import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); //what does this do?

app.use(bodyParser.urlencoded({ extended: true }));

var taskList = ["Learn how to use ToDoish"];
var completedList = ["Water the rocks"];

app.get("/", (req, res) => {
  //   res.render("index.ejs");
  res.render("index", { task: taskList , complete: completedList }); //what does this do?
});

app.post("/addtask", (req, res) => {
  var currInput = req.body.newtask;
  taskList.push(currInput);
  res.redirect("/");
});

app.post("/removetask", function (req, res) {
  var completeTask = req.body.inputted;
  //check for the "typeof" the different completed task, then add into the complete task
  if (typeof completeTask === "string") {
    completedList.push(completeTask);
    //check if the completed task already exist in the task when checked, then remove using the array splice method
    task.splice(task.indexOf(completeTask), 1);
  } else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {
      completedList.push(completeTask[i]);
      task.splice(task.indexOf(completeTask[i]), 1);
    }
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
