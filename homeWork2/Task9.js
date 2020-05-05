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