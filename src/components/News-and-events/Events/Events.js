    $(document).ready(function() {
        let d = new Date();

        let month = d.getMonth()+1;
        let day = d.getDate();

        switch (month) {
            case 1:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://ic.pics.livejournal.com/alkopona/76871705/874333/874333_original.jpg">');    
            sMonth = 'January';
            break;
            case 2:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://cs4.pikabu.ru/post_img/big/2016/01/10/5/14524079551100179449.jpg">');  
            sMonth = 'February';
            break;
            case 3:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://ii.vgoroden.ru/ife9giwmi43hh_31la1o.jpeg">');  
            sMonth = 'March';
            break;
            case 4:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://www.stihi.ru/pics/2019/02/18/4235.jpg">'); 
            sMonth = 'April';
            break;
            case 5:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://s2.passion.ru/sites/passion.ru/files/imagecache/img593x312/content/images/horoscope/180491/mainimage/zahod_goroskop_may_14042017.jpg">');    
            sMonth = 'May';
            break;
            case 6:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="http://3.bp.blogspot.com/-t-TsNpz7L94/VWFzl9YkE_I/AAAAAAAANMU/PQLcO0Qfvdg/s1600/iyun.jpg">'); 
            sMonth = 'June';
            break;
            case 7:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="http://st8.gismeteo.ru/static/news/img/src/15074/5694ccf6.jpg">'); 
            sMonth = 'July';
            break;
            case 8:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://lunday.ru/wp-content/uploads/2017/11/kalendar-lunnyh-dnej-i-fazy-luny-avgust.jpg">'); 
            sMonth = 'August';
            break;
            case 9:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="http://prohoro.ru/wp-content/uploads/2018/05/pixbay-1.jpg">'); 
            sMonth = 'September';
            break;
            case 10:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://i.ytimg.com/vi/6F2pNyR3K0g/maxresdefault.jpg">'); 
            sMonth = 'October';
            break;
            case 11:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="http://topnews.zp.ua/img/20181101/bdd113a0816df80bce5b44d419bd16e9.jpg">'); 
            sMonth = 'November';
            break;
            case 12:
            $('.Event__picture').empty();
            $('.Event__picture').prepend('<img src="https://beztabu.net/uploads/770x433_DIR/media_news/2018/11/5bf7d97f22885635489138.jpg">'); 
            sMonth = 'December';
            break;
        }

        $('#widget-date').empty();
        $('#widget-date').append(document.createTextNode(day));

        $('#widget-month').empty();
        $('#widget-month').append(document.createTextNode(sMonth));


    })
