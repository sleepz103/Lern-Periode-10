document.addEventListener('DOMContentLoaded', () => {
    const ironForm = document.getElementById('factory-form-iron');
    const copperForm = document.getElementById('factory-form-copper');
    const submitButton = document.getElementById('submit-both-button');

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const data = {
            Iron_Machine: ironForm.iron_machine.value,
            Iron_Production: ironForm.iron_production.value,
            Iron_Energy: ironForm.iron_energy.value,
            Copper_Machine: copperForm.copper_machine.value,
            Copper_Production: copperForm.copper_production.value,
            Copper_Energy: copperForm.copper_energy.value
        };
        try {
            await fetch('https://localhost:7075/api/factory', {
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
