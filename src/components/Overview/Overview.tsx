import './Overview.css'
import ProgressBar from 'react-customizable-progressbar'

const Overview = () => {

    const radius = 30
    const strokeWidth = 6
    const strokeLinecap = 'round'
    const trackStrokeColor = '#ffff'
    const trackStrokeWidth = 10
    const initialAnimation = true
    const transition = '1.5s ease'

    return (
        <div className='Overview defaultStyle'>

            <div>
                <p>Overview</p>

                <div className='scores'>
                    <ProgressBar 
                        className='ProgressiveBar Wins_ProgressiveBar'
                        radius={radius}
                        progress={55}
                        strokeWidth={strokeWidth}
                        strokeColor={'#f2c763'}
                        strokeLinecap={strokeLinecap}
                        trackStrokeColor={trackStrokeColor}
                        trackStrokeWidth={trackStrokeWidth}
                        counterClockwise
                        initialAnimation={initialAnimation}
                        transition={transition}
                    >
                        <p className='score'>55%</p>
                    </ProgressBar>
                </div>


                <p>Gameplay</p>

                <div className='scores'>
                    <ProgressBar 
                        className='ProgressiveBar Wins_ProgressiveBar'
                        radius={radius}
                        progress={25}
                        strokeWidth={strokeWidth}
                        strokeColor={'#f2c763'}
                        strokeLinecap={strokeLinecap}
                        trackStrokeColor={trackStrokeColor}
                        trackStrokeWidth={trackStrokeWidth}
                        counterClockwise
                        initialAnimation={initialAnimation}
                        transition={transition}
                    >
                        <p className='score'>25%</p>
                    </ProgressBar>
                </div>


                <p>Difficulty</p>

                <div className='scores'>
                    <ProgressBar 
                        className='ProgressiveBar Wins_ProgressiveBar'
                        radius={radius}
                        progress={80}
                        strokeWidth={strokeWidth}
                        strokeColor={'#f2c763'}
                        strokeLinecap={strokeLinecap}
                        trackStrokeColor={trackStrokeColor}
                        trackStrokeWidth={trackStrokeWidth}
                        counterClockwise
                        initialAnimation={initialAnimation}
                        transition={transition}
                    >
                        <p className='score'>80%</p>
                    </ProgressBar>
                </div>


                <p>Entertainment</p>

                <div className='scores'>
                    <ProgressBar 
                        className='ProgressiveBar Wins_ProgressiveBar'
                        radius={radius}
                        progress={10}
                        strokeWidth={strokeWidth}
                        strokeColor={'#f2c763'}
                        strokeLinecap={strokeLinecap}
                        trackStrokeColor={trackStrokeColor}
                        trackStrokeWidth={trackStrokeWidth}
                        counterClockwise
                        initialAnimation={initialAnimation}
                        transition={transition}
                    >
                        <p className='score'>10%</p>
                    </ProgressBar>
                </div>



                <p>Community</p>

                <div className='scores'>
                    <ProgressBar 
                        className='ProgressiveBar Wins_ProgressiveBar'
                        radius={radius}
                        progress={90}
                        strokeWidth={strokeWidth}
                        strokeColor={'#f2c763'}
                        strokeLinecap={strokeLinecap}
                        trackStrokeColor={trackStrokeColor}
                        trackStrokeWidth={trackStrokeWidth}
                        counterClockwise
                        initialAnimation={initialAnimation}
                        transition={transition}
                    >
                        <p className='score'>90%</p>
                    </ProgressBar>
                </div>

            </div>

        </div>
    )

}

export default Overview