function app_init()
{
    document.write("<h2 id='header.headline'>Test</h2>");
    document.write("<div id='header.nav'>Dies ist ein Test</div>");
    document.getElementById("header.headline").onclick = function()
    {
        if (document.getElementById("header.headline").getAttribute("style") === "color:blue;") {
            document.getElementById("header.headline").innerText = "Dieser Text ist Rot";
            document.getElementById("header.headline").setAttribute("style","color:red;");
            document.getElementById("header.headline").setAttribute("align","left");
        } else {
            document.getElementById("header.headline").innerText = "Dieser Text ist Blau";
            document.getElementById("header.headline").setAttribute("style","color:blue;");
            document.getElementById("header.headline").setAttribute("align","center");
        }
    };


    document.getElementById("header.nav").onclick = function()
    {
        const child = document.createElement("<div>Dieser Text ist Rot</div>");
        if (document.getElementById("header.nav").hasChildNodes()) {
            document.getElementById("header.nav").appendChild(child);
        } else {
            document.getElementById("header.nav").removeChild(child);
        }
    };

}



function test()
{
    
    
}

function setText(demo)
{
    document.getElementById(demo).innerText = "text123";
    
}
