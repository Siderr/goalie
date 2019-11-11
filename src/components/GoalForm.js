import React from 'react'
import useForm from 'react-hook-form';

const GoalForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" name="Name" ref={register({required: true, max: 255, min: 10})} />
      <textarea name="Description" ref={register({min: 0, maxLength: 3000})} />
      <select name="Origin" ref={register({ required: true })}>
      </select>

      <input type="submit" />
    </form>
  )
}

export default GoalForm
