import './Form.scss';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    // alert(`Thank you for your message from ${data.email}`);
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
        .then(res => {console.log(data)})
        .catch(err => console.error('There has been an error.', err))
    e.target.reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <input name='name' id='name' {...register('from_name')} placeholder="Nom" required />
      <input name='email' id='email' {...register('email')} placeholder="E-mail" required />
      <textarea name='comment' id='comment' rows='16' cols='100' {...register('comment')} placeholder='Saisissez votre texte' required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Form;