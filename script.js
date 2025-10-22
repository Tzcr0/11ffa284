
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Simulate newsletter signup (in real deployment, this would integrate with email service)
    alert('Thanks for subscribing! You\'ll receive weekly updates about the best remote work tools.');
    this.querySelector('input[type="email"]').value = '';
});

// Track tool clicks for analytics
document.querySelectorAll('.try-button').forEach(button => {
    button.addEventListener('click', function() {
        const toolName = this.closest('.tool-card').querySelector('h3').textContent;
        console.log('Tool clicked:', toolName);
        // In real deployment, this would send analytics to track conversions
    });
});
