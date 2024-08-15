import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero-section" style={heroSectionStyle}>
                <div className="container">
                    <h1 style={heroTitleStyle}>Contact Us</h1>
                    <p style={heroSubtitleStyle}>We'd love to hear from you! Please fill out the form below or reach out to us using the contact details provided.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section" style={sectionStyle}>
                <div className="container">
                    <h2 style={sectionTitleStyle}>Get in Touch</h2>
                    <form onSubmit={handleSubmit} style={formStyle}>
                        <div style={formGroupStyle}>
                            <label style={labelStyle} htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle} htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle} htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                style={textareaStyle}
                                required
                            />
                        </div>
                        <button type="submit" style={buttonStyle}>Send Message</button>
                    </form>
                </div>
            </section>

            {/* Company Info Section */}
            <section className="company-info-section" style={sectionStyle}>
                <div className="container">
                    <h2 style={sectionTitleStyle}>Our Contact Details</h2>
                    <div style={infoGridStyle}>
                        <div style={infoItemStyle}>
                            <h3 style={infoTitleStyle}>Address</h3>
                            <p style={infoTextStyle}>123 Main Street, Anytown, USA</p>
                        </div>
                        <div style={infoItemStyle}>
                            <h3 style={infoTitleStyle}>Phone</h3>
                            <p style={infoTextStyle}>+1 (555) 123-4567</p>
                        </div>
                        <div style={infoItemStyle}>
                            <h3 style={infoTitleStyle}>Email</h3>
                            <p style={infoTextStyle}>info@example.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" style={sectionStyle}>
                <div className="container">
                    <h2 style={sectionTitleStyle}>Find Us Here</h2>
                    <div style={mapContainerStyle}>
                        {/* Replace src with your map embed link */}
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.586759102467!2d144.95605431537656!3d-37.816279079751655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1612307976287!5m2!1sen!2sau"
                            style={mapStyle}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

const heroSectionStyle = {
    backgroundColor: '#f4f4f4',
    padding: '60px 0',
    textAlign: 'center',
};

const heroTitleStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
};

const heroSubtitleStyle = {
    fontSize: '1.25rem',
    color: '#555',
};

const sectionStyle = {
    padding: '60px 0',
};

const sectionTitleStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
    textAlign: 'center',
};

const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'grid',
    gap: '20px',
};

const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    marginBottom: '10px',
    fontSize: '1.125rem',
    fontWeight: 'bold',
};

const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const textareaStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '150px',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.125rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'start',
};

const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '40px',
};

const infoItemStyle = {
    textAlign: 'center',
};

const infoTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
};

const infoTextStyle = {
    fontSize: '1.125rem',
    color: '#555',
};

const mapContainerStyle = {
    marginTop: '40px',
    height: '400px',
    width: '100%',
};

const mapStyle = {
    width: '100%',
    height: '100%',
    border: '0',
};

export default ContactPage;
