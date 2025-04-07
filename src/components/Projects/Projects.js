import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Rentlink from "../../Assets/Projects/Rentlink.png";
import Jugaad from "../../Assets/Projects/Jugaad.png";
import Planit from "../../Assets/Projects/Planit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rentlink}
              isBlog={false}
              title="RentLink"
              description="A web-based platform for tenants and landlords with features like role-based access control (RBAC), ticketing systems, financial management, and contract customization. Implemented DevOps practices including CI/CD pipelines, Docker for containerization, automated testing, and cloud hosting for scalability and reliability."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Planit}
              isBlog={false}
              title="Planit – Task Tracking and Productivity Tool "
              description="A task management and tracking tool designed for AIESEC in Faisalabad, enabling teams to efficiently assign, track, and manage tasks with real-time updates. Implemented role-based access control (RBAC) and automated notifications, Allows teams to schedule meeting, manage a resource hub and deployment to seamless collaboration."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://planit-aiesec.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jugaad}
              isBlog={false}
              title="Company Portfolio Website"
              description="A professional company portfolio website designed to showcase services, team, and key projects. Built with responsive UI, it highlights the brand identity, includes contact forms, and integrates smooth navigation for an engaging user experience."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://master--effulgent-narwhal-2dd44d.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Mock Interview and CV tracking System"
              description="Developed the application in MERN stack using all the latest practices in the market."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://master--effulgent-narwhal-2dd44d.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Encyclopedia of Arabic Poetry"
              description="Developed using Java and MySQL; features an interactive GUI to explore pre-Islamic Arabic poetry, enhancing understanding with word origins and roots."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://master--effulgent-narwhal-2dd44d.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Inventory Management System"
              description="Designed and implemented C++ based application using Object-Oriented and Data Structures concepts and file-handling	"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://master--effulgent-narwhal-2dd44d.netlify.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
