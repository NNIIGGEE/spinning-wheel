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
        const totalChoices = choices.length;
        const degreesPerSection = 360 / totalChoices;
        
        for (let i = 0; i < totalChoices; i++) {
            const section = document.createElement("div");
            section.className = "wheel-section";
            section.textContent = choices[i];
            section.style.transform = `rotate(${i * degreesPerSection}deg)`;
            wheel.appendChild(section);
        }
    }
    
    // Function to spin the wheel
    function spinWheel() {
        // Your spinning wheel logic here
        // You can use CSS animations or JavaScript for the spinning effect
    }
    
    // Initialize user's custom choices and create sections
    const userChoices = getUserChoices();
    createSections(userChoices);
    
    // Event listener for the spin button
    spinButton.addEventListener("click", spinWheel);
});