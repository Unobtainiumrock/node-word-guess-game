
/**
 * @param  {string} db is the string of database text
 * @param  {Function} cb is randzomizer function
 * @returns a randomly pulled word from the words DB
 */
const grabRandomWord = (db,cb) => {
  return db[cb(0,db.length)];
}

module.exports = grabRandomWord;
