function calculateStatistics() {
    
    const input = document.getElementById("numbers").value.trim();
    const errorMessage = document.getElementById("error-message");
    const resultsSection = document.getElementById("results");
    
 
    errorMessage.style.display = "none";
    resultsSection.style.display = "none";

    const numbers = input.split(/\s+/).map(Number);
    
    if (numbers.some(isNaN) || numbers.length === 0) {
        errorMessage.textContent = "Please enter a valid list of numbers.";
        errorMessage.style.display = "block";
        return;
    }

   
    const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

    const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numbers.length;
    const stddev = Math.sqrt(variance);

   
    document.getElementById("mean").textContent = mean.toFixed(2);
    document.getElementById("variance").textContent = variance.toFixed(2);
    document.getElementById("stddev").textContent = stddev.toFixed(2);
    resultsSection.style.display = "block";
}
