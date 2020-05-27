const formInput = document.getElementById('search-input')

formInput.addEventListener('submit',(el) => {
    el.preventDefault()

    console.log(el.target[0].value)
})

const setView = (id) => {

    for (const key in videos[id]) {
        
        const dom = document.getElementById('video-'+key)

        if(dom) {
            switch(dom.id) {
                default:
                    dom.innerHTML = videos[id][key]
                break
            }
        }        
    }
    
}

setView(0);

const descriptionViewMore = document.getElementById('video-descript-view-more')
let descriptionState = false

descriptionViewMore.addEventListener('click',(el) => {

    if(!descriptionState) {
        const description = document.getElementById('video-description')
        description.classList.add('video-description-view-more')
        descriptionState = true

        el.target.innerHTML = "Mostrar Menos"
    } else {
        const description = document.getElementById('video-description')
        description.classList.remove('video-description-view-more')
        descriptionState = false

        el.target.innerHTML = "Mostrar Mais"
    }

});

const subscribe = document.getElementById('subscribe')
let subscribeState = false;

subscribe.addEventListener('click',(el) => {
    if(!subscribeState) {
        el.target.classList.add('subscribe-true')
        el.target.innerHTML = "Inscrito"
        subscribeState = true
    } else {
        el.target.classList.remove('subscribe-true')
        el.target.innerHTML = "Inscrever-se"
        subscribeState = false
    }
});