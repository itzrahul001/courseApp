import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", form);

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container">
      {/* Header */}
      

      <div className="row g-4">
        {/* Contact Info */}
        <div className="col-md-5">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3">📍 Get in Touch</h4>
              <p className="text-muted mb-2">
                <strong>Email:</strong> support@coursedashboard.com
              </p>
              <p className="text-muted mb-2">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-muted">
                <strong>Address:</strong> Gautam Buddha Nagar, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-3">✉️ Send a Message</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
