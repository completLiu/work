//1)
var arrayNumb = [15,58,13,54,32,58];

function unshiftArray (array) {
  arr.unshift (48);
  console.log(array);
}

unshiftArray (arrayNumb);

//2)
var arrayNumb = [15,58,13,54,32,58];

function pushArray (array) {
    arr.push(12);
    console.log(array);
  }
  
  pushArray (arrayNumb);

  //3)
  var arrayNumb = [15,58,13,54,32,58];

  function deleteItem (array) {
    arr.pop();
    arr.shift();
    console.log (array);
  }
  
  deleteItem (arrayNumb);

  //4)
  function deleteRepeat () {
    var arrayRepeat = [21,12,12,56,98,12,56,37,12];
    var arrayResult = [];
    for(var i=0; i<arrayRepeat.length;i++){
      var counter=0;
      var currentValue = arrayRepeat[i];
      for (var j=0;j<arrayRepeat.length;j++) {
        if(currentValue === arrayRepeat[j]){
          counter++;
        } 
      }
      if (counter === 1){
        arrayResult.push(arrayRepeat[i])
      }
    }
    console.log(arrayResult);
  }
  
  deleteRepeat ();

  //5)
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

  //6)
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

  //7)
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

  //8)
  var arrayObjects = [{
    id: 1,
    message: 'hay',
    isHidden: true
},
   {
    id: 2,
    message: 'hello',
    isHidden: false
},
    {
    id: 3,
    message: 'Marhaba',
    isHidden: true
},
    {
    id: 4,
    message: 'Saluton',
    isHidden: false
}];

function filterObjects (array) {
    for (var i=0; i < array.length; i++) {
      if (array[i].isHidden === false) {
        console.log (array[i].message)
      }
    }  
  }
  
  filterObjects (arrayObjects);

//9)
  var arrayTitle = [{
    title: 'hay'
},
   {
    title: 'hello',
},
    {
    title: 'Marhaba'
},
    {
    title: 'Saluton'
}];

function uppercasedTitle (array) {
    for (var i=0; i < array.length; i++) {
      array[i].titleUppercased = array[i].title.toUpperCase ();
    }
    console.log (array);
  }
  
  uppercasedTitle (arrayTitle);

//10)
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

  //11)
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

  //12)
  function squaredNumber (number) {
    return number*number;
  }
  
  function hostFunction (func) {
    var array = [];
    array.push(func (25));
    console.log (array);
  }
  
  hostFunction (squaredNumber);
