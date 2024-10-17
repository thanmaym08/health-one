// src/app/patients/page.tsx
'use client';


import React, { useEffect, useState } from 'react';

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/patients');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Patients List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{patient.name} (Age: {patient.age}, Gender: {patient.gender})</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsPage;
