function cakes(recipe, available) {
  cakesArr = [];

  for(var ingredient in recipe) {
    if(!available[ingredient]) {
      return 0;
    }
  }

  for(var ingredient in available) {
    var cakes = available[ingredient] / recipe[ingredient];

    if(cakes) {
      cakesArr.push(cakes);
    }
  }

  return Math.floor(Math.min.apply(Math, cakesArr));
}
