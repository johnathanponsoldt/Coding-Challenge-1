// Task 1: Variables and Data Types

let customerName = "Lebron James";
const customerID = 23;
var isPremiumMember = false;

console.log(customerName, typeof(customerName));
console.log(customerID, typeof(customerID));
console.log(isPremiumMember, typeof(isPremiumMember));


// Task 2: Compound Data Types

let orderItems = ["Basketball Shoes", "Basketball","Headband"];
const orderDetails = {
    orderID: 2,
    items: orderItems,
    totalAmount: 190.00,
}

console.log (orderItems, orderdetails);


// Task 3: Assignment Operators

let accountBalance = 500.00;
console.log (accountBalance, totalAmount500(accountBalance));
accountBalance +=100;
console.log (accountBalance, totalAmount600(accountBalance));
accountBalance -=50;
console.log (accountBalance, totalAmount550(accountBalance));
accountBalance *=1.2;
console.log (accountBalance,totalAmount660(accountBalance));
accountBalance /=2;
console.log (accountBalance, totalAmount330(accountBalance));
accountBalance %=200;
console.log (accountBalance, totalAmount660(accountBalance));


// Task 4: Comparison Operators

let employeescore1 = "20";
let employeescore2 = "15";
console.log (employeescore1 > employeescore2);
console.log (employeescore1 < employeescore2);
console.log (employeescore1 >= employeescore2);
console.log (employeescore1 <= employeescore2);
console.log (employeescore1 === employeescore2);
console.log (employeescore1 !== employeescore2);


// Task 5: Logical Operators

let hasKeyCard = true;
let hasPermission = false;
let canAccessRestrictedArea = hasKeyCard && hasPermission;
console.log (canAccessRestrictedArea);
let canAccessGeneralArea = hasKeyCard || hasPermission;
console.log (canAccessGeneralArea);
let lacksPermission = !hasPermission;
console.log (lacksPermission);
let canAccessSpecialArea = hasKeyCard && !hasPermission;
console.log (canAccessSpecialArea);

