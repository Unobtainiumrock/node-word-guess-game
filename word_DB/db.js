
const fs = require('fs');
const path = require('path');
const wordsDB = fs.readFileSync(path.join(__dirname,'wordsDB.txt'),'utf-8');

/**
 * @param  {string} textFile: words which are read from wordsDB.txt by utilizing fs
 * @returns an array words. Each word is representative of one line from wordsDB.txt
 */
const format = (textFile) => {
  const splitByCharacter = textFile.split(/\r?\n/);
  return splitByCharacter;
}

const words = format(wordsDB);

module.exports = words;