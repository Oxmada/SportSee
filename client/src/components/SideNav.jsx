import MeditateIcon from '../assets/meditate_icon.svg';
import SwimIcon from '../assets/swim_icon.svg';
import BikeIcon from '../assets/bike_icon.svg';
import DumbbellIcon from '../assets/dumbbell_icon.svg';
function SideNav() {
    return (
        <div className="side-nav">
            <div className='icon-container'>
                <div className="side-icon">
                    <img src={MeditateIcon} alt="Meditate Icon" />
                </div>
                <div className="side-icon">
                    <img src={SwimIcon} alt="Meditate Icon" />
                </div>
                <div className="side-icon">
                    <img src={BikeIcon} alt="Meditate Icon" />
                </div>
                <div className="side-icon">
                    <img src={DumbbellIcon} alt="Meditate Icon" />
                </div>
            </div>
            <div className='side-p'>
                <p>Copiryght, SportSee 2020</p>
            </div>
        </div>

    );
}

export default SideNav;
