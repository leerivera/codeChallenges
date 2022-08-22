// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// describe("Basic tests", function(){
//     it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
//       Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
//     });  

function points(games) {
    // your code here
  
    return games.reduce((w, [x, _, y]) => w + (x > y ? 3 : x ==y), 0)
  }

//using map

function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }

<<<<<<< HEAD
  // with for loop
  function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
  }

=======
>>>>>>> 31948a6fed3b1e6b554f2786696406a934f31ee2

