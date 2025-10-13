/* this one for the windoes to wait onlode*/
window.onload =function(){
    //window.alert("hellow  in this web have funn my frendo");
    //document.write("hellow ");
    //the console is the ptogrammer page
    console.log("Making viedios list");
    const titel=document.getElementsByClassName('head'); 
    console.log(titel);
    titel.style.color=("black")
    const tab=document.getElementById('Wafa');
    tab.style.fontSize=("20px")
    console.log(tab);
    const list=document.getElementById('naser');
    console.log(list);
    list.style.color=("black")
    list.style.fontSize=("20px")
    //add elements
    const addList=document.getElementsByClassName('list')[0];
    const Episodes=[" Why you should sleep 8 hours straight","  Can't hurt me"
        ,"How to diversify your sources of income","The real wealth equation","Surrounded by Idiots series"
        ,"Your problem is that you are addicted",'The relationship between your habits and the power of your subconscious mind',
        "beautiful pain","The Secret Behind Building Great Companies","Bank of Relationships"
    ]
    for(let i=0; i<Episodes.length;i++){
        const li=document.createElement("li");
        li.textContent=Episodes[i];
        addList.appendChild(li);

    }
    const List=document.getElementsById('naser');
    console.log(List);
    
    //moodifile the text 

    
    console.error("Don't forget to add java scrept to the main page");
    console.log("The topecs that I should write it");
console.table(["what is the web about","most pupular books","more about naser",
    "dupamecafen massege","The most proment Episodes in the channel","The most important lessons"
,"add some java scrept"]);
console.table(["the firstone:done","The secondone:done","The thirdone :done","the forthone :not",
    "the 5th one : not","6th :not"
]);
//we also have data type intro  
let a =" source";
let b="dupamecafien";
//document.write(a+" " +b);

/*console.log(typeof"dupamecafien");//string
//we can write the /n to let one line and / for space
console.log("30");
console.log(typeof 16);//number
console.log(typeof ["NAser","dupamecafien","nothe channele"]);//Array
console.log( typeof {name:"NAser",age:30 ,contory:"suaid"});//object
console.log(typeof true);*/

 




}