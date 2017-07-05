function swith(){    
    catalog.className = (catalog.className=='tile')? 'list' : 'tile'
}

function moreProducts(){
    var curCount = document.getElementById('product_list').getElementsByTagName('li').length
    var newLi = document.createElement('li');
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
                        newLi.innerHTML = '<div class="product"><img src="'+data[i].img+'"><div class="descr">'+
                        '<h2>'+data[i].name+'</h2>'+
                        '<p>'+data[i].price+' p.</p></div></div>'
                        product_list.appendChild(newLi)
                    }
                    test.innerHTML = xxx
                    /*newLi.innerHTML = '<div class="product"><img src="'+data.img+'"><div class="descr">'+
                    '<h2>'+data.name+'</h2>'+
                    '<p>'+data.price+' p.</p></div></div>'
                    product_list.appendChild(newLi)*/
                }
                else alert("Ошибка AJAX: Данные не получены ")
            }
            else alert( "Ошибка AJAX: " + this.statusText)
        }
    }
    request.send(null)
    //var newLi = document.createElement('li');
    //newLi.innerHTML = '<div class="product"><img src="images/Gretsch.jpg"><div class="descr">'+
    //                   '<h2>Gretsch G6136CST USA Custom Shop White </h2>'+
    //                   '<p>805 000 p.</p></div></div>';
    //product_list.appendChild(newLi);
    //var fragment = document.createDocumentFragment()
    //fragment.appendChild(newLi)
}