describe("Stack", function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  describe("#add", function() {
    it("should exist", function() {
      expect(typeof stack.add).to.equal('function');
    });

    it("adds an element to the stack", function() {
      stack.add("Gobias Industries");
      expect(stack.length()).to.equal(1);
    });
  });

  describe("#remove", function() {
    it("should exist", function() {
      expect(typeof stack.remove).to.equal('function');
    });

    it("returns the most recently added value that has not already been removed", function() {
      stack.add("I just blue myself");
      stack.add("I've made a huge mistake");
      expect(stack.length()).to.equal(2);

      expect(stack.remove()).to.equal("I just blue myself");
      expect(stack.remove()).to.equal("I've made a huge mistake");
      expect(stack.length()).to.equal(0);
    });
  });

  describe("#length", function() {
    it("should exist", function() {
      expect(typeof stack.length).to.equal('function');
    });

    it("returns number of items in the stack", function() {
      stack.add("They're *illusions*, Michael!");
      stack.add("A trick is something a whore does for money.");
      expect(stack.length()).to.equal(2);

      stack.remove("they're *illusions*, michael!");
      expect(stack.length()).to.equal(1);
    });
  });
});
