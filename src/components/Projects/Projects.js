import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Gym_App from "../../Assets/Projects/Gym_App.png";
import Todo_App from "../../Assets/Projects/Todo_App.png";
import BOOK_LIST from "../../Assets/Projects/BOOKLIST1.png";
import Text_Editor from "../../Assets/Projects/Text_Editor.png";
import PromptGpt from "../../Assets/Projects/PromptGpt.png";
import Typing_Game from "../../Assets/Projects/Typing-Game.png"

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
                imgPath={PromptGpt}
                isBlog={false}
                title="PromptGpt"
                description="PromptGpt is my first Next.js project, designed to provide prompts that you can copy and paste into ChatGPT to find answers. It aims to streamline the process of generating prompts for ChatGPT and accessing relevant responses."
                ghLink="https://github.com/AmanPurohit2002/Promptgpt"
                demoLink="https://promptgpt-kappa.vercel.app/" 
              />
            </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym_App}
              isBlog={false}
              title="Gym_App"
              description="This is a full-stack Gym App built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a comprehensive platform for gym owners and fitness enthusiasts to manage their workout routines, track progress, and connect with others in the fitness community."
              ghLink="https://github.com/AmanPurohit2002/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Typing_Game}
                isBlog={false}
                title="Typing-Game"
                description="Welcome to the Typing Game! This project is designed to help you measure your typing speed, accuracy, and efficiency."
                ghLink="https://github.com/AmanPurohit2002/typing-game"
                demoLink="https://interactivegame.netlify.app/" 
              />
            </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo_App}
              isBlog={false}
              title="Todo-App"
              description="Welcome to the Todo App Project. In this project, we have implemented a todo proejct with a CRUD operation. We also use local storage to save data in the web browser. Additionally, we provide filteration capabilities for users to filter out their tasks based on their needs."
              ghLink="https://github.com/AmanPurohit2002/MyTodoApp"
              demoLink="https://todo-wizard-ninja.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BOOK_LIST}
              isBlog={false}
              title="BOOK_LIST"
              description="BookList is a feature-rich web application built with React.js that allows users to manage their personal book collection seamlessly. It leverages CRUD operations (Create, Read, Update, Delete), Redux for state management, and local storage for data persistence. Whether you're an avid reader or just looking to keep track of your books, BookList has you covered."
              ghLink="https://github.com/AmanPurohit2002/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Text_Editor}
              isBlog={false}
              title="Text_Editor"
              description="The Text Editor built with React is a versatile tool that empowers users to manipulate, analyze, and enhance their text content effortlessly. This intuitive application offers a range of features to streamline your text editing experience: Key Features:1. Text Case Conversion, 2. Clear Text, 3. Remove Extra Spaces, 4. Word and Character Count, 5. Estimated Reading Time, 6. Dark and Light Mode Toggle"

              ghLink="https://github.com/AmanPurohit2002/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/AmanPurohit2002/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
