//My solution to the Tribonacci Sequence KATA

function tribonacci(signature,n){
  var sequence = []
  if (n === 0) {
    continue;
  }
  else if (n <= 3) {
  	for (var i=0; i < n; i++) {
  		sequence[i] = signature[i];
  	}
  }
  else {
  	sequence = signature;
  	for (var j=3; j < n; j++) {
  		sequence[j] = sequence[j-1]+sequence[j-2]+sequence[j-3];
  	}
  } 
  return sequence;
}

// Best user submitted solution 
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}