let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
window.onload = function () {
  let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  console.log("Page load time is " + loadTime);
  document.getElementById("time").innerText = "Page load time is " + loadTime + "ms";
};
