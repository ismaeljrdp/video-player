const formInput = document.getElementById('search-input')
const video = document.getElementById('player')

formInput.addEventListener('submit',(el) => {
    el.preventDefault()

    console.log(el.target[0].value)
})

const setView = (id) => {

    video.src = "/videos/"+videos[id]['video']+'.mp4'

    for (const key in videos[id]) {
        
        const dom = document.getElementById('video-'+key)
        if(dom) {
            if(typeof videos[id][key] === 'object') {
                const commentsCount = document.getElementById('comments-count')
                commentsCount.innerHTML = videos[id][key].length

                for (const comment in videos[id][key]) {
                    dom.insertAdjacentHTML("beforebegin","<div class='comment'><label>"+videos[id][key][comment].author+"<span> "+videos[id][key][comment].time+"</span></label><p>"+videos[id][key][comment].comment+"</p><div><button>&#128516<span>"+videos[id][key][comment].likes+"</span></button><button>&#128544<span>"+videos[id][key][comment].deslikes+"</span></button></div></div>")
                }
        
            } else {
                dom.innerHTML = videos[id][key]
            }
        }        
    }
    
}

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

})

const subscribe = document.getElementById('subscribe')
let subscribeState = false

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
})

const playAutomatically = document.getElementById('play-automatically')

function autoPlayMode(){

    const videoTime = () => {
        if(video.currentTime >= video.duration){
            console.log("end")
            setView(0)
            clearTime()
        }
    }

    const time = setInterval(videoTime,1000)

    const clearTime = () => {
        clearInterval(time)
    }
}

playAutomatically.addEventListener('change',autoPlayMode)

window.onload = setView(1)

if(playAutomatically.checked)
{
    autoPlayMode()
}