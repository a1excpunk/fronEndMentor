let shareBtn = document.getElementById('shareBtn');
let shareIcons = document.getElementById('shareIcons')
let sharePath = document.getElementById('sharePath')
let shareImage = document.getElementById('shareImage')



shareBtn.addEventListener('click', function(){
    if(shareIcons.classList.contains('hidden')){
        shareIcons.classList.remove('hidden')
        shareImage.classList.add('shareActive')
        sharePath.classList.add('shareActive')
    }else{
        shareIcons.classList.add('hidden')
        shareImage.classList.remove('shareActive')
        sharePath.classList.remove('shareActive')

    }
})
