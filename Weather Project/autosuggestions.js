let suggestedkeywords=[
    'Delhi',
    'Kolkata',
    'Mumbai',
    'Tokyo',
    'Beijing',
    'Bangalore',
    'Dubai',
    'Denver',
    'Darjeeling',
    'Doha',
    'Denmark',
    'Mawsynram',
    'Russia',
    'leh',
    'pune'

];

const suggestionBox=document.querySelector(".suggestion-box")
const inputBox=document.querySelector("#search")

inputBox.onkeyup=function(){
    let  suggest=[];
    let input=inputBox.value;
    if(input.length){
        suggest=suggestedkeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(suggest);
    }
    display(suggest);
    if (!suggest.length){
        suggestionBox.innerHTML=' '
    }
}
function display(suggest){
    const content = suggest.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    suggestionBox.innerHTML="<ul>" + content.join('')+"</ul>";
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    suggestionBox.innerHTML='';
}
