var defaultValue = 0;

function incresing() {
    defaultValue++;
    console.log("incresing Value is " + defaultValue);
    add();
}
function decresing() {
    if (defaultValue > 0) {
        defaultValue--;
        console.log("Decremented Value is: " + defaultValue);
        add();
    }  
    
}
function add() {
    const num = document.getElementById("value");
    num.textContent = defaultValue;
}