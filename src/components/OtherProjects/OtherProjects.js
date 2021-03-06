import "./OtherProject.css";
import OtherProjectCard from "./OtherProjectCard";
import academics from "../../assets/images/academics.png";
import event from "../../assets/images/event.png";
import ecart from "../../assets/images/ecart.png";
function OtherProject() {
  return (
    <div className="container otherproject">
      <div className="row">
        <div className="col-12">
          <h4 className="mainHeading">Other Projects</h4>
        </div>
        <OtherProjectCard
          title={"GeekNote academics"}
          intro={
            "Our Website helps students by providing them appropriate resources presented in an organized manner. We've got all the resources that you'll require to excell in your academics."
          }
          githubLink={"https://github.com/tusharjain0022/GeekNote-academics"}
          siteLink={"https://geeknote-academics.netlify.app/"}
          image={academics}
        ></OtherProjectCard>
        <OtherProjectCard
          title={"Event Brodcasting Platform"}
          intro={
            "A platform where people organising events online can connect with the registered students.Also, there exists admin access for overall management of the platform "
          }
          githubLink={"https://github.com/tusharjain0022/Event_Organising_Site"}
          siteLink={
            "https://drive.google.com/file/d/1hRid46ZPqPWyAdx5YnGqirJXbMeNt7XH/view?usp=sharing"
          }
          image={event}
        ></OtherProjectCard>
        <OtherProjectCard
          title={"E-Cart System"}
          intro={
            'This E-Cart system contains: Signup/Signin system, Cart system, Past Order details, Automatic invoice genertion,Product detail section and seperate "new arrivals" section.'
          }
          githubLink={"https://github.com/tusharjain0022/Hack_a_web"}
          siteLink={
            "https://www.youtube.com/watch?v=CZL7HGIYpgk&ab_channel=Tusharjain"
          }
          image={ecart}
        ></OtherProjectCard>
      </div>
    </div>
  );
}
export default OtherProject;
