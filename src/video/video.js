$(document).ready(function(){
    let video = $('.video__player');
    let progress = $('.video__progress');

    

    $('#videoplayer-play').click(function(play){
        video[0].play();
        $('.videoplayer__play-btn').addClass('hidden');
        $('.videoplayer__pause-btn').removeClass('hidden');
    });

    $('#videoplayer-pause').click(function(pause){
        video[0].pause();
        $('.videoplayer__play-btn').removeClass('hidden');
        $('.videoplayer__pause-btn').addClass('hidden');
    });

    $('#videoplayer-fullscreen').click(function(fullscreen){
        video[0].requestFullscreen();
    });
})