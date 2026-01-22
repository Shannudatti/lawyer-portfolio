import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_PUBLIC_KEY"
    );

    e.target.reset();
    alert("Message sent successfully");
  };

  return (
    <section>
      <h2>Contact</h2>

      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <input name="name" placeholder="Full Name" required />
        <input name="email" placeholder="Email Address" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
