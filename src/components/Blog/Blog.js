import "./Blog.css";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <div className="blogSection container" id="blogs">
      <div className="row">
        <div className="col-12">
          <h4 className="mainHeading">My Blogs</h4>
        </div>
        <BlogBox
          tag1={"webdev"}
          tag2={"javascript"}
          tag3={"react"}
          tag4={"beginner"}
          title={"How I started my Web Development Journey"}
          intro={
            "In this blog, I'll share my 1 year of learning experience 📊 and How I started my Web Development journey with a glimpse at some of my projects and courses/resources that I followed in this journey and few tips from my side if you are aiming towards the Web Development domain."
          }
          readTime={3}
          date={"3rd March, 2021"}
          link={
            "https://dev.to/tusharjain0022/how-i-started-my-web-development-journey-2b8d"
          }
        />
      </div>
    </div>
  );
}

export default Blog;
