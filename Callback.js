function greetUser(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greetUser("Alice", sayGoodbye);
