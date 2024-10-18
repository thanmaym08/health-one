// src/app/patients/[id]/page.tsx

'use client'; // Ensure this is a client component
import React, { useEffect, useState } from 'react';

const PatientPage = ({ params }) => {
  const { id } = params; // Destructure the id directly from params
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPatient = async () => {
        try {
          const response = await fetch(`/api/patients/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPatient(data);
        } catch (error) {
          console.error('Failed to fetch patient:', error);
        }
      };

      fetchPatient();
    }
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Patient Details</h1>
      <div className="flex items-center mb-4">
        <img
          src={patient.ImageURL || "https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg"}
          alt={patient.Name}
          className="w-24 h-24 rounded-full mr-4 object-cover"
        />
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">{patient.Name}</h2>
          <p className="text-lg font-medium text-gray-700">Age: <span className="font-bold">{patient.Age}</span></p>
          <p className="text-lg font-medium text-gray-700">Gender: <span className="font-bold">{patient.Gender}</span></p>
        </div>
      </div>
      {/* Additional patient details */}
      <div className="mt-4">
        <p className="text-lg font-medium text-gray-700">Medical Condition: <span className="font-bold">{patient['Medical Condition ']}</span></p>
        <p className="text-lg font-medium text-gray-700">Medications: <span className="font-bold">{patient.Medications}</span></p>
        <p className="text-lg font-medium text-gray-700">Notes: <span className="font-bold">{patient.Notes}</span></p>
        <p className="text-lg font-medium text-gray-700">Last Checkup Date: <span className="font-bold">{patient['Last checkup date']}</span></p>
        <p className="text-lg font-medium text-gray-700">Medication History: <pre className="font-bold">{patient['Medication History']}</pre></p>
      </div>
    </div>
  );
};

export default PatientPage;
