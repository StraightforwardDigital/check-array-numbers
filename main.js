function smallEnough(a, limit){
  //use the every method to check every number in the array to see if less than the limit
  return a.every(value => value <= limit);
}