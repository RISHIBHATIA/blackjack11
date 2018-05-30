


//creating a new object 



function Team(name,location,attendance,revenue,superbowlwin,QB,salary){ 
      this.name=name; 
      this.location=location;
      this.attendance=attendance;
      this.revenue=revenue;
      this.superbowlwin=superbowlwin;
      this.QB=QB;
      this.salary=salary;
      //add a function on this part 
} 

var Redskins = new Team("Redskins","DC","90,000","2",true,"Alex Smith",201);

console.log(Redskins.location);
console.log(Redskins.attendance);

var Greenbay = new Team("Packers","Wisconsin","39000","4",true,"Aaron Rodgers",200);
console.log(Greenbay.superbowlwin);
console.log(Greenbay.attendance);
console.log(Greenbay.QB);

var Raiders = new Team("Raiders","Las Vegas", "1.1 Billion",true, "David Carr",176);
console.log(Raiders.location);
console.log(Raiders.QB);

console.log(Redskins.salary);

var Cardinals = new Team("Cardinals",'AZ',"70000","0",true,"Drew Rosenberg",300);
   console.log(Cardinals.QB);

var Rams= new Team("LA Rams","CA","4000","1",true,"Jred Goff",402);
console.log(Rams.QB);

if (Redskins.salary < Raiders.salary){console.log("Redskins are Higher than the Raiders");} else {
	console.log("Redskins are less than the raiders coming at "+(Redskins.salary) + "million");
};


//CREATE A FUNCTION IN the team object , that will become an array 


// fiGUE OUT HOW TO HAVE an array and make objects out of each eleemnt in the array  
