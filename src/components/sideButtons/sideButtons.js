import "./sideButtons.css";
import GitHub from "../../assets/images/icons/GitHub.svg";

function SideButton() {
  return (
    <>
      <div className="SideButtonBar d-none d-lg-block">
        <div className="upButton">
          <img src={GitHub} alt="github icon" className="upIcon"></img>
        </div>
        <div className="downButton">
          <img src={GitHub} alt="github icon" className="downIcon"></img>
        </div>
      </div>
      <div className="iconBar">
        <img src={GitHub} alt="github icon" className="socialIcons"></img>
        <img src={GitHub} alt="github icon" className="socialIcons"></img>
        <img src={GitHub} alt="github icon" className="socialIcons"></img>
        <img src={GitHub} alt="github icon" className="socialIcons"></img>
        <img src={GitHub} alt="github icon" className="socialIcons"></img>
      </div>
    </>
  );
}

export default SideButton;
