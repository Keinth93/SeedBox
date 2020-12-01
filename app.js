window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar-brand").style.width = "80px";
    document.getElementsByTagName("header").style.minHeight = "15vh";
  } else {
    document.getElementById("navbar-brand").style.width = "110px";
    document.getElementsByTagName("header").style.minHeight = "10vh";
  }
}