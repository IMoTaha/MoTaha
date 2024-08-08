const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1.1 كثيرات الحدود والدوال النسبية',
        'name': '1.1 كثيرات الحدود والدوال النسبية.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': '1.2 الدوال العكسية',
        'name': '1.2 الدوال العكسية.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': '1.3 الدوال المثلثية والدوال المثلثية العكسية',
        'name': '1.3 الدوال المثلثية والدوال المثلثية العكسية.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': '1.4 الدوال الأسية واللوغاريتمية',
        'name': '1.4 الدوال الأسية واللوغاريتمية.mp4',
        'duration': '3:59',
    },
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = '' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};
