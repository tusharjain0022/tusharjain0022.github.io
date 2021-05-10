import "./About.css";
import connector from "../../assets/images/connector.svg";
// import triangle from "../../assets/images/triangle.svg";

function About() {
  return (
    <div className="aboutMe container" id="about">
      <div className="row">
        <div className="col-12">
          <h4 className="mainHeading">About me</h4>
          <h4 className="smallText">
            I'm Tushar Jain, a highly motivated and dedicated Fullstack
            Developer, and a UI/UX designer, Currently pursuing Bachelor of
            Technology in Computer Science and Engineering from the Indian
            Institute of Information Technology, Ranchi. Looking for internship
            opportunities to enhance and explore my technical knowledge.
          </h4>
          <h4 className="subHeading">Education</h4>
        </div>
        <div className="textContainer d-none d-md-block">
          <p className="textLeft">
            {" "}
            B.Tech in Computer Science and Engineering
            <br />( 2019 - 2023 ){" "}
          </p>

          <p className="textLeft">
            {" "}
            Senior Secondary Education - CBSE <br />( 2018 - 2019 )
          </p>
        </div>
        <div className="imgContainer d-none d-md-block">
          <img src={connector} className="connectorImg" alt="connector"></img>
        </div>

        <div className="textContainer d-none d-md-block">
          <p className="textRight">
            INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, <br></br>RANCHI CGPA -
            9.18{" "}
          </p>
          <p className="textRight">
            {" "}
            National Victor Public School, Delhi
            <br />
            Class 12th - 94.4 %{" "}
          </p>
        </div>
        <div className="mobTextContainer d-md-none">
          <p className="mobTextBold">
            B.Tech in Computer Science and Engineering (CGPA - 9.18)<br></br>
            <span className="mobText">
              INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, RANCHI
            </span>
          </p>
          <p className="mobText" style={{ textAlign: "center" }}>
            (2019 - 2023 )
          </p>
          <div
            className="imgContainer"
            style={{ display: "block", margin: "-20px auto 0px auto" }}
          >
            <img src={connector} className="connectorImg" alt="connector"></img>
          </div>
          <p className="mobText" style={{ textAlign: "center" }}>
            (2018 - 2019 )
          </p>
          <p className="mobTextBold">
            Senior Secondary Education - CBSE ( Class 12th - 94.4 %)<br></br>
            <span className="mobText">
              National Victor Public School, Delhi
            </span>
          </p>
        </div>
        {/* <div className="col-12">
          <h4 className="subHeading">Skills</h4>
          <p className="smallText">
            MERN stack Developer | PHP Fullstack Developer | Python enthusiast |
            Graphic designer | Sketch Artist
          </p>
        </div>
        <div className="col-6 col-md-4">
          <ul className="list-unstyled techList">
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4">
          <ul className="list-unstyled techList">
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 d-none d-md-block">
          <ul className="list-unstyled techList">
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 d-md-none">
          <ul className="list-unstyled techList">
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 d-md-none">
          <ul className="list-unstyled techList">
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
            <li>
              <img
                src={triangle}
                alt="icon"
                style={{ width: "12px", height: "12px" }}
              ></img>{" "}
              <p
                className="smallText"
                style={{ display: "inline", marginLeft: "10px" }}
              >
                Tech Stack
              </p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
export default About;
