
 const add=document.querySelector(".AddIteams");
 const todo=document.getElementById("todo");
 const button=document.getElementById("btn1");
//  let redtheme={
//     buttontextcolor:"white",
//     buttonbgcolor:"red"
//  }
// let currenttheme="green";
const input =document.querySelector("#inp");
input.addEventListener('keydown',function(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
})
 
 function inputt(){
    const inp =document.querySelector("#inp");
    console.log(inp.value);
    if(inp.value==""){
        alert("eneter some items");
    }
    else{
    const outerList=add;
    const div=document.createElement("div");
    div.setAttribute("id",Math.random().toString());
    div.classList.add("div2");
    // div.style.backgroundColor="rgb(57, 9, 92)"
    div.style.opacity="0.9";
    div.style.marginTop="6%";
    div.style.marginLeft="10%";
    div.style.color="white";
    div.style.borderRadius="20px";
    div.style.width="80%";
    div.style.height="50px";
    div.style.display="flex";
    div.style.justifyContent="space-between";

    const flex1=document.createElement("div");
    flex1.style.width="60%";
    flex1.style.height="100%";
    flex1.style.paddingTop="3%";
    flex1.style.paddingLeft="3%";

    const flex2=document.createElement("div");
    flex2.style.width="40%";
    flex2.style.height="100%";
    flex2.style.paddingTop="3%";
    flex2.style.paddingLeft="3%";
    // flex2.style.backgroundColor="red";
    

    const list=document.createElement("li");
    list.style.fontSize="1.1rem";
    list.setAttribute("id","li");
    const Delete=document.createElement('button');
    // Delete.style.backgroundColor="rgb(57, 9, 92";
    Delete.setAttribute("id","Del");
    Delete.classList.add("button");
    Delete.style.color="white";
    Delete.style.border="none";
    Delete.style.borderRadius="20px";
    const Done=document.createElement('button');
    Done.setAttribute("id","Done");
    Done.classList.add("button");
    // Done.style.backgroundColor="rgb(57, 9, 92";
    Done.style.color="white";
    Done.style.border="none";
    Done.style.borderRadius="20px";
    Done.style.marginLeft="8px";
    Delete.textContent="DELETE";
    Done.textContent="DONE";
    outerList.appendChild(div);
    div.appendChild(flex1);
    div.appendChild(flex2);
    flex1.appendChild(list);
    flex2.appendChild(Delete);
    flex2.appendChild(Done);
    list.textContent=inp.value;
    document.getElementById("inp").value="";
    Delete.addEventListener("click",function(event){
        // flex1.remove();
        // flex2.remove();
        const idtodelete=event.target.parentNode.parentNode.id;
        document.getElementById(idtodelete.toString()).remove();
    });
    Done.addEventListener("click",function(){
        list.style.textDecoration="line-through";
    })
}
 } 

function switchstylesheet(sheetname){
    // var head  = document.getElementsByTagName('head')[0];
    // var link  = document.createElement('link');
    // link.id   = sheetname;
    // link.rel  = 'stylesheet';
    // link.type = 'text/css';
    // link.href = `${sheetname}.css`;
    // link.media = 'all';
    // head.appendChild(link);
    const link=document.getElementById("theme")
    link.href=`${sheetname}.css`;
    // const yellow=document.getElementById("theme2")
    // yellow.link=`${sheetname}.css`;
}

function theme1(){
    todo.style.backgroundImage="url(https://wallpapers.com/images/featured/light-red-uuedqr8jfdhfs3te.jpg)"  
    switchstylesheet("red")

}
function theme2(){
    todo.style.backgroundImage="url(https://t3.ftcdn.net/jpg/07/50/90/48/240_F_750904874_W4IDYERTovttTpa7KifSw3Knv6FiIQQm.jpg)"
    switchstylesheet("yellow")
}
function theme3(){
    todo.style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACUCAMAAAD4QXiGAAAAA1BMVEWF6oQOwLjuAAAAMklEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4M8Aa4gAASB8ynsAAAAASUVORK5CYII=)"
    switchstylesheet("green");
}

