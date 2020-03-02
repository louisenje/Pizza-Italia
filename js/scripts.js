 // hover portfolio   
 $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle("fast", "linear");
    });

    function ready() {
        var removeCartItemButtons = document.getElementsByClassName('btn-success')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
    })
    }
    

