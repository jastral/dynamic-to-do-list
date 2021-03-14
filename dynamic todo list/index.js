//Case 2:
let add = document.getElementById("add");
rowcount = 0;

add.addEventListener("click", add_task);

function delrow(r){
  var i=r.parentNode.parentNode.rowIndex;
  document.getElementById('task_display').deleteRow(i);
}

function edit_row(r){
  //alert(r.parentNode.parentNode);
  var row_element = r.parentNode.parentNode;
  console.log(row_element);
  console.log(row_element.id);

  //fetching task from the list
  var text = document.getElementById("task"+row_element.id);
  //alert(text.innerHTML);



  var txt_field = document.getElementById("to_do_task");
  //txt_field.innerHTML = text.innerHTML;
  //alert(text.value);

  document.getElementById("edit"+row_element.id).style.display="none";
  document.getElementById("save"+row_element.id).style.display="inline";
	
  var text = document.getElementById("task"+row_element.id);

  var data = text.innerHTML;
  text.innerHTML = "<input type='text' class='form-control' id='name_text"+row_element.id+"' value='"+data+"'>";
}

function save_row(r){
  var row_element = r.parentNode.parentNode;
  var name_val=document.getElementById("name_text"+row_element.id).value;

  document.getElementById("task"+row_element.id).innerHTML=name_val;

  document.getElementById("edit"+row_element.id).style.display="inline";
  document.getElementById("save"+row_element.id).style.display="none";
}


function add_task(){
  let add = document.getElementById("task_display");

  var row = document.createElement("tr");
  let todo = document.createElement("td");
  let col1 = document.createElement("td");
  let col2 = document.createElement("td");

  let task = document.getElementById("to_do_task").value;
  console.log(task);

  //row attributes:
  row.id = rowcount++;

  todo.innerHTML = task;
  todo.id = "task"+row.id;
  //console.log(todo.id);

  //to edit
  let edit = document.createElement("button");
  edit.innerHTML = "edit";
  edit.id = "edit"+row.id;
  edit.className = "btn btn-primary"
  edit.setAttribute('onclick', 'edit_row(this)');
  edit.style.display = "inline";
  col1.appendChild(edit);

  //to save
  let save = document.createElement("button");
  save.innerHTML = "save";
  save.id = "save"+row.id;
  save.className = "btn btn-success";
  save.setAttribute('onclick', 'save_row(this)');
  save.style.display = "none";
  col1.appendChild(save);

  //to delete
  let del = document.createElement("button");
  del.innerHTML = "delete";
  del.className = "del_btn btn btn-danger";
  del.id = "del"+row.id;
  del.setAttribute('onclick', 'delrow(this)');
  col2.appendChild(del);

  row.appendChild(todo);
  row.appendChild(col1);
  row.appendChild(col2);

  add.appendChild(row);
}


//Case 1: Flopped
/*let a = document.getElementById("add");
let row_count = 0;

a.onclick = function add(){
    let add = document.getElementById("task_display");

    var row = document.createElement("tr");
    let todo = document.createElement("td");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");

    let task = document.getElementById("to_do_task").value;
    console.log(task);

    todo.innerHTML = task;

    //to edit
    let edit = document.createElement("button");
    edit.innerHTML = "edit";
    edit.id = row_count + 1;
    col1.appendChild(edit);

    //to delete
    let del = document.createElement("button");
    del.innerHTML = "delete";
    del.className = "del_btn";
    del.id = row_count + 1;
    del.click = document.getElementById(del.id).addEventListener("click", delRow());
    col2.appendChild(del);

    row.appendChild(todo);
    row.appendChild(col1);
    row.appendChild(col2);

    //row.innerHTML = task;
    add.appendChild(row);

    let something = document.getElementsByClassName("del_btn");
    alert(something);
    something.onclick = delRow();
    //console.log("in delete button");
}

function edit(){

}


function delRow() {
    var i = btn.parentNode.parentNode.rowIndex;
    alert(i);
  }

//document.getElementsByClassName("del_btn").addEventListener("click", delRow(this));
//let something = document.getElementsByClassName("del_btn");
//console.log("in delete button");

// function delRow(r){
//     //console.log("in delete button");
//     var i = r.parentNode.parentNode.rowIndex;
//     console.log(i);
//     document.getElementById("task_display").deleteRow(i);
// }*/