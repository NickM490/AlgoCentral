// GIVEN A DOLLAR AMOUNT (4.32 FOR EXAMPLE) DETERMINE THE CHANGE BREAKDOWN
// 4.32 == 17 QUARTERS, 1 NICKEL, 2 PENNIES
// IT SHOULD ACCOUNT FOR THE LARGEST DENOMINATIONS FIRST
// CAN RETURN IN ANY FORMAT FOR THIS ONE (STRING, LIST, DICT) JUST MAKE SURE YOU IDENTIFY WHICH COINS!

function coinChange(amount) {
    // your code here
    coinObj = {
        'quarter': 0,
        'dime': 0,
        'nickel': 0,
        'penny': 0
    }
    var num = amount * 100
    console.log(num)
    coinObj['quarter'] = Math.floor(num / 25)
    num = num % 25
    coinObj['dime'] = Math.floor(num / 10)
    num = num % 10
    coinObj['nickel'] = Math.floor(num / 5)
    num = num % 5
    coinObj['penny'] = num
    console.log(coinObj)
}
coinChange(3.21)
coinChange(0.29)
coinChange(0.30)