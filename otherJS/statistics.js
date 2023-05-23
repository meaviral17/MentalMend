var alldata=[
    {
        label: 'United States',
        data: [0.33, 0.65, 3.45, 4.84, 2.04, 6.64],
        borderColor: '#00B7A8',
        borderWidth:2,
        tension:0,

    },
    {
        label: 'United Kingdom',
        data: [0.26, 1.09, 1.66, 4.12, 1.90, 4.65],
        borderColor: 'blue',
        borderWidth:2,
        tension:0,

    },
    {
        label: 'World',
        data: [0.25, 0.60, 0.94, 3.44, 1.40, 3.76],
        borderColor: '#1C2B2D',
        borderWidth:2,
        tension:0,
    }
];


// +++++++++++++++++++++++++ ADDING CHART ++++++++++++++++++++++++++++++++++++


var canvas = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: [
                    'Schizophrenia',
                    'Bipolar disorder',
                    'Drug use disorders',
                    'Depression',
                    'Alcohol use disorders',
                    'Anxiety disorders'
                ],
        datasets: alldata,
    },
    options: {
        scales: {
            y: {
                ticks: {
                    
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false
          },
    }
});




// ++++++++++++++++++++++++++ CHOOSE THE COUNTRY +++++++++++++++++++++++++++++++


const countryList=document.querySelector('#country-dropDown');


for(let i=0;i<data.length;i++){

    let option=document.createElement('option');

    option.innerHTML=data[i]['label'];

    option.setAttribute('value',`${data[i]['label']}`);


    countryList.appendChild(option);


}


// random Color picker

var colorHexCodeLetter=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
var colorString='#';
var randomNum;

function randomColorPicker(){
    colorString="";
    for(let i=0;i<6;i++){
        randomNum=Math.floor(Math.random()*colorHexCodeLetter.length);
        colorString+=`${colorHexCodeLetter[randomNum]}`
    
    }

    return colorString;
}




function updateChart(SelectedcountryName){


    for(let i=0;i<alldata.length;i++){
        if(SelectedcountryName===alldata[i]["label"]){
            return;
        }
    }
  

    for(let i=0;i<data.length;i++){

        if(data[i]['label']===SelectedcountryName){

            data[i]["borderColor"]=`#${randomColorPicker()}`;
            data[i].borderWidth= 2;
            data[i].tension=0;
            data[i].backgroundColor='transparent';

            alldata.push(data[i]);
            break;
        }

    }

    myChart.update();
}


function addCountry(countryName){
    let nameOfTheSelectedCountry=countryName.value

    if(nameOfTheSelectedCountry!="none"){
     
        updateChart(nameOfTheSelectedCountry);
    }

}



// ++++++++++++++++++++++++++++ REMOVE COUNTRY FROM CHART +++++++++++++++++++++++++++


const removeCountryBtn=document.querySelector('.remove-country-btn');

const errorBtn=document.querySelector('.error-btn');
const wholeChartCont=document.querySelector('.whole-staticstics-cont');
const errorMsgCont=document.querySelector('.error-msg-cont');


function removeCountryFromChart(){

    if(alldata.length!==0){
        alldata.pop();
    
        try{
            myChart.update();
        }catch(err){
            wholeChartCont.classList.add('blur-background');
            errorMsgCont.style.display="block";
    
            errorBtn.addEventListener('click',()=>{
                window.location.reload();
            })

        }
        
    }
    
}



removeCountryBtn.addEventListener('click',()=>{
    removeCountryFromChart();
})










