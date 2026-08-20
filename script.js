//Botão curtidas
document.addEventListener("DOMContentLoaded", () =>{
    const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
    if (!likeBtn) return;
    const likeSvg = likeBtn.querySelector("Svg");

    //localia o contador 

    let textNode = Array.from(likeBtn.childNodes).find(node) => node.nodeType
    === Node.TEXT_NODE && node.textContent.trim() !== ""
});

/// zera o contador

let cont = 0;

 //atualiza
 if(textNode){
     textNode.textContent = `0`;
 }

 //coração
 function applyLikedStyle (){
 




 }
    
 }




}}