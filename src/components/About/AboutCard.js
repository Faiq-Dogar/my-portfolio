import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faiq Dogar</span> from{" "}
            <span className="purple">Faisalabad, Pakistan.</span>
            <br />I am currently in my final semester of software engineering at{" "}
            <span className="purple">FAST NUCES CFD</span>.
            {/* <br />I have completed an Integrated MSc (IMSc) in Maths and
            Computing from <span className="purple">BIT Mesra</span>. */}
            <br />
            I have a strong passion for developing Web Technologies and
            Products, and I am also interested in Mobile-related areas
            (React-native).
            <br />
            My tech stack includes:
            <ul>
              <li className="about-activity">
                <ImPointRight /> C++, JavaScript, and Java
              </li>
              <li className="about-activity">
                <ImPointRight /> React.js, Next.js, Node.js, and MongoDB
              </li>
            </ul>
            When I am not coding, you can find me:
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>{" "}
              <li className="about-activity">
                <ImPointRight /> Reading Manhwuas
              </li>
              <li className="about-activity">
                <ImPointRight /> Looking some marketing stuff
              </li>
            </ul>
            <br />
            "Strive to build things that make a difference!"
            {/* "There is a big difference between a 'great man' and a 'great
            person'. A great man is great only for himself, but a great person
            is great for everyone around them." */}
          </p>
          <footer className="blockquote-footer">Faiq Dogar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
