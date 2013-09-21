describe("Sorter", function() {
  describe("normalize", function() {
    it("rotates an alg so it starts with R", function() {
      expect(Sorter.normalize("F"))
        .toEqual({original: "F", normalized: "R"});
      expect(Sorter.normalize("R"))
        .toEqual({original: "R", normalized: "R"});
      expect(Sorter.normalize("L"))
        .toEqual({original: "L", normalized: "R"});
      expect(Sorter.normalize("B"))
        .toEqual({original: "B", normalized: "R"});
      expect(Sorter.normalize("F U"))
        .toEqual({original: "F U", normalized: "R U"});
    });

    it("rotates so the first non-D move is R", function() {
      expect(Sorter.normalize("D R")).toEqual({original: "D R", normalized:"D R"});
    });
  });
});
