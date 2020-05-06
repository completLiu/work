function squaredNumber (number) {
    return number*number;
  }
  
  function hostFunction (func) {
    var array = [];
    array.push(func (25));
    console.log (array);
  }
  
  hostFunction (squaredNumber);