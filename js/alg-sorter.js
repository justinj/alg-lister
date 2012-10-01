function go() {
  var algs = $("#alg_box").val().split("\n");
  var fixedAlgs = algs.map(Sorter.stripAuf);
  fixedAlgs = Sorter.sortAlgs(fixedAlgs);
  Sorter.removeDuplicates(fixedAlgs);
  $("#result").empty();
  $.each(fixedAlgs,function(index,alg){
    //$("#result").append("<font color=\"gray\">"+alg.premove+"</font> ");
    $("#result").append(alg.alg);
    //$("#result").append(alg.postmove);
    $("#result").append("<br>");
  });
}

$(function() {
  $("#go").click(go);
});
