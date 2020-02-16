import './video.scss';

$(document).ready(function(){
    let videoContainer = $('.video-player__container');
    let video = $('.video-player__screen');
    let progress = $('.video-player__progress');
    
    $(".video-player__screen").on(
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

    videoContainer.find('.video-player__play').on('click', function(){
        video[0].play();
        $(this).hide();
        $(this).parent().find('.video-player__pause').show();
    });

    videoContainer.find('.video-player__pause').on('click', function(){
        video[0].pause();
        $(this).hide();
        $(this).parent().find('.video-player__play').show();
    });

    videoContainer.find('.video-player__fullscreen').on('click', function() {
        video[0].requestFullscreen();
    })
})