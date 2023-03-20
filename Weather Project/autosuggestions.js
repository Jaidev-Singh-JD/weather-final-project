let suggestedkeywords=[
    'Delhi','Iran','Coimbatore','Madurai','Thiruvananthapuram',
    'Kolkata','Nepal','Mysuru','Puducherry','Salem',
    'Mumbai','Sri lanka','Kochi','Tirunelveli','Warangal',
    'Tokyo','Bangladesh','Jabalpur','Ooty',
    'Beijing','Hong kong','Bhopal',
    'Bangalore','Amstelveen','Patna',
    'Dubai','Chennai','Mangalore',
    'Denver','Chicago','Agra',
    'Darjeeling','Copenhagen','Kashmir',
    'Doha','Düsseldorf','Goa',
    'Denmark','Germany','Sydney',
    'Mawsynram','Gurgaon','New york',
    'Russia','Helsinki','Shanghai',
    'leh','Hyderabad','Los Angeles',
    'pune','London','Singapore'

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
