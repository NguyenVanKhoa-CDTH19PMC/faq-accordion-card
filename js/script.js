window.onload = function () {
    let summaris = document.
        getElementsByTagName('summary');
    let box = document.getElementById('card-box-illus');
    for (const s of summaris) {
        s.addEventListener('mouseover', function () {
            box.style.transform= "translate(-80px,195px)"
        });
        s.addEventListener('mouseout', function() {
            box.style.transform= "translate(-60px,195px)"
        }) 
    }
    
}