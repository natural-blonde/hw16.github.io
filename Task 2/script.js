// let x, y, shadow;
let r, g, b;
let r1, g1, b1;
let w, h;
let t, l;
setInterval(function() {
    $('.discoBall').each(function(){
      r = Math.round(Math.random()*255);
      g = Math.round(Math.random()*255);
      b = Math.round(Math.random()*255);
      r1 = Math.round(Math.random()*255);
      g1 = Math.round(Math.random()*255);
      b1 = Math.round(Math.random()*255);
      w = Math.round(Math.random()*200);
      h = Math.round(Math.random()*200);
      t = Math.round(Math.random()*500);
      l = Math.round(Math.random()*500);
      $(this).css('background', `rgb(${r}, ${g}, ${b})`);
      let borderColor = `rgb(${r1}, ${g1}, ${b1})`;
      $(this).css('border-color', `${borderColor}`);
      $(this).css('box-shadow',  `0 0 20px 10px ${borderColor}`);
    });
}, 100);

setInterval(function() {
  $('.discoBall').each(function(){
    $(this).animate({
      top: t,
      left: l, 
      width: w,
      height: h
    }, 1000, 'easeInSine');
  });
}, 1000);

$(window).trigger('each');
$(window).trigger('setInterval');






