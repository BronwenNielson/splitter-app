import { useState } from 'react'
import InputBox from '../InputBox'
import SmallButton from '../SmallButton'
import ResultBox from '../ResultBox'
import BigButton from '../BigButton'
import './styles.css'

const MainBox = () => {
    
    const [billAmount, setBillAmount] = useState(0)
    const [peopleAmount, setPeopleAmount] = useState(0)
    const [tipTotal, setTipTotal] = useState(0)

    const billChange = (e) => {
        setBillAmount(e.target.value)
    }

    const peopleChange = (e) => {
        setPeopleAmount(e.target.value)
    }

    const tipFive = () => {
        setTipTotal(billAmount * 0.05 / peopleAmount)
    }

    const tipTen = () => {
        setTipTotal(billAmount * 0.10 / peopleAmount)
    }

    const tipFifteen = () => {
        setTipTotal(billAmount * 0.15 / peopleAmount)
    }

    const tipTwentyfive = () => {
        setTipTotal(billAmount * 0.25 / peopleAmount)
    }

    const tipFifty = () => {
        setTipTotal(billAmount * 0.50 / peopleAmount)
    }

    const billTip = billAmount + tipTotal

    const finalTotal = billTip / peopleAmount
    
    return (
        <div className='main-box bg-white mt-48 rounded-lg flex justify-stretch p-7'>
            <div className="w-2/4">
            <div>
                <p>Bill</p>
                <InputBox symbol='£' valueChange={billChange} />
            </div>
            <div>
                <p>Select Tip %</p>
                <div className="flex flex-wrap w-full">
                    <SmallButton info='5%' btnClick={tipFive} />
                    <SmallButton info='10%' btnClick={tipTen} />
                    <SmallButton info='15%' btnClick={tipFifteen}/>
                    <SmallButton info='25%' btnClick={tipTwentyfive}/>
                    <SmallButton info='50%' btnClick={tipFifty}/>
                    <SmallButton info='Custom'/>
                </div>
            </div>
            <div>
                <p>Number of People</p>
                <InputBox symbol={<i className="fa-solid fa-user"></i>} valueChange={peopleChange} />
            </div>
        </div>
        <div className="right-side w-2/4 rounded-lg p-5">
            <div>
                <ResultBox title='Tip Amount' amount={tipTotal} />
                <ResultBox title='Total' amount={finalTotal} />
            </div>
            <BigButton />
        </div>
        </div>
    )
}

export default MainBox