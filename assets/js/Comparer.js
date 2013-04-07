Comparer = {
  areSameAlg: function(first, second) {
    return Comparer.allRotationsWithoutY(first).indexOf(second) != -1;
  },
  allRotationsWithoutY: function(alg) {
    var yRotations = Translator.yRotations(alg);
    var possibleAlgs = yRotations.map(Comparer.removeLeadingY);
    return possibleAlgs;
  },
  removeLeadingY: function(alg) {
    var moves = Algorithm.splitAlg(alg);
    if (moves[0][0] === "y") {
      moves = moves.slice(1); 
    }
    return moves.join(" ");
  }
}

