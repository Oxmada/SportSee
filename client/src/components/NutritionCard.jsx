import { useEffect, useState } from 'react';
import { useUser } from './UserContext';
import { getUser } from '../services/api';
import energyIcon from '../assets/energy.svg';
import chickenIcon from '../assets/chicken.svg';
import appleIcon from '../assets/apple.svg';
import cheeseburgerIcon from '../assets/cheeseburger.svg';

function NutritionCard() {
    const { userId, useMock } = useUser();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUser(userId, useMock);
                setData(user);
            } catch (error) {
                console.error('Erreur chargement données nutritionnelles :', error);
            }
        }
        fetchData();
    }, [userId, useMock]);

    if (!data) return null;

    return (
        <div className="nutritionCards">
            <div className="card red">
                <div className='icon-container'><img src={energyIcon} alt="flamme" /></div>
                <div className='text-container'>
                    <p className='value'>{data.calorie}kCal</p>
                    <span className='label'>Calories</span>
                </div>
            </div>
            <div className="card blue">
                <div className='icon-container'><img src={chickenIcon} alt="Protéines" /></div>
                <div className='text-container'>
                    <p className='value'>{data.protein}g</p>
                    <span className='label'>Proteines</span>
                </div>
            </div>
            <div className="card yellow">
                <div className='icon-container'><img src={appleIcon} alt="Glucides" /></div>
                <div className='text-container'>
                    <p className='value'>{data.carbohydrate}g</p>
                    <span className='label'>Glucides</span>
                </div>
            </div>
            <div className="card pink">
                <div className='icon-container'><img src={cheeseburgerIcon} alt="Lipides" /></div>
                <div className='text-container'>
                    <p className='value'>{data.lipid}g</p>
                    <span className='label'>Lipides</span>
                </div>
            </div>
        </div>
    );
}

export default NutritionCard;


