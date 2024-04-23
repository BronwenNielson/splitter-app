import LeftSide from '../LeftSide'
import RightSide from '../RightSide'
import './styles.css'

const MainBox = () => {
    return (
        <div className='main-box bg-white mt-48 rounded-lg flex justify-stretch p-7'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default MainBox