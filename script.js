function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  }
  
  // Optional: Add confetti animation (basic example)
  window.onload = () => {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.top = 0;
    confetti.style.left = 0;
    confetti.style.width = '100%';
    confetti.style.height = '100%';
    confetti.style.pointerEvents = 'none';
    confetti.innerHTML = '<canvas id="confetti-canvas"></canvas>';
    document.body.appendChild(confetti);
  
    // Use third-party confetti script (if hosted), or skip this part for now.
  };
  