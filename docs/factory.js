document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create-factory-button');
    const machineForm = document.getElementById('machine-form');

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
