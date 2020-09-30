// Solution with no recursion
const bowlingScore = (rolls) => {
  let total = 0;
  let i = 0;
  let frame = 1;

  while (i < rolls.length - 1 && frame < 10) {
    if (rolls[i] === 10) {
      total += rolls[i] + rolls[i + 1] + rolls[i + 2];
      i += 1;
    } else if (rolls[i] + rolls[i + 1] === 10) {
      total += rolls[i] + rolls[i + 1] + rolls[i + 2];
      i += 2;
    } else {
      total += rolls[i] + rolls[i + 1];
      i += 2;
    }
    frame += 1;
  }
  if (rolls[i] + rolls[i + 1] === 10 || rolls[i] === 10) {
    total += rolls[i] + rolls[i + 1] + rolls[i + 2];
  } else {
    total += rolls[i] + rolls[i + 1];
  }
  return total;
};

// Solution with recursion

// const recCount = (rolls, frame, sum) => {
//   sum += rolls[0] + rolls[1] + ((rolls[0] + rolls[1] >= 10) ? rolls[2] : 0);
//   if (rolls.shift() !== 10) { rolls.shift(); }
//   return (frame === 10 ? sum : recCount(rolls, frame + 1, sum));
// };

// const bowlingScore = (rolls) => {
//   return recCount(rolls.slice(), 1, 0);
// };

module.exports = bowlingScore; // Do not remove this line.
