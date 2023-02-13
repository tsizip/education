// cắt chuỗi
window.addEventListener("load", function(){
    laychuoi();
})

function laychuoi(){
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i ++){
        var text = cardList[i].innerHTML;
        var newtext = catchuoi(text,50);
        cardList[i].innerHTML = newtext;
    }
}

function catchuoi(str, num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}

// thêm class 
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebar__content = document.querySelector('.sidebar__content');
var switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click', function(){
    sidebar__content.classList.toggle('is-opened');
});

switchBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('darkMode');
});