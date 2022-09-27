
var qus=[{
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
    no:"Any one formatting element",
    options:["footer","span","b","label"],
    ans:"b"
}];

function generateNumber(){
    var x=Math.floor(Math.random()*20);
    return x;
}

var randomNum,isUnique,storeNum=[];
while(storeNum.length<6){
randomNum=generateNumber();
isUnique=storeNum.every(function(num){
    return randomNum !== num;
})
if(isUnique){
    storeNum.push(randomNum);
};
}
console.log(storeNum);
var randomQus=[];
let btn=document.getElementById("btn");
let display=document.getElementById("display");
let incmt=0;
let anslist=[]

btn.addEventListener("click",function(){
    for(var i=1; i<=5; i++){
       
        let list=qus[storeNum[i]].no;
        let optionsList=qus[storeNum[i]].options;
        let answer=qus[storeNum[i]].ans;
   

        for(var k=0 ; k<4 ; k++){
            console.log(optionsList[k]);

            if(optionsList[k]==answer){
                anslist.push(optionsList[k]);
            }
        }
        console.log(anslist);

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
        qustion.innerText=i+","+list;
        cardBody.append(qustion);
        for(var j=0; j<4; j++){
            let box=document.createElement("input");
            box.setAttribute("type","radio");
            box.setAttribute("class","list");
        
            // box.setAttribute("onClick","toggle(this,'list')");
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

    }
    
    let sufferBtn=document.getElementById("suffer");
    sufferBtn.style.display="inline-block";
    sufferBtn.addEventListener("click",function(){
        let newArr = [];
        for(var l=0 ; l<5; l++){
            let name=document.getElementsByName("check"+l)[0];
            let getparnt=name.parentNode;
            
            let getCls=getparnt.getElementsByClassName("list");

           for(var m=0; m<getCls.length; m++){
            if(getCls[m].checked){
                newArr.push(getCls[m].value);
            }
           }
           
        }
        
        for(var n=0 ; n<5 ; n++){
            let getId=document.getElementById("show"+n);
            console.log(getId);
            if(newArr[n] == anslist[n]){
                getId.innerText=" "+"correct";
                getId.style.color="green";
            }
            else{
                getId.innerText=" "+"wrong";
                getId.style.color="red";
            }
        }
        
    })
})