var words = ["ground", "control", "to", "major", "tom"];

var longer = map(words, function(word) {
  return word.length;
});

var caser = map(words, function(word) {
  return word.toUpperCase();
});

var reverser = map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(arr, callback){
	var res = [];
	for(var i = 0; i < arr.length; i++){
		res.push(callback(arr[i]));
	}
	return res;
}

console.log(longer);
console.log(caser);
console.log(reverser);
