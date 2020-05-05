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