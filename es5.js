// array methods 

 
var customer = [{
    
    id:"767562",
    name:"Cus 1 ",
    location:"Delhi"

},{
    
    id:"8767587",
    name:"Cus 1 ",
    location:"Delhi"

},{
    
    id:"877667",
    name:"Cus 2 ",
    location:"GGN"

}];

console.log(customer);



// filter 
var c01 = '';
var filter_customer = customer.filter(f => {
    
    c01 = f;
    return f.location === 'Delhi' && f.id === '767562';
});

console.log('---- after filter ----');
console.log(filter_customer);

console.log('c01- ', c01);

// map 

var map_customer = customer.filter(f=> f.location === 'Delhi').map(m => m.id);
console.log('---- after map ----');
console.log(map_customer);

// some 
var some_customer = customer.some(someF);

function someF(value) {
    return value.id == '767562';
}

console.log('---- after some ----');
console.log(some_customer);



















