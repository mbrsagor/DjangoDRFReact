import axios from 'axios';
const API_URL = 'http://localhost:8000';


export default class CustomersHelper{
    
    getCustomers() {
        const url = `${API_URL}/api/customers/`;
        return axios.get(url).then(response => response.data);
    }  
    getCustomer(id) {
        const url = `${API_URL}/api/customers/${id}/`;
        return axios.get(url).then(response => response.data);
    }
    deleteCustomer(customer){
        const url = `${API_URL}/api/customers/${customer.id}/`;
        return axios.delete(url);
    }
    createCustomer(customer){
        const url = `${API_URL}/api/customers/`;
        return axios.post(url,customer);
    }
    updateCustomer(customer){
        const url = `${API_URL}/api/customers/${customer.id}/`;
        return axios.put(url,customer);
    }
}
