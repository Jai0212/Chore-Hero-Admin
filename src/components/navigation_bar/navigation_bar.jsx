import React from 'react'
import './navigation_bar.css'
import { assets, list_of_heroes, getHeroImage } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const NavigationBar = ({ selectedHero, setSelectedHero }) => {

    const handleChange = (event) => {
        setSelectedHero(event.target.value);
    };

    return (
        <div className='navigation-bar'>
            <NavLink to='/'>
                <img src={assets.logo} alt="" className='logo' />
            </NavLink>
            <div className='right-container'>
                <select className='hero-dropdown' id="hero-dropdown" value={selectedHero} onChange={handleChange} required>
                    <option value="" disabled>Select hero</option>
                    {list_of_heroes.map((hero, index) => (
                        <option key={index} value={hero.hero_name}>
                            {hero.hero_name}
                        </option>
                    ))}
                </select>
                <img src={selectedHero ? getHeroImage(selectedHero) : assets.profile_icon} alt="" className='profile-image' />
            </div>
        </div>
    )
}

export default NavigationBar