function setPlusIcon(){
    var allLi = document.getElementsByTagName('li')
    for(i=0; i<allLi.length; i++){
        var inUl = allLi[i].getElementsByTagName('ul')        
        if(inUl.length>0){        
            var plus = document.createElement('span')
            plus.innerHTML = '[+]'
            var first=allLi[i].firstChild;
            allLi[i].insertBefore(plus, first)
            inUl[0].style.display = "none"
        }
    }
    var allA = document.getElementsByTagName('a')
    for(var i = 0; i < allA.length; i++){
        allA[i].addEventListener('click', aClick)
    }
}

function aClick(ev){
    ev = ev || window.event
    elem = ev.target
    var exLi = elem.parentNode
    var inUl = exLi.getElementsByTagName('ul')
    if(inUl.length == 0) return true
    if(inUl[0].style.display == "none"){
        inUl[0].style.display = 'block'
        var p = exLi.getElementsByTagName('span')
        p[0].innerHTML = '[-]'
    }else{
        inUl[0].style.display = "none"
        var p = exLi.getElementsByTagName('span')
        p[0].innerHTML = '[+]'
    }
    ev.preventDefault()
}