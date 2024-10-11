document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const countryCode = document.getElementById('countryCode').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const errorElement = document.getElementById('error');

    // Clear any previous errors
    errorElement.textContent = '';

    // Validate inputs
    if (!countryCode || !phoneNumber) {
        errorElement.textContent = 'Please enter both country code and phone number.';
        return;
    }

    if (isNaN(countryCode) || isNaN(phoneNumber)) {
        errorElement.textContent = 'Both country code and phone number must be numeric.';
        return;
    }

    // Construct WhatsApp link
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}`;
    
    // Open the WhatsApp chat in a new window/tab
    window.open(whatsappUrl, '_blank');
});
