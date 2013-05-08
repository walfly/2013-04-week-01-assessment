var makeHashTable = function() {
  var max = 1000;
  var storage = [];

  return {

    retrieve: function(key) {
      return storage[hashFn(key, max)];
    },

    insert: function(key, value) {
      storage[hashFn(key, max)] = value;
    }

  };
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(i);
    hash = (hash & hash) % max;
  }
  return hash;
};
