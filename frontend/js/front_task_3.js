function setPlusIcon(){
    var allLi = document.getElementsByTagName('li')
    for(i=0; i<allLi.length; i++){
        var inUl = allLi[i].getElementsByTagName('ul')        
        if(inUl.length>0){        
            var plus = document.createElement('span')
            plus.innerHTML = '[+]'
            var first=allLi[i].firstChild;
            allLi[i].insertBefore(plus, first)
        }
    }
    var allA = document.getElementsByTagName('a')
    for(var i = 0; i < allA.length; i++){
        allA[i].addEventListener('click', aClick)
    }
}

function aClick(){
    alert('qwe')
}