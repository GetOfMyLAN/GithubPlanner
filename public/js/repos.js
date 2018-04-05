var username = "";
var repo_url = "https://api.github.com/users/" + username + "/repos"
var repos = [];

//A function the places all the repos from a user to a varible
function repos_from_user (username, repos){
	$.getJSON(repo_url, function(data, status){
		$.each(data, function(id, val){
			repos.push(data[id].name)
		});
	});
};

//A function that places all the varibles to a elerment on a webpage
function veiwing_repos (a, b, place){
	repos_from_user(a, b)
	for (var i = 0; i < b.length; i++){
		$(place).append("<li><a href=repo/"  + a + "/" + b[i] + "><p>" +     a  + "/" + b[i]  + "</p></a></li>")
	};
};

//This is used for the code in the main page
//repos_from_user(username, repos);
$("#username_repo").click(function(){
	console.log("button pressed")
	username = $("#username").val();
	veiwing_repos(username, repos, "#repos");
})
