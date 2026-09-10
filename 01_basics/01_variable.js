const account_id = 1223334444
let account_Email = "salman@gmail.com"
var account_Password = "223333"
account_City = "Charsadda"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// account_id = 38393
account_Email = "salman222@gamil.com"
account_Password = "33333"
account_City = "mardan"

console.log(account_id);

console.table([account_id, account_Email, account_Password, account_City])
