
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');//this allows the element to be hidden again when it is not in view
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((element)=> observer.observe(element));

