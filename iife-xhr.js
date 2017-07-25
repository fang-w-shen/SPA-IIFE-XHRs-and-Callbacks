function showCarnivores (x) {
	console.log("", x);
		
  	for (var prop in x) {
  		for (var props in x[prop]) {
	  		console.log("", x[prop][props]);
	  		document.getElementById("body").innerHTML+=x[prop][props]+" ";	
		}

		document.getElementById("body").innerHTML+="<br>";
  	}
  	
  		
  		
}

function showHerbivores (x) {
	console.log("", x);
		
	for (var prop in x) {
  		console.log("", x[prop].name,x[prop].food);
  		document.getElementById("body").innerHTML+=x[prop].name+":"+x[prop].food+"<br>";	
  	}
  	
  		
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);