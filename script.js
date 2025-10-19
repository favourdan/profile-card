document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  
  function updateTime() {
    timeElement.textContent = Date.now();
  }

  updateTime(); // initial
  setInterval(updateTime, 1000); // update every 1s
});
