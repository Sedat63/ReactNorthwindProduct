import axios from "axios";

//Request atar
export default class ProductService{

    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
    }

    productAdd(product){
        return axios.post("http://localhost:8080/api/products/add?product="+product)
    }
    
}