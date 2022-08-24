// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"


String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split('').map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
  }


  String.prototype.toAlternatingCase = function () {
    new_str = "";
    for(var i = 0; i < this.length; i++) {
      if(this[i] === this[i].toUpperCase()) {
        new_str += this[i].toLowerCase();
      }
      else {
        new_str += this[i].toUpperCase();
      }
    }
    return new_str;
  }

const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};

String.prototype.toAlternatingCase = function () {
    return this.replace(/./g, function (match) {
      return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
    });
  }