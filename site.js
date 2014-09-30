(function() {
  document.getElementById("theButton").onclick = function() {
    return alert("This is a different click");
  };

}).call(this);
