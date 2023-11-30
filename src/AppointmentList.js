import React from 'react';

function AppointmentList({ appointments, deleteAppointment }) {
  return (
    <div>
      <h2>Scheduled Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.name} - {appointment.date}
            <button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
