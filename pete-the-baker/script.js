function cakes(recipe, available) {
  recipeArr = [];

  for(var ingredient in recipe) {
    if(!available[ingredient]) {
      return 0;
    }
  }

  for(var ingredient in available) {
    if(!recipe[ingredient]) {
      recipe[ingredient] = 0;
    }

    var x = available[ingredient] / recipe[ingredient];
    recipeArr.push(x);
  }

  var newArr = recipeArr.sort(compare);
  return Math.floor(newArr[0]);
}

function compare(a, b) {
  return a - b;
}
