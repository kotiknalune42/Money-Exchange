// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
 if (currency === 0){
 			return [];
 } else if (currency >= 10000) {
   		console.log(Error("You are rich, my friend! We don't have so much coins for exchange")); 
 } else {
    	var coins = [{H:50},{Q:25},{D:10},{N:5},{P:1}]
     
     	var h = (Math.floor(currency / coins[0].H));
      var ans1 = currency - (h * coins[0].H);
      coins[0].H = h; // new value Half-dollars
      
      var q = (Math.floor( ans1 / coins[1].Q))
      var ans2 = ans1 - (q * coins[1].Q);
 			coins[1].Q = q; // new value Quarters
      
      var d = (Math.floor( ans2 / coins[2].D))
      var ans3 = ans2 - (d * coins[2].D);
 			coins[2].D = d; // new value Dimes
      
      var n = (Math.floor( ans3 / coins[3].N))
      var ans4 = ans3 - (n * coins[3].N);
 			coins[3].N = n; // new value Nickels
      
      var p = (Math.floor( ans4 / coins[4].P))
      var ans5 = ans4 - (n * coins[4].P);
 			coins[4].P = p; // new value Pennies
    
      
//TESTING
    
var exchange = {H:h,Q:q,D:d,N:n,P:p};

if(h == 0){delete exchange.H;}
if(q == 0){delete exchange.Q;}
if(d == 0){delete exchange.D;}
if(n == 0){delete exchange.N;}
if(p == 0){delete exchange.P;}

return exchange;   } // Returns coins needed to make change
}

