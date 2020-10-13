function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "35px";
      document.getElementById("mytab").style.top = "5px";
    }
    else {
      document.getElementById("header").style.height = "100px";
      document.getElementById("mytab").style.top = "70px";
    }
  }