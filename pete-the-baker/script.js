function cakes(recipe, available) {
  var cakes = [];

  for(var ingredient in recipe) {
    if(!available[ingredient]) {
      return 0;
    }

    cakes.push(available[ingredient] / recipe[ingredient]);
  }

  return Math.floor(Math.min.apply(Math, cakes));
}
