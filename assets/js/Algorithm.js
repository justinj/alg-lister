//Helper class with functions for manipulating algorithms
Algorithm = {
  opposites: 
  {
    "U": "D",
    "D": "U",
    "F": "B",
    "B": "F",
    "R": "L",
    "L": "R"
  },
  splitAlg: function(alg)
  {
    var nospaces = alg.split(" ").join("")
    var moves = [];
    while (nospaces != "" && nospaces[0] != "(")
    {
      var move = nospaces[0];
      nospaces = nospaces.substring(1);
      while (nospaces.length != "" && nospaces[0] != "(" && Algorithm.opposites[nospaces[0]] == undefined && !Algorithm.isMoveStarter(nospaces[0])) {
          move += nospaces[0];
          nospaces = nospaces.substring(1);
        }
      moves.push(move);
    }
    return moves;
  },
  isMoveStarter: function(char) {
    return "RLUDFBrludfb".indexOf(char) > -1;
  },
  firstMove: function(alg)
  {
    return Algorithm.splitAlg(alg)[0]
  },
  restOfMoves: function(alg)
  {
    return Algorithm.splitAlg(alg).slice(1).join(" ");
  },
  qtmLength: function(alg) {
    var moves = Algorithm.splitAlg(alg);
    var count = 0;
    $.each(moves,function(index,move){
      if (move.length>1&&move[move.length-1]=="2")
        count+=2;
      else
        count+=1;
    });
    return count;
  },
  numberOfFaceTurns: function(alg, face)
  {
    var moves = Algorithm.splitAlg(alg);
    var count = 0;
    for (var i = 0; i < moves.length; i++)
    {
      if (moves[i][0] == face)
        count++;
    }
    return count;
  }
}
