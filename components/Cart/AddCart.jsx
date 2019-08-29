
const handleClick = (e) =>  {
    console.log('Free pizza!');
    console.log(e);
}

const AddToCart = () => (

    <div>
        <button type="button" class="btn btn-primary" onClick={handleClick}>Buy me</button>
    </div>

)

export default AddToCart;