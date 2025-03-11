<script>
  import { samples, schedule, scheduleSample } from './stores.js';

  let selectedSampleId = '';
  let scheduledTime = '';

    function handleSchedule() {
        if (selectedSampleId &amp;&amp; scheduledTime) {
            scheduleSample(selectedSampleId, scheduledTime);
            selectedSampleId = '';
            scheduledTime = '';
        }
    }

</script>

<h2>Schedule Sample Collection</h2>

<label>
  Select Sample:
  <select bind:value={selectedSampleId}>
      <option value="">Select a sample</option>
    {#each $samples as sample}
      {#if !sample.scheduledTime}
        <option value={sample.id}>{sample.type} (Patient ID: {sample.patientId})</option>
      {/if}
    {/each}
  </select>
</label>

<label>
  Scheduled Time:
  <input type="datetime-local" bind:value={scheduledTime} />
</label>

<button on:click={handleSchedule} disabled={!selectedSampleId || !scheduledTime}>
  Schedule
</button>
