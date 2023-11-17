import Avatar from "../../components/Avatar/Avatar"
import CoverImage from "../../components/CoverImage/CoverImage"
import GamesNavigation from "../../components/GamesNavigation/GamesNavigation"
import Overview from "../../components/Overview/Overview"
import './Homepage.css'


function Homepage() {

    return (
        <main className="Homepage">
            <div className="navigation">
                <GamesNavigation />
                <Avatar />
            </div>
            
            <div className="main">
                <CoverImage />
                
            </div>
            
            <div className="summary">
                <Overview />
            </div>
        </main>
    )

}

export default Homepage