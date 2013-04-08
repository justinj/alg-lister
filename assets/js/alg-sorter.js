function go() {
  var algs = $("#alg_box").val().split("\n");
  var fixedAlgs = algs.map(Sorter.stripAuf);
  fixedAlgs = Sorter.fixAlgList(fixedAlgs);
  $("#result").empty();
  highestQtm = 0
  $.each(fixedAlgs,function(index,alg){
    if (Algorithm.qtmLength(alg) > highestQtm) {
      highestQtm = Algorithm.qtmLength(alg);
      $("#result").append("<br><br><h4>length " + highestQtm + "</h4>")
      $("#result").append("<hr>")
    }
    $("#result").append(alg);
    $("#result").append("<br>");
  });
}

$(function() {
  $("#go").click(go);
});
