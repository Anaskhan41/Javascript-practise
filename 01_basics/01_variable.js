const accountId = 144553
let accountEmail = "mekhananas41@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 // not allowed
accountEmail = "dsas@gmail.com"
accountPassword = "12333"
accountCity = "dehradun"
let accountState;

console.log(accountId);
/*
Prefer not to use var
Because of issue in Block and functional scope
*/


console.table([accountEmail, accountPassword, accountId, accountCity, accountState])