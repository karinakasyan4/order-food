const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () =>{
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }
    const remoteQuantity = () => {
        if (quantity <= 1)return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }

    return(
        <div>
            <button onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={remoteQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;