//order car app

	//order secure storage device

function Orders(car, price, engine, year) {

	var newCar = undefined
	var newPrice = 0
	var newEngine = undefined
	var carYear = 0

	this.createOrder = function(car, price, engine, year){
		console.log(Orders)
		newCar = car.value
		newPrice = price 
		newEngine = engine 
		carYear = year
		alert("Cost of your " + carYear + " " + newCar + " with a " + newEngine + " is " + newPrice)
		console.log(newCar)
	}

	this.retrieveOrder = function(){
		var carOrder = {}
		carOrder.car = newCar
		carOrder.price = newPrice
		carOrder.engine = newEngine
		carOrder.year = carYear 
		return carOrder
	}
}

$(".btn").click(function(x) {
	x.preventDefault();

})

	var Customer = new Orders()



	//used to run page logic

	var Mustang = $('input#Mustang')
	var Accord = $('input#Accord')
	var Prius = $('input#Prius')

	var car = ""
	var price = $('#select option:selected').val()
	var engine = ""

	/* Will use this next time
	 requestOrder = document.createTextNode("You would like to order a " + engine + " " + car + " for our special price of " + price) 
	var displayRequest = document.createElement('div') 

	displayRequest.appendChild(requestOrder)
		$('div#displayOrder').append(displayRequest) */


	$("#select").on('change', function () {
        price = $("#select option:checked").val() 
    })  
    $('input').on('change', function() {
    	price = $("#select option:checked").val() 
    })

//Sets values for car orders

	var setMustang = Mustang.click(function(){
		//Declares Values
		$('#package-selection').show()
		$('#premium')[0].innerHTML = "V8 with all options";
		$('#premium')[0].value = 30000
		$('#enhanced')[0].innerHTML = "Ecoboost with all options"
		$('#enhanced')[0].value = 25000
		$('#basic')[0].innerHTML = "V6 with all options"
		$('#basic')[0].value = 20000

		//Assigns Engine and returns
		if ($('#premium')[0].value = 30000){
			engine = "V8"
		}
		else if ($('#enhanced')[0].value = 25000) {
			engine = "InlineFour"
		}
		else if ($('#basic')[0].value = 20000) { 
			engine = "V6"
		}
		else { engine = 0}

		//return Variable values
		car = $(Mustang)[0].id; 
	})

	 var setAccord = Accord.click(function(){
		
		//Declares Values
		$('#package-selection').show()
		$('#premium')[0].innerHTML = "V6 Touring with all options";
		$('#premium')[0].value = 26000
		$('#enhanced')[0].innerHTML = "Sport with all options"
		$('#enhanced')[0].value = 19500
		$('#basic')[0].innerHTML = "base model no options"
		$('#basic')[0].value = 13500


		//Assigns Engine and returns
		if ($('#premium')[0].value = 26000){
			engine = "V6"
		}
		else if ($('#enhanced')[0].value = 19500) {
			engine = "InlineFour"
		}
		else if ($('#basic')[0].value = 13500) { 
			engine = "InlineFour"
		}
		else { engine = 0}

		//returns variable values
		car = $(Accord)[0].id
	})

	var setPrius = Prius.click(function(){
		$('#package-selection').show()
		$('#premium')[0].innerHTML = "Prius Full Electric with all options";
		$('#premium')[0].value = 25000
		$('#enhanced')[0].innerHTML = "Prius V with all options"
		$('#enhanced')[0].value = 22000
		$('#basic')[0].innerHTML = "Prius v with no options"
		$('#basic')[0].value = 18600

		if ($('#premium')[0].value = 25000){
			engine = "Electric"
		}
		else if ($('#enhanced')[0].value = 22000) {
			engine = "Hybrid"
		}
		else if($('#basic')[0].value = 18600){ 
			engine = "Hybrid"
		}
		else {engine = 0}
		car = $(Prius)[0].id;
		})


