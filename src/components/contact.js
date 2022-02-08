import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"
import "./contact.css"

const Contact = () => {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_k57fwlk', form.current, 'user_6GG8FBi4TqImBUfmGJ7dW')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    });
    e.target.reset()
  };

  return (
  <div className="contact-container">
      <div className="compact-contact-container">
          <div className="contact-title-container">
              <span className="contact-title" id="contact">
                Let's talk about your project?
              </span>
          </div>
          <div className="social">
            <span className="social-item"><a href="https://github.com/Rileey"><i class="fab fa-github"></i>Github</a></span>
            <span className="social-item"><a href="https://twitter.com/R1ley_17"><i class="fab fa-twitter"></i>Twitter</a></span>
            <span className="social-item"><a href="mailto:dejiomoloja@gmail.com"><i class="fas fa-at"></i>Email</a></span>
            <span className="social-item"><a href="https://www.linkedin.com/in/ayodeji-omoloja-2402551a1/"><i class="fab fa-linkedin"></i>Linkedin</a></span>
          </div>
            <div className="number">
            <span className="social-item"><a href="tel:+234-903-588-8554"><i class="fas fa-mobile"></i>+234-903-588-8554</a></span>
                
            </div>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input type="text" name="subject" id="subject" placeholder="Subject" className="input" />
            <input type="text" name="name" id="name" placeholder="Your Full Name" className="input" />
            <input type="email" name="email" id="email" placeholder="Your Email Address" className="input" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="What would you like me to do for you?" className="text-area"></textarea>
            <input type="submit" value="Submit" className="input-btn" />
          </form>
      </div>
  </div>);
};

export default Contact;
