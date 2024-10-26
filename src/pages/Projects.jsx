import Divider from "../components/Divider.jsx";
import Scroll from "../components/ScrollIndicator.jsx";

function Projects() {
  return (
    <div className="container-border">
      <h1>Projects</h1>
      <img src='./src/assets/programming.png' alt='Programming Image' className="project-img"></img>
      <p className="project-description">I've found over the years that programming can be an intimidating subject to navigate, so what better way to break down those walls than to go figure it out. Here's a few projects that I have taken on due to my curosity.</p>
      <Scroll/>

      <div className="project-container">
        <h2 className="game-dev-title">Game Development</h2>
        <p className="game-dev-desc">I've recently developed a strong passion for game development and game design, finding joy in the blend of creativity, storytelling, and technical skill required in building immersive experiences. This new interest has led me to explore various aspects of the gaming process—from brainstorming unique characters to designing levels and environments. I began learning about <b>coding</b>, <b>3D modeling</b>, and <b>animation</b>, diving into software like <b>Unreal Engine</b> and <b>Blender</b>.</p>

        <h3 className="unreal-title">Unreal Engine</h3>
        <p className="unreal-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien orci, hendrerit vitae magna in, finibus iaculis urna. Duis nibh metus, aliquam in quam eu, tempor egestas est. Nam turpis augue, pharetra et vestibulum nec, dapibus ut mi. Donec eleifend ullamcorper leo, vitae luctus diam volutpat in. Nam id fermentum nunc. Cras non augue odio. Pellentesque tempor eget ligula vel tristique. Praesent sem est, convallis et porttitor sed, scelerisque sit amet odio. Vestibulum a dui eu leo mattis porta nec at ante.</p>

        <h3 className="blender-title">Blender</h3>
        <p className="blender-desc">Throughout my career, I've often sought a creative outlet in my work, something that allowed me to leave my personal mark. But I found myself in two challenging situations: first, coming from a very technical background, and second, having little idea how to express my creativity within game development. After some research, I stumbled upon Blender. It wasn’t intuitive at first, but with time and practice, I created several models and animations that I’m genuinely proud of!</p>
      </div>

      <Divider />

      <div className="project-container">


      </div>

    </div>
  );
}

export default Projects;