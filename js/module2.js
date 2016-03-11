var arr = [];

for (var i = 0; i < 5; i++) {
    var name = prompt("Enter the name: ", "");
    arr.push(name);
}
console.log(arr);

var userName = prompt("Enter User name: ", "");

function validName() {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === userName) {
            console.log("userName ", userName);
            console.log("arr[k] ", arr[k]);
            return alert(arr[k] + ", you have successfully logged!");
        }
    }
    return alert("Invalid name!");
}
validName();