import './styles.css'

const InputBox = ({symbol}) => {
    return (
        <div className="input-box flex justify-between p-1">
            <div>{symbol}</div>
            <input className="text-right" type="number" placeholder="0" />
        </div>
    )
}

export default InputBox