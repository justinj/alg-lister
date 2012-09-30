Sorter = {
  stripAuf: function(alg)
  {
    var moves = Algorithm.splitAlg(alg);
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
    return {
      "premove":premove,
        "alg":moves.join(" "),
        "postmove":postmove
    }
  },
  //sort the list of algs by the qtm length of the entry "alg"
  sortAlgs: function(algList) {
    return algList.sort(function(alg1,alg2) {return Algorithm.qtmLength(alg1.alg)-Algorithm.qtmLength(alg2.alg)});
  }
}
