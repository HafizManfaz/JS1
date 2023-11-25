// 3- arrow function methoed 1
const function_name =(para1) => 
{
    return para1+1;
}
// 2- arrow function methoed 2
const function_name1 = para1 => // here if function have only a single parameter then this approach will be used 
{
    return para1+2;
}

// 3- arrow function methoed 3
const function_name2 = para1 => para1+3; // here if body have only a single line then this approach will be used 

console.log(function_name(1))
console.log(function_name1(1))
console.log(function_name2(1))
