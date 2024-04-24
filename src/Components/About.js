// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div class="aboutus">
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
        <p>
          1. Empowerment Through Technology: Spider Buddies leverages technology
          to create a supportive and interactive platform for introverted
          children.
          <br />
          2. Encouraging Self-Expression: The platform encourages introverted
          children to express themselves in a safe and non-judgmental
          environment.
          <br />
          3. Personalized Approach: The SLM tailors its interactions to each
          child's unique personality and needs, fostering a personalized
          experience.
          <br />
          4. Building Confidence: Through positive reinforcement and guided
          interactions, it helps children build self-confidence and self-esteem.
          <br />
          5. Social Skill Development: The chatbot incorporates social
          skill-building exercises to help children improve their ability to
          interact with others.
          <br />
          6. Emotional Intelligence: It focuses on developing emotional
          intelligence, teaching children to identify and manage their emotions
          effectively.
          <br />
          7. Goal Setting: It assists children in setting and achieving personal
          goals, promoting a sense of accomplishment.
          <br />
          8. Safe and Age-Appropriate: It ensures a safe and age-appropriate
          environment, adhering to strict privacy and security guidelines.
        </p>
      </div>
      <div class="container-about">
        <div class="column-about">
          <div class="card-about">
            <h5>
              <strong>
                "I've witnessed the incredible influence of Spider Buddies,
                particularly with students like Ahmed. Ahmed was introverted and
                had difficulty engaging in class. Since using Spider Buddies,
                he's become more self-assured, active in discussions, and
                confident in his interactions with peers. Spider Buddies is a
                fantastic tool for educators, and I wholeheartedly recommend
                it."
              </strong>
            </h5>
            <h6>Teacher Quaid-e-Azam Public School, Sheikhupura</h6>
          </div>
        </div>
        <div class="column-about">
          <div class="card-about">
            <h5>
              <strong>
                “Spider Buddies has been instrumental in my work with students
                with diverse needs. Its adaptability has made it effective for
                enhancing social skills and building self-confidence. The
                chatbot's activities cater to a range of learning styles, making
                it a valuable resource in our special education programs.”
              </strong>
            </h5>
            <h6>Teacher Special Education & Training Centre, Karachi</h6>
          </div>
        </div>
        <div class="column-about">
          <div class="card-about">
            <h5>
              <strong>
                "As a teacher, I've seen firsthand the positive impact of Spider
                Buddies on my students. Sana, a particularly introverted child,
                used to hesitate to participate in class. She has become more
                engaged and willing to share her thoughts. It's like a veil has
                been lifted, and she's discovering her true potential"
              </strong>
            </h5>
            <h6>
              Teacher & Principal Of Hamza Special School Children, Lahore
            </h6>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
