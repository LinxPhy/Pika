import './CoverImage.css'
import Background from '../../assets/images/PokemonYellow.webp'

const CoverImage = () => {

    return (
        <div className="cover">
            <img src={Background}></img>

            <div className='cover-title'>
                <h2>Pokemon Yellow</h2>
            </div>

        </div>
    )

}

export default CoverImage