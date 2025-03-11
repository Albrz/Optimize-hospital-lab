<script>
  import { addPatient } from './stores.js';

  let name = '';
  let dob = '';

  function handleSubmit() {
    addPatient({ name, dob });
    name = '';
    dob = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} required />
  </label>
  <label>
    Date of Birth:
    <input type="date" bind:value={dob} required />
  </label>
  <button type="submit">Add Patient</button>
</form>
