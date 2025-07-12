function fibSeries(limit) {
  if ( limit <= 0) {
    return 0;
  }
  if (limit === 1 ) {
    return 1;
  }

  return fibSeries(limit - 1) + fibSeries(limit - 2);
  
}

console.log(fibSeries(7));



// 1,1,2,3,5,8,13
