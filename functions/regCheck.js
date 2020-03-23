function regCheck(regNo, locationCode){
    var plateCheck = regNo.endsWith(locationCode);
    return plateCheck;
}