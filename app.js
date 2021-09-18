var init = function(subfunction)
{
    console.log(subfunction())
}

var test = function()
{
    return "test";
}

init(test);