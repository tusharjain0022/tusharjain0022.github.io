import "./LandingPage.css";
import Tushar from "../../assets/images/landingTusharPic.png";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 textBox">
            <p className="smallText">Hi there ! my name is</p>
            <h1>
              Tushar Jain <br></br>
              I'm a FullStack Web Developer
            </h1>
            <h2 className="smallText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tempus elementum purus, sit amet dictum magna ultrices sit amet.
            </h2>
            <h3>View Resume</h3>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <img src={Tushar} alt="Tushar" className="tushar"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
