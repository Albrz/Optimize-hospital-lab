<script>
    import { addSample, patients } from './stores.js';

    let patientId = '';
    let type = '';

    function handleSubmit() {
        addSample({ patientId, type, scheduledTime: '' });
        patientId = '';
        type = '';
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        Patient:
        <select bind:value={patientId} required>
            <option value="" disabled selected>Select Patient</option>
            {#each $patients as patient}
                <option value={patient.id}>{patient.name}</option>
            {/each}
        </select>
    </label>
    <label>
        Sample Type:
        <input type="text" bind:value={type} required />
    </label>
    <button type="submit">Add Sample</button>
</form>
