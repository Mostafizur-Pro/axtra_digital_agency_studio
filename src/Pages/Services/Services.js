import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'High-quality web development services using the latest technologies to build responsive and user-friendly websites.',
            icon: 'fa-solid fa-code',
        },
        {
            title: 'Mobile App Development',
            description: 'Custom mobile app development services to create engaging and performant mobile applications for iOS and Android.',
            icon: 'fa-solid fa-mobile-alt',
        },
        {
            title: 'UI/UX Design',
            description: 'Professional UI/UX design services to create visually appealing and user-centric interfaces for web and mobile applications.',
            icon: 'fa-solid fa-paint-brush',
        },
        {
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing services to help you reach your target audience and achieve your business goals.',
            icon: 'fa-solid fa-bullhorn',
        },
        {
            title: 'E-commerce Solutions',
            description: 'End-to-end e-commerce solutions to set up, manage, and scale your online store with ease.',
            icon: 'fa-solid fa-shopping-cart',
        },
        {
            title: 'Cloud Services',
            description: 'Scalable and secure cloud services to ensure your business operates efficiently in the digital age.',
            icon: 'fa-solid fa-cloud',
        },
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="hero-section" style={heroSectionStyle}>
                <div className="container">
                    <h1 style={heroTitleStyle}>Our Services</h1>
                    <p style={heroSubtitleStyle}>We offer a wide range of services to meet all your digital needs. Explore what we have to offer!</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" style={sectionStyle}>
                <div className="container">
                    <h2 style={sectionTitleStyle}>What We Do</h2>
                    <div style={servicesGridStyle}>
                        {services.map((service, index) => (
                            <div key={index} style={serviceCardStyle}>
                                <div style={iconWrapperStyle}>
                                    <i className={service.icon} style={iconStyle}></i>
                                </div>
                                <h3 style={serviceTitleStyle}>{service.title}</h3>
                                <p style={serviceDescriptionStyle}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Styles
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

const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '40px',
};

const serviceCardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
};

const iconWrapperStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#007bff',
};

const iconStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#007bff',
};

const serviceTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
};

const serviceDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
};

export default Services;
