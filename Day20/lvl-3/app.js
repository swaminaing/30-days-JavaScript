const colors = ['red', 'yellow', 'slateblue', 'violet', 'orange', 'dark', 'darkblue'];
const getWrapper = document.querySelector(".wrapper");
const getH1Span = document.querySelector("h1 span");
const getH2 = document.querySelector("h2");
const getLis = document.querySelectorAll("li");
const getFirstLi = document.querySelector("ul .first");
const getSecondLi = document.querySelector("ul .second");

document.body.style.fontFamily = "sans-serif";

let inlineStyle = `display:flex; justify-content: center; align-items: center; flex-direction: column;`;
getWrapper.style = inlineStyle;

getH2.style=  `text-decoration: underline; font-weight: 400;`;

getLis.forEach((li) => {
    li.style = `
        width: 700px;
        background-color: tomato;
        list-style: none;
        padding: 20px 1px;
        margin-bottom: 2px;
    `;
})

getFirstLi.style.backgroundColor = "green";
getSecondLi.style.backgroundColor = "yellow";

// getH1Span.style.color = ;



  

