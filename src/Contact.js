import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from './PageTitle';
import { cuss } from 'cuss';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <section id="contact">
      <PageTitle headingText="Contact" />
      <h2 id="contacthead">Have a question or want to work together?</h2>
      <h3 id="contactemail">Send an email (<a href="mailto: john.pirog@gmail.com">john.pirog@gmail.com</a>) or use the form below</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="form-wrapper">

        <li className="form-row">
          <label htmlFor="name">Name:</label>
          <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" required size={10} maxLength={30}/>
          {errors.name && "Please enter your name"}
        </li>

        <li className="form-row">
          <label htmlFor="email">Email:</label>
          <input {...register("email", { required: true, maxLength: 75 })} placeholder="Email" type="email" required  size={75} maxLength={75} />
          {errors.email && "Please enter your email address"}
        </li>

        <li className="form-row">
          <label htmlFor="Message">Message:</label>
          <textarea {...register("message", { required: true, maxLength: 500 })} placeholder="Message" required cols={50} rows={5}/>
          {errors.message && "Please enter a message"}
        </li>

        <p>{result}</p>
        <input className="form-row" type="submit" />
        </ul>
      </form>
    </section>
  );


}

export default Contact;

