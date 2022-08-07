
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


function take(arr, n){
    return arr.slice(0,n)
}

function take(arr, n) {
    return arr.filter((elem, i) => i < n )
  }



  function take(arr, n) {
    let counter = 0;
    let res = [];
    for (let i of arr) {
      counter += 1;
      if (counter <= n && counter <= arr.length) {
        res.push(i);
      }
    }
    return res;
  }