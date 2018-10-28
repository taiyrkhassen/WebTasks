function addRow(){
	// grt the table by id
	// create a new Row and Cells 
	// get value from input text 
	// set the values into the row cell's
	var table = document.getElementById("students");
	
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var faculty = document.getElementById("faculty").value; 
	if( name == ""){
		document.getElementById("name").style.border = "5px solid red";
	}else if (surname== ""){
		document.getElementById("surname").style.border = "5px solid red";
	}else if (faculty== -1){
		document.getElementById("faculty").style.border = "5px solid red";
	}
	 else {
	 	var newRow = table.insertRow(table);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		cell2.innerHTML = surname ;		
		cell1.innerHTML = name;
		cell3.innerHTML = faculty
	}
}
var but = document.getElementById("addStudent");
but.addEventListener('click', addRow);
