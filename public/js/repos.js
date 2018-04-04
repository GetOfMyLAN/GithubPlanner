var username = "GitOffMyLAN";
var repo_url = "https://api.github.com/users/" + username + "/repos"

console.log(repo_url);

$.getJSON(repo_url, function(data, status){
	var repos = [];
	$.each(data, function(id, val){
		repos.push(data[id].name)
	});
	console.log(repos);
	console.log(status);
	for (var i = 0; i < repos.length; i++){
		$("#repos").append("<li><a href=https://www.github.com/" + username + "/" + repos[i] + "><p>" + username  + "/" + repos[i]  + "</p></a></li>")
};
});

