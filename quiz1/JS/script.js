function scrollHeader() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("header").style.height = "35px";
  }
  else {
    document.getElementById("header").style.height = "200px";
  }
}

function scrollTab() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("mytab").style.top = "30px";
  }
  else {
    document.getElementById("mytab").style.top = "175px";
  }
}

function ClickTab() {
  setTimeout( function () {  window.scrollTo(window.scrollX, window.scrollY - 40); }, 1);
}
