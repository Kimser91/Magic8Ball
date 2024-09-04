updateView();
function updateView() 
{
    document.getElementById('app').innerHTML = /*html*/ 
    `
    <div class="outerBall">
    <div class="innerBall">${givenAnswer}</div>
    </div>
    <button id="myButton" onclick="getAnswer()">Get advise</button>
    `
}