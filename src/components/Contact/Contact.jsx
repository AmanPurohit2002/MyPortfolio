import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../../Assets/Contact.png";
import Particle from "../Particle";
// import { MdEmail } from "react-icons/md";

function Contact() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message: ""
  })

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }

  const handleSubmit = ()=>{
    // console.log(typeof(formData));
    console.log(formData);
    const sendData=async ()=>{
      await fetch('http://localhost:8000/contact-details',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })
    }

    sendData();
    
    setFormData({
      name : "",
      email:"",
      message:""
    })
    
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={7}
            style={{
              borderRadius: "10px",
            }}
          >
            <div className="contact-form">
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Get in touch <strong className="purple">With Me</strong>
              </h1>
              {/* <h1 className="project-heading"> */}
              {/* <MdEmail /> Email :{" "} */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-heading"
              >
                <label>Name:</label>
                <input type="text" required placeholder="Enter Your Name" 
                  value={formData.name} name="name"
                  onChange={handleChange}
                />
                <br />
                <label>Email:</label>
                <input type="text" required placeholder="Enter Your Email" 
                  value={formData.email} name="email"
                  onChange={handleChange}
                />
                <br></br>
                <label>Message</label>
                <textarea
                  placeholder="Enter your message/advice here"
                  required
                  value={formData.message} name="message"
                  onChange={handleChange}
                />
                <button type="submit" onClick={handleSubmit} className="btn-primary">
                  Submit
                </button>
              </form>
              {/* <a href="mailto:amanpurohit785@gmail.com">
                <strong className="purple">amanpurohit785@gmail.com</strong>
              </a> */}
              {/* </h1> */}
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={contact} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
