let r, g, b, w, h, t, l;
    $('.circle').each(function(){
        $(this).on('click', function(){
            r = Math.round(Math.random()*255);
            g = Math.round(Math.random()*255);
            b = Math.round(Math.random()*255);
            w = Math.round(Math.random()*200);
            h = Math.round(Math.random()*200);
            t = Math.round(Math.random()*500);
            l = Math.round(Math.random()*500);
            console.log(t, l);
            $(this).css('background', `rgb(${r}, ${g}, ${b})`);
            $(this).css('width', `${w}`);
            $(this).css('height', `${h}`);
            $(this).animate({
              top: t,
              left: l
            }, 2000, 'easeInOutBack');
        });
    });