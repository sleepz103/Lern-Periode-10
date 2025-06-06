document.addEventListener('DOMContentLoaded', () => {
    const ironForm = document.getElementById('factory-form-iron');
    const copperForm = document.getElementById('factory-form-copper');
    const submitButton = document.getElementById('submit-both-button');
    const createButton = document.getElementById('create-factory-button');
    const machineForm = document.getElementById('machine-form');

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        submitButton.classList.add('active');
        setTimeout(() => submitButton.classList.remove('active'), 150);
        const data = {
            Iron_Machine: ironForm.iron_machine.value,
            Iron_Production: ironForm.iron_production.value,
            Copper_Machine: copperForm.copper_machine.value,
            Copper_Production: copperForm.copper_production.value,
        };
        try {
            const response = await fetch('https://localhost:7075/api/factory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            document.getElementById('copper-wire-output').textContent = 'Copper wire output: ' + result.copperWireOutput;
            document.getElementById('elec-circ-output').textContent = 'Electronic circuit output: ' + result.ecOutput;
            console.log('Data submitted:', data);
        } catch (err) {
            alert('Submission failed.');
            console.error('Error:', err);
        }
    });

    createButton.addEventListener('click', async (e) => {
        e.preventDefault();
        createButton.classList.add('active');
        setTimeout(() => createButton.classList.remove('active'), 150);
        const data = {
            machineName: machineForm.machineName.value,
            energyUsage: machineForm.energyUsage.value,
            stressImpact: machineForm.stressImpact.value
        };
        try {
            const response = await fetch('https://localhost:7075/api/machine', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            // Clear form fields after successful submission
            machineForm.machineName.value = '';
            machineForm.energyUsage.value = '';
            machineForm.stressImpact.value = '';
        } catch (err) {
            console.error('Error:', err);
        }
    });
});
