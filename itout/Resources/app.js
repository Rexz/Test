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




//
// create controls tab and root window
//


//
// create table view data object
var data = [
	{title:'Favourites', hasChild:true, test:'/favourites/main.js'},
	{title:'On Tonight', hasChild:true, test:'/ontonight/main.js'},

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
