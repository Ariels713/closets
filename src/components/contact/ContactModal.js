import React, { useState } from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal, Form, Label } from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function ContactModal() {
  const [loginModal, setLoginModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);
  const [phone, setPhone] = useState("");
  const interest = [
    { value: "doors", label: "Closet Doors", color: "#253858" },
    { value: "interiors", label: "Interiors", color: "#666666" },
  ];
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    resetForm();
    alert(
      "Example Component, This information would be sent to your database."
    );
    // try {
    //   await fetch("/.netlify/functions/contactMe", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       message,
    //     }),
    //   });
    //   resetForm();
    //   setSentMessage(true);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  const animatedComponents = makeAnimated();
  return (
    <>
      <Button
        // className="btn-round"
        color="neutral"
        type="button"
        onClick={() => setLoginModal(true)}
      >
        Consultation
      </Button>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          {sentMessage ? (
            <h3 className="modal-title text-center">I'll be in touch soon!</h3>
          ) : (
            <h3 className="modal-title text-center">
              Request A Consultation Now
            </h3>
          )}
          {/* <h3 className="modal-title text-center">Say Hello!</h3> */}
        </div>
        <div className="modal-body">
          {sentMessage ? null : (
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <label>Name</label>
                <Input
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Email</label>
                <Input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Phone Number</label>
                <Input
                  placeholder="Phone Number"
                  name="email"
                  value={phone}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Interested In </label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={interest}
                  className="mb-3"
                />
              </FormGroup>
              <FormGroup>
                <label>Message</label>
                <Input
                  placeholder="Message"
                  type="textarea"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>
              <Button block color="danger">
                Submit
              </Button>
            </Form>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ContactModal;
