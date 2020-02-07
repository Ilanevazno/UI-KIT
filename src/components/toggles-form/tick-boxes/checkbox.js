$(document).ready(function(){
        
    let prov = $('.checkbox__container')
    let provA = false

    $('.checkbox__container').each(function() {
        if(this.innerText !== ''){
            // $(this).css("padding-left","25px")
            $(this).text()
        }

        console.log($(this).text())
    })
})

