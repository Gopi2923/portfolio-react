import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
// import linkedin from '../../assets/linkedin.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const submitBtn = document.getElementById('contact-submit-btn')
        const originalText = submitBtn ? submitBtn.textContent : ''
        const form = event.target;
        
        // Basic validation
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        
        if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        
        if (submitBtn) {
          submitBtn.disabled = true
          submitBtn.textContent = 'Sending...'
        }
        
        const formData = new FormData(form);
        formData.append("access_key", "4d0619a4-1013-454a-ad61-adb7215503e9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            alert('Message sent successfully! I\'ll get back to you soon.');
            form.reset();
          } else {
            alert('Failed to send message. Please try again later.');
          }
        } catch (error) {
          alert('An error occurred. Please try again later.');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false
            submitBtn.textContent = originalText
          }
        }
      };

      
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <div className="contact-section">
        <div className="contact-left">
            <h1>Let&apos;s talk</h1>
            <p>I&apos;m Currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p><a className='contact-link' href="mailto:dgopidhikshan@gmail.com">dgopidhikshan@gmail.com</a></p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p><a className='contact-link' href="tel:+918778801713">+91 87788 01713</a></p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Banglore</p>
                </div>
                {/* <div className="contact-detail">
                    <img src={linkedin} alt="" /> 
                </div> */}
            </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" autoComplete="name" placeholder='Enter your name' name='name'/>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" autoComplete="email" placeholder='Enter your email' name='email' />
            <label htmlFor="message">Write your message</label>
            <textarea id="message" name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit' id='contact-submit-btn'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
