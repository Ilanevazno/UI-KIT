$(document).ready(function(){
    let video = $('.video__player');
    let progress = $('.video__progress');
    
    $("#myvideo").on(
        "timeupdate", 
        function(event){
          onTrackedVideoFrame(this.currentTime, this.duration);
        });

        function onTrackedVideoFrame(currentTime, duration){
            let c = video[0].currentTime;
            let d = video[0].duration;
            progress[0].value = 100 * c / d;
        }

    progress.click(function(videoRewind){
        $('.videoplayer__play-btn').addClass('hidden');
        $('.videoplayer__pause-btn').removeClass('hidden');
        
        let w = this.offsetWidth;
        let o = event.offsetX;
        let c = video[0].currentTime;
        let d = video[0].duration;
        
        progress[0].value = 100 * o / w;
        video[0].pause();
        video[0].currentTime = d * (o/w);
        video[0].play();
    })


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