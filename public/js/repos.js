var username = "GitOffMyLAN";
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
function veiwing_repos (username, repos, place){
	for (var i = 0; i < repos.length; i++){
		$(place).append("<li><a href=repo/"  + username + "/" + repos[i] + "><p>" +     username  + "/" + repos[i]  + "</p></a></li>")
	};
};

//This is used for the code in the main page
function main_page(){
	repos_from_user(username, repos);
	veiwing_repos(username, repos, "#repos");
};

main_page();
