import "./OtherProject.css";
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
          <a
            href={props.githubLink}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="githubIcon"></div>
          </a>
          <a
            href={props.siteLink}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="siteLink"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default OtherProjectCard;
