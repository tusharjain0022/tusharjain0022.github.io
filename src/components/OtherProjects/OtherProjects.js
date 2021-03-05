import "./OtherProject.css";
import OtherProjectCard from "./OtherProjectCard";
import project from "../../assets/images/hg.png";
function OtherProject() {
  return (
    <div className="container otherproject">
      <div className="row">
        <div className="col-12">
          <h4 className="mainHeading">Connect with me</h4>
        </div>
        <OtherProjectCard
          title={"project title"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit."
          }
          githubLink={"/"}
          siteLink={"/"}
          image={project}
        ></OtherProjectCard>
        <OtherProjectCard
          title={"project title"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit."
          }
          githubLink={"/"}
          siteLink={"/"}
          image={project}
        ></OtherProjectCard>
        <OtherProjectCard
          title={"project title"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit."
          }
          githubLink={"/"}
          siteLink={"/"}
          image={project}
        ></OtherProjectCard>
      </div>
    </div>
  );
}
export default OtherProject;
