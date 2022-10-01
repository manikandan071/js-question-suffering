
var qus=[{
    no:"What is the smallest header in HTML by default?",
    options:["h1","h2","h6","h5"],
    ans:"h6"
},{
    no:"How to create an ordered list in HTML?",
    options:["ol","ul","li","href"],
    ans:"ol"
},{
    no:"HTML files are saved by default with the extension?",
    options:[".html",".HTML","h",".text"],
    ans:".html"
},{
    no:"Which attribute is used to provide a unique name to an HTML element?",
    options:["class","id","type","name"],
    ans:"id"
},{
    no:"Which property is used to set border colors in HTML?",
    options:["border-color","border","outline","both a&b"],
    ans:"border"
},{
    no:"Any one block element",
    options:["input","output","p","summary"],
    ans:"p"
},{
    no:"Any one inline element",
    options:["section","ul","li","sup"],
    ans:"sup"
},{
    no:"Any one sematic element",
    options:["footer","span","ol","label"],
    ans:"footer"
},{
    no:"Any one non-sematic element",
    options:["footer","span","header","label"],
    ans:"span"
},{
    no:"Any one formatting element",
    options:["footer","span","b","label"],
    ans:"b"
},{
    no:"How can we select an element with a specific ID in CSS?",
    options:["*",".","#",">"],
    ans:"#"
},{
    no:"margin: 25px 50px 75px 100px; formet?",
    options:["trbl","tbrl","tlbr","lrtb"],
    ans:"trbl"
},{
    no:"Setting an inline-block in CSS requires which of the following properties?",
    options:["color","block","display","all above"],
    ans:"display"
},{
    no:"width: 310px;padding: 20px;border: 5px solid blue;margin: 0; total width?",
    options:["310","350","355","360"],
    ans:"360"
},{
    no:"In how many ways can CSS be written in?",
    options:["1","2","3","4"],
    ans:"3"
},{
    no:"How can we select an element with a specific Class in CSS?",
    options:["#","*",".",">"],
    ans:"."
},{
    no:"The CSS property used to specify the transparency of an element is?",
    options:["visibility","display","opacity","color"],
    ans:"opacity"
},{
    no:"Which of the following CSS property is used for controlling the layout?",
    options:["color","text","opacity","display"],
    ans:"display"
},{
    no:"Which of the following are parts of the CSS box model?",
    options:["margin","padding","border","all"],
    ans:"all"
},{
    no:"Which of the following are units of relative length in CSS?",
    options:["em","rem","a&b","meter"],
    ans:"a&b"
},{
    no:"which is input type?",
    options:["password","number","text","all"],
    ans:"all"
}];

let display=document.getElementById("display");
let btn=document.getElementById("btn");

function generateNumber(){
    var x=Math.floor(Math.random()*20);
    return x;
}

function generateNumbers(){
    var randomNum,isUnique,storeNum=[];
    while(storeNum.length<5){
            randomNum=generateNumber();
            isUnique=storeNum.every(function(num){
            return randomNum !== num;
        })
        if(isUnique){
        storeNum.push(randomNum);
        };
    }
    return storeNum;
}

function generateQustions(storeNum){
    let incmt=0;
    let qusNo=1;
    for(var i=0; i<5; i++){
       
        let list=qus[storeNum[i]].no;
        let optionsList=qus[storeNum[i]].options;

        let row=document.createElement("div");
        row.setAttribute("class","row");
        let colm=document.createElement("div");
        colm.setAttribute("class","col-12");
        row.append(colm);
        let card=document.createElement("div");
        card.setAttribute("class","card mt-4");
        colm.append(card);
        let cardBody=document.createElement("div");
        cardBody.setAttribute("class","card-body");
        card.append(cardBody);
        let qustion=document.createElement("h4");
        qustion.innerText=qusNo +","+list;
        cardBody.append(qustion);
        for(var j=0; j<4; j++){
            let box=document.createElement("input");
            box.setAttribute("type","radio");
            box.setAttribute("class","list");
        
            box.setAttribute("name","check"+incmt);
            box.setAttribute("value", optionsList[j]);
            
            cardBody.append(box);
            let choice=document.createElement("label");
            choice.setAttribute("class","pe-5 ps-2");
       
            choice.innerText=optionsList[j];
            cardBody.append(choice);
            
        }
        let ansTitle=document.createElement("label");
            ansTitle.innerText="Answer ;";
            cardBody.append(ansTitle);
            let answerShow=document.createElement("span");
            answerShow.setAttribute("id","show"+incmt);
            cardBody.append(answerShow);
        display.append(row);
        incmt++;
        qusNo++;
    }
    
    let submitBtn=document.getElementById("submit");
    submitBtn.style.display="inline-block";
    submitBtn.addEventListener("click",function(){
        for(var l=0 ; l<5; l++){
            let answer=qus[storeNum[l]].ans;
            console.log(answer);
            let name=document.getElementsByName("check"+l)[0];
            let getparnt=name.parentNode;
            let getCls=getparnt.getElementsByClassName("list");
            let getId=document.getElementById("show"+l);

           for(var m=0; m<getCls.length; m++){
            if(getCls[m].checked){
                let selectans=getCls[m].value;
                console.log(selectans);
                if(selectans == answer){
                    getId.innerText=" "+"correct";
                    getId.style.color="white";
                    getId.style.backgroundColor="green";
                }
                else{
                    getId.innerText=" "+"wrong";
                    getId.style.color="white";
                    getId.style.backgroundColor="red";

                    console.log("mani")
                }

            }
           }
        }
    })
    let sufferBtn=document.getElementById("suffer");
    sufferBtn.style.display="inline-block";

    sufferBtn.addEventListener("click",function(){
    btn.style.display="none";
    display.innerHTML="";
    storeNum=generateNumbers();
    generateQustions(storeNum);

})
}

btn.addEventListener("click",function(){
    let storeNum=generateNumbers();
    generateQustions(storeNum);
    console.log(storeNum);
})
