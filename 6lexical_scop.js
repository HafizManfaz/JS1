let var1 = 5;
let outer_function = ()=>
{
    let inner_function1 = ()=>
    {
            let inner_function2 = ()=>
        {
                let inner_function3 = ()=>
            {
                console.log(var1);
            }
            inner_function3();
        }
        inner_function2();
    }
    inner_function1();

}
outer_function();

// a body where a varible or function is defined is called its lexical scop 
// every function find first its member inside itself then its lexical scop 
