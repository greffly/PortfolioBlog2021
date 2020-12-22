import React from "react"
import Layout from "../components/Layout"

const pinkTheme = document.querySelector(".pinkTheme")
const html = document.documentElement

function changeTheme() {
  console.log("clicked!")
}

// toggle.addEventListener("click", e => {
//   if (toggle.clic) {
//     console.log("checked!", html.classList)
//     html.classList.add("dark")
//     html.classList.remove("light")
//     localStorage.setItem("theme", "dark")
//   } else {
//     console.log("not checked!", html.classList)
//     html.classList.remove("dark")
//     html.classList.add("light")
//     localStorage.setItem("theme", "light")
//   }
// })

const Home = () => (
  <Layout>
    {console.log({ pinkTheme })}
    <section className="homePage" role="main" id="home">
      <div className="overlay">
        <hr width="85%" size="5" id="nav-line" />
        <hr width="80%" size="4" id="nav-line-2" />
        <div className="titleSection">
          <h1 className="titleLine">
            Caitlyn <br />
            Greffly
          </h1>
          <h2 className="tagline">
            Software Engineer. Speaker. Community Enthusiast.
          </h2>
        </div>
      </div>
      <button className="pinkTheme" onClick={changeTheme()}></button>
    </section>
  </Layout>
)

export default Home
