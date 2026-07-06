// Button Click Handler
const myButton = document.getElementById('myButton');
const messageDiv = document.getElementById('message');

myButton.addEventListener('click', function() {
    messageDiv.textContent = '✓ Button clicked successfully!';
    messageDiv.className = 'success';
    
    // Remove message after 3 seconds
    setTimeout(function() {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form (basic validation)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        showMessage('Please fill in all fields!', 'error');
        return;
    }
    
    // Show success message
    showMessage(`Thank you, ${name}! Your message has been sent.`, 'success');
    
    // Clear form
    contactForm.reset();
    
    // Log form data to console
    console.log('Form Data:', {
        name: name,
        email: email,
        message: message
    });
});

// Helper function to display messages
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = type;
    
    // Remove message after 4 seconds
    setTimeout(function() {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 4000);
}

// Page Load Event
window.addEventListener('load', function() {
    console.log('Page loaded successfully!');
});

// Log when page is about to unload
window.addEventListener('beforeunload', function() {
    console.log('Page is being closed or reloaded.');
});