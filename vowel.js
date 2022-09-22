// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut(string){
    return string.replace(/[aeiou]/g, '')
}

function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }

  function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }