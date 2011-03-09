// create table view data object
var data = [];

//Need to make this into a loop once we can get data in
data[0] = Ti.UI.createTableViewRow({height:100,hasChild:true}); // This creates the row to put stuff in
	var photo = Ti.UI.createView({ //This creates a view which will let us stick a background image effectivly a image for us
		backgroundImage:'logo.jpg',
		top:2,
		left:2,
		width:80,
		height:80,
		clickName:'photo'
	});
	data[0].add(photo); // This adds the image to the row
	
	var club = Ti.UI.createLabel({ // A label to use as text
		color:'#fff', // Color of text
		font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
		left:90,
		top:0,
		height:30,
		width:200,
		clickName:'club',
		text:'Tribe Night Club ' //What we want the text to say, again this will be filled in with variables from site
	});
	data[0].add(club);
	var offer = Ti.UI.createLabel({
		color:'#fff',
		font:{fontSize:14,fontWeight:'bold', fontFamily:'Arial'},
		left:90,
		top:30,
		height:30,
		width:200,
		clickName:'offer',
		text:'Shots for a pound '
	});
	data[0].add(offer);
	
		var distance = Ti.UI.createLabel({
		color:'#fff',
		font:{fontSize:10,fontWeight:'bold', fontFamily:'Arial'},
		left:90,
		top:60,
		height:30,
		width:200,
		clickName:'distance',
		text:'Distance - 20 Miles '
	});
	data[0].add(distance);

data[1] = Ti.UI.createTableViewRow({hasChild:true,title:'Mirage - Distance 2.1 Miles'});
data[2] = Ti.UI.createTableViewRow({hasChild:true,title:'Nu Bar - Distance 2.2 Miles'});
data[3] = Ti.UI.createTableViewRow({hasChild:true,title:'Carters - Distance 2.2 Miles'});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' title ' + rowdata.title}).show();
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
