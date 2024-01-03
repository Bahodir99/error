import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/img/logo.svg'
import './Header.scss'


function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <nav className='header__nav'>
                        <Link to='/' className='header__logo'>
                            <img src={logo} alt="" />
                            <h1 className='header__title'>Eco Cabins</h1>
                        </Link>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <a href="#">Modellen</a>
                            </li>
                            <li className='header__item'>
                                <a href="#">Kopen</a>
                            </li>
                            <li className='header__item'>
                                <a href="#">Huren</a>
                            </li>
                            <li className='header__item'>
                                <a href="#">Nieuws</a>
                            </li>
                            <li className='header__item'>
                                <button className='header__btn'>Contact</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header