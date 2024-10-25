import Divider from "../components/Divider.jsx";
import Scroll from "../components/ScrollIndicator.jsx";

function Work() {
  return (
    <div className="container-border">
      <header>
        <h1>Work Experience</h1>
        <img src="/src/assets/data-report.png" alt="data analysis" className="data-img"></img>
        <p className="work-description">Driving impact through data analytics, process optimization, and automation. With expertise in <b>data migration</b>, <b>dashboard development</b>, and <b>automation</b> using <b>Python</b> and <b>SQL</b>, I enhance decision-making and streamline workflows. Skilled in collaborating with stakeholders to deliver insights through interactive dashboards, real-time reporting, and data cleanup solutions, my work bridges technical precision with cross-functional impact. Passionate about transforming data into actionable strategies to support growth and efficiency. Visit my <a href = "https://docs.google.com/document/d/1GK-HvtB42Tm8Yhrtj_MgmOUbOnObfs1TEq_Ax1vrgc8/edit?usp=sharing" target="_blank">Resume</a> for more information</p>
      </header>
      <Scroll height="400px"/>
      <p className="intern">University of Minnesota ISSS</p>
      <p className="intern-position">Database Coordinator - 2024</p>
      <Divider />
      <p className="intern">Allies for Community</p>
      <p className="intern-position">Data Analyst - 2024</p>
      <Divider />
      <p className="intern">State of Minnesota IT</p>
      <p className="intern-position">Data Analyst and Integration Specialist - 2023</p>
      <Divider />
      <p className="intern">SPS Commerce</p>
      <p className="intern-position">Software Engineer Intern - 2021</p>
    </div>
  );
}

export default Work;