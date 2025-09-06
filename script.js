const greeting = document.getElementById("greeting");
const inputContainer = document.getElementById("nameInputContainer");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitNameBtn");
const afterSubmit = document.getElementById("afterSubmit");
const moreText = document.getElementById("moreText");
const repeatBtn = document.getElementById("repeatBtn");

// Initially hide greeting until a name is entered
greeting.style.opacity = 0;

submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if(name) {
        greeting.textContent = `Hello World, ${name}!`;
        greeting.style.opacity = 1; // Show greeting
        
        // Hide input
        inputContainer.style.display = "none";

        // Show text and repeat button
        afterSubmit.style.display = "flex";
        setTimeout(() => {
            moreText.style.opacity = 1;
        }, 100);
    }
});

repeatBtn.addEventListener("click", () => {
    // Hide greeting
    greeting.style.opacity = 0;

    // Reset input
    nameInput.value = "";
    moreText.style.opacity = 0;
    afterSubmit.style.display = "none";
    inputContainer.style.display = "flex";
    nameInput.focus();
});

// Add Enter key support for name input
nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submitBtn.click();
    }
});
