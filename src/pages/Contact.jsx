import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, XCircle, Loader2, Mail } from "lucide-react";
import classNames from "classnames";
import { motion } from "framer-motion";

function Contact() {
  const formRef = useRef();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = (field) =>
    field === "email" ? isEmailValid(values[field]) : values[field].trim().length > 1;

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const sendEmail = (e) => {
    e.preventDefault();
    if (!Object.keys(values).every(isValid)) return;

    setLoading(true);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(() => {
        setSent(true);
        setValues({ name: "", email: "", message: "" });
        setTouched({});
        setTimeout(() => setSent(false), 3000);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact">
      <h2><Mail className="icon" /> Contactez-nous</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className={classNames("form-group", {
          valid: touched.name && isValid("name"),
          error: touched.name && !isValid("name"),
        })}>
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.name && isValid("name") && <CheckCircle size={18} className="valid-icon" />}
          {touched.name && !isValid("name") && <XCircle size={18} className="error-icon" />}
        </div>

        <div className={classNames("form-group", {
          valid: touched.email && isValid("email"),
          error: touched.email && !isValid("email"),
        })}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.email && isValid("email") && <CheckCircle size={18} className="valid-icon" />}
          {touched.email && !isValid("email") && <XCircle size={18} className="error-icon" />}
        </div>

        <div className={classNames("form-group", {
          valid: touched.message && isValid("message"),
          error: touched.message && !isValid("message"),
        })}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {touched.message && isValid("message") && <CheckCircle size={18} className="valid-icon" />}
          {touched.message && !isValid("message") && <XCircle size={18} className="error-icon" />}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <Loader2 className="spinner" /> : "Envoyer"}
        </button>

        {sent && (
          <motion.div className="sent" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <CheckCircle /> Message envoyé !
          </motion.div>
        )}
      </form>
    </section>
  );
}

export default Contact;
