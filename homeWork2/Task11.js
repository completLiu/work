var arrayNumb = [654,456,58,69,32,12,56,82,35,65];

function parity (array) {
    for (var i=0; i < array.length; i++) {
      if (array[i+1]%2 === 0) {
        console.log ('Following number is even' + " - " + array[i+1])
      }
      else if (array[i+1]%2 === 1) {
        console.log ('Following number is odd' + " - " + array[i+1])
      }
    }
  }
  
  parity (arrayNumb);