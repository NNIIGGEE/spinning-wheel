document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.querySelector(".wheel");
    const spinButton = document.getElementById("spin-button");
    
    // Function to retrieve user choices from the URL
    function getUserChoices() {
        const urlParams = new URLSearchParams(window.location.search);
        const choices = [];
        for (const param of urlParams) {
            if (param[0] === "choice") {
                choices.push(param[1]);
            }
        }
        return choices;
    }
    
    // Function to dynamically create sections based on user choices
    function createSections(choices) {
        for (const choice of choices) {
            const section = document.createElement("div");
            section.className = "wheel-section";
            section.textContent = choice;
            wheel.appendChild(section);
        }
    }
    
    // Function to spin the wheel
    function spinWheel() {
        // Your spinning wheel logic here
    }
    
    // Initialize user's custom choices and create sections
    const userChoices = getUserChoices();
    createSections(userChoices);
    
    // Event listener for the spin button
    spinButton.addEventListener("click", spinWheel);
});