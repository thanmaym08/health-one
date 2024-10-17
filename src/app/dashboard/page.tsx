// app/dashboard/page.tsx

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Patient {
  _id: string; // MongoDB ObjectId as a string
  name: string;
  age: string; // Keep as string to match your data format
  gender: string;
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
        setPatients(data);
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
                  <li key={patient._id} className="flex items-center justify-between p-4 hover:bg-gray-100">
                    <div>
                      <h3 className="text-lg font-semibold">{patient.name}</h3>
                      <p className="text-gray-600">Age: {patient.age}</p>
                      <p className="text-gray-600">Gender: {patient.gender}</p>
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
