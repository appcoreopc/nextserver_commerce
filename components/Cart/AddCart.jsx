const AddToCart = (a) => (

    <div>
        <button className="btn btn-primary" type="button" onClick={
            () =>
            {
            console.log(a)
            //addCartItem('1');
            }        
        }      
        >Buy me</button>
    </div>
)

export default AddToCart;