document.getElementById("goBackButton").addEventListener("click", goBack);

function goBack() {
  window.location.href = "../index.html";
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

  