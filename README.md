# AnikaRaha.github.io

<html>

<head>
	<title>TO DO List</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
	<script src="jquery-3.2.1.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
</head>

<body>
	<div class="container">	

   	<div class='jumbotron'>
   		<h2>To Do List</h2>
   		<div class='row'>
	   		<label class='form-control col bg-light'>Name</label>
	   		<label class='form-control col bg-light'>Title</label>
	   		<label class='form-control col bg-light'>Done</label>
	   		<label class='form-control col bg-light'>Due Date</label>
	   		<label class='form-control col bg-light'>Priority</label>
   		</div>
   		<div class='row'>
	   		<input required type="text" class='form-control col' value="" name="task" id="name"/>
	   		<input required type="text" class='form-control col' value="" name="task" id="title"/>
	   		<div class='form-control col' >
	   			<input type="radio" value="true" name="done" id="doneT"/>True <br>
	   			<input type="radio" value="false" name="done" id="doneF"/>False
	   		</div>	   		
	   		<input required type="datetime-local" class='form-control col' value="2017-06-01T08:30" name="dueDate" id="dueDate"/>
	   		<div class='form-control col' >
	   			<input type="radio" value="high" name="priority" id="priorityH"/>High <br>
	   			<input type="radio" value="medium" name="priority" id="priorityM"/>Medium <br>
	   			<input type="radio" value="low" name="priority" id="priorityL"/>Low
	   		</div>
   		</div>
		<button id='button' class='btn btn-primary btn-sm'>ADD</button>
		<a href="calender.html"><button id='buttonCal' class='btn btn-primary btn-sm'>Calendar</button></a>

		<ol class='list-group bg-light' id='list'></ol>
   	</div>	

</div>

<script src="jquery-3.2.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="todo.js"></script>
<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script> -->

</body>

</html>
