 // hover portfolio   
 $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle("fast", "linear");
    });

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
    function ready(){
        var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        console.log(removeCartItemButtons)
         for (var i = 0; i < removeCartItemButtons.length; i++) {
                var button = removeCartItemButtons[i]
                button.addEventListener('click', removeCartItem)
    
                }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input =quantityInputs[i]
        input.addEventListener('change',quantityChanged)
          }

      }
        
    function removeCartItem(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
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
      document.getElementsByClassName(cart-total-price)[0].innerText = 'Ksh' + total
    }
