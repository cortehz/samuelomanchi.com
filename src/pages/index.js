import React from 'react';
import { Tab, TabList, Tabs, TabPanel, TabPanels } from '@chakra-ui/core';
import Layout from '../components/Layout';
import triangle from '../assets/images/triangle.svg';
import portfolio from '../portfolio.json';
import design from '../design.json';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-sm-4 d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid img-profile triangle mb-2"
                  src={triangle}
                  alt=""
                />
              </div>

              <h3 className="hey">HEY!</h3>
            </div>
          </div>
          <h1 className="mb-0">
            I'm {config.firstName}
            <span className="surname"> {config.lastName}</span>
          </h1>
          <div className="role mb-1 mt-1">{config.role}</div>
          <div className="subheading mb-5">
            <i class="fas fa-map-pin"></i> {config.address} · {config.phone}
          </div>
          <p className="lead mb-5">
            I am an experienced problem solver using Web and Mobile Technologies
            to meet business and individuals at their point of need. The utmost
            professional that is well-versed in many of the latest web and
            mobile technologies. Currently available for hire.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Volunteer Web Developer</h3>
              <div className="subheading mb-3">
                VS Kultur, Creative Hub Bremen
              </div>
              <p>
                Individual contributor/volunteer at VS Kultur, Creative Hub
                Bremen. A non-profit organization helping offering support for
                ideas and projects via direct access to knowledge.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front end Developer</h3>
              <div className="subheading mb-3">Eventera.io</div>
              <p>
                Building pixel perfect Interfaces with ReactJs during my time at
                Remotely Eventera. Eventera is an Edtech startup looking to use
                video streaming technologies to make eduaction accessible
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front End Developer</h3>
              <div className="subheading mb-3">Liferithms Inc</div>
              <p>
                Liferithms is a Lifestyle Data Analytics Company aimed at
                advancing health and well-being. We are aggregating data from
                multiple sources to provide users with actionable insights to
                aid positive behavioral change and better lifestyle choices.
                Lifechitect is Liferithms’s Time Budgeting App used to boost
                productivity, find balance and improve well-being via time
                tracking, activity analytics and a weekly Life Score based on
                the duration and kind of activities performed in one week.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2019 - December 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front End Developer</h3>
              <div className="subheading mb-3">HNG Internship</div>
              <p>
                Took part in the 4th, 5th, and 6th HNG Internship as a front-end
                and mobile developer. Turning designs and wireframes into
                responsive user interfaces with HTML, CSS, JS (ReactJs and React
                Native). Collaborating across teams to build various projects.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">9 months Cummulative</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Graphic designer, Web and Content Developer.
              </h3>
              <div className="subheading mb-3">National Assembly Nigeria</div>
              <p>
                Spent 4 years building Web Applications then created managed
                contents at the Nigerian National Assembly.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2015 - June 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <div class="articles" id="portfolio">
        <h1>
          <span>Portfolio</span>
        </h1>

        <Tabs variant="unstyled">
          <TabList className="tablist">
            <Tab
              _selected={{
                color: '#28262c',
                borderBottom: '3px solid #f5d01e',
              }}
              className="tab-head first-button"
            >
              Web Development
            </Tab>
            <Tab
              _selected={{
                color: '#28262c',
                borderBottom: '3px solid #f5d01e',
              }}
              className="tab-head"
            >
              Logo Design
            </Tab>

            <Tab
              _selected={{
                color: '#28262c',
                borderBottom: '3px solid #f5d01e',
              }}
              className="tab-head"
            >
              UI Design
            </Tab>

            <Tab
              _selected={{
                color: '#28262c',
                borderBottom: '3px solid #f5d01e',
              }}
              className="tab-head"
            >
              Icons
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ul class="cards">
                {portfolio.webdev.map(port => {
                  const {
                    Id,
                    name,
                    description,
                    imageAddress,
                    webAddress,
                  } = port;
                  return (
                    <li key={Id} class="cards_item">
                      <div class="card">
                        <img class="content-image" src={imageAddress} />
                        <div class="card-info">
                          <p>{description}</p>
                        </div>
                        <a className="project-before">
                          <span>{name}</span>
                          <i class="far fa-hand-pointer"></i>
                        </a>
                      </div>

                      <a
                        className="button-project"
                        href={webAddress}
                        target="_blanck"
                      >
                        View Project <i class="fas fa-arrow-circle-right"></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul class="cards">
                {design.logodesign.map(port => {
                  const { Id, name, description, imageAddress } = port;
                  return (
                    <li key={Id} class="cards_item">
                      <div class="card">
                        <img class="content-image" src={imageAddress} />
                        <div class="card-info">
                          <p>{description}</p>
                        </div>
                        <a className="project-before">
                          <span>{name}</span>
                          <i class="far fa-hand-pointer"></i>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>

            <TabPanel>
              <ul class="cards">
                {design.uidesigns.map(port => {
                  const { Id, name, description, imageAddress } = port;
                  return (
                    <li key={Id} class="cards_item">
                      <div class="card">
                        <img class="content-image" src={imageAddress} />
                        <div class="card-info">
                          <p>{description}</p>
                        </div>
                        <a className="project-before">
                          <span>{name}</span>
                          <i class="far fa-hand-pointer"></i>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>

            <TabPanel>
              <ul class="cards">
                {design.icons.map(port => {
                  const { Id, name, description, imageAddress } = port;
                  return (
                    <li key={Id} class="cards_item">
                      <div class="card">
                        <img class="content-image" src={imageAddress} />
                        <div class="card-info">
                          <p>{description}</p>
                        </div>
                        <a className="project-before">
                          <span>{name}</span>
                          <i class="far fa-hand-pointer"></i>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universität Bremen</h3>
              <div className="subheading">Master of Science</div>
              <div>Environmental Physics</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Freecodecamp</h3>
              <div className="subheading">
                Full Stack Web Development Certification
              </div>
              <div>Computer Software Engineering</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University of Agriculture Makurdi</h3>
              <div className="subheading">Bachelor of Science</div>
              <div>Physics</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2008 - March 2013</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-node"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>

            <li className="list-inline-item">
              <i class="fab fa-php"></i>
            </li>

            <li className="list-inline-item">
              <img
                src="https://res.cloudinary.com/cortehz/image/upload/v1590221899/png-transparent-dart-google-developers-flutter-android-darts-text-logo-web-application-removebg-preview_hnonra.png"
                width="150px"
                alt="dart language"
              />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Responsive Design Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Version Control
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Africa Scholarship
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Building Web Layouts with CSS - OpenClassrooms
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Build your Web Projects with Rest APIs - OpenClassrooms
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Implementing a Relational Database with SQL - OpenClassrooms
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Web Developer Bootcamp With Colt Steele on Udemy
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Advanced Web Developer Bootcamp With Colt Steele on Udemy
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Complete React and Redux Course With Stephen Grider on Udemy
            </li>

            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Complete React Native and Redux Course With Stephen Grider
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
