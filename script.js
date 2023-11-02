function spinWheel() {
    const urlParams = new URLSearchParams(window.location.search);
    const choices = [];
    for (const param of urlParams) {
        if (param[0] === "choice") {
            choices.push(param[1]);
        }
    }

    // Use the choices array for spinning wheel logic
    // Modify the spinning wheel logic to use the choices array for options
    if (choices.length > 0) {
        alert(`Spinning the wheel with choices: ${choices.join(', ')}`);
        // Your spinning wheel logic here
    } else {
        alert("No choices provided.");
    }
}