import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { cuss } from 'cuss';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <div id="contact">
      <hr />
      <h1>Contact</h1>
      <p id="contacthead">Have a question or want to work together?</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input autoFocus {...register("name", { required: true, maxLength: 30 })} placeholder="Name" required maxLength={30}/>
        {errors.name && "Please enter your name"}

        <label htmlFor="email">Email:</label>
        <input {...register("email", { required: true, maxLength: 75 })} placeholder="Email" type="email" required maxLength={75} />
        {errors.email && "Please enter your email address"}

        <label htmlFor="Message">Message:</label>
        <textarea {...register("message", { required: true, maxLength: 500 })} placeholder="Message" cols={50} rows={5}/>
        {errors.message && "Please enter a message"}

        <p>{result}</p>
        <input type="submit" />
      </form>
    </div>
  );


}

export default Contact;

