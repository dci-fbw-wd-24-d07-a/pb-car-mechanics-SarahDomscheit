import readlineSync from "readline-sync";

function filter(search) {
  let brands = ["Ford", "VW", "Porsche"];
  let parts = ["Keilriemen", "Bremsklötze"];
  let ids = [
    "Ford-Keilriemen",
    "VW-Keilriemen",
    "Porsche-Keilriemen",
    "Ford-Bremsklötze",
    "VW-Bremsklötze",
    "Porsche-Bremsklötze",
  ];
  let amount = [3, 5, 1, 4, 8, 0];

  let output = "";
  let count = 0;

  if (!brands.includes(search)) {
    output = `Sorry wir nehmen keine ${search} an!`;
    return output;
  }

  for (let i = 0; i < ids.length; i++) {
    if (ids[i].startsWith(search)) {
      const avaiableAmount = amount[i];
      if (avaiableAmount > 0) {
        count++
        output += `${count}.${ids[i]}, ${avaiableAmount}\n`;
      } else if (avaiableAmount === 0) {
        output += `Nicht auf Lager: ${count}.${ids[i]} , ${avaiableAmount}\n`;
      }
    }
  }
  return output;
}

console.log(filter("Fiat"));
console.log(filter("Ford"));
console.log(filter("VW"));
console.log(filter("Porsche"));




