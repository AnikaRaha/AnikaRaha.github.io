$(document).ready(function() {

	$.when($.ajax({
	        url: "getFromDB.php",
	        type: "post",
	        //data: fd ,
	        success: function (response) {
		        res = JSON.parse(response);
		        
		        var pro = addEvent(res);
		        console.log(pro, "inside ajax call");
		        callCalendar(pro);
		    },
	        error: function(jqXHR, textStatus, errorThrown) {
	          	console.log(textStatus, errorThrown);
	        }
	    }));    

	function addEvent(res){
		if (!($.isEmptyObject(res))) {
			var events = [];
			// var arr = JSON.parse(res);
			for (var i = 0; i < res.length; i++) {
	    		//console.log(arr[i].dueDate);
	    		events.push({
	    			title  : res[i].title,
			        start  : new Date(res[i].dueDate),
			        eventID : parseInt(res[i].id)
	    		});
	    	};

	    	console.log(events, "inside addEvent function");
	    	return events;
		} else {
			return null;				
		}
	}	

	function callCalendar(events){
    	console.log(events, "inside callCalendar");
    	$('#calendar').fullCalendar({
		    customButtons: {
		        backToList: {
		            text: 'Back To List View',
		            click: function() {
		                //<a href="/index.html">ta da</a>;
		                window.location.href = "index.html";
		            }
		        }
		    },
		    header: {
		        left: 'prev,next today',
		        center: 'title',
		        right: 'backToList'
		    },
		    selectable: true,
		    selectHelper: true,
		    editable: true,
		    eventLimit: true,
		    events: events,
		    eventDrop: function (event){
		    	console.log(event.eventID);
		    	var newDate = event.start._i[0] + "-" + (event.start._i[1]+1) + "-" + event.start._i[2];
		    	var eid = event.eventID;

		    	$.ajax({
		    		url: "updateOnCalendarChange.php",
		    		type: "post",
		    		// data: {toSend: dataToSend},
		    		data: {
		    			date: newDate,
		    			id: eid
		    		},
		    		success: function (response) {
				        console.log(response);
				    },
			        error: function(jqXHR, textStatus, errorThrown) {
			          	console.log(textStatus, errorThrown);
			        } 
				});
		    }
    	});
	}

});