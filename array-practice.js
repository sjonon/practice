//Remove the duplicate numbers from an array

const nums = [1, 1, 2];
let arr = [];
function removeDups() {
    for (let i = 0; i < nums.length; i++){
        if (arr.indexOf(nums[i]) === -1)
            {arr.push(nums[i])}
    }
};
removeDups(nums);
console.log("initial array", nums)
console.log("new array without duplicates", arr);
console.log("length of new array", arr.length);

console.log()
console.log("-----------------------------")
console.log()

//Remove the duplicate numbers from an array #2
let numbers = [0,0,1,1,1,2,2,3,3,4];
function removeDuplicates() {
    let arr2 = [];
    for (let i = 0; i < numbers.length; i++){
        let a = numbers[i];
        let b = numbers[i+1]
        if (a < b) {
            arr2.push(a)
        }
        if (i === numbers.length-1){
            arr2.push(a)
        }
        
    }
    return arr2;
};
console.log("initial array problem 2", numbers)
console.log("new array problem 2", removeDuplicates(numbers))

console.log()
console.log("-----------------------------")
console.log()

//Say you have an array for which the ith element is the price of a given stock on day i.
//Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

let prices = [7, 1, 5, 3, 6, 4];
let price = [1,2,3,4,5];
let pri = [7,6,4,3,1];
var maxProfit = function(prices) {
    let profit = 0
    for (let i = 0; i < prices.length; i++){
            let x = prices[i];
            let j = prices[i+1];
            if(j>x){
            profit += j-x
            }
        };
        return profit;
};
console.log("profit from pri array", maxProfit(pri))
console.log("profit from prices array", maxProfit(prices))
console.log("profit from price array", maxProfit(price))

console.log()
console.log("-----------------------------")
console.log()



    
