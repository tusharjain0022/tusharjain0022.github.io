import "./projects.css";
import ProjectComponent from "./projectComponent";
import hg from "../../assets/images/hg.png";
import ieee from "../../assets/images/ieee.png";
import geeknote from "../../assets/images/geeknote.png";

function Project(props) {
  return (
    <div className="projectSection container" id="projects">
      <div className="row">
        <div className="col-12">
          <h3 className="mainHeading">Projects</h3>
        </div>
        <ProjectComponent
          id={0}
          img={hg}
          title={"House of Geeks"}
          intro={
            "Official webapp of House Of Geeks, Technical Society of IIIT Ranchi having a Sleek UI made using React along with the admin panel.I'm the top contributor and maintainer of the Project and also contributed in the UI/UX Design of the webapp."
          }
          tech={"JavaScript | NodeJs | ReactJs | ExpressJs | MongoDB"}
          githubLink={"https://github.com/houseofgeeks/hg"}
          siteLink={"https://houseofgeeks.netlify.app/"}
        />
        <ProjectComponent
          id={1}
          img={geeknote}
          title={"GeekNote"}
          intro={
            "Project aimed to provides a single platform to organize  study materials, reminders, and Blogs. Uitilized Netlify to configure CI/CD. Designed Wireframe using Figma.Created responsive and sleek UI using React."
          }
          tech={"JavaScript | NodeJs | ReactJs | ExpressJs | MongoDB "}
          githubLink={"https://github.com/tusharjain0022/GeekNote"}
          siteLink={"https://geeknote.netlify.app/"}
        />
        <ProjectComponent
          id={2}
          img={ieee}
          title={"IEEE SB Website"}
          intro={
            "A full stack website for all utilities of the student branch implemented using MERN Stack.Contributed in Wireframing using Adobe Xd.Created responsive and sleek UI using React."
          }
          tech={"JavaScript| NodeJs| ReactJs| ExpressJs| MongoDB "}
          githubLink={"https://github.com/EmperorYP7/IIITR-IEEE-Website"}
          siteLink={"https://iiitr-ieee-sb.netlify.app/"}
        />
      </div>
    </div>
  );
}
export default Project;
