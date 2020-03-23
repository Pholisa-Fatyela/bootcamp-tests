function countAllPaarl(regNumbers){
    var regList = regNumbers.split(", ");
    var allPaarl = [];
    for(var i=0; i < regList.length; i++){
      if(regList[i].startsWith('CJ')){
        allPaarl.push(regList[i]);
      }
    }
    return allPaarl.length;
}