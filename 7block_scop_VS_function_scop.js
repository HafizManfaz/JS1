// let and const are block scop 
// var is function scop 
{
    let variable1 = 2;
}

// variable1 can not be assecc outside the block 
{
    const variable2 = 2;
}

// variable2 can not be assecc outside the block 
// console.log(variable2)

{
    var variable3 = 2;
}

// variable3 can be assecc outside the block because it is function scop.
console.log(variable3)