import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/02-big.jpg"


const Project = () => {
	return (
<main className="section">
 <div className="container">
  <div className="project-details">
	<hi className="title-1">Video service </hi>
    <img src={img} alt="" className="project-details__cover" />
	 <div className="project-details__desc" >
     <p> Skills: React,Node.js, MongoDB</p>
	   </div>
	

       <BtnGitHub link="http://github.com" />
	  </div>
	</div>
</main>
	  );
}
 
export default Project;