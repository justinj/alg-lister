describe("Sorter", function() {
  describe("normalize", function() {
    it("rotates an alg so it starts with R", function() {
      expect(Sorter.normalize("F")).toEqual("R");
      expect(Sorter.normalize("R")).toEqual("R");
      expect(Sorter.normalize("L")).toEqual("R");
      expect(Sorter.normalize("B")).toEqual("R");
      expect(Sorter.normalize("F U")).toEqual("R U");
    });
  });
});
