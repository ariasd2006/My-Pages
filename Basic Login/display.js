$("#displayString").on('change', function () {
    })  
$("#submit").click(function(x){
	var username = $('#username')[0].value
	var password = $('#password')[0].value
	var statement = "Your username is " + username + " and your password is " + password
	$("#displayString")[0].innerHTML = statement
	x.preventDefault()
})