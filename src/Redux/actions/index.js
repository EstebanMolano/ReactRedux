import axios from 'axios'


export const SHOW_PRODUCTS = 'SHOW_PRODUCTS'

export function showProducts() {

    return (dispatch) => {
        axios.get('https://my-json-server.typicode.com/EstebanMolano/challengueReact/products')
            .then((response) => {
                console.log(response)
                dispatch( { type: SHOW_PRODUCTS, payload: response.data } ) 
            }) 
    }
    
    
}

export const ADD_TO_ORDERER ='ADD_TO_ORDERER'

export function addToOrderer(precio) {

    return {
        type : ADD_TO_ORDERER,
        payload : precio
    }
    
}