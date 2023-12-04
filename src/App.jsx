import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { All } from "./Components/All";
import { FullStack } from "./Components/FullStack";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Careers } from "./Components/Careers";

// It containes all the Course Details
const Coures_Details = [
  {
    type: "all",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/is_dsa_important_for_placement_in_2023-1.webp",
    title: "Is DSA Important for Placement in 2023?",
    description:
      "In the fast-paced world of technology, landing a good job placement in a top-notch company",
    date: "2 December 2023",
    comments: "No Comments",
  },
  {
    type: "all",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
    description:
      "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
    date: "2 December 2023 ",
    comments: "No Comments",
  },
  {
    type: "careers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
    title: "Automation Test Engineer Resume: 10 Important Things To Consider",
    description:
      "The world is moving towards automating the testing of products in order to increase work",
    date: "1 December 2023",
    comments: "No Comments",
  },
  {
    type: "careers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
    title: "Professional Civil Engineer Resume: A Guide To Attract Employers in 2023",
    description:
      "The world is moving towards modernization leading to an increase in the popularity of civil",
    date: "1 December 2023 ",
    comments: "No Comments",
  },
  {
    type: "careers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
    title: "9 Best Product-Based Companies for Project Management",
    description:
      "In today’s tech-driven world, the demand for project managers is higher than before. The workload",
    date: "1 December 2023 ",
    comments: "No Comments",
  },
  {
    type: "all",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/featured_image.webp",
    title: "Major Roles And Responsibilities of a Web Developer in 2023",
    description:
      "Web development is one of the fastest-growing domains in the job market. According to the",
    date: "1 December 2023",
    comments: "No Comments",
  },
  {
    type: "dataScience",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2023",
    description:
      "Are you someone who’s not interested in coding, but wants to get placed in tech",
    date: "28 November 2023",
    comments: "No Comments",
  },
  {
    type: "fullStack",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
    description:
      "As a full stack developer, having the right set of tools is crucial for your.",   
    date: "15 November 2023",
    comments: "No Comments",
  },
  {
    type: "fullStack",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title: "Top Differences: Full Stack Developer vs Software Engineer 2023",
    description:
      "A Full Stack Developer is a tech all-rounder. They work on both the front and",
    date: "15 November 2023",
    comments: "No Comments",
  },
  {
    type: "fullStack",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
    title: "Horizontal vs Vertical Scaling for Efficient System Design",
    description:
      "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
    date: "10 November 2023",
    comments: "No Comments",
  },
  {
    type: "dataScience",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    title: "Top Product-Based Companies for Data Science Freshers",
    description:
      "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    date: "10 November 2023",
    comments: "No Comments",
  },
  {
    type: "dataScience",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
    title: "What is the Difference between Data Science and Data Engineering?",
    description:
      "India has been making some serious waves in the world of data. Just like the",
    date: "8 November 2023",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "What Is Hacking? Types of Hacking & More",
    description:
      "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    date: "27 December 2022",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    description:
      "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    date: "22 June 2022",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    title: "8 Different Types of Cybersecurity and Threats Involved",
    description:
      "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
    date: "10 June 2022",
    comments: "No Comments",
  },
];

// This the Main App Component
function App() {
  // this menu is set to show or disable the menu in small screen
  const [menu, setMenu] = useState(false);
  const course = Coures_Details;

  return (
    <div className="App">
      {/* The nav contains all the required details like link names, menu icon and a title */}
      <nav>
        <h1 className="title">Category</h1>
        <div
          className="menu"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <hr></hr>
        <ul className={menu ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={() => setMenu(false)}>
              ALL
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/full-stack-development"
              onClick={() => setMenu(false)}
            >
              FULL STACK DEVELOPMENT
            </NavLink>
          </li>
          <li>
            <NavLink to="/data-science" onClick={() => setMenu(false)}>
              DATA SCIENCE
            </NavLink>
          </li>
          <li>
            <NavLink to="/cyber-security" onClick={() => setMenu(false)}>
              CYBER SECURITY
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={() => setMenu(false)}>
              CAREERS
            </NavLink>
          </li>
          <hr className="w-75"></hr>
        </ul>
      </nav>
      {/* This container is used to display the diff. types of pages loading using router */}
      {/* All components all called when the link is clicked */}
      <div className="container main-container">
        <Routes>
          <Route path="/" element={<All details={course} />} />
          <Route
            path="/full-stack-development"
            element={<FullStack details={course} />}
          />
          <Route
            path="/data-science"
            element={<DataScience details={course} />}
          />
          <Route
            path="/cyber-security"
            element={<CyberSecurity details={course} />}
          />
          <Route path="/careers" element={<Careers details={course} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
