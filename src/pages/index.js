import React from "react"
import { Link } from "gatsby"
import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      {/* everything here is on the left side of the intro page, so maybe it will need to have its own class 
      compared to the upcoming image */}
      <section className={indexStyles.hero}>
        <div className={indexStyles.heroContent}>
          <h1 className={indexStyles.hey}>Hey, I'm Tanishq!</h1>
          <p className={indexStyles.intro}>
            I aim to create great purpose-driven products using design thinking
            processes and software development.
          </p>
          <p className={indexStyles.scrollText}>
            Scroll down to learn more about me :)
          </p>
          {/* Scroll image imported as SVG */}
          <svg
            className={indexStyles.scroll}
            width="50"
            height="94"
            viewBox="0 0 50 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.5"
              y="2.5"
              width="45"
              height="89"
              rx="22.5"
              stroke="black"
              stroke-width="5"
            />

            <circle
              className={indexStyles.circle}
              transform="translate(0)"
              cx="25"
              cy="23"
              r="12"
              fill="black"
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

      <section className={indexStyles.experience}>
        <div className={indexStyles.experienceTitleContainer}>
          <h1 className={indexStyles.experienceTitle}>Work Experience</h1>
        </div>
        <div className={indexStyles.experienceCards}>
          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.cardImage}
                src={require("../images/faire.png")}
                alt="Faire Logo"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2>Developing Tools to Improve Engineering Throughput</h2>
              <p className={indexStyles.companyTitle}>@ Faire</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>React with Typescript</li>
                <li className={indexStyles.tags}>
                  Defining Product Requirements
                </li>
                <li className={indexStyles.tags}>Engineering Scoping</li>
              </ul>
            </div>
          </div>

          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.cardImage}
                src={require("../images/mappedin.png")}
                alt="Mappedin Logo"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2>Creating Beautiful Web Experiences</h2>
              <p className={indexStyles.companyTitle}>@ Mappedin</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>React with Typescript</li>
                <li className={indexStyles.tags}>Forming Design Systems</li>
                <li className={indexStyles.tags}>
                  Managing Cross-Functional Teams
                </li>
              </ul>
            </div>
          </div>

          <div className={indexStyles.card}>
            <div className={indexStyles.companyImage}>
              <img
                className={indexStyles.cardImage}
                src={require("../images/frv.png")}
                alt="Front Row Ventures Logo"
              ></img>
            </div>
            <div className={indexStyles.experienceInfo}>
              <h2>
                Improving Accessibility to Student Funding and Entrepreneurship
              </h2>
              <p className={indexStyles.companyTitle}>@ Front Row Ventures</p>
              <ul className={indexStyles.experienceTags}>
                <li className={indexStyles.tags}>Product Management</li>
                <li className={indexStyles.tags}>Stakeholder Management</li>
                <li className={indexStyles.tags}>Automating Processes</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className={indexStyles.experienceCards}>
          <div className={indexStyles.card}>
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
              <h2 className={indexStyles.companyDescription}>
                Managing and Updating Non-Profit's Website
              </h2>
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
        </div> */}
      </section>
    </Layout>
  )
}

export default IndexPage
