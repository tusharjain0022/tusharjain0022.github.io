import "./projects.css";

function ProjectComponent(props) {
  return (
    <div className="col-12 projectComponent">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5">
          <h3
            className="projectTitle d-md-none"
            style={{ textAlign: "center", margin: "40px 0px 20px 0px" }}
          >
            {props.title}
          </h3>
          <img src={props.img} alt="projectImage" className="projectImg"></img>
        </div>
        <div className="col-12 col-md-6 col-lg-7 projectDetails">
          <h3 className="projectTitle d-none d-md-block">{props.title}</h3>
          <div className="textBox mt-4">
            <h5 className="projectIntro">{props.intro}</h5>
          </div>
          <p className="mt-4">{props.tech}</p>
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
export default ProjectComponent;
