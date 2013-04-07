function go() {
  var algs = $("#alg_box").val().split("\n");
  var fixedAlgs = algs.map(Sorter.stripAuf);
  fixedAlgs = Sorter.fixAlgList(fixedAlgs);
  $("#result").empty();
  $.each(fixedAlgs,function(index,alg){
    $("#result").append(alg);
    $("#result").append("<br>");
  });
}

$(function() {
  $("#go").click(go);
});
