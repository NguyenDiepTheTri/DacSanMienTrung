const app = document.getElementById('grind_by_cate')
var cateid = document.currentScript.getAttribute('cateid')
var count = 0
var request = new XMLHttpRequest()
request.open('GET', 'http://localhost/apinsmt/views/products_get_all_by_id_cate.php?idCate='+cateid, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(products => {

        const container = document.createElement('div')
        const cate = products.CategoryId
        container.setAttribute('class', 'col-lg-3 col-md-4 col-sm-6 mix'+cate)

        
        
        const item = document.createElement('div')
        item.setAttribute('class', 'featured__item')

        const pic = document.createElement('div')
        pic.setAttribute('class', 'featured__item__pic set-bg')
        
        var http = new XMLHttpRequest();
        var url = 'http://localhost/apinsmt/views/img_get_by_idproduct.php?idproduct='+products.Id;
        http.open('POST', url, true);
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                var img = JSON.parse(this.response)
                pic.setAttribute('data-setbg', img.ImageUrl)
                pic.style="background-image: url(" +img.ImageUrl+ ")"

            }
        }
        http.send();



        const ul = document.createElement('ul')
        ul.setAttribute('class', 'featured__item__pic__hover')

        const li1 = document.createElement('li')
        ul.setAttribute('class', 'featured__item__pic__hover')
        const a1 = document.createElement('a')
        a1.href="#"
        const i1 = document.createElement('i')
        i1.setAttribute('class', 'fa fa-heart')

        const li2 = document.createElement('li')
        ul.setAttribute('class', 'featured__item__pic__hover')
        const a2 = document.createElement('a')
        a2.href="#"
        const i2 = document.createElement('i')
        i2.setAttribute('class', 'fa fa-retweet')

        const li3 = document.createElement('li')
        ul.setAttribute('class', 'featured__item__pic__hover')
        const a3 = document.createElement('a')
        a3.href="#"
        const i3 = document.createElement('i')
        i3.setAttribute('class', 'fa fa-shopping-cart')

        const text = document.createElement('div')
        text.setAttribute('class', 'featured__item__text')

        const h6 = document.createElement('h6')
        const atext = document.createElement('a')
        atext.textContent=products.Name
        atext.href="#"
        const h5 = document.createElement('h5')
        h5.textContent=products.Price

        
        
        count+=1
        if (count<=16) {
            app.appendChild(container)
            container.appendChild(item)
            item.appendChild(pic)
            item.appendChild(text)
            text.appendChild(h6)
            text.appendChild(h5)
            pic.appendChild(ul)
            h6.appendChild(atext)
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            li1.appendChild(a1)
            a1.appendChild(i1)
            li2.appendChild(a2)
            a2.appendChild(i2)
            li3.appendChild(a3)
            a3.appendChild(i3)
        }
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
