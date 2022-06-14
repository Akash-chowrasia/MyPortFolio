import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import ProjectCard from "../components/ProjectCard";
import BUILDLogo from "../assets/webp/build-logo.webp";
import BUILDFallbackLogo from "../assets/jpg/build-logo.jpg";

class Projects extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="Major Projects" />
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Vrede Apteek System"
                organization="Sopra Steria"
                date="November 2021 - December 2021"
                major={<p style={{ color: 'cyan' }}>C#</p>}
                alternateTitle="vrede apteek system | Sample project | Windows App"
                skills="C#, WPF, MVVM, Sqlite"
                details={
                  <React.Fragment>
                    • It was sample project developed for practicing the skills.
                    <br />
                    • It is a simple pharmacy management system developed in C#, WPF.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/vrede-apteek-system"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="MyCovidHelpLine"
                organization="Plaxonic technologies"
                date="April 2021 - May 2021"
                major={<p style={{ color: 'yellow' }}>Javascript</p>}
                alternateTitle="MyCovidHelpLine | Covid Relief | Full Stack"
                skills="Node.js, Express.js, Next.js, Bootstrap, MongoDB"
                details={
                  <React.Fragment>
                    • It is a Running website for covid relief
                    <br />
                    • Makes communication between patients & supplier.
                    <br />
                    • Fast response on google search at low internet.
                  </React.Fragment>
                }
                redirectionUrl="http://mycovidhelpline.in/"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Dark Folio"
                organization="Plaxonic technologies"
                date="march 2021 - present"
                major={<p style={{ color: 'yellow' }}>Javascript</p>}
                alternateTitle="Dark Folio | The PortFolio CMS | Backend"
                skills="Node.js, Express.js, Passport.js, MongoDB, Redis, Docker"
                details={
                  <React.Fragment>
                    • Can serves information for N number of users individually..
                    <br />
                    • Handles Server side Rendering of DarkFolio website.
                    <br />
                    • Handles DashBord for each user having portfolio account.
                    <br />
                    • Manages Data securely with session & passport authentication.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/darkFolio"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Viveedh"
                organization="Plaxonic technologies"
                date="November 2020 - January 2021"
                major={<p style={{ color: 'blue' }}>Python</p>}
                alternateTitle="Viveedh | Multi task operator | Backend"
                skills="Python, Flask, Sqlite, Tmux, SSH"
                details={
                  <React.Fragment>
                    • It has one centralised server on any Host.
                    <br />
                    • Server operates any huge task by consuming space & CPU from all running hosts over the same network.
                    <br />
                    • It manages all the clients according to there live state.
                    <br />
                    • It is lashed with user comfertability & security.
                    <br />
                    • Manages all the task using SSH & TMUX over sessions.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Viveedh"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Impulsive shopper"
                organization="The Dimension"
                date="October 2020 - November 2020"
                major={<p style={{ color: 'blue' }}>Python</p>}
                alternateTitle="Impulsive shopper | Season shopping | Automation"
                skills="Python, Selenium, GeckoDriver, ChromeDriver"
                details={
                  <React.Fragment>
                    • Automation sample for shopping on test website.
                    <br />
                    • It automatically decides for the products according to the season.
                    <br />
                    • Automatically adds products in carts.
                    <br />
                    • Automatically fills card details and pay.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Impulsive-Shopper"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Quiz Game"
                organization="ACET, Amritsar"
                date="June 2018 - October 2018"
                major={<p style={{ color: 'red' }}>C++</p>}
                alternateTitle="Quiz Game | Compete & Earn Certification | Console "
                skills="C++, Turboc++, File system"
                details={
                  <React.Fragment>
                    • Owner can add, delete, read the details of candidates & papers.
                    <br />
                    • One can register, Login & can enjoy 3 rounds of Quiz with flexible time.
                    <br />
                    • One can see the answers & results after attempting.
                    <br />
                    • System generated certificate will be provided to qualified candidate.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Quiz-game"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Crime Analysis"
                organization="ACET, Amritsar"
                date="February 2020 - April 2020"
                major={<p style={{ color: 'pink' }}>PigLatin</p>}
                alternateTitle="Crime Analysis | Baltimore, US | Analysis Queries"
                skills="PigLatin, Hadoop, Dataset"
                details={
                  <React.Fragment>
                    • Refactored and Analysed dataset of 276530 records.
                    <br />
                    • Generated 7 Real Life problem statement.
                    <br />
                    • Solved each problem as a Big Data Case study.
                    <br />
                    • Published these case studies in paper at International Conference.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Baltimore-City-Crime-Analysis"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Order Book"
                organization="Plaxonic technologies"
                date="February 2021 - February 2021"
                major={<p style={{ color: 'yellow' }}>Javascript</p>}
                alternateTitle="Order Book | My OLX Store | Backend"
                skills="Node.js, Express.js, MongoDB"
                details={
                  <React.Fragment>
                    • One can Buy any product.
                    <br />
                    • One can sell any Product.
                    <br />
                    • One can add, extract or use their wallet amount.
                    <br />
                    • One can see his sell & buy history.
                    <br />
                    • Completely secure & reliable system via session management.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/order-book"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Movie Analysis"
                organization="ACET, Amritsar"
                date="November 2019 - December 2019"
                major={<p style={{ color: 'pink' }}>PigLatin</p>}
                alternateTitle="Movie Analysis | upto 2014 movies | Analysis"
                skills="PigLatin, Hadoop, Dataset, Big Data"
                details={
                  <React.Fragment>
                    • written some analysis queries based on Query language.
                    <br />
                    • It has Total of 9 queries with proper solutions.
                    <br />
                    • It contains the Analysis of Hollywood movies.
                    <br />
                    • Implemented Projection, selection & wildcard filtering.
                    <br />
                    • Implemented Joins, sorting, grouping & flatten.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Big-Data-Analysis-for-Movie-Dataset"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Billing Guide"
                organization="Techox LLP"
                date="August 2020 - September 2020"
                major={<p style={{ color: 'blue' }}>Python</p>}
                alternateTitle="Billing Guide | guide for Shoppers | Console"
                skills="Python, Tkinter, CSV files"
                details={
                  <React.Fragment>
                    • Developed by inspiring with a project developed at Techox.
                    <br />
                    • It handles all the transaction details for each customer.
                    <br />
                    • It creates Bill as report for users as per choice.
                    <br />
                    • It mails the Bill to the customer when it created.
                    <br />
                    • It creates & mails transaction bill to each user on 1st day of month.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Billing-guide"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Library commander"
                organization="ACET, Amritsar"
                date="August 2019 - October 2019"
                major={<p style={{ color: 'blue' }}>Python</p>}
                alternateTitle="Library Commander | Library On terminal | Console"
                skills="Python, Mysql"
                details={
                  <React.Fragment>
                    • It's a Terminal based Library management system.
                    <br />
                    • It supports each and every operation needed by a Library.
                    <br />
                    • It provides complete facility for Librarians & Students Both.
                    <br />
                    • Database supports upto 4 level Normalization.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Library-Commander"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Akro Tutor"
                organization="ACET, Amritsar"
                date="march 2021 - present"
                major={<p style={{ color: 'yellow' }}>Javascript</p>}
                alternateTitle="Akro Tutor | Coaching Hero | Full Stack"
                skills="Node.js, Express.js, Passport.js, React.js, MongoDB, Redis, Docker"
                details={
                  <React.Fragment>
                    • It is a self designed product, development in progress.
                    <br />
                    • Can Handle many coaching systems for students, teachers & admin.
                    <br />
                    • It will provide feature of group chating & attendence to students.
                    <br />
                    • It will manage all the transaction related stufs of the coaching.
                    <br />
                    • It will manage classes, meetings & notifications for all.
                  </React.Fragment>
                }
                redirectionUrl="https://akashchowrasia.me/#/projects"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Project Dimention"
                organization="The Dimension"
                date="July 2020 - October 2020"
                major={<p style={{ color: 'grey' }}>PHP</p>}
                alternateTitle="project dimension | test organiser | Full Stack"
                skills="Php,Html,Css,Javascript"
                details={
                  <React.Fragment>
                    • This was an end to end web dashboard for a coaching classes.
                    <br />
                    • It includes test seriese and analysis dashboard for students .
                    <br />
                    • It also includes dashboard for admins to setup constraints, papers and analysis report for the students.
                  </React.Fragment>
                }
                redirectionUrl="http://onlinethedimension.com"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Secure Contribution"
                organization="Plaxonic technologies"
                date="January 2021 - February 2021"
                major={<p style={{ color: 'yellow' }}>Javascript</p>}
                alternateTitle="secure contribution | help soldiers | Full Stack"
                skills="Python, Flask, React.js, mongoDB, wild apricot"
                details={
                  <React.Fragment>
                    • It was a client project.
                    <br />
                    • It contains a website & a dashboard.
                    <br />
                    • learned wild apricot payment management.
                    <br />
                    • One can donate here for american retiered soldiers.
                    <br />
                    • all the donation records can be monitored by owner.
                  </React.Fragment>
                }
                redirectionUrl="https://akashchowrasia.me/#/projects"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="DJB Software"
                organization="Plaxonic technologies"
                date="June 2021 - August 2021"
                major={<p style={{ color: 'yellow' }}>Javascript</p>}
                alternateTitle="DJB Software | Government | Full Stack"
                skills="Node.js, Express.js, Next.js, MongoDB, Redis, Docker"
                details={
                  <React.Fragment>
                    • It was a Government Project.
                    <br />
                    • Developing with a team of 3 people.
                    <br />
                    • I played a major role in Frontend development.
                  </React.Fragment>
                }
                redirectionUrl="https://akashchowrasia.me/#/projects"
              />

              <ProjectCard
                image={BUILDLogo}
                fallback_image={BUILDFallbackLogo}
                title="Smarty"
                organization="ACET, Amritsar"
                date="March 2019 - July 2019"
                major={<p style={{ color: 'blue' }}>Python</p>}
                alternateTitle="Smarty | Personal Assistant | Console Application"
                skills="Python, Linux, OpenCv, Pandas, Numpy, Requests, BeautifulSoup, Mysql"
                details={
                  <React.Fragment>
                    • Can perform any matheatical operation on layman language input.
                    <br />
                    • You can ask date, time, system status, path, search history.
                    <br />
                    • Can download pdf & musics, can play musics from system or youtube.
                    <br />
                    • It manages all the system file structure and able to find any file.
                    <br />
                    • Can create & execute any of programming language file.
                  </React.Fragment>
                }
                redirectionUrl="https://github.com/Akash-chowrasia/Smarty"
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Projects;
