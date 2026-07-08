import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>Software Engineer</h4>
      <h5>Infinite Computer Solutions</h5>
    </div>
    <h3>NOW</h3>
  </div>

  <p>
    Working on enterprise healthcare claim processing
    systems using Java, Oracle SQL, JSP, Hibernate,
    and Maven.
  </p>
</div>

<div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>Associate Software Engineer</h4>
      <h5>Infinite Computer Solutions</h5>
    </div>
    <h3>2022–25</h3>
  </div>

  <p>
    Implemented claim validations, pricing rules,
    workflow enhancements, and production fixes
    for healthcare applications.
  </p>
</div>

<div className="career-info-box">
  <div className="career-info-in">
    <div className="career-role">
      <h4>Senior Executive Engineer</h4>
      <h5>Mungi Engineers Pvt. Ltd.</h5>
    </div>
    <h3>2017–21</h3>
  </div>

  <p>
    Led engineering and R&D initiatives focused on
    process optimization, technical problem solving,
    and operational efficiency.
  </p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Career;