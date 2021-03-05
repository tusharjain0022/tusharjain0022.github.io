import "./Blog.css";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <div className="blogSection container">
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit."
          }
          readTime={3}
          date={"14th March, 2021"}
        />
        <BlogBox
          tag1={"webdev"}
          tag2={"javascript"}
          tag3={"react"}
          tag4={"beginner"}
          title={"How I started my Web Development Journey"}
          intro={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elementum purus, sit amet dictum magna ultrices sit amet. Lorem ipsum dolor sit."
          }
          readTime={3}
          date={"14th March, 2021"}
        />
      </div>
    </div>
  );
}

export default Blog;
