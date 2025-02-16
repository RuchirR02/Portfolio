import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/imageBook.png";
import image2 from "../../assets/imageTrim.png";
import image3 from "../../assets/imageReport.png";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          image={image1}
          title="Book Worm"
          main="This Book Recommendation System is based on Collaborative and Content Filtering. You can search books of your favorite authors. Also this system will recommend books on the basis of popularity, or scores given by users."
          link1= "https://siescms-my.sharepoint.com/:v:/g/personal/ruchirrit120_gst_sies_edu_in/EXBJcT8NRg9Mo5Towg2AVX0B4qvDIha_jSAMyp8jyfH3CA?e=RDwq0H"
          link2="https://github.com/Sem6-Mp/Book_recomm"
        />
        <ProjectCard
          image={image2}
          title="Trimrr"
          main="Trimrr is an efficient URL shortener that not only shortens links but also provides detailed analytics. Track the number of clicks, user locations, and device types to gain valuable insights into your audience."
          link1= ""
          link2="https://github.com/RuchirR02/URL-Shortener-Analytics"
        />
        <ProjectCard
          image={image3}
          title="Reporte_R"
          main="Reporte_R allows you to search daily news. You can search news based on any category of your interest."
          link1=""
          link2="https://github.com/RuchirR02/webxnlp"
          />
      </div>
    </div>
  );
};

export default Projects;
