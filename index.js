const ratings = document.querySelectorAll('.rating-value');
const submit = document.getElementById('btn-submit')
const resultRatingText = document.querySelector('.rating-result')

ratings.forEach(function(rating){
    rating.addEventListener('click', function(){
        const ratingSelected = document.querySelector('.selected')

        if(ratingSelected){
            ratingSelected.classList.remove('selected');
        }
        rating.classList.add('selected');
    })
})

submit.addEventListener('click', function(){
    const hide = document.querySelector('.submit-content')
    const show = document.querySelector('.acknowledgment')
    const ratingResult = document.querySelector('.selected')
    
    if(ratingResult){
        resultRatingText.innerHTML = 'You selected ' + ratingResult.innerHTML + ' out of 5'
    }else{
        alert('Please give us a rating so we can keep improving');
        return;
    }
    
    hide.classList.add('hide')
    show.classList.remove('hide')
})