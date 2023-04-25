// alert start
var close = document.getElementsByClassName("closebtn");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
}
// alert end
// nav start
function iconNav() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
// nav end
