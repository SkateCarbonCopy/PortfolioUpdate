import React, { useState } from "react";
import "./Resume.scss";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading align-items-start">
          <div className={props.heading ? "heading-bullet" : ""}></div>
          <h4 className="fw-bold">{props.heading ? props.heading : ""}</h4>
          {props.dates && props.heading ? (
            <div className="heading-date">
              {props.dates}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <h5 className="d-inline">{props.subHeading ? props.subHeading : ""}</h5> 
          <span className="ms-3 badge bg-light text-dark">{props.subHeadingDates ? props.subHeadingDates : ""}</span>
        </div>
        <div className="resume-heading-description">
          <h6>{props.description ? props.description : ""}</h6>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", icon: "fa-solid fa-school" },
    { label: "Work History", icon: "fa-solid fa-briefcase" },
    { label: "Programming Skills", icon: "fa-solid fa-code" },
    { label: "Projects", icon: "fa-solid fa-list-check" },
    { label: "Interests", icon: "fa-solid fa-person-walking" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "TypeScript", ratingPercentage: 80 },
    { skill: "React", ratingPercentage: 75 },
    { skill: "AngularJS", ratingPercentage: 95 },
    { skill: "HTML", ratingPercentage: 100 },
    { skill: "CSS", ratingPercentage: 100 },
    { skill: "Bootstrap", ratingPercentage: 100 },
    { skill: "SASS", ratingPercentage: 90 },
    { skill: "Photoshop", ratingPercentage: 90 },
    { skill: "Illustrator", ratingPercentage: 75 },
    { skill: "GraphQL", ratingPercentage: 70 },
    { skill: "Responsive Design", ratingPercentage: 90 }
  ];

  const projectsDetails = [
    {
      title: "Acuo Admin Portal",
      duration: { dates: "2020-2021" },
      description:
        "A web application which assisted administrators in managing very large amounts of medical images, and their associated data.",
      subHeading: "Technologies Used: AngularJS, C#, PostgreSQL, Elasticsearch, Bootstrap",
    },
    {
      title: "Training.Hyland.com",
      duration: { dates: "2016-2020" },
      description:
        "An eLearning website which offered video based courses (either free or requiring subscriptions), as well as the opportunities it purchase in-person Instructor-led courses.",
      subHeading:
        "Technologies Used:  Sitecore, HTML, CSS, JavaScript",
    }
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Frostburg State University"}
        subHeading={"Bachelor of Fine Arts: Graphic Design"}
        dates={"2007 - 2011"}
      />

      <ResumeHeading
        heading={"University of Wollongong"}
        subHeading={"Study Abroad with \"AustraLearn\""}
        dates={"Spring 2010"}
      />
      <ResumeHeading
        heading={"Middletown High School"}
        dates={"2003 - 2007"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Hyland"}
          subHeading={"Developer II"}
          dates={"2021 - Present"}
        />
        <div className="experience-description">
          <h6 className="resume-description-text">
            <ul>
              <li>Collaborated with the design team, by listening to creative proposals, discussing the scope of requirements, and by providing feedback on digital assets.</li>
              <li>Designed and updated layouts to meet usability and performance requirements.</li>
              <li>Maintained and updated web application dependencies to meet best practices for security and reliability.</li>
              <li>Implemented a reporting dashboard for the product utilizing Elasticsearch and ChartJS.</li>
              <li>Redesigned product interface while updating CSS framework version (Bootstrap)</li>
            </ul>
          </h6>
        </div>
        <div className="resume-main-heading align-items-center">
          <h5 className="mb-0">Developer I</h5>
          <div className="heading-date">
            11/2020 - 09/2021
          </div>
        </div>
        <div className="experience-description">
          <h6 className="resume-description-text">
            <ul>
              <li>Tested web-based product functionality and delivered iterations to stakeholders.</li>
              <li>Performed user experience quality assurance testing to identify and remedy shortcomings.</li>
              <li>Translated UX and business requirements into elegant code solutions.</li>
            </ul>
          </h6>
        </div>
        <div className="resume-main-heading align-items-center">
          <h5 className="mb-0">Web Delivery Specialist</h5>
          <div className="heading-date">
            02/2016 - 11/2020
          </div>
        </div>
        <div className="experience-description">
          <h6 className="resume-description-text">
            <ul>
              <li>Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.</li>
              <li>Worked with marketing team to deliver digital creative campaigns and initiatives.</li>
            </ul>
          </h6>
        </div>
        <div className="resume-main-heading align-items-center">
          <h5 className="mb-0">E-Learning Specialist</h5>
          <div className="heading-date">
            07/2015 - 02/2016
          </div>
        </div>
        <div className="experience-description">
          <h6 className="resume-description-text">
            <ul>
              <li>Utilized software and e-learning development tools to develop interactive training courses.</li>
              <li>Created and edited technical video media to enhance learner engagement.</li>
            </ul>
          </h6>
        </div>
        <div className="resume-main-heading align-items-center">
          <h5 className="mb-0">Associate E-Learning Specialist</h5>
          <div className="heading-date">
            09/2013 - 07/2015
          </div>
        </div>
        <div className="experience-description">
          <h6 className="resume-description-text">
            <ul>
              <li>Developed and procured graphics and content to incorporate into e-learning applications.</li>
            </ul>
          </h6>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          dates={projectsDetails.duration.dates}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Hiking"
        description="As a somewhat new Coloradoan I've enjoyed the access to fantastic trails and mountains. "
      />
      <ResumeHeading
        heading="Skateboarding"
        description="Skateboarding has been a lifelong passion of mine which inspired me to make and design boards."
      />
      <ResumeHeading
        heading="Swimming"
        description="In my teen years I was a lifeguard briefly, but my love for the water has remained."
      />
      <ResumeHeading
        heading="Learning"
        description="I love to continue to challenge myself by taking on new opportunities for growth. I mainly am interested in keeping up with web technologies, design trends, and learning new languages."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 720;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <i className={'me-3 resume-icon ' + bullet.icon}></i>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="my-5 container-lg" id="Resume">
      <div className="py-lg-5 position-relative">
        <div className='text-black-50 fw-bold section-title'>
          <span className='position-absolute-lg right-lg'>RESUME</span>
        </div>
      </div>
      {/* Resume Carousel */}
      <div className="resume-container screen-container py-lg-5 d-none d-lg-block">
        {/* Download Button */}
        <div className="d-none d-lg-flex justify-content-end">
          <a className="btn btn-info" href="resume.pdf" download='Colin Gastelle Resume.pdf' style={{zIndex: 1000}}>
            <i className="fa-solid fa-download"></i> Download
          </a>
        </div>
        <div className="resume-content d-flex flex-wrap w-100">
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets fw-bold d-flex flex-column justify-content-around" style={{height: "80%"}}>{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
      {/* Resume Embed */}
      <div className="d-lg-none mt-3">
        <object data="resume.pdf" type="application/pdf" width="100%" height="700px">
          <p>Unable to display PDF file. <a href="resume.pdf" download='Colin Gastelle Resume.pdf'>Download</a> instead.</p>
        </object>
      </div>
    </div>
  );
};

export default Resume;