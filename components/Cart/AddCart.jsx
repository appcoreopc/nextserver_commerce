
const handleClick = (e) =>  {
   
    fetch('http://www.google.com')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
}

const AddToCart = () => (

    <div>
        <button type="button" class="btn btn-primary" onClick={handleClick}>Buy me</button>
    </div>

)

export default AddToCart;