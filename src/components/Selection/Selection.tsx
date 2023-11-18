import './Selection.css'
import Pokemon from '../../assets/images/PokemonYellow.webp'

const Selection = () => {

    return (
        <div className="Selection defaultStyle">
            <img src={Pokemon} alt='image'></img>
            <p>Pokemon Yellow</p>
        </div>
    )

}

export default Selection