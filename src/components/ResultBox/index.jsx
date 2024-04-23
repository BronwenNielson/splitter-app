
const ResultBox = ({title, amount}) => {
    return (
        <div className="flex">
            <div>
                <p>{title}</p>
                <p>/ person</p>
            </div>
            <div>
                <p>£{amount}</p>
            </div>
        </div>
    )
}

export default ResultBox