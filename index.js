const formInput = document.getElementById('search-input')

formInput.addEventListener('submit',(el) => {
    el.preventDefault()

    console.log(formInput[0].value)
})

const videos = [
    {
        'name':'Video 01',
        'author' : 'Steve',
        'slug' :'56s4d29',
        'date' : '2018-10-02',
        'views' : 9.892,
        'likes' : 1.560,
        'deslikes' : 125,
        'description' : 'This is a test video.',
        'comments':{
            'author':'Bea',
            'time':'1 year ago',
            'likes' : 2,
            'deslikes' : 0,
            'comment':'The best video!! Wool'
        }
    },
    {
        'name':'Video 02',
        'author' : 'Brad',
        'slug' :'56s4d29',
        'date' : '2019-12-16',
        'views' : 3.412,
        'likes' : 350,
        'deslikes' : 10,
        'description' : 'This is a test video.',
        'comments':{
            'author':'Alice',
            'time':'2 months ago',
            'likes' : 5,
            'deslikes' : 1,
            'comment':'The best video!! Wool'
        }
    }
]

const setView = (id) => {
    const title = document.getElementById('title-video')
    title.innerHTML = videos[id].name
}

setView(0);