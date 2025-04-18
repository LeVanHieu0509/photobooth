"use client";

import { useState } from "react";
import { ContactBoothScreenWrapper } from "./styled";
import { Flex } from "@/styles/common";
import { useRouter } from "next/navigation";

const ContactBoothScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");
    console.log({ formData });
    router.push("/thanks");
  };

  return (
    <ContactBoothScreenWrapper>
      <div className="contact-container">
        <div className="contact-form">
          <h1 className="text-center">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <Flex justify="center">
              <button type="submit">Send Message</button>
            </Flex>
          </form>
          {status && <p className="status-message">{status}</p>}

          <div style={{ marginTop: "20px", fontSize: "0.9rem", textAlign: "center" }}>
            <p>If you're having trouble with the contact form, you can also reach me directly at:</p>
            <p style={{ fontWeight: "bold", marginTop: "5px" }}>lethaikimphuc@gmail.com</p>
          </div>
        </div>
      </div>
    </ContactBoothScreenWrapper>
  );
};

export default ContactBoothScreen;
