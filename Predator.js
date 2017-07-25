var Predator = (function () {
  var carnivores = [];
  var herbivores = [];
  return {
    loadCarnivores: function (a) {
      let loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        a(carnivores);
      });
      loader.open("GET", "predators.json");
      loader.send();
    },

    loadHerbivores: function(a) {
      let loader = new XMLHttpRequest();
     
      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        a(herbivores);
      });
      loader.open("GET", "herbivores.json");
      loader.send();
    }
    
  }
})();