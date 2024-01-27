import React, { useState } from "react";
import styles from "./Feedback.module.css";

export default function Feedback() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Feedback: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
  };

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.feedbackBox}>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Subject
            <input
              type="text"
              name="Subject"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Comments
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
