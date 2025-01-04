const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  const stringArr = [];
  const additionArr = [];
  
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArr.push(addition);
  }
  
  const newAddition = additionArr.join(additionSeparator);
  const newArr = `${str}${newAddition}`;

  for (let i = 0; i < repeatTimes; i++) {
    stringArr.push(newArr);
  }

  const result = stringArr.join(separator);
  return result;
}

module.exports = {
  repeater
};
