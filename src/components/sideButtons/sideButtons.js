import "./sideButtons.css";
import GitHub from "../../assets/images/icons/GitHub.svg";
import LinkedIn from "../../assets/images/icons/LinkedIn.svg";
import Mail from "../../assets/images/icons/Mail.svg";
import Dev from "../../assets/images/icons/Dev.svg";
import Codechef from "../../assets/images/icons/codechef.svg";
import UpArrow from "../../assets/images/icons/UpArrow.svg";
import DownArrow from "../../assets/images/icons/DownArrow.svg";

function SideButton() {
	return (
		<>
			<div className='SideButtonBar d-none d-lg-block'>
				<a href='#top'>
					<div className='upButton'>
						<img src={UpArrow} alt='UpArrow icon' className='upIcon'></img>
					</div>
				</a>

				<a href='#bottom'>
					<div className='downButton'>
						<img src={DownArrow} alt='DownArrow icon' className='downIcon'></img>
					</div>
				</a>
			</div>
			<div className='iconBar'>
				<div className='iconButton'>
					<a
						href='https://github.com/tusharjain0022'
						className='link'
						target='_blank'
						rel='noreferrer'>
						<img src={GitHub} alt='github icon' className='socialIcons'></img>
					</a>
				</div>
				<div className='iconButton'>
					<a
						href='https://www.linkedin.com/in/tusharjain0022/'
						className='link'
						target='_blank'
						rel='noreferrer'>
						<img src={LinkedIn} alt='LinkedIn icon' className='socialIcons'></img>
					</a>
				</div>
				<div className='iconButton'>
					<a
						href='mailto:tusharjain0022@gmail.com'
						className='link'
						target='_blank'
						rel='noreferrer'>
						<img src={Mail} alt='Mail icon' className='socialIcons'></img>
					</a>
				</div>
				<div className='iconButton'>
					<a
						href='https://dev.to/tusharjain0022'
						className='link'
						target='_blank'
						rel='noreferrer'>
						{" "}
						<img src={Dev} alt='Dev icon' className='socialIcons'></img>
					</a>
				</div>
				<div className='iconButton'>
					<a
						href='https://www.codechef.com/users/tusharjain0022'
						className='link'
						target='_blank'
						rel='noreferrer'>
						<img src={Codechef} alt='Codechef icon' className='socialIcons'></img>
					</a>
				</div>
			</div>
		</>
	);
}

export default SideButton;
