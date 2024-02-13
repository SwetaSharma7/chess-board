const chessboard = document.querySelector(".chessboard");
let previousSelectedID = null;

for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.setAttribute("id", i + 0);

  if ((i + Math.floor(i / 8)) % 2 === 0) {
    square.classList.add("black-square");
  }
  chessboard.addEventListener("click", (e) => {
    const selectedId = parseInt(e.target.id);

    if (previousSelectedID !== null) {
      resetColor(previousSelectedID);
    }

    const row = Math.floor(selectedId / 8);
    const col = selectedId % 8;

    for (let j = 0; j < 64; j++) {
      const rows = Math.floor(j / 8);
      const columns = j % 8;

      if (Math.abs(row - rows) === Math.abs(col - columns)) {
        const seclectedDiv = document.getElementById(j);
        seclectedDiv.style.backgroundColor = "red";
      }
    }
    previousSelectedID = selectedId;
  });
  chessboard.appendChild(square);
}

function resetColor(selectedId) {
  const row = Math.floor(selectedId / 8);
  const col = selectedId % 8;

  for (let j = 0; j < 64; j++) {
    const rows = Math.floor(j / 8);
    const columns = j % 8;

    if (Math.abs(row - rows) === Math.abs(col - columns)) {
      const seclectedDiv = document.getElementById(j);
      seclectedDiv.style.backgroundColor = "";
    }
  }
}
