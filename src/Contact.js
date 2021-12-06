import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from './PageTitle';
import { cuss } from 'cuss';
import axios from 'axios';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [result, setResult] = useState([]);
  
  const onSubmit = (ev, data) => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const email = ev.target.email.value;
    const msg = ev.target.message.value;

    const errs = []

    if (name.trim().length === 0 || name.trim().length > 50){
      errs.push('Please enter your name (limit to 50 characters)\n');
    };
    if (email.trim().length === 0 || name.trim().length > 100) {
      errs.push('Please enter a valid email (limit to 100 characters)\n');
    }
    if (msg.trim().length === 0 || msg.trim().length > 500) {
      errs.push('Please enter a message (limit to 500 characters)\n');
    }

    const cussWords = msg.split(' ').some(c => cuss[c] && cuss[c] > 1)
    if (cussWords){
      errs.push('The profanity filter detected at least one expletive. Please rephrase your message.')
    }

    if (errs.length > 0){
      setResult(errs);
      return;
    }
    axios.post('/contactme', { name, email, msg})
    setResult(['Thanks for your message, I\'ll get back to you shortly']);
    ev.target.reset();
  };

  return (
    <section id="contact">
      <h2 id="contacthead">Have a question or want to work together?</h2>
      <h3 id="contactemail">Contact me at through <a href="mailto: john.pirog@gmail.com" target="_blank">email</a> or use the form below</h3>
      <div id="contactsplit">
        <img src="contactphoto.jpg" alt="John Pirog - full stack developer" />
        <form onSubmit={(ev) => onSubmit(ev)}>
          <ul className="form-wrapper">
            <li className="form-row">
              <label htmlFor="name"></label>
              <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" required size={10} maxLength={30}/>
              {errors.name && "Please enter your name"}
            </li>

            <li className="form-row">
              <label htmlFor="email"></label>
              <input {...register("email", { required: true, maxLength: 100 })} placeholder="Email" type="email" required  size={75} maxLength={75} />
              {errors.email && "Please enter your email address"}
            </li>

            <li className="form-row">
              <label htmlFor="Message"></label>
              <textarea {...register("message", { required: true, maxLength: 500 })} placeholder="Message" required cols={50} rows={5}/>
              {errors.message && "Please enter a message"}
            </li>

            <ul id="formmsg">{result.map((c,i) => <li key={i}>{c}</li>)}</ul>

            <div  className="form-row" id="subbutton">
              <label htmlFor="xxxxx"></label>
              <input type="submit" id="submit"/>
            </div>
          </ul>
        </form>
      </div>
    </section>
  );


}

export default Contact;

// <form onSubmit={handleSubmit(onSubmit)}>

