import './styles.css'

const SmallButton = ({info, btnClick}) => {
    return (
        <button onClick={btnClick} className="sml-button w-1/4 m-1 p-3 rounded-lg">{info}</button>
    )
}
export default SmallButton