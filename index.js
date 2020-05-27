const formInput = document.getElementById('search-input')

formInput.addEventListener('submit',(el) => {
    el.preventDefault()

    console.log(el.target[0].value)
})

const videos = [
    {
        'name':'Video 01',
        'author' : 'Steve',
        'subscribs':200560,
        'slug' :'56s4d29',
        'date' : '2018-10-02',
        'views' : 9892,
        'likes' : 1560,
        'deslikes' : 125,
        'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc orci, tincidunt nec turpis in, consectetur malesuada odio. Etiam maximus augue et porta interdum. Fusce rhoncus eros ipsum, ut mattis eros vestibulum a. Fusce non molestie leo, ut tempor nibh. Donec vestibulum pulvinar orci, vitae aliquam diam euismod vel. Donec mattis congue est ac tempus. Sed hendrerit dui id quam fringilla, convallis fermentum elit commodo. ',
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
        'subscribs':845560,
        'slug' :'56s4d29',
        'date' : '2019-12-16',
        'views' : 3412,
        'likes' : 350,
        'deslikes' : 10,
        'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc orci, tincidunt nec turpis in, consectetur malesuada odio. Etiam maximus augue et porta interdum. Fusce rhoncus eros ipsum, ut mattis eros vestibulum a. Fusce non molestie leo, ut tempor nibh. Donec vestibulum pulvinar orci, vitae aliquam diam euismod vel. Donec mattis congue est ac tempus. Sed hendrerit dui id quam fringilla, convallis fermentum elit commodo. ',
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
        description.classList.add('video-description-view-more');
        descriptionState = true;

        el.target.innerHTML = "Mostrar Menos";
    }
    else
    {
        const description = document.getElementById('video-description')
        description.classList.remove('video-description-view-more');
        descriptionState = false;

        el.target.innerHTML = "Mostrar Mais";
    }

});