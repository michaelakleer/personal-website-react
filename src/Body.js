import React from "react";
import Technologies from "./Technologies";
import IntroCertificate from "./images/IntroCertificate.png";
import FrontEndCertificate from "./images/FrontEndCertificate.png";
import ReactCertificate from "./images/ReactCertificate.png";
import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <h1>Michaela Kleer</h1>
      <h2>Frontend React Developer | Musician</h2>
      <div>Brief paragraph about myself</div>
      <div>
        <h3>Technologies</h3>
        <Technologies />
      </div>
      <div>
        <h3>Certificates</h3>
        <a
          href="https://www.shecodes.io/certificates/23cc9c4c9a60d5856d4e07a6e97af0bf"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IntroCertificate}
            alt="Introduction to Coding Certificate"
            width={360}
          ></img>
        </a>
        <a
          href="https://www.shecodes.io/certificates/a3f95f38a9fdd4d28f8a63af25adb3a7"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={FrontEndCertificate}
            alt="Front End Development Certificate"
            width={360}
          ></img>
        </a>
        <a
          href="https://www.shecodes.io/certificates/3186cd5eb3c3dd19a25c722aa2ecaf52s"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ReactCertificate}
            alt="React Development Certificate"
            width={360}
          ></img>
        </a>

        <p>React Development</p>
      </div>
      <div>
        <h3>Projects</h3>
        <p>Vanilla JS Weather App</p>
        <p>React Weather App (include link to netlify and github)</p>
      </div>
    </div>
  );
}
