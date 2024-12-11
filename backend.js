document.getElementById('soilForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const n = document.getElementById('n').value;
    const p = document.getElementById('p').value;
    const k = document.getElementById('k').value;
    const ph = document.getElementById('ph').value;
    
    // Send a POST request to the backend
    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ n: n, p: p, k: k, ph: ph }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display the prediction
        alert('Suggested Crop: ' + data.prediction);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error with the prediction. Please try again.');
    });
});
