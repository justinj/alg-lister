Comparer = {
  areSameAlg: function(first, second) {
    var yRotations = Translator.yRotations(first);
    var possibleAlgs = yRotations.map(Comparer.removeLeadingY);
    return possibleAlgs.indexOf(second) != -1;
  },
  removeLeadingY: function(alg) {
    var moves = Algorithm.splitAlg(alg);
    if (moves[0][0] === "y") {
      moves = moves.slice(1); 
    }
    return moves.join(" ");
  }
}

