url = "index.html";
sleep = 2000;

xhr = new XMLHttpRequest();
xhr.addEventListener("load", transferLoad);
xhr.addEventListener("error", transferError);
xhr.addEventListener("abort", transferAbort);

start = Date.now();
xhr.open("GET", url + "?n=" + start);
xhr.send();

function transferLoad(evt) {
  end = Date.now();
  time = end - start;
  document.getElementById("data_latency").innerHTML = time + " ms";
  document.getElementById("data_date").innerHTML = new Date().toLocaleString("de-DE");

  setTimeout(function () {
    start = Date.now();
    xhr.open("GET", url + "?n=" + start);
    xhr.send();
    print_PerformanceEntries();
  }, sleep);
}

function transferError(evt) {
  console.log("Latency measurement error");
}

function transferAbort(evt) {
  console.log("Latency measurement abort");
}

let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
window.onload = function () {
  let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  document.getElementById("time").innerText = "" + loadTime + "ms";
};

function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i = 0; i < p.length; i++) {
    print_nextHopProtocol(p[i]);
  }
}

function print_nextHopProtocol(perfEntry) {
  var value = "nextHopProtocol" in perfEntry;
  if (value) document.getElementById("protocol").innerText = "" + perfEntry.nextHopProtocol;
  else document.getElementById("protocol").innerText = "Aktuell genutztes Protokoll = NOT supported";
}
