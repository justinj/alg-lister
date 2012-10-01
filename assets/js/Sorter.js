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
  areSame: function(alg1, alg2) {
    //also make this true if they are transformations of each other
    //ex F == y R
    return alg1.alg == alg2.alg;
  },
  //sort the list of algs by the qtm length of the entry "alg"
  sortAlgs: function(algList) {
    return algList.sort(function(alg1,alg2) {
      var a = Algorithm.qtmLength(alg1.alg);
      var b = Algorithm.qtmLength(alg2.alg);
      if (a == b)
        return alg1.alg.localeCompare(alg2.alg);
      return a-b;
    });
  },
  removeDuplicates: function(sortedAlgList) {
    var i = 0; 
    while (i < sortedAlgList.length - 1) {
      console.log(sortedAlgList[i],sortedAlgList[i+1],Sorter.areSame(sortedAlgList[i],sortedAlgList[i+1]));
      if (Sorter.areSame(sortedAlgList[i], sortedAlgList[i+1])) {
        sortedAlgList.splice(i,1);
      } else {
        i++;
      }
    }
  }
}
