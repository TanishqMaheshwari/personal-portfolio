import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.grid}>
        <div className={aboutStyles.text}>
          <p>
            I am currently a third year computer science student at the University of
            Waterloo with an obtained business specialization. My motivation and
            interests in computer science and technology as a whole stem from
            several entrepreneurial experiences in high school. This has ultimately
            led me to explore careers in software engineering, product
            management, and venture capital.
          </p>
          <p>
            Recently, I have become extremely interested in climate tech and
            sustainability of every form, I hope to one day
            find myself working in the industry or some other industry that also
            has positive impact on society. In my free time, you can find me
            weightlifting and rock climbing, cooking, enjoying time in nature,
            or listening to music from a collection of used records!
          </p>
          <p>
            If you’re interested in talking more about potential career
            opportunities, climate tech and sustainability, or any of the
            hobbies listed above, please feel free to{" "}
            <a href="mailto:tmaheshw@uwaterloo.ca" target="_blank">
              email me
            </a>{" "}
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/tanishq-maheshwari/"
              target="_blank"
            >
              Linkedin
            </a>
            !
          </p>
        </div>
        <img
          className={aboutStyles.image1}
          src={require("../images/canoeTrip.jpg")}
          alt="Plane flying overhead canoe"
        ></img>
        <img
          className={aboutStyles.image2}
          src={require("../images/beachHouse.jpg")}
          alt="Beach house"
        ></img>
        <img
          className={aboutStyles.image3}
          src={require("../images/walk.jpg")}
          alt="Walk through open field"
        ></img>
        <p className={aboutStyles.caption}>
          Some of my favourite days this summer: seeing a plane fly directly overhead one hour into a
          canoe trip with strangers, attending the Beach House concert at Massey Hall, and a long walk with
          friends the day after finishing exams :)
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
