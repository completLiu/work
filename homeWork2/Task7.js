var arrayStrNumb = [1,7,'16',28,'light', 'meta', 'duck', 36, 'expensive', 'urbanization', true, false, 
 {
   name: 'Alan',
   age: 30
  }
];

function filter (array) {
    for (var i=0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        console.log ('This is number' + " -",array[i])
      }
      else if (typeof array[i] === 'string'){
        console.log ('This is string' + " -",array[i])
      }
      else {
        console.log ('This is some type' + " -",array[i])
      }
    }
  }
  
  filter (arrayStrNumb);