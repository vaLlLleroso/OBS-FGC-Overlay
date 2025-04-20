console.log("Script loaded!");

async function updateOverlay() {
  console.log("Fetching overlay data...");
  const res = await fetch('/data');
  const data = await res.json();
  
  console.log("Overlay data:", data);

  document.getElementById('p1-name').textContent = data.player1.name;
  document.getElementById('p1-score').textContent = data.player1.score;
  document.getElementById('p1-char').textContent = data.player1.character;

  document.getElementById('p2-name').textContent = data.player2.name;
  document.getElementById('p2-score').textContent = data.player2.score;
  document.getElementById('p2-char').textContent = data.player2.character;

  document.getElementById('round-info').textContent = data.round;
}

setInterval(updateOverlay, 1000);
updateOverlay();
