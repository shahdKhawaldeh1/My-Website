import { useState, useRef } from 'react' 
import { motion } from 'framer-motion' 
import emailjs from '@emailjs/browser' 
import { slideIn } from '../../utils/motion.js' 
import './Contact.css' 
import SectionWrapper from '../../hoc/SectionWrapper.jsx' 

const Contact = () => {

  const formRef = useRef() // Create a reference to the form element
  const [form, setForm] = useState({ 
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false) 

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Check if the form fields are empty
    if (form.name === '' || form.email === '' || form.message === '') {
      alert('Please fill in all required fields.'); // Show an alert for empty fields
      return;
    }
  
    setLoading(true); // Set loading to true while the form is being submitted
  
    // Use emailjs to send the form data
    emailjs.send('service_vb8inmm', 'template_chcdugi', {
      from_name: form.name,
      to_name: 'Shahd',
      from_email: form.email,
      to_email: 'shahdkhawaldeh2001@gmail.com',
      message: form.message
    },
      'tmiA9EbgGI4PfRjIg'
    ).then(() => {
      setLoading(false); // Set loading to false after successful submission
      alert('Thank you for your message. I will respond to you as soon as I can. Have a great day');
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setLoading(false); // Set loading to false in case of an error
      console.error('catch error ' + error);
      alert("Something went wrong!");
    });
  }
  

  return (
    <>
    <div className='contact-container'>
      {/*slide to the left side with a linear tween animatin */}
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className='contact-card'
      >
        <div class="loader">
      <div data-glitch="conatct.." class="glitch">Contact</div>
        </div>        
        <form ref={formRef}
          onSubmit={handleSubmit} 
          className='contact-form '
        >
          <label className="flex flex-col">
            <span className='contact-text '>Your Name</span>
            <input type="text"
              name='name'
              value={form.name}
              onChange={handleChange} 
              className='contact-input bg-tertiary'
            />
          </label>
          <label className="flex flex-col">
            <span className='contact-text '>Your Email</span>
            <input type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='contact-input bg-tertiary'
            />
          </label>
          <label className="flex flex-col">
            <span className='contact-text  '>Your message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Feel free to get in touch!"
              className='contact-input bg-tertiary'
            />
          </label>
          <button type='submit'
            className='bg-tertiary contact-btn'
          >
            {loading ? 'Sending ...' : 'Send'} {/* Show "Sending" or "Send" based on loading status */}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </motion.div>
    </div>
    </>
    
  )
}

// Export the Contact component wrapped with SectionWrapper
export default SectionWrapper(Contact, "contact")
