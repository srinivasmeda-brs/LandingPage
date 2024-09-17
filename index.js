const images = [
    'ink-7294678_1280.jpg',
    'istockphoto-506856658-2048x2048.jpg',
    'istockphoto-841278554-2048x2048.jpg',
    'istockphoto-1220728836-2048x2048.jpg',
    'watercolor-744227_1280.webp',
    'istockphoto-1195458582-2048x2048.jpg'
];

document.addEventListener('DOMContentLoaded', function() {
    let dateElement = document.getElementById('date');
    let containerEls = document.getElementsByClassName('container');

    function formatTime12Hour(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour time to 12-hour time
        const formattedHours = ((hours + 11) % 12 + 1); // Converts 0-23 to 1-12
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
    }

    function displayCurrentDate() {
        const now = new Date();
        dateElement.textContent = formatTime12Hour(now); // Example output: "3:05:07 PM"
    }

    function setRandomBackground() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];
        // Apply background image to all elements with the class 'container'
        Array.from(containerEls).forEach(containerEl => {
            containerEl.style.backgroundImage = `url('images/${selectedImage}')`;
            containerEl.style.backgroundSize = 'cover'; // Optional: Adjust background size
            containerEl.style.backgroundPosition = 'center'; // Optional: Center the background image
        });
    }

    // Set a random background image and display the current date/time
    setRandomBackground();
    displayCurrentDate();

    // Update the time every second (1000 ms)
    setInterval(displayCurrentDate, 1000);
});
