const isGood = soldierType => ["Hobbits", "Elves", "Dwarves", "Eagles"].includes(soldierType);

const buildSoldierObject = (battlefield) => {
  const soldiers = {};
  const soldierString = battlefield.split(",");
  soldierString.forEach((soldier) => {
    const type = soldier.split(':')[0];
    const count = parseInt(soldier.split(':')[1], 10);
    soldiers[type] = count;
  });
  return (soldiers);
};
const whoWinsTheWar = (battlefield) => {
  if (!battlefield || /^\s*$/.test(battlefield)) {
    return "Tie";
  }

  const soldiers = buildSoldierObject(battlefield);
  let win = 0;
  Object.keys(soldiers).forEach((soldierType) => {
    win = isGood(soldierType) ? win + soldiers[soldierType] : win - soldiers[soldierType];
  });
  if (win === 0) {
    return ("Tie");
  }
  return (win > 0 ? "Good" : "Evil");
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
