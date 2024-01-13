// ContactModal.js
import React from 'react';

const ContactModal = () => {
  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">Contact Us</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* Contact Us Form */}
            <form id="contactForm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" pattern="[A-Za-z ]+" title="Only letters and spaces are allowed" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Enter a valid email address" required />
              </div>
              <div className="mb-3">
                <label htmlFor="organization" className="form-label">Organization Name</label>
                <input type="text" className="form-control" id="organization" placeholder="Enter organization name" pattern="[A-Za-z ]+" title="Only letters and spaces are allowed" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message (minimum 50 characters)" minLength="50" required></textarea>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="confidenceCheck" required />
                <label className="form-check-label" htmlFor="confidenceCheck">
                  I am confident enough to submit this form.
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
