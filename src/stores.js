import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export const patients = writable([
    { id: uuidv4(), name: 'John Doe', dob: '1990-01-15' },
    { id: uuidv4(), name: 'Jane Smith', dob: '1985-05-20' }
]);

export const samples = writable([
    { id: uuidv4(), patientId: '', type: 'Blood', scheduledTime: '' },
    { id: uuidv4(), patientId: '', type: 'Urine', scheduledTime: '' }
]);

export const schedule = writable([]);

export function addPatient(patient) {
    patients.update(currentPatients => [...currentPatients, { ...patient, id: uuidv4() }]);
}

export function addSample(sample) {
    samples.update(currentSamples => [...currentSamples, { ...sample, id: uuidv4() }]);
}

export function scheduleSample(sampleId, time) {
  samples.update((currentSamples) =>
    currentSamples.map((sample) =>
      sample.id === sampleId ? { ...sample, scheduledTime: time } : sample
    )
  );
}
