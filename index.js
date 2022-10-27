console.log("hello access")

function increment()
{
    let currentCountElement= document.querySelector("h1");
    let currentCount = parseInt(currentCountElement.innerText);
    let updatedCount = currentCount +1 ;
    currentCountElement.innerText=updatedCount;

    if
    ((document.querySelector("h1").innerText%5==0)&&(document.querySelector("h1").innerText!=0))
        { document.querySelector("h1").style.color="red"
        console.log("hello");}
        else{document.querySelector("h1").style.color="black";}
}

function decrement()
{
    let currentCountElement= document.querySelector("h1");
    let currentCount = parseInt(currentCountElement.innerText);
    let updatedCount = currentCount -1 ;
    currentCountElement.innerText= updatedCount;

    if
    ((document.querySelector("h1").innerText%5==0)&&(document.querySelector("h1").innerText!=0))
        { document.querySelector("h1").style.color="red"
        console.log("hello");}
        else{document.querySelector("h1").style.color="black";}
}