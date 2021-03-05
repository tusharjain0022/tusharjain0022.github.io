import "./OtherProject.css";
import github from "../../assets/images/icons/brownGitHub.svg";
function OtherProjectCard(props) {
  return (
    <div className="col-12 col-md-4 my-3 my-md-0">
      <div className=" otherProjectCard">
        <div className="imgContainer">
          <img src={props.image} alt="project"></img>
        </div>{" "}
        <div className="text">
          <h4>{props.title}</h4>
          <p>{props.intro}</p>
          <img src={github} className="me-4" alt="github icon"></img>
          <img src={github} alt="github icon"></img>
        </div>
      </div>
    </div>
  );
}
export default OtherProjectCard;
