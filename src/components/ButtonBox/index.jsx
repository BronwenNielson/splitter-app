import SmallButton from "../SmallButton"

const ButtonBox = () => {
    return (
        <div className="flex flex-wrap">
            <SmallButton info='5%' />
            <SmallButton info='10%' />
            <SmallButton info='15%'/>
            <SmallButton info='25%'/>
            <SmallButton info='50%'/>
            <SmallButton info='Custom'/>
        </div>
    )
}

export default ButtonBox