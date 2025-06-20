document.addEventListener('DOMContentLoaded', () => {
    const ironSelect = document.querySelectorAll('.machine-select')[0];
    const copperSelect = document.querySelectorAll('.machine-select')[1];

    async function loadMachines() {
        try {
            const response = await fetch('https://localhost:7075/api/machine');
            const machines = await response.json();
            // Helper to populate a select element
            function populateSelect(select, defaultLabel) {
                select.innerHTML = '';
                const defaultOption = document.createElement('option');
                defaultOption.selected = true;
                defaultOption.disabled = true;
                defaultOption.textContent = defaultLabel;
                select.appendChild(defaultOption);
                machines.forEach(machine => {
                    const option = document.createElement('option');
                    option.value = machine.name || machine.machineName || machine; // fallback for different API shapes
                    option.textContent = machine.name || machine.machineName || machine;
                    select.appendChild(option);
                });
            }
            populateSelect(ironSelect, 'Choose a machine...');
            populateSelect(copperSelect, 'Choose a machine...');
        } catch (err) {
            console.error('Failed to load machines:', err);
        }
    }

    loadMachines();

    const createButton = document.getElementById('create-factory-button');
    const machineForm = document.getElementById('machine-form');

    createButton.addEventListener('click', async (e) => {
        e.preventDefault();
        createButton.classList.add('active');
        setTimeout(() => createButton.classList.remove('active'), 150);
        const data = {
            machineName: machineForm.machineName.value,
            energyUsage: machineForm.energyUsage.value,
            stressImpact: machineForm.stressImpact.value,
            production: machineForm.production.value
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
            machineForm.production.value = '';
            await loadMachines(); // reload dropdowns after creating a machine
        } catch (err) {
            console.error('Error:', err);
        }
    });
});
