document.addEventListener('DOMContentLoaded', () => {
    // Select the interactive button and the message display area
    const exploreButton = document.getElementById('exploreBtn');
    const galaxyMessage = document.getElementById('galaxyMessage');

    // Define a list of cosmic insights or messages
    const insights = [
        "The universe whispers secrets to those who listen...",
        "Beyond the stars, new horizons await discovery.",
        "Every photon tells a story from across the cosmos.",
        "Embrace the void, for it holds infinite possibilities.",
        "Your journey through the nebula has just begun."
    ];

    // Ensure elements exist before adding event listeners
    if (exploreButton && galaxyMessage) {
        let currentInsightIndex = 0;

        // Add a click event listener to the button
        exploreButton.addEventListener('click', () => {
            // Update the message content with a new insight
            galaxyMessage.textContent = insights[currentInsightIndex];

            // Toggle a class to reveal or hide the message with a subtle animation
            // This assumes 'visible' class handles the display/animation in style.css
            galaxyMessage.classList.add('visible');

            // Cycle through the insights
            currentInsightIndex = (currentInsightIndex + 1) % insights.length;

            // Optional: Add a temporary class to the button for a brief visual feedback
            exploreButton.classList.add('clicked');
            setTimeout(() => {
                exploreButton.classList.remove('clicked');
            }, 300); // Remove after 300ms, matching a potential CSS transition
        });

        // Optional: Hide the message initially if it's not handled by default CSS
        // or if we want to ensure it's hidden before the first interaction.
        // For this example, we'll assume it starts hidden and 'visible' class reveals it.
    } else {
        console.warn('One or more required elements (exploreBtn, galaxyMessage) not found. Interactive script may not function.');
    }

    // Example of another simple interaction: changing page title dynamically
    // This could be triggered by scrolling, time, or another user action.
    const originalTitle = document.title;
    let titleInterval;

    // A hypothetical function to start a dynamic title animation
    function startTitleAnimation() {
        let frame = 0;
        const animationFrames = ['★', '•', '✧', '°'];
        titleInterval = setInterval(() => {
            document.title = `${animationFrames[frame]} ${originalTitle} ${animationFrames[frame]}`;
            frame = (frame + 1) % animationFrames.length;
        }, 1000); // Change every second
    }

    // You could call startTitleAnimation() based on user interaction
    // For now, let's keep it simple and just have the button interaction.
    // Uncomment startTitleAnimation() if you want the title to animate on page load.
    // startTitleAnimation();
});