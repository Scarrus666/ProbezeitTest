function goodSmiley()
    {
        document.getElementById("smiley").innerHTML = '<div class="col center smiley_good"><p><i class="bi bi-emoji-heart-eyes"></i></p></div>';
        document.getElementById("under_smiley").innerHTML = '<p class="text_good">Thank you very much, that makes me happy!</p>';
    }

function badSmiley()
    {
        document.getElementById("smiley").innerHTML = '<div class="col center smiley_bad"><p><i class="bi bi-emoji-dizzy"></i></p></div>';
        document.getElementById("under_smiley").innerHTML = "<p class='text_bad'>Oh no, I'm sorry to hear that!</p>"
    }
