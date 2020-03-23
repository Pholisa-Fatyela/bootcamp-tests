function countAllFromTown (regNo,loc){
    var list = regNo.split(',');
    var locList = [];

    for (var i=0; i < list.length; i++){
    var Reg = list[i].trim();
    if(Reg.startsWith(loc)){
       locList.push(Reg);
    }
  }
    return locList.length;
} 