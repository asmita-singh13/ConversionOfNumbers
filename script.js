function convert() {
    const numberInput = document.getElementById('numberInput').value;
    const inputBase = parseInt(document.getElementById('inputBase').value);

    if (!numberInput) {
        alert("Please enter a number.");
        return;
    }

    let decimalValue;
    try {
        decimalValue = parseInt(numberInput, inputBase);
        if (isNaN(decimalValue)) {
            throw new Error("Invalid number");
        }
    } catch (error) {
        alert("Invalid number for the selected base.");
        return;
    }

    document.getElementById('binaryOutput').innerText = decimalValue.toString(2);
    document.getElementById('octalOutput').innerText = decimalValue.toString(8);
    document.getElementById('decimalOutput').innerText = decimalValue.toString(10);
    document.getElementById('hexOutput').innerText = decimalValue.toString(16).toUpperCase();
}
