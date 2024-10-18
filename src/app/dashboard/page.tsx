"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Patient {
  _id: string; // MongoDB ObjectId as a string
  Name: string; // Match the case with your database key
  Age: string;  // Keep as string to match your data format
  Gender: string; // Match the case with your database key
  MedicalCondition: string; // Adjusted field name
}

const Dashboard: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // Fetch patients data from the API
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/patients');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched patients:', data); // Log the fetched data for debugging
        // Map data to correct structure
        const formattedData = data.map((patient: any) => ({
          _id: patient._id,
          Name: patient.Name,
          Age: patient.Age,
          Gender: patient.Gender,
          MedicalCondition: patient['Medical Condition '].trim(), // Remove any trailing spaces
          ImageURL: 'https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg', // Use the specified image URL
        }));
        setPatients(formattedData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="min-h-full">
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Patients List</h2>
            <div className="bg-white shadow rounded-lg">
              <ul className="divide-y divide-gray-200">
                {patients.map((patient) => (
                  <li key={patient._id} className="flex items-center p-4 hover:bg-gray-100">
                    <img 
src={patient.ImageURL || "https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg"} // Fallback image                      alt={patient.Name} 
                      className="w-16 h-16 rounded-full mr-4" // Rounded image
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{patient.Name}</h3> {/* Make Name more visible */}
                      <p className="text-gray-600">Age: {patient.Age}</p>
                      <p className="text-gray-600">Gender: {patient.Gender}</p>
                      <p className="text-gray-600">Condition: {patient.MedicalCondition}</p> {/* Display condition */}
                    </div>
                    <Link href={`/patients/${patient._id}`} legacyBehavior>
                      <a className="text-blue-600 hover:underline">View Details</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
