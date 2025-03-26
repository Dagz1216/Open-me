const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');
const backgroundGif = document.getElementById('background-gif');

let noButtonSize = 1; // Initial size for the No button

noButton.addEventListener('click', () => {
    // Shrink the No button
    noButtonSize -= 0.1; // Decrease size by 0.1
    if (noButtonSize < 0.1) { // Hide the button if it gets too small
        noButton.style.display = 'none'; // Hide the No button
    } else {
        noButton.style.transform = `scale(${noButtonSize})`;
        noButton.style.transition = 'transform 0.2s';
    }

    // Grow the Yes button
    yesButton.style.transform = 'scale(1.2)';
    yesButton.style.transition = 'transform 0.2s';
});

yesButton.addEventListener('click', () => {
    // Change the GIF and message when Yes is clicked
    backgroundGif.src = 'https://media1.tenor.com/m/UXLmgQdkDesAAAAd/robert-bri.gif'; // New GIF URL
    message.innerText = "I know you love me!!!";

    // Reset the buttons and message for the next interaction after a delay
    setTimeout(() => {
        resetInteraction();
    }, 3000); // Wait for 3 seconds before resetting
});

// Function to reset the interaction
function resetInteraction() {
    // Reset No button
    noButtonSize = 1; // Reset size
    noButton.style.display = 'inline-block'; // Show the No button
    noButton.style.transform = `scale(${noButtonSize})`; // Reset scale
    yesButton.style.transform = 'scale(1)'; // Reset Yes button size
    message.innerText = "Do you love me?"; // Reset message
    backgroundGif.src = 'https://media1.tenor.com/m/WxUmFQEJlnwAAAAC/bubu-dudu-sseeyall.gif'; // Reset GIF
}
