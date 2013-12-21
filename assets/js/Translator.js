Translator = {
  translations: {
    "U": {
      "Uw": "Uw",
      "Dw": "Dw",
      "Lw": "Bw",
      "Rw": "Fw",
      "Fw": "Lw",
      "Bw": "Rw",
      "u": "u",
      "d": "d",
      "l": "b",
      "r": "f",
      "f": "l",
      "b": "r",
      "U": "U",
      "D": "D",
      "L": "B",
      "R": "F",
      "F": "L",
      "B": "R"
    },
    "D": {
      "Uw": "Uw",
      "Dw": "Dw",
      "Lw": "Fw",
      "Rw": "Bw",
      "Fw": "Rw",
      "Bw": "Lw",
      "u": "u",
      "d": "d",
      "l": "f",
      "r": "b",
      "f": "r",
      "b": "l",
      "U": "U",
      "D": "D",
      "L": "F",
      "R": "B",
      "F": "R",
      "B": "L"
    },
    "F": {
      "Uw": "Rw",
      "Dw": "Lw",
      "Lw": "Uw",
      "Rw": "Dw",
      "Fw": "Fw",
      "Bw": "Bw",
      "u": "r",
      "d": "l",
      "l": "u",
      "r": "d",
      "f": "f",
      "b": "b",
      "U": "R",
      "D": "L",
      "L": "U",
      "R": "D",
      "F": "F",
      "B": "B"
    },
    "B": {
      "Uw": "Lw",
      "Dw": "Rw",
      "Lw": "Dw",
      "Rw": "Uw",
      "Fw": "Fw",
      "Bw": "Bw",
      "u": "l",
      "d": "r",
      "l": "d",
      "r": "u",
      "f": "f",
      "b": "b",
      "U": "L",
      "D": "R",
      "L": "D",
      "R": "U",
      "F": "F",
      "B": "B"
    },
    "R": {
      "Uw": "Bw",
      "Dw": "Fw",
      "Lw": "Lw",
      "Rw": "Rw",
      "Fw": "Uw",
      "Bw": "Dw",
      "u": "b",
      "d": "f",
      "l": "l",
      "r": "r",
      "f": "u",
      "b": "d",
      "U": "B",
      "D": "F",
      "L": "L",
      "R": "R",
      "F": "U",
      "B": "D"
    },
    "L": {
      "Uw": "Fw",
      "Dw": "Bw",
      "Lw": "Lw",
      "Rw": "Rw",
      "Fw": "Dw",
      "Bw": "Uw",
      "u": "f",
      "d": "b",
      "l": "l",
      "r": "r",
      "f": "d",
      "b": "u",
      "U": "F",
      "D": "B",
      "L": "L",
      "R": "R",
      "F": "D",
      "B": "U"
    }
  },
  convertMove: function(move)
  {
    var face = move[0];
    var suffix = move.substring(1);  
    return Algorithm.opposites[face] + suffix;
  },
  prefixOf: function(move) {
    return move.substring(0, move.length-1);
  },
  suffixOf: function(move) {
    return move.substring(move.length-1, move.length);
  },
  fixMove: function(causingMove, move)
  {
    var face = Translator.prefixOf(move);
    var suffix = Translator.suffixOf(move);
    var causingMoveFace = Translator.prefixOf(causingMove);
    var causingMoveSuffix = Translator.suffixOf(causingMove);

    if (causingMoveSuffix == "'")
      return Translator.fixMove(causingMove[0] + "2", Translator.fixMove(causingMoveFace, move));

    if (causingMoveSuffix == "2")
      return Translator.fixMove(causingMove[0], Translator.fixMove(causingMoveFace, move));

    return Translator.translations[causingMove[0]][face] + suffix;
  },
  adjustAlg: function(causingMove, alg)
  {
    var moves = Algorithm.splitAlg(alg);
    var i;
    for (i = 0; i < moves.length; i++)
    {
      moves[i] = Translator.fixMove(causingMove, moves[i]); 
    }
    return moves.join(" ");
  },
  convertFirstMove: function(alg)
  {
    var moves = Algorithm.splitAlg(alg);
    moves[0] = Translator.convertMove(moves[0]);

    return moves[0] + " " + Translator.adjustAlg(moves[0], Algorithm.restOfMoves(alg));
  },
  formatInput: function(alg, options)
  {
    if (options == null || options == undefined) return alg; 
    moves = Algorithm.splitAlg(alg);
    if (options["remove_trailing_u"]) {
      if (moves[moves.length-1][0] == "U") {
        moves.pop();
      }
    }
    return moves.join(" ");
  },
  meetsRobertYausCriteria: function(alg)
  {
    if (Algorithm.numberOfFaceTurns(alg, "D") > 1)
      return false;

    return true;
  },
  filterOutput: function(alg, options)
  {
    if (options == null || options == undefined) return true; 

    if (options["one_d"]) {
      if (Algorithm.numberOfFaceTurns(alg, "D") > 1)
        return false;
    }    
    return true;
  },
  findAllWays: function(alg, options) 
  {
    if (alg == "")
    {
      return [""]
    }  
    if (alg[0] == "y") 
    {
      return Translator.findAllWays(Algorithm.restOfMoves(alg)).map(function(input){return Algorithm.firstMove(alg) + " " + input});
    }
    var bases = [];
    bases.push(alg);
    bases.push(Translator.convertFirstMove(alg))
      var result = [];
    var j;
    for (j = 0; j < bases.length; j++)
    {
      var tails = Translator.findAllWays(Algorithm.restOfMoves(bases[j]))
        var i;
      for (i = 0; i < tails.length; i++)
      {
        var newalg = Algorithm.firstMove(bases[j]) 
          if (tails[i] != "")
            newalg += " " + tails[i];
        if (Translator.filterOutput(newalg, options))
          result.push(newalg)
      }
    }
    return result.slice(0);
  },
  yRotations: function(alg) 
  {
    var result = [alg];
    var moves = ["U", "U2", "U'"];
    var rotations = ["y", "y2", "y'"]
    for (var i = 0; i < moves.length; i++) {
      result.push(rotations[i]+ " " + Translator.adjustAlg(moves[i],alg));
    }
    return result;
  },
  translate: function(alg, options)
  {
    var translations = [];
    if (options["show_y_rotations"]) {
      var algs = Translator.yRotations(alg);
      for (var i = 0; i < algs.length; i++)
         translations = translations.concat(Translator.findAllWays(algs[i],options));

    } else {
         translations = Translator.findAllWays(alg,options);
    }
    return translations
  }
}
