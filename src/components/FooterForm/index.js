import React from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Title,
  Form,
  Label,
  Name,
  NameInput,
  Email,
  EmailInput,
  Subject,
  SubjectInput,
  Message,
  MessageInput,
  Submit,
} from "./FooterForm";

const FooterForm = () => {
  // Send the email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio-template",
        e.target,
        "user_CdS1BiYPesp2bncU2U6Yg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      {/* Title */}
      <Title>Contact Me</Title>

      {/* Form */}
      <Form onSubmit={sendEmail}>
        {/* Name */}
        <Name>
          <Label htmlFor="name">Name</Label>
          <NameInput
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
          ></NameInput>
        </Name>

        {/* Email */}
        <Email>
          <Label htmlFor="email">Email</Label>
          <EmailInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here"
          ></EmailInput>
        </Email>

        {/* Subject */}
        <Subject>
          <Label htmlFor="subject">Subject</Label>
          <SubjectInput
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject here"
          ></SubjectInput>
        </Subject>

        {/* Message */}
        <Message>
          <Label htmlFor="message">Message</Label>
          <MessageInput
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message here"
          ></MessageInput>
        </Message>

        {/* Submit Button */}
        <Submit type="submit" value="Send Message"></Submit>
      </Form>
    </Container>
  );
};

export default FooterForm;
