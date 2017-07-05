function swith(){    
    catalog.className = (catalog.className=='tile')? 'list' : 'tile'
}

function moreProducts(){
    var curCount = document.getElementById('product_list').getElementsByTagName('li').length
    nocache = "&nocache=" + Math.random() * 1000000
    request = new XMLHttpRequest()
    request.open("GET", "get.php?curCount="+ curCount + nocache, true)
    request.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {
                    var data = JSON.parse(this.responseText)
                    for(i=0; i<data.length; i++){
                        var newLi = document.createElement('li');
                        newLi.innerHTML = '<div class="product"><img src="'+
                        data[i].img+'"><div class="descr">'+
                        '<h2>'+data[i].name+'</h2>'+
                        '<p>'+data[i].price+' p.</p></div></div>'
                        product_list.appendChild(newLi)
                    }
                }
                else alert("Ошибка AJAX: Данные не получены ")
            }
            else alert( "Ошибка AJAX: " + this.statusText)
        }
    }
    request.send(null)
}