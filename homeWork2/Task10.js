var arrayStr = ['urbanization', 'culture', 'independent', 'cube', 'inspiration'];

function findLetter (array) {
    for (var i=0;i < array.length;i++) {
       var currentStr = array[i];
       var count = 0;
      for (var j=0; j < currentStr.length; j++) {
        if (currentStr[j] === 'u') {
          count++;
        }
      }
        if (count === 0) {
          array.splice (i,1);
        }
    }
    console.log (array);
  }
  
  findLetter (arrayStr);