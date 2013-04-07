describe("Comparer", function() {
  describe("areSameAlg", function() {
    it("is true if two algs are the same", function() {
      expect(Comparer.areSameAlg("R U", "R U")).toBeTruthy();
    });

    it("is false if two algs are different", function() {
      expect(Comparer.areSameAlg("R U", "R U'")).toBeFalsy();
    });

    it("is true if the algs are the same with any number of y-rotations applied", function() {
      expect(Comparer.areSameAlg("R U", "F U")).toBeTruthy();
    });
  })
});
