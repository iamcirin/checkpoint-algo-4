let arra = [1,8,5,9,0,4,10,2]
for (let i = 0; i < arra.length; i++){
  for (let j = 0; j < arra.length - i - 1; j++) {
    if (arra[j + 1] < arra[j]) {
      [arra[j + 1], arra[j]] = [arra[j], arra[j + 1]];
      
    }
     
  }
}

  
 console.log(arra);

