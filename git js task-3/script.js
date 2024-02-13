let todo= [];
let edittable;
let obj = {};

function submit() {
  let task = document.getElementById("task").value;

  if (task =="") {
    
            document.getElementById("error").innerHTML = "task required!";

  } else {

    document.getElementById("error").innerHTML = "";
  }

  if (task == "") {
    return false;
  }

  table2();
  document.getElementById("task").value ="";
}

function table() {
  edittable = undefined;
  let l = "";
  for (i = 0; i < todo.length; i++) {
    l += "<ul>";
    l += "<li>" + todo[i].task + "  "+ '<button type="button" class="btn btn-success" onclick= "Edit('+ i +')">Edit</button>  <button type="button" class="btn btn-danger" onclick= "Delete('+ i +')">Delete</button>'+"</li>";
    l += "</ul>";
  }
  document.getElementById("taskList").innerHTML = l;
}

function table2() {
  let task = document.getElementById("task").value;

  let obj = { task };
  console.log(obj);

  if (edittable != undefined) {
    todo[edittable].task = obj.task;
  } else {
    todo.push(obj);
  }
  table();
}


function Edit(id) {
  edittable = id;
  console.log(edittable);
  document.getElementById("task").value = todo[id].task;
}

function Delete(id) {
  todo.splice(id, 1);
  console.log(id);
  table();
}
