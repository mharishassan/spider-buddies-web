// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../Homepage.png";
import BOI from "../BOI.png";
import GOP from "../GOP.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="column">
          <div class="card">
            <h1>
              <strong>2+</strong>
            </h1>
            <h4>
              <strong>Cities</strong>
            </h4>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h1>
              <strong>10+</strong>
            </h1>
            <h4>
              <strong>Partner Institutions</strong>
            </h4>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h1>
              <strong>1000+</strong>
            </h1>
            <h4>
              <strong>Users</strong>
            </h4>
          </div>
        </div>
      </div>
      <div class="ourmission-section">
        <h2>Our Mission</h2>
        <p>
        Spider Buddies is aimed at helping introverted children become less
          introverted through encouragement and self-realization. The
          domain-specific model is trained on 33 million parameters using data
          sets of actual child therapy sessions so it tailors its interactions
          to each child's unique personality and needs, fostering a personalized
          experience & encouraging introverted children to express themselves in
          a safe and non-judgmental environment. It draws a customized AI
          generated experience which mimics a different virtual friend for each
          kid, slowly preparing them for real world interaction.
        </p>
        <Link to="/about" className="btn about-btn">
          About Us
        </Link>
      </div>
      <div class="schoolname-section">
        <h2>Our Schools</h2>
        <div className="row">
          <div className="columnschool">
            <ul>
              <li>Special Education & Training Centre</li>
              <li>New Era Children Academy</li>
              <li>Kashif Children Public School</li>
              <li>Moon Children School</li>
              <li>Ummeed Academy</li>
            </ul>
          </div>
          <div className="columnschool">
            <ul>
              <li>Kanz-ul-Iman School</li>
              <li>Diamond Jubilee Middle School</li>
              <li>Quaid-E-Azam Public School</li>
              <li>Khuda Buksh School</li>
              <li>Faran Model School</li>
            </ul>
          </div>
          <div className="columnschool">
            <ul>
              <li>Kafalat Ghar Orphanage</li>
              <li>Child's Galaxy</li>
              <li>Begum Inayat Welfare Society Orphan</li>
              <li>GPS Barkat-Pura</li>
              <li>Hamza Special Children School</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="recognized-by">
        <h2>Recognized by</h2>
        <hr />
        <div className="images-container">
          <img src={BOI} width={200} alt="Spider Logo" />
          <img src={GOP} width={200} alt="Spider Logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
