//var GitHub = require('github-api');
var username = $("#username").val();
var password = $("#password").val();
//Authorization
$("#login_button").click(function(){
	$("#login_errors").html("")
	username = $("#username").val();
	if (username === ""){
		$("#login_errors").append("Please enter a <b>username</b><br>")
		$("#login_errors").fadeIn();
	}
	if (password === ""){
    $("#login_errors").append("Please enter a <b>password</b><br>")
		$("#login_errors").fadeIn();
  }

	console.log(username)
});
//var passwordAuth = new GitHub({
//  username: username,
//  password: password
//});
