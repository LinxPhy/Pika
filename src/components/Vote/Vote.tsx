import './Vote.css'
import Image from '../../assets/images/Ash.png'
import Arrow from '../../assets/arrow-right.png'


function Vote() {

    return (
        <div className='Vote defaultStyle'>
            <img src={Image}></img>
            <button>
                Vote Here
                <img src={Arrow} width={20}></img>
            </button>
        </div>
    )

}

export default Vote