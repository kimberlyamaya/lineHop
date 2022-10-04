import axios from "axios";


export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses/search",
    headers : {
        Authorization : "Bearer WgAQ6YxI9tWTzhVMYhrG7td2LqjCZ8_fHDvKIrK4Sh9rFLokO17B8IDbjeppQjjRXcZNIwYVQeGNbAecj740ft_wj3c_a3tFaMmmm5T_dcMoHy7dRQVTh8QAhvI7Y3Yx "
    }

});