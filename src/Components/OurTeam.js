// src/components/OurTeam.js
import React from "react";
import { motion } from "framer-motion";
import Mannan from "../Mannan.jpg";
import Haris from "../20L-2067.jpg";
import Sawaira from "../Sawaira.jpg";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <section>
        <div className="rowhead">
          <h1>Our Team</h1>
        </div>
        <div class="row">
          <div class="column">
            <div class="card teamCol">
              <div class="img-container">
                <img src={Mannan} width={250} height={300} alt="Mannan" />
              </div>
              <h3>Abdul Mannan Hassan</h3>
              <p>Founder & CEO</p>
              <div class="icons">
                <a href="https://www.linkedin.com/in/abdul-mannan-hassan-344901253/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card teamCol">
              <div class="img-container">
                <img src={Haris} width={250} height={300}alt="Haris" />
              </div>
              <h3>Muhammad Haris Hassan</h3>
              <p>Chief Techonolgy Officer</p>
              <div class="icons">
                <a href="https://www.linkedin.com/in/muhammad-haris-hassan/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card teamCol">
              <div class="img-container">
                <img src={Sawaira} width={250} height={300} alt="picture" />
              </div>
              <h3>Sawaira Shakeel</h3>
              <p>Outreach Manager</p>
              <div class="icons">
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurTeam;
