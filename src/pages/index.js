import React from "react"
import { Link } from "gatsby"
import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      {/*
      <h1>Hey!</h1>
      <h2>
        I'm Tanishq, a computer science and business student at the University
        of Waterloo.
      </h2>
      <h3>
        I'm interested in developing impactful products and services to benefit
        people around the world. To accomplish this, I aim to apply my
        experiences with design thinking processes, software development, and
        business frameworks.
      </h3>
      //include resume here */}
      {/* everything here is on the left side of the intro page, so maybe it will need to have its own class 
      compared to the upcoming image */}
      <section className={indexStyles.hero}>
        <div className={indexStyles.heroContent}>
          <h1 className={indexStyles.hey}>Hey, I'm Tanishq!</h1>
          <p className={indexStyles.intro}>
            I aim to create great products using design thinking processes,
            software development, and business frameworks.
          </p>
          {/* Scroll image imported as SVG */}

          <p className={indexStyles.scrollText}>
            Scroll down to learn more about me :)
          </p>

          <svg
            className={indexStyles.scroll}
            width="48"
            height="78"
            viewBox="0 0 48 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="42"
              height="72"
              rx="21"
              fill="white"
              stroke="black"
              stroke-width="6"
            />
            <path
              d="M37.5909 25.4483C37.5909 32.5632 31.3402 38.3966 23.5455 38.3966C15.7507 38.3966 9.5 32.5632 9.5 25.4483C9.5 18.3333 15.7507 12.5 23.5455 12.5C31.3402 12.5 37.5909 18.3333 37.5909 25.4483Z"
              fill="#070707"
              stroke="black"
            />
          </svg>
        </div>

        <div className={indexStyles.heroImage}>
          <svg
            width="480"
            height="480"
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="40" fill="#A6E1FA" />
            <circle cx="280" cy="200" r="40" fill="#1B3FAB" />
            <circle cx="280" cy="280" r="40" fill="#A6E1FA" />
            <circle cx="200" cy="280" r="40" fill="#1B3FAB" />
            <circle cx="80" cy="240" r="80" fill="#0E6BA8" />
            <circle cx="240" cy="80" r="80" fill="#0E6BA8" />
            <circle cx="240" cy="400" r="80" fill="#0E6BA8" />
            <circle cx="400" cy="240" r="80" fill="#0E6BA8" />
            <circle cx="109" cy="110" r="50" fill="#1B3FAB" />
            <circle cx="371" cy="370" r="50" fill="#1B3FAB" />
            <circle cx="371" cy="110" r="50" fill="#A6E1FA" />
            <circle cx="109" cy="370" r="50" fill="#A6E1FA" />
          </svg>
        </div>
      </section>
      {/* this right side might belong to a different class */}
      {/* right-side image imported as SVG */}
      <section className={indexStyles.experience}>
        <div className={indexStyles.experienceTitleContainer}>
          <h1 className={indexStyles.experienceTitle}>Work Experience</h1>
        </div>
        <div className={indexStyles.experienceCards}>
          <div className={indexStyles.card}>
            {/*add a link here */}
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.ursaImage}
                src={require("../images/ursa.jpg")}
                alt="Ursa Landing Page"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2>Developing Company and Product Strategy</h2>
              <p className={indexStyles.companyTitle}>@ Ursa</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>Prototyping</li>
                <li className={indexStyles.tags}>Industry Research</li>
                <li className={indexStyles.tags}>Technical Requirements</li>
              </ul>
            </div>
          </div>
          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.stackdImage}
                src={require("../images/stackd.png")}
                alt="Stackd Company Logo"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2 className={indexStyles.companyDescription}>
                Leading Product and Technology Teams
              </h2>
              <p className={indexStyles.companyTitle}>@ Stackd Gaming</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>Wireframing</li>
                <li className={indexStyles.tags}>Strategy</li>
                <li className={indexStyles.tags}>Full-Stack Web Dev</li>
              </ul>
            </div>
          </div>
          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.acornImage}
                src={require("../images/acorntalent.png")}
                alt="AcornTalent Company Logo"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2 className={indexStyles.companyDescription}>
                Leading Design and Front-End Development
              </h2>
              <p className={indexStyles.companyTitle}>@ AcornTalent</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>Wireframing</li>
                <li className={indexStyles.tags}>Strategy</li>
                <li className={indexStyles.tags}>Front-End Web Dev</li>
              </ul>
            </div>
          </div>
          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.wifImage}
                src={require("../images/wif.png")}
                alt="World in Focus Logo"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2 className={indexStyles.companyDescription}>Managing and Updating Non-Profit's Website</h2>
              <p className={indexStyles.companyTitle}>@ World in Focus</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>Wordpress</li>
                <li className={indexStyles.tags}>Project Management</li>
                <li className={indexStyles.tags}>Community Involvement</li>
              </ul>
            </div>
          </div>
          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.mlImage}
                src={require("../images/1000ml.png")}
                alt="1000ml"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2 className={indexStyles.companyDescription}>
                Proposing Locations for Contracted Company's Expansion
              </h2>
              <p className={indexStyles.companyTitle}>@ 1000ml</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>Data Analysis</li>
                <li className={indexStyles.tags}>Web Scraping</li>
                <li className={indexStyles.tags}>Industry Research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
