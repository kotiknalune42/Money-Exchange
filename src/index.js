module.exports = function makeExchange(currency) {
 if (currency <= 0){
 			return [];
 } else if (currency >= 10000) {
      let rich = {error:"You are rich, my friend! We don't have so much coins for exchange"};
   		return rich; 
 } else {
     	let h = (Math.floor(currency/50));
      let ans1 = (currency - (h *50));
      
      let q = (Math.floor( ans1 / 25))
      let ans2 = ans1 - (q * 25);
      
      let d = (Math.floor( ans2 / 10))
      let ans3 = ans2 - (d * 10);
 			
      let n = (Math.floor( ans3 / 5))
      let ans4 = ans3 - (n * 5);
 		
      let p = (Math.floor(ans4 / 1))	
     
      let completeExchange = {H:h,Q:q,D:d,N:n,P:p};
      if(completeExchange.value == 0) delete completeExchange.value;    
      return completeExchange;   
  } 
}
