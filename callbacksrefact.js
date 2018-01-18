// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
  	if (element === "Waldo"){
  	found(i);
  	}
  });
}



function actionWhenFound(ind) {
  console.log("Found Waldo at index " + ind);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);