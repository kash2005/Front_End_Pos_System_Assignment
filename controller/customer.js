import {CustomerModel} from "../model/customer_model.js"
import {Customer_api} from "../api/customer_api.js";

let customerPage = $('#customer_form');

let addCustomerBtn = $('#addBtn');

let customerApi = new Customer_api();

addCustomerBtn.eq(0).on('click',function (){
    console.log("add");
    generateCustomerId();
});

function generateCustomerId(){
    customerApi.generateCustomerId();
}