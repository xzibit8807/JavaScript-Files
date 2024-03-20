import { productsURL } from "../Constants/index.js"
import	* as httpServices from "./http.js"

export function getProducts(){
    httpServices.get(productsURL)
}