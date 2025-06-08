// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
})();

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// RSVP form submission
function submitRSVP() {
    const name = document.getElementById('rsvpName').value;
    const email = document.getElementById('rsvpEmail').value;
    const attending = document.getElementById('rsvpAttending').value;
    const dietary = document.getElementById('rsvpDietary').value;
    const message = document.getElementById('rsvpMessage').value;

    // Send email using EmailJS
    const templateParams = {
        to_email: 'chanreyagibbons@gmail.com',
        from_name: name,
        from_email: email,
        attending: attending,
        dietary: dietary,
        message: message,
        subject: 'New RSVP Submission'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('RSVP email sent successfully:', response);
            // Show success message
            document.getElementById('rsvpForm').style.display = 'none';
            document.getElementById('rsvpSuccess').style.display = 'block';
        }, function(error) {
            console.error('Failed to send RSVP email:', error);
            alert('There was an error sending your RSVP. Please try again.');
        });
}

// Message form submission
function submitMessage() {
    const name = document.getElementById('messageName').value;
    const message = document.getElementById('messageText').value;

    // Send email using EmailJS
    const templateParams = {
        to_email: 'chanreyagibbons@gmail.com',
        from_name: name,
        message: message,
        subject: 'New Birthday Message'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Message email sent successfully:', response);
            // Show success message
            document.getElementById('messageForm').style.display = 'none';
            document.getElementById('messageSuccess').style.display = 'block';
        }, function(error) {
            console.error('Failed to send message email:', error);
            alert('There was an error sending your message. Please try again.');
        });
} 