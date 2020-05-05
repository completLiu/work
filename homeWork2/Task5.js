var arrayStrNumb = [1,7,'16',28,'light', 'meta', 'duck', 36, 'expensive', 'urbanization', true, false, 
 {
   name: 'Alan',
   age: 30
  }
];

function moreSeven (array) {
    for (var i=0;i < array.length;i++) {
      if ((array[i] > 7) && (typeof array[i] === 'number'))
          console.log(i + " -", array[i])
          }
    }
  
  moreSeven (arrayStrNumb);