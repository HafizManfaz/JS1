// hoisting
// in the case of function declaration we can call the function before its declaration body this is called hoisting
console.log(fun_name());
function fun_name()
{
    return 2;
}