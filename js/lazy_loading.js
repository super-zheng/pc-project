
    function lazy(){
        let $imgs = $('[data-src]');
        function xxx(){
            for (v of $imgs)
                if ($(document).scrollTop() + innerHeight/2 > $(v).offset().top)
                    if ($(v).attr('src')!=$(v).data('src'))
                        $(v).attr('src',`${$(v).data('src')}`);
        }
        xxx();
        $(document).on('scroll',xxx);
    }

