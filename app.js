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
