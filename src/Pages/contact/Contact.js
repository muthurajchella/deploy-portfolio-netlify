import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import { Alert, Snackbar } from "@mui/material";

const Contact = () => {
  const form = useRef();

  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userSub, setUserSub] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
  const [userMailError, setUserMailError] = useState(false);
  const [userMailErrorMsg, setUserMailErrorMsg] = useState("");
  const [userSubError, setUserSubNameError] = useState(false);
  const [userSubErrorMsg, setUserSubErrorMsg] = useState("");
  const [userDescError, setUserDescError] = useState(false);
  const [userDescErrorMsg, setUserDescErrorMsg] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

  const HandleInputChange = (e, name, err, msg, type) => {
    let value = "";
    if (type === "text") {
      value = e.target.value.replace(/^\s+|\s+$/gm, " ");
    }

    if (name === "userName") {
      setUserName(value);
      setUserNameError(false);
      setUserNameErrorMsg("");
    } else if (name === "userMail") {
      setUserMail(value);
      setUserMailError(false);
      setUserMailErrorMsg("");
    } else if (name === "userSub") {
      setUserSub(value);
      setUserSubNameError(false);
      setUserSubErrorMsg("");
    } else if (name === "userDesc") {
      setUserDesc(value);
      setUserDescError(false);
      setUserDescErrorMsg("");
    }
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    if (userName.trim() === "") {
      setUserNameError(true);
      setUserNameErrorMsg("This field is required.");
      document.getElementById("userNameIn").focus();
    } else if (userMail.trim() === "") {
      setUserMailError(true);
      setUserMailErrorMsg("This field is required.");
      document.getElementById("emailIn").focus();
    } else if (!validateEmail(userMail.trim())) {
      setUserMailError(true);
      setUserMailErrorMsg("Please provide valite email id");
      document.getElementById("emailIn").focus();
    } else if (userSub.trim() === "") {
      setUserSubNameError(true);
      setUserSubErrorMsg("This field is required.");
      document.getElementById("subIn").focus();
    } else if (userDesc.trim() === "") {
      setUserDescError(true);
      setUserDescErrorMsg("This field is required.");
      document.getElementById("descIn").focus();
    } else {
      sendMailContent();
    }
  };

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const sendMailContent = () => {
    emailjs
      .sendForm("service_l2z0ska", "template_539smjl", form.current, {
        publicKey: "Y5UQf8J9rN9FuwHM8",
      })
      .then(
        () => {
          setOpenAlert(true);
          setAlertMessage("SEND SUCCESS!");
          setAlertStatus("success");
          setUserName("");
          setUserNameError(false);
          setUserNameErrorMsg("");
          setUserMail("");
          setUserMailError(false);
          setUserMailErrorMsg("");
          setUserSub("");
          setUserSubNameError(false);
          setUserSubErrorMsg("");
          setUserDesc("");
          setUserDescError(false);
          setUserDescErrorMsg("");
        },
        (error) => {
          setOpenAlert(true);
          setAlertMessage("FAILED...", error.text);
          setAlertStatus("failed");
        }
      );
  };

  const BuildAlert = () => {
    let vertical = "top";
    let horizontal = "right";
    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={HandleClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={HandleClose}
          severity={alertStatus === "success" ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    );
  };

  const HandleClose = () => {
    setOpenAlert(false);
    setAlertMessage("");
    setAlertStatus("");
  };

  return (
    <section className="contact section">
      {openAlert === true ? BuildAlert() : null}
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container containeR grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or oppotunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">muthuraj.chella@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">{`(+91) 8508457998`}</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/muthuraj-chelladurai-075bb913a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="contact__social__link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/muthurajchella"
              className="contact__social__link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* <a href="https://facebook.com" className="contact__social__link">
              <FaInstagram />
            </a> */}
          </div>
        </div>

        <form className="contact__form" ref={form}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                id="userNameIn"
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="form__control"
                onChange={(e) =>
                  HandleInputChange(
                    e,
                    "userName",
                    "userNameError",
                    "userNameErrorMsg",
                    "text"
                  )
                }
                value={userName}
              />
              {userNameError === true ? (
                <span
                  className="mt-3 text-red"
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {userNameErrorMsg}
                </span>
              ) : null}
            </div>

            <div className="form__input-div">
              <input
                id="emailIn"
                type="text"
                name="from_mail"
                placeholder="Your Email"
                className="form__control"
                onChange={(e) =>
                  HandleInputChange(
                    e,
                    "userMail",
                    "userMailError",
                    "userMailErrorMsg",
                    "text"
                  )
                }
                value={userMail}
              />
              {userMailError === true ? (
                <span
                  className="mt-3"
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {userMailErrorMsg}
                </span>
              ) : null}
            </div>

            <div className="form__input-div">
              <input
                id="subIn"
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
                onChange={(e) =>
                  HandleInputChange(
                    e,
                    "userSub",
                    "userSubError",
                    "userSubErrorMsg",
                    "text"
                  )
                }
                value={userSub}
              />

              {userSubError === true ? (
                <span
                  className="mt-3 text-red"
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {userSubErrorMsg}
                </span>
              ) : null}
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              id="descIn"
              name="message"
              className="form__control textarea"
              placeholder="Your Message"
              onChange={(e) =>
                HandleInputChange(
                  e,
                  "userDesc",
                  "userDescError",
                  "userDescErrorMsg",
                  "text"
                )
              }
              value={userDesc}
            ></textarea>

            {userDescError === true ? (
              <span
                className=""
                style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
              >
                {userDescErrorMsg}
              </span>
            ) : null}
          </div>

          <button className="button" onClick={(e) => HandleSubmit(e)}>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
