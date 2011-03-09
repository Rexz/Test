// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Main Menu',
    window:win1
});

<<<<<<< HEAD


=======
var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
>>>>>>> b919118b634848f59f24bf4b376ae4f3df79898a

//
// create controls tab and root window
//


//
// create table view data object
var data = [
<<<<<<< HEAD
	{title:'Favourites', hasChild:true, test:'/favourites/main.js'},
	{title:'On Tonight', hasChild:true, test:'/ontonight/main.js'},
=======
	{title:'Favourites', hasChild:true, test:'../examples/slider.js'},
	{title:'On Tonight', hasChild:true, test:'../examples/switch.js'},
>>>>>>> b919118b634848f59f24bf4b376ae4f3df79898a

];


// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});



// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});


// add table view to the window
win1.add(tableview);




//
//  add tabs
//
tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
