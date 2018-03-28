class Airplane {
	constructor(name,occupancy,speed){

	//validating name
	if (name == undefined || name == '') { 
	throw new Error("Name cannot be empty or undefined");
	}
	else{
		this.name= name;
	}


	// occupancy
	if (occupancy == undefined || occupancy == '' || occupancy < 0 || occupancy >= 180) {
	throw new Error("occupancy should be greater than 0 and less than 180");
	}
	else {
		this.occupancy= occupancy;
	}


	//speed
	if (speed == undefined  || speed =='' || speed < 0 || speed > 900) {
	throw new Error("speed should be greater than 0 and less than 900");
	}
	else {
		this.speed= speed;
	}

	}
	//logging method
	status(){
		console.log("Airplane :" + this.name + "with " + this.occupancy  + " occupancy is moving at" + this.speed + " km/hr");
	}

	//increase speed by value
	increaseSpeed(increaseValue){
		this.speed+=increaseValue;
	}

	//decrease speed by value
	decreaseSpeed(decreaseValue){
		this.speed-=increaseValue;
	}
}
var obj1= new Airplane("Boeing 777",170,900);
var obj2= new Airplane("Boeing 222", 170, 800);
var obj3= new Airplane("Boeing 222", 170, 800);
obj1.status();
obj2.status();
obj3.status();
obj1.increaseSpeed(200);
obj2.increaseSpeed(200);
obj3.increaseSpeed(200);
console.log("Speed of objects after increasing is ");
console.log("Obj1 :" + obj1.speed);
console.log("Obj2 :" + obj2.speed);
console.log("Obj3 :" + obj3.speed);

