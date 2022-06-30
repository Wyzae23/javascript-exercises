const removeFromArray = function() 
{
    console.log(arguments);
    let arr = arguments[0];
    for(let i = 1; i < arguments.length; i++)
    {
        let idx = arr.indexOf(arguments[i]);
        if(idx >= 0 && idx < arr.length)
        {
            arr.splice(idx, 1);
        }
        
    }

    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
