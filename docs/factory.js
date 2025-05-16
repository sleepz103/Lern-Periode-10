document.addEventListener('DOMContentLoaded', () => {
    const ironForm = document.getElementById('factory-form-iron');
    const copperForm = document.getElementById('factory-form-copper');
    const submitButton = document.getElementById('submit-both-button');


    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = {
            iron_production: ironForm.iron_production.value,
            iron_energy: ironForm.iron_energy.value,
            copper_production: copperForm.copper_production.value,
            copper_energy: copperForm.copper_energy.value
        };
        try {
            await fetch('/api/factory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            alert('Data submitted!');
            console.log('Data submitted:', data);
        } catch (err) {
            alert('Submission failed.');
            console.error('Error:', err);
        }
    });
});
