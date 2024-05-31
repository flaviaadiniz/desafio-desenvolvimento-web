document.getElementById("goBackButton").addEventListener("click", goBack);

function goBack() {
    window.history.back();
}

 // Function to scroll to the top of the page
 function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  }

  // Show the button when scrolling down
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  }
  