// const randomNumberArray = [];
//
// for (let i = 0; i < 5; i++) {
//     let randomNumber = Math.floor(Math.random() * 36 + 1);
//     randomNumberArray.push(randomNumber);
// }
//
// function getMinimum(randomNumberArray) {
//     return Math.min(...randomNumberArray);
// }
//
// function getMaximum(randomNumberArray) {
//     return Math.max(...randomNumberArray);
// }
//
// let sum = 0;
// for (let i = 0; i < randomNumberArray.length; i++) {
//     sum += randomNumberArray[i];
// }
//
// function getAverage(sum, arrayLength) {
//     return sum / arrayLength;
// }
//
// function displayResults() {
    // const minimum = getMinimum(randomNumberArray);
    // const maximum = getMaximum(randomNumberArray);
    // const average = getAverage(sum, randomNumberArray.length);

//     console.log("Random Numbers:", randomNumberArray);
//     console.log("Minimum:", minimum);
//     console.log("Maximum:", maximum);
//     console.log("Average:", average.toFixed(2));
// }


document.addEventListener("DOMContentLoaded", function () {
    const randomNumberOutput = document.getElementById("randomNumberOutput");
    const minOutput = document.getElementById("minOutput");
    const maxOutput = document.getElementById("maxOutput");
    const averageOutput = document.getElementById("averageOutput");
    const generateButton = document.getElementById("generate-button");
    const closeButton = document.getElementById("close-button");

    function generateSportlotoNumbers() {
        const randomNumberArray = [];

        while (randomNumberArray.length < 5) {
            let randomNumber = Math.floor(Math.random() * 36) + 1;
            if (!randomNumberArray.includes(randomNumber)) {
                randomNumberArray.push(randomNumber);
            }
        }

        randomNumberArray.sort((a, b) => a - b);

        const minimum = Math.min(...randomNumberArray);
        const maximum = Math.max(...randomNumberArray);

        let sum = 0;
        for (let i = 0; i < randomNumberArray.length; i++) {
            sum += randomNumberArray[i];
        }

        const average = sum / randomNumberArray.length;

        randomNumberOutput.textContent = randomNumberArray.join(", ");
        minOutput.textContent = minimum;
        maxOutput.textContent = maximum;
        averageOutput.textContent = average.toFixed(2);

        document.body.classList.add("active");

        console.log("Generated Numbers:", randomNumberArray);
        console.log("Minimum:", minimum);
        console.log("Maximum:", maximum);
        console.log("Average:", average.toFixed(2));
    }

    generateButton.addEventListener("click", function () {
        console.log("Button clicked, generating numbers...");
        generateSportlotoNumbers();
    });

    closeButton.addEventListener("click", function () {
        console.log("Close button clicked, hiding popup...");
        document.body.classList.remove("active");
    });
});
