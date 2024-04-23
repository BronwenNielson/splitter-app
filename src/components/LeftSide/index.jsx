import ButtonBox from "../ButtonBox"
import InputBox from "../InputBox"

const LeftSide = () => {
    return (
        <div className="w-2/4">
            <div>
                <p>Bill</p>
                <InputBox symbol='£' />
            </div>
            <div>
                <p>Select Tip %</p>
                <ButtonBox />
            </div>
            <div>
                <p>Number of People</p>
                <InputBox symbol={<i class="fa-solid fa-user"></i>} />
            </div>
        </div>
    )
}

export default LeftSide