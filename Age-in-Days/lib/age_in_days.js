const ageInDays = (day, month, year) => {
  const birthday = new Date(year, month - 1, day);
  return Math.round((Date.now() - birthday) / 86400000);
};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.
