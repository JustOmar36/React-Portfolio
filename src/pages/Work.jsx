import Divider from "../components/Divider.jsx";
import Scroll from "../components/ScrollIndicator.jsx";

function Work() {
  return (
    <div class="container-border">
      <h1>Work Experience</h1>
      <p className="work-description">Driving impact through data analytics, process optimization, and automation. With expertise in <b>data migration</b>, <b>dashboard development</b>, and <b>automation</b> using <b>Python</b> and <b>SQL</b>, I enhance decision-making and streamline workflows. Skilled in collaborating with stakeholders to deliver insights through interactive dashboards, real-time reporting, and data cleanup solutions, my work bridges technical precision with cross-functional impact. Passionate about transforming data into actionable strategies to support growth and efficiency. Visit my <a href = "https://docs.google.com/document/d/1GK-HvtB42Tm8Yhrtj_MgmOUbOnObfs1TEq_Ax1vrgc8/edit?usp=sharing" target="_blank">Resume</a> for more information</p>
      <Scroll />
      <Divider text="University of Minnesota ISSS" description="Database Coordinator - 2024"/>
      <Divider text="Allies for Community" description="Data Analyst - 2024"/>
      <Divider text="State of Minnesota IT" description="Data Analyst and Integration Specialist - 2023"/>
      <p className="intern">SPS Commerce</p>
      <p className="intern-position">Software Engineer Intern - 2021</p>
    </div>
  );
}

export default Work;