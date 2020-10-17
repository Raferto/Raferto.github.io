function scrollHeader() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("header").style.height = "33pt";
  }
  else {
    document.getElementById("header").style.height = "150pt";
  }
}

function scrollTab() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("mytab").style.top = "10pt";
  }
  else {
    document.getElementById("mytab").style.top = "125pt";
  }
}

function ClickTab() {
  setTimeout( function () {  window.scrollTo(window.scrollX, window.scrollY - 40); }, 1);
}
