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