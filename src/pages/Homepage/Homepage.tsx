import Article from "../../components/Article/Article"
import Avatar from "../../components/Avatar/Avatar"
import CoverImage from "../../components/CoverImage/CoverImage"
import GamesNavigation from "../../components/GamesNavigation/GamesNavigation"
import Information from "../../components/Information/Information"
import Overview from "../../components/Overview/Overview"
import Selection from "../../components/Selection/Selection"
import StatsNavigation from "../../components/StatsNavigation/StatsNavigation"
import Vote from "../../components/Vote/Vote"
import './Homepage.css'


function Homepage() {

    return (
        <main className="Homepage">
            <div className="navigation">
                <GamesNavigation />
                <Selection />
                <Avatar />
            </div>
            
            <div className="main">
                <CoverImage />
                <StatsNavigation />
                <div className="moreContent">
                    <Information />
                    <Vote />
                </div>
                <div className="main-article">
                    <Article />
                </div>
                
            </div>
            
            <div className="summary">
                <Overview />
            </div>
        </main>
    )

}

export default Homepage