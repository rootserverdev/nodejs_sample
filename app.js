function init(subfunction1)
{
    document.write(subfunction1())
}

function test()
{
    return "test1";
}

init(test);