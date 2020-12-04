function countBs(str){
  let k = 0;
  for (let i =0; i < str.length; i++){
    if (str[i] == "B"){
      k++;
    }
  }
    return k;
  
}

function countChar(str, lit){
  let k = 0;
  for (let i =0; i < str.length; i++){
    if (str[i] == lit){
      k++;
    }
  }
    return k; 
}

function countBs1(str){
  return countChar(str, "B");
}
