document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.querySelector(".wheel");
    const spinButton = document.getElementById("spin-button");
    const sections = []; // Store user choices

    // Function to retrieve user choices from the URL
    function getUserChoices() {
        const urlParams = new URLSearchParams(window.location.search);
        for (const param of urlParams) {
            if (param[0] === "choice") {
                sections.push(param[1]);
            }
        }
    }

    // Function to create sections on the wheel based on user choices
    function createSections() {
        for (const choice of sections) {
            const section = document.createElement("div");
            section.className = "wheel-section";
            section.textContent = choice;
            wheel.appendChild(section);
        }
    }

    // Initialize user's custom choices and create sections
    getUserChoices();
    createSections();

    // Function to spin the wheel
    function spinWheel() {
        const totalDegrees = sections.length * (360 / sections.length);
        // Modify the spinning wheel logic to use user's choices
        // Use sections for the spinning wheel
        // Your spinning wheel logic here
    }

    // Event listener for the spin button
    spinButton.addEventListener("click", spinWheel);
});