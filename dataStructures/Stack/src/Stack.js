var Stack = function() {
  var storage = [];
  this.length = function() {
    return storage.length;
  };

  this.add = function(value) {
    storage.push(value);
  };

  this.remove = function() {
    var removed = storage.pop();
    return removed;
  };
};
