import "./projects.css";
import ProjectComponent from "./projectComponent";
import hg from "../../assets/images/hg.png";

function Project(props) {
  return (
    <div className="projectSection container">
      <div className="row">
        <div className="col-12">
          <h3 className="mainHeading">Projects</h3>
        </div>
        <ProjectComponent
          id={0}
          img={hg}
          title={"Education"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet.elementum purus, sit amet dictum magna ultrices sit amet."
          }
          tech={"Tech | Tech | Tech | Tech | Tech | Tech | Tech  "}
          githubLink={""}
          siteLink={""}
        />
        <ProjectComponent
          id={1}
          img={hg}
          title={"Education"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet.elementum purus, sit amet dictum magna ultrices sit amet."
          }
          tech={"Tech | Tech | Tech | Tech | Tech | Tech | Tech  "}
          githubLink={""}
          siteLink={""}
        />
        <ProjectComponent
          id={2}
          img={hg}
          title={"Education"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet.elementum purus, sit amet dictum magna ultrices sit amet."
          }
          tech={"Tech | Tech | Tech | Tech | Tech | Tech | Tech  "}
          githubLink={""}
          siteLink={""}
        />
      </div>
    </div>
  );
}
export default Project;
