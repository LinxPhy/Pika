import './Header.css'

import Home from '../../assets/home.png'
import Globe from '../../assets/globe.png'
import Content from '../../assets/content.png'
import Timeline from '../../assets/timeline.png'
import Search from '../../assets/search.png'

const Header = () => {

    return (
        <header>
            <span className="title">
                Pika
            </span>

            <nav>
                <ul>
                    <li className='header-wrapper'>
                        <img src={Home}></img>
                        Home
                        <span></span>
                    </li>

                    <li className='header-wrapper'>
                        <img src={Globe}></img>
                        Explore
                        <span></span>
                    </li>

                    <li className='header-wrapper'>
                        <img src={Timeline}></img>
                        Timeline
                        <span></span>
                    </li>

                    <li className='header-wrapper'>
                        <img src={Content}></img>
                        Reviews
                        <span></span>
                    </li>
                </ul>
            </nav>

            <div className='header-items'>
                <img src={Search} className='header-wrapper'></img>
                <button>Sign In</button>
            </div>
        </header>
    )

}

export default Header