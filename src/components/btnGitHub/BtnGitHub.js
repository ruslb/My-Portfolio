import gitHubIcon from './gitHub-black.svg';
import "./style.css"


const  BtnGitHub = ({link}) => {
	return ( 
		<a href={link} target="_blanck" rel="nereferrer" className="btn-outline" >
		<img src={gitHubIcon} alt=""/>
		GitHub repo
	  </a>
	 );
}
 
export default BtnGitHub;