import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" style={heroSectionStyle}>
        <div className="container">
          <h1 style={heroTitleStyle}>About Us</h1>
          <p style={heroSubtitleStyle}>
            Discover more about our journey, our team, and what drives us
            forward.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview" style={sectionStyle}>
        <div className="container">
          <h2 style={sectionTitleStyle}>Our Story</h2>
          <p style={sectionTextStyle}>
            We started with a simple idea: to bring innovative solutions to the
            market. Over the years, we have grown into a team of passionate
            professionals dedicated to making a difference. Our mission is to
            deliver high-quality products that meet the needs of our customers
            and help them achieve their goals.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" style={sectionStyle}>
        <div className="container">
          <h2 style={sectionTitleStyle}>Meet Our Team</h2>
          <p style={sectionTextStyle}>
            Our team is composed of experts from diverse backgrounds, each
            bringing their unique skills and perspectives to the table.
            Together, we collaborate to create exceptional experiences for our
            clients.
          </p>
          <div style={teamGridStyle}>
            {/* Example Team Members */}
            <div className="team-member" style={teamMemberStyle}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={teamImageStyle}
              />
              <h3 style={teamNameStyle}>John Doe</h3>
              <p style={teamRoleStyle}>CEO</p>
            </div>
            <div className="team-member" style={teamMemberStyle}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={teamImageStyle}
              />
              <h3 style={teamNameStyle}>Jane Smith</h3>
              <p style={teamRoleStyle}>CTO</p>
            </div>
            <div className="team-member" style={teamMemberStyle}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={teamImageStyle}
              />
              <h3 style={teamNameStyle}>Jane Smith</h3>
              <p style={teamRoleStyle}>CTO</p>
            </div>
            <div className="team-member" style={teamMemberStyle}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={teamImageStyle}
              />
              <h3 style={teamNameStyle}>Jane Smith</h3>
              <p style={teamRoleStyle}>CTO</p>
            </div>
            <div className="team-member" style={teamMemberStyle}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={teamImageStyle}
              />
              <h3 style={teamNameStyle}>Jane Smith</h3>
              <p style={teamRoleStyle}>CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" style={sectionStyle}>
        <div className="container">
          <h2 style={sectionTitleStyle}>Our Mission</h2>
          <p style={sectionTextStyle}>
            Our mission is to empower businesses through cutting-edge technology
            and creative solutions. We strive to exceed expectations and drive
            success for our clients by delivering products that are not only
            functional but also user-friendly and visually appealing.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" style={sectionStyle}>
        <div className="container">
          <h2 style={sectionTitleStyle}>Our Values</h2>
          <ul style={valuesListStyle}>
            <li style={valuesItemStyle}>
              <strong>Innovation:</strong> We embrace creativity and strive to
              be at the forefront of technological advancements.
            </li>
            <li style={valuesItemStyle}>
              <strong>Integrity:</strong> We believe in honesty, transparency,
              and doing the right thing.
            </li>
            <li style={valuesItemStyle}>
              <strong>Excellence:</strong> We are committed to delivering the
              highest quality in everything we do.
            </li>
            <li style={valuesItemStyle}>
              <strong>Collaboration:</strong> We value teamwork and believe that
              great things happen when we work together.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const heroSectionStyle = {
  backgroundColor: "#f4f4f4",
  padding: "60px 0",
  textAlign: "center",
};

const heroTitleStyle = {
  fontSize: "3rem",
  marginBottom: "20px",
};

const heroSubtitleStyle = {
  fontSize: "1.25rem",
  color: "#555",
};

const sectionStyle = {
  padding: "60px 0",
};

const sectionTitleStyle = {
  fontSize: "2.5rem",
  marginBottom: "30px",
  textAlign: "center",
};

const sectionTextStyle = {
  fontSize: "1.25rem",
  color: "#555",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const teamGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "40px",
};

const teamMemberStyle = {
  textAlign: "center",
};

const teamImageStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  marginBottom: "15px",
};

const teamNameStyle = {
  fontSize: "1.5rem",
  marginBottom: "5px",
};

const teamRoleStyle = {
  fontSize: "1.125rem",
  color: "#777",
};

const valuesListStyle = {
  listStyleType: "none",
  padding: "0",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const valuesItemStyle = {
  fontSize: "1.25rem",
  color: "#555",
  marginBottom: "15px",
};

export default AboutPage;
