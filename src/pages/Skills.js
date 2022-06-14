import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import SkillCard from "../components/SkillCard";

class Skills extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="center inner-structure" style={{ flexDirection: "column" }}>
          <TitleBar title="Skills" />
          <Container fluid style={{ maxWidth: "90vw", textAlign: "center" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <SkillCard title="JavaScript" logo="javascript" color="#F7DF1E" />
              <SkillCard title="React.js" logo="react" color="#61DAFB" />
              <SkillCard title="Redux" logo="redux" color="#764abc" />
              <SkillCard title="Next.js" logo="next" color="#000000" />
              <SkillCard title="Node.js" logo="node" color="#339933" />
              <SkillCard title="Express.js" logo="express" color="#339933" />
              <SkillCard title="Git" logo="git" color="#F05032" />
              <SkillCard title="Python" logo="python" color="#3776AB" />
              <SkillCard title="C" logo="c" color="#A8B9CC" />
              <SkillCard title="C++" logo="cplusplus" color="#00599C" />
              <SkillCard title="Flask" logo="flask" color="#000000" />
              <SkillCard title="Bootstrap" logo="bootstrap" color="#7952B3" />
              <SkillCard title="HTML" logo="html5" color="#E34F26" />
              <SkillCard title="CSS" logo="css3" color="#1572B6" />
              <SkillCard title="Markdown" logo="markdown" color="#000000" />
              <SkillCard title="Postman" logo="postman" color="#F05032" />
              <SkillCard title="Linux" logo="linux" color="white" />
              <SkillCard title="MongoDB" logo="mongo" color="green" />
              <SkillCard title="Docker" logo="docker" color="yellow" />
              <SkillCard title="Mysql" logo="mysql" color="red" />
              <SkillCard title="PigLatin" color="#000000" />
              <SkillCard title="Hadoop" color="#000000" />
              <SkillCard title="Saas" color="#000000" />
              <SkillCard title="Tailwind" logo="tailwind" color="skyBlue" />
              <SkillCard title="C#" logo="csharp" color="blue" />
              <SkillCard title="WPF" color="#000000" />
              <SkillCard title="OpenApi" color="#000000" />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Skills;
