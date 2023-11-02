document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.querySelector(".wheel");
    const spinButton = document.getElementById("spin-button");
    const sections = document.querySelectorAll(".wheel-section");
    let spinning = false;
    let userChoices = []; // Store user's custom choices

    // Function to retrieve user's custom choices from the URL
    function getUserChoices() {
        const urlParams = new URLSearchParams(window.location.search);
        for (const param of urlParams) {
            if (param[0] === "choice") {
                userChoices.push(param[1]);
            }
        }
    }

    // Function to spin the wheel
    function spinWheel() {
        if (spinning || userChoices.length === 0) return;

        spinning = true;
        const rotationTime = 4000; // Time in milliseconds
        const totalRotation = 10 * 360; // 10 full rotations
        const randomRotation = Math.floor(Math.random() * 360);
        const totalDegrees = totalRotation + randomRotation;
        const degreesPerStep = 1;
        let currentRotation = 0;

        spinButton.disabled = true;

        const spinInterval = setInterval(function () {
            currentRotation += degreesPerStep;
            wheel.style.transform = `rotate(${currentRotation}deg)`;

            if (currentRotation >= totalDegrees) {
                clearInterval(spinInterval);

                const selectedSection = Math.floor((360 - (currentRotation % 360)) / (360 / userChoices.length));
                alert(`You've won: ${userChoices[selectedSection]}`);
                spinning = false;
                spinButton.disabled = false;
            }
        }, rotationTime / totalDegrees);
    }

    // Initialize user's custom choices
    getUserChoices();

    // Event listener for the spin button
    spinButton.addEventListener("click", spinWheel);
});