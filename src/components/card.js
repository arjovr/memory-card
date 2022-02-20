const Card = (props) => {
    return (
        <div className="card" onClick={() => props.clickCb(props.name)}>{props.name}</div>
    )
}

export { Card }
