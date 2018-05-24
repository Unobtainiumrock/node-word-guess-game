/**
 * @param  {number} lowerBound is the lower range for a randomly generated number
 * @param  {number} upperBound is the upper range for a randomly generated number
 */
const randomizer = (lowerBound,upperBound) => {
  return Math.floor(Math.random() * upperBound + lowerBound);
}

module.exports = randomizer;
