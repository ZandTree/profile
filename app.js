const front = $(".front");
const back = $(".back");
front.on('click',function(){
    $(this).addClass('invisibale');
    back.removeClass('invisibale');
})
back.on('click',function(){
    $(this).addClass('invisibale');
    front.removeClass('invisibale');
    }
)

const container = $(".container");
const photo = $(".img");
const letters = $(".letters");

container.hover(function(){
    photo.toggleClass('change');
    letters.toggleClass('visible');
})
