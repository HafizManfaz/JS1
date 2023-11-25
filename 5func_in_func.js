// inner function is only callable inside the outer function
function outer_function()
{
    let inner_function0 = () => "this is inner function0";
    let inner_function1 = () => "this is inner function1";
    let inner_function2 = () => "this is inner function2";
    console.log("this is outer function.");
    console.log(inner_function0());
    console.log(inner_function1());
    console.log(inner_function2());


}

outer_function();