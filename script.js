document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.querySelector(".wheel");
    const sections = document.querySelectorAll(".wheel-section");
    const spinButton = document.getElementById("spin-button");

    let spinning = false;

    function spinWheel() {
        if (spinning) return;

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

                const selectedSection = Math.floor((360 - (currentRotation % 360)) / 72);
                alert(`You've won: ${sections[selectedSection].textContent}`);
                spinning = false;
                spinButton.disabled = false;
            }
        }, rotationTime / totalDegrees);
    }

    spinButton.addEventListener("click", spinWheel);
});