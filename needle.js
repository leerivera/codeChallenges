// "Can you find the needle in the haystack?

// // Write a function findNeedle() that takes an array full of junk but containing one "needle"

// // After your function finds the needle it should return a message (as a string) that says:

// found the needle at position  plus the index it found the needle, so:"

function findNeedle(haystack) {
    let position = haystack.indexOf("needle");
    return `found the needle at position ${position}`;
  }


  function findNeedle(haystack) {
    var i = 0;
    while (i < haystack.length) {
      if (haystack[i] == 'needle') {
        return 'found the needle at position ' + i;
      }
      i++;  
    }
  }

  const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle')