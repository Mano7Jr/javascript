function greetAsync(name, callback) {
    console.log("Hello, " + name + "!");
    setTimeout(callback, 2000);
}

function sayBye() {
    console.log("Goodbye!");
}

greetAsync("Alice", sayBye);
