const accordionItem = document.querySelectorAll('.question');

accordionItem.forEach(question => {
    question.addEventListener('click', function () {
        this.classList.toggle('active')
        const accordionDescription = this.nextElementSibling
        const plusIcon = this.querySelector('.icon-plus')
        const minusIcon = this.querySelector('.icon-minus')
        
        if(accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + "px"
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})