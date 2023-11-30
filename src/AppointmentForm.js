import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentForm({ addAppointment }) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addAppointment(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
      <label>
        Date:
        <Controller
          control={control}
          name="date"
          render={({ field }) => <DatePicker {...field} selected={field.value} />}
          rules={{ required: 'Date is required' }}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </label>
      <button type="submit">Schedule Appointment</button>
    </form>
  );
}

export default AppointmentForm;
