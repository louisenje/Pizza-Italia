 // hover portfolio   
 $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle("fast", "linear");
    });

  /*  if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
    */

    
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
     for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', function(event){
              var buttonClicked = event.target
              buttonClicked.parentElement.parentElement.remove()

            })
        } 
    
    function updateCartTotal(){
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows=cartItemContainer.getElementsByClassName('cart-row')
        var total= 0
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var cartRows = cartRows[i]
            var priceElement=cartRows.getElementsByClassName('cart-price')[0]
            var quantityElement= cartRows.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerText.replace('Ksh',''))
            var quantity = quantityElement.value
            total= total +(price * quantity)
      }
    }
