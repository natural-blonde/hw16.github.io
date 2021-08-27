let position, modalDiv;
let boxClick;
$(function(){
  $('.box').on('click', function(){
    boxClick = $(this);
    position = $(this).position();
    modalDiv = $('.modal');
    $('.modal-container').css({
        backgroundColor: '#000000c7',
        zIndex: 3
    });
    modalDiv.css({
      display: 'block',
      top: position.top,
      left: position.left,
      backgroundColor: $(this).css('background-color')
    })
    $(this).css('background-color', 'white');
      modalDiv.animate({
          width: '400px',
          height: '400px',
          top: (window.innerHeight - 400)/2,
          left: (window.innerWidth - 400)/2,
      }, 1000, 'easeInOutQuart')
  })
  $('.modal').on('click', function(){
    modalDiv.animate({
        width: '150px',
        height: '150px',
        top: position.top,
        left: position.left
    }, 1000, 'easeInOutQuart', function(){
      $('.modal-container').css({
        backgroundColor: '#fff',
        zIndex: -1
      });
      boxClick.css('background-color', $(this).css('background-color'));
      $(this).css({
        display: 'none'
      })
    })  
  })
})

