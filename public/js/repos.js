var username = "GitOffMyLAN";;
var repo_url = "https://api.github.com/users/" + username + "/repos"

console.log(repo_url);

$.getJSON(repo_url, function(data, status){
	var repos = [];
	$.each(data, function(id, val){
		repos.push(data[id].name)
	});
	console.log(repos);
	console.log(status);
});

