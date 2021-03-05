import "./About.css";
import connector from "../../assets/images/connector.svg";
import triangle from "../../assets/images/triangle.svg";

function About() {
  return (
    <div className="aboutMe container">
      <div className="row">
        <div className="col-12">
          <h4 className="mainHeading">About me</h4>
          <h4 className="smallText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tempus elementum purus, sit amet dictum magna ultrices sit amet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tempus elementum purus, sit amet dictum magna ultrices sit amet.
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
            B.Tech in Computer Science and Engineering <br />( 2019 - 2023 )
          </p>
        </div>
        <div className="imgContainer d-none d-md-block">
          <img src={connector} className="connectorImg"></img>
        </div>

        <div className="textContainer d-none d-md-block">
          <p className="textRight">
            INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, <br></br>RANCHI CGPA -
            9.18{" "}
          </p>
          <p className="textRight">
            {" "}
            Central Board of Secondary Education <br />
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
            <img src={connector} className="connectorImg"></img>
          </div>
          <p className="mobText" style={{ textAlign: "center" }}>
            (2019 - 2023 )
          </p>
          <p className="mobTextBold">
            B.Tech in Computer Science and Engineering (CGPA - 9.18)<br></br>
            <span className="mobText">
              INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, RANCHI
            </span>
          </p>
        </div>
        <div className="col-12">
          <h4 className="subHeading">Skills</h4>
          <p className="smallText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tempus elementum purus, sit amet dictum magna ultrices sit amet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        </div>
      </div>
    </div>
  );
}
export default About;
