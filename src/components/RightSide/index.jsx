import BigButton from '../BigButton'
import ResultBox from '../ResultBox'
import './styles.css'


const RightSide = () => {
    return (
        <div className="right-side w-2/4 rounded-lg p-5">
            <div>
                <ResultBox title='Tip Amount' amount='0.00' />
                <ResultBox title='Total' amount='0.00' />
            </div>
            <BigButton />
        </div>
    )
}

export default RightSide