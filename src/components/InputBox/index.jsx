import './styles.css'

const InputBox = ({symbol, valueChange}) => {
    return (
        <div className="input-box flex justify-between p-1">
            <div>{symbol}</div>
            <input onInput={valueChange} className="text-right" type="number" placeholder="0" />
        </div>
    )
}

export default InputBox