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