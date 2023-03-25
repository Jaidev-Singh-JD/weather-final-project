/* let suggestedkeywords=[
    'Delhi','Iran','Coimbatore','Madurai','Thiruvananthapuram','Shimla',
    'Kolkata','Nepal','Mysuru','Puducherry','Salem','Greater Noida',
    'Mumbai','Sri lanka','Kochi','Tirunelveli','Warangal','Uttar Pradesh',
    'Tokyo','Bangladesh','Jabalpur','Ooty','Australia','Jammu','Gujrat','Bihar',
    'Beijing','Hong kong','Bhopal','Ujjain','China','Karnataka',
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
*/

const debounce = (func, delay) => {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    };
};

const searchInput = document.querySelector("#search");
const suggestionsList = document.querySelector(".suggestion-box");


const showSuggestions = (input) => {
    const url = `https://api.openweathermap.org/data/2.5/find?q=${input}&type=like&sort=population&cnt=5&appid=23f88dd19a408b48dc54ac3d48402709`; 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.list)
            const matchingCities = data.list.map(city => city.name); 
            // console.log(matchingCities)
            const html = matchingCities.map(city => `<li onclick=selectInput(this)>${city}</li>`);
            // console.log(html)
            suggestionsList.innerHTML = "<ul>" + html.join('') + "</ul>";
        })
        .catch(error => console.error(error));
};


const handleInput = () => {
        const input = searchInput.value;
        if (input === "") {
                suggestionsList.innerHTML = "";
    } else {
            showSuggestions(input);
        }
};

const debounceInput = debounce(handleInput, 1000);

searchInput.addEventListener("input", debounceInput);

function selectInput(list) {
        searchInput.value = list.innerHTML;
        suggestionsList.innerHTML = '';
    }
    
