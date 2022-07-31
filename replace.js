// "Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence"

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }
  
  
  function replace(s){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(let i = 0; i < s.length; i++) {
      if(vowels.includes(s[i])) {
        s = s.replace(s[i], '!');
      }
    }
    return s;
  }

  function replace(s){
    return s.split("").map(char => "aeiou".includes(char.toLowerCase()) ? "!" : char).join("")
  }

  function replace(s){
    let arr = s.split("")
      for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U') {
          arr[i] = '!'
        }
      }
    return arr.join("")
  }