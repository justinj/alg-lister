Sorter = {
  stripAuf: function(alg)
  {
    var moves = Algorithm.splitAlg(alg);
    if (!Sorter.shouldStrip()) {
      return moves.join(" ");
    }
    var premove = "";
    var postmove = "";
    while (moves[0][0]=="U") {
      premove += moves[0] + " ";
      moves = moves.slice(1);
    }
    while (moves[moves.length-1][0]=="U") {
      postmove += moves[moves.length-1] + " ";
      moves.pop();
    }
    return moves.join(" ");
  },
  shouldStrip: function() {
    return $("#removepreauf")[0].checked;
  },
  areSame: function(alg1, alg2) {
    return alg1 === alg2;
  },
  fixAlgList: function(algList) {
    var algs = algList.map(Sorter.normalize);

    algs = algs.sort(function(alg1,alg2) {
      var alg1len = Algorithm.qtmLength(alg1);
      var alg2len = Algorithm.qtmLength(alg2);

      if (alg1len == alg2len) {
        return alg1.localeCompare(alg2);
      }

      return alg1len - alg2len;
    });
    
    Sorter.removeDuplicates(algs);

    return algs;
  },
  removeDuplicates: function(sortedAlgList) {
    var i = 0; 
    while (i < sortedAlgList.length - 1) {
      if (Sorter.areSame(sortedAlgList[i], sortedAlgList[i+1])) {
        sortedAlgList.splice(i,1);
      } else {
        i++;
      }
    }
  },
  normalize: function(alg) {
    var possibilities = Comparer.allRotationsWithoutY(alg);
    var firstNonYAxisMove = 0;
    for (var i = 0; i < possibilities.length; i++) {
      firstNonYAxisMove = 0;
      var moves = possibilities[i].split(" ");
      while (moves[firstNonYAxisMove][0] == "U" || moves[firstNonYAxisMove][0] == "D") { firstNonYAxisMove += 1; }
      if (moves[firstNonYAxisMove][0] == "R") {
        return possibilities[i];
      }
    }
  }
}
