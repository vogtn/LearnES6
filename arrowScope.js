//original function
var deliveryBoy = {
	name: "John",
	
	handleMessage: function(message, handler){
		var that = this;
		//in order to access name inside Hello function below, you must 
		//set variable in this function.
		this.handleMessage("Hello, ", function (message){
			that.name;
			console.log(message + that.name);
		}
	}
}
deliveryBoy.recieve();

//With Arrow functions
var deliveryBoy = {
	name: "John",
	
	handleMessage: function(message, handler){
		this.handleMessage("Hello, ", message => console.log(message +this.name));
	}
}
deliveryBoy.recieve();
