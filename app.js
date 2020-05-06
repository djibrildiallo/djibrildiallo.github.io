var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a')
var links = map.querySelectorAll('.map__list a')

/*Polyfill du for each
if(Nodelist.prototype.forEach === undifined){
    NodeList.prototype.forEach = function (callback){
        [].forEach.call(this, callback)
    }
}
*/

var activeArea = function(id){
    map.querySelectorAll('.is-active').forEach(function(item){
            item.classList.remove('is-active')
        })
        if(id !== undefined){
            document.querySelector('#list-' + id).classList.add('is-active')
            document.querySelector('#pays-' + id).classList.add('is-active') 
        }
}

paths.forEach(function (path){
    path.addEventListener('mouseenter', function (){
        var id = this.id.replace('pays-','')
        activeArea(id)
    })
})

links.forEach(function(link){
    link.addEventListener('mouseenter', function(){
        var id = this.id.replace('list-', '')
        activeArea(id)
    })
})

map.addEventListener('mouseover', function (){
    activeArea(id)
})