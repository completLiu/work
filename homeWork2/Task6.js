var arrayStrNumb = [1,7,'16',28,'light', 'meta', 'duck', 36, 'expensive', 'urbanization', true, false, 
 {
   name: 'Alan',
   age: 30
  }
];

function longLine (array) {
    for (var i=0;i < array.length;i++) {  
        if ((typeof array[i] === 'string') && (array[i].length > 5)) {
          console.log (i + " -", array[i])
      }
    }
  }
  
  longLine (arrayStrNumb);