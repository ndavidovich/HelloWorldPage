// Wait for the page to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const greetingElement = document.getElementById('greeting');
    const nameInput = document.getElementById('nameInput');
    const submitNameBtn = document.getElementById('submitNameBtn');
    const createMoreBtn = document.getElementById('createMoreBtn');
    const nameInputContainer = document.getElementById('nameInputContainer');
    
    // Function to update greeting with user's name
    function updateGreeting(userName) {
        if (userName && userName.trim() !== '') {
            greetingElement.textContent = `Hello World, ${userName.trim()}!`;
            // Hide the name input container after successful submission
            nameInputContainer.style.display = 'none';
            // Show a success animation
            greetingElement.style.animation = 'none';
            setTimeout(() => {
                greetingElement.style.animation = 'fadeInUp 0.5s ease-out';
            }, 10);
        }
    }
    
    // Function to handle name submission
    function handleNameSubmit() {
        const userName = nameInput.value.trim();
        updateGreeting(userName);
        
        // Clear the input field
        nameInput.value = '';
        
        // Add visual feedback
        submitNameBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitNameBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Function to handle "Create More" button click
    function handleCreateMoreClick() {
        // Create a fun message
        const messages = [
            "Great! You're ready to build amazing things! 🚀",
            "The web development journey starts here! ✨",
            "You've just created your first interactive webpage! 🎉",
            "Welcome to the world of coding! 💻",
            "Your creativity has no limits! 🌟",
            "Time to explore the endless possibilities! 🌈",
            "You're on your way to becoming a web developer! 🎯"
        ];
        
        // Pick a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Show the message
        alert(randomMessage);
        
        // Add visual effect to the button
        createMoreBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            createMoreBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Add click event listener to submit button
    submitNameBtn.addEventListener('click', handleNameSubmit);
    
    // Add click event listener to "Create More" button
    createMoreBtn.addEventListener('click', handleCreateMoreClick);
    
    // Add Enter key support for name input
    nameInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleNameSubmit();
        }
    });
    
    // Add keyboard support for buttons
    submitNameBtn.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleNameSubmit();
        }
    });
    
    createMoreBtn.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCreateMoreClick();
        }
    });
    
    // Focus on the name input when page loads
    setTimeout(() => {
        nameInput.focus();
    }, 1000);
    
    // Optional: Add some console messages for developers
    console.log('Hello World Page loaded successfully! 🌍');
    console.log('Enter your name and click Submit, then try the "Let\'s Create More" button!');
});
