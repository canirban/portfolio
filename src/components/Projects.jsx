import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/takeaway.png";
import projImg2 from "../assets/img/tvshow.png";
import projImg3 from "../assets/img/jobs.png";
import projImg4 from "../assets/img/csvjson.png";
import projImg5 from "../assets/img/bikes.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BsBriefcaseFill, BsCardChecklist } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

export const Projects = () => {
  const projects = [
    {
      title: "Food Ordering App",
      description: "Food Ordering App",
      imgUrl: projImg1,
      appUrl: "https://silly-noether-b3a9ae.netlify.app/",
    },
    {
      title: "Job Tracker",
      description: "App to find and track jobs",
      imgUrl: projImg3,
      appUrl: "https://job-ster.vercel.app/",
    },
    {
      title: "Bike Finder",
      description: "Find bikes in Dublin region",
      imgUrl: projImg5,
      appUrl: "https://bike-finder-tan.vercel.app/",
    },
    {
      title: "TV Show lister",
      description: "Find popular tv shows",
      imgUrl: projImg2,
      appUrl: "https://tv-show-lister.vercel.app/",
    },
    {
      title: "CSV to JSON converter",
      description: "App to convert CSV to JSON format",
      imgUrl: projImg4,
      appUrl: "https://csv2json-xi.vercel.app/",
    },
  ];

  return (
    <section className="project about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About</h2>
                  <p>
                    Experienced in Full Stack Development for 4+ years and
                    offering skills in JAVA, Spring Framework with REST Web
                    Services. Experienced in working with React/NextJs project.
                    Expert in handling and delivering projects using Agile.
                    Complex problem- solver with analytical and driven mindset.
                    Dedicated to achieving demanding development objectives
                    according to tight schedules while producing impeccable code
                    and accustomed to working with cross-cultural, global teams.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <BsCardChecklist />{" "}
                          <span className="info">Projects</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <BsBriefcaseFill />{" "}
                          <span className="info">Experience</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <BiBookOpen /> <span className="info">Education</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="experinces">
                          <div className="experience">
                            <p>
                              <BiBookOpen /> Master of Engineering in Computer &
                              Communication Systems
                            </p>
                            <p>
                              <FaLocationArrow /> University of Limerick,
                              Ireland
                            </p>
                            <p>
                              <GiSandsOfTime /> Sep 2019 - Aug 2020
                            </p>
                          </div>
                          <div className="experience">
                            <p>
                              <BiBookOpen /> Bachelor of Technology in
                              Electrical Engineering
                            </p>
                            <p>
                              <FaLocationArrow /> Netaji Subhash Engineering
                              College , India
                            </p>
                            <p>
                              <GiSandsOfTime /> Jun 2013 - Mar 2017
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="experinces">
                          <div className="experience">
                            <p>
                              <BsBriefcaseFill /> Full Stack Developer
                            </p>
                            <p>
                              <FaLocationArrow /> Glanbia, Ireland
                            </p>
                            <p>
                              <GiSandsOfTime /> Sep 2020 - Present
                            </p>
                          </div>
                          <div className="experience">
                            <p>
                              <BsBriefcaseFill /> Software Developer
                            </p>
                            <p>
                              <FaLocationArrow /> Tata Consultancy Services,
                              India
                            </p>
                            <p>
                              <GiSandsOfTime /> Jun 2017 - Aug 2019
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
