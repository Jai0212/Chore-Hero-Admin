import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ selectedHero }) => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add-all-service' className="sidebar-option">
                    <p>Add to All Services</p>
                </NavLink>
                {selectedHero && (
                    <>
                        <NavLink to='/add-personal-service' className="sidebar-option">
                            <p>Add Personal Service</p>
                        </NavLink>
                        <NavLink to='/edit-personal-service' className="sidebar-option">
                            <p>Edit Personal Services</p>
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    )
}

export default Sidebar