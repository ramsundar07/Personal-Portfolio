function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function myFunction() {
  const textToCopy = '+91 9003925642';
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Phone number copied to clipboard!");
  }).catch(err => {
    console.error('Failed to copy text: ', err);
    // Fallback for older browsers
    let textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert("Phone number copied to clipboard!");
    } catch (err) {
      console.error('Fallback copy failed: ', err);
    }
    document.body.removeChild(textArea);
  });
}

window.addEventListener("scroll", reveal);