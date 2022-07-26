window.onload = function () {
  var List = document.getElementById(shuffleShort),
    button = document.getElementById("shuffle");

  function Shuffle(items) {
    var cached = items.slice(0),
      temp,
      i = cached.length,
      rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = cached[rand];
      cached[rand] = cached[i];
      cached[i] = temp;
    }
    return cached;
  }

  function shuffleNodes() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      list.appendChild[i];
      ++i;
    }
  }
  document.getElementById("shuffle").onclick = shuffleNodes;
};
