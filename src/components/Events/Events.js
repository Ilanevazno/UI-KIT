import './Events.scss';    
    
    $(document).ready(function() {
        let d = new Date();

        let month = d.getMonth()+1;
        let day = d.getDate();

        const monthList = [
            {number: 1, src: 'https://ic.pics.livejournal.com/alkopona/76871705/874333/874333_original.jpg', name: 'January'},
            {number: 2, src: 'https://cs4.pikabu.ru/post_img/big/2016/01/10/5/14524079551100179449.jpg', name: 'February'},
            {number: 3, src: 'https://ii.vgoroden.ru/ife9giwmi43hh_31la1o.jpeg', name: 'March'},
            {number: 4, src: 'https://www.stihi.ru/pics/2019/02/18/4235.jpg', name: 'April'},
            {number: 5, src: 'https://s2.passion.ru/sites/passion.ru/files/imagecache/img593x312/content/images/horoscope/180491/mainimage/zahod_goroskop_may_14042017.jpg', name: 'May'},
            {number: 6, src: 'http://3.bp.blogspot.com/-t-TsNpz7L94/VWFzl9YkE_I/AAAAAAAANMU/PQLcO0Qfvdg/s1600/iyun.jpg', name: 'June'},
            {number: 7, src: 'http://st8.gismeteo.ru/static/news/img/src/15074/5694ccf6.jpg', name: 'July'},
            {number: 8, src: 'https://lunday.ru/wp-content/uploads/2017/11/kalendar-lunnyh-dnej-i-fazy-luny-avgust.jpg', name: 'August'},
            {number: 9, src: 'http://prohoro.ru/wp-content/uploads/2018/05/pixbay-1.jpg', name: 'September'},
            {number: 10, src: 'https://i.ytimg.com/vi/6F2pNyR3K0g/maxresdefault.jpg', name: 'October'},
            {number: 11, src: 'http://topnews.zp.ua/img/20181101/bdd113a0816df80bce5b44d419bd16e9.jpg', name: 'November'},
            {number: 12, src: 'https://beztabu.net/uploads/770x433_DIR/media_news/2018/11/5bf7d97f22885635489138.jpg', name: 'December'},
        ]

        monthList.map(item => {
            if(item.number === month) {
                $('.widget-events__picture').empty();
                $('.widget-events__picture').prepend(`<img src=${item.src}>`);   

                $('#widget-events__date').empty();
                $('#widget-events__date').append(document.createTextNode(day));
        
                $('#widget-events__month').empty();
                $('#widget-events__month').append(document.createTextNode(item.name));
            }
        })


    })
