import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const addAppointment = async (newAppointment) => {
    try {
      const response = await axios.post('http://localhost:3001/appointments', newAppointment);
      setAppointments([...appointments, response.data]);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/appointments/${id}`);
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="app">
      <h1>Appointment Scheduler</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} />
    </div>
  );
}

export default App;
