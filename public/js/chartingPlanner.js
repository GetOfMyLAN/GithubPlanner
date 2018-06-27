//-------------
//||Functions||
//-------------

//To import any file from a URL for processing
function importFile(filesURL){
	//fileData is a ajax that takes the filesURL as an input and takes the file data.
	var fileData = $.ajax({
				type : "GET",
				url: filesURL,
			});
	if (fileData.status === 0){
		//If the file is not found it reports an error
		console.log("Error: URL invalad, not found.");
		break;
	} else if (fileData.status === 4) {
		//If the file is given return the file data
		return fileData;
	} else {
		//Do nothing
	}

}

//To import the repos planner
function importReposPlanner(repoURL){
	//Set the url for the planner file based on the URL requested and the name of the planner file.
	var plannerFileURL = repoURL + "/"  + repoPlannerName
	//Setting the plannerFile var to the file requested
	plannerFile = importFile(plannerFileURL);
}

//-------
//||Var||
//-------

//Name for the planning file in the repos
var plannerFile = "";
var repoPlannerName = "planner.json";


//--------
//||Main||
//--------

$("document").ready(function(){

});
