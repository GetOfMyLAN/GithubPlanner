var app = angular.module('myapp', []);
var username = $("#username").val();
var repos = [];
var repo_url = "" + username + "";

"https://api.github.com/search/users?q=" + username
