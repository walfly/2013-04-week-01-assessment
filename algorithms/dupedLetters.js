var dupedLetters = function(string) {
  var letterHash = {};
  var arrayHash = {}
  var array = [];
  _.each(string, function(item){
  	if(letterHash[item] && !arrayHash[item]) {
  	  array.push(item);
  	  arrayHash[item] = true;
  	}
  	letterHash[item] = true;
  });
  return array.sort();
};
