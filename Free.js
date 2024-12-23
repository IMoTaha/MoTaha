const main_video = document.getElementById('main-video-container');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'أساسيات الوحدة الثانية',
        'name': '1nGUzynBFXILnN5gNlBhx06MP3MMThsxO',
        'duration': '1:30:04',
        'powerpointLink1' : '11Lz-2Sz5JPLqoLGFgOn2xGODn52P7j4L',
        'powerpointLink2' : '1Qm062yC48tSHhzOTiHHguTYEZuZnz7T1',
    },
    {
        'id': 'a2',
        'title': 'شرح ملزمة 2.1-2.2 - جزء 1',
        'name': '1-BaBiNmxtLcJzIqnPcsahmn3MCX7wWvn',
        'duration': '\xa010:56\xa0\xa0',
        'empty': '#',
    },
    {
        'id': 'a3',
        'title': 'شرح ملزمة 2.1-2.2 - جزء 2',
        'name': '1LEjPyvtDmnNlRj5EMySLbQpvN9po7oIW',
        'duration': '\xa0\xa08:03\xa0\xa0',
        'empty': '#',
    },
    {
        'id': 'a4',
        'title': 'شرح ملزمة 2.1-2.2 - جزء 3',
        'name': '14YHIguF1dtJExr-oC1WS8iyK6jCXyO9L',
        'duration': '\xa0\xa08:42\xa0\xa0',
        'solutionLink' : '1foXq2QtWVQ6DIsE_CTrGWTumREFNZ9mq',
        'noSolutionLink' : '1E9_KmM7z4WCAjb-AdkDUujbHeD8m_WdJ',
    },
    {
        'id': 'a5',
        'title': 'شرح السؤال 1',
        'name': '1hzw-W8LEFekiFSVgHzeXXG0P_iQ-AVk1',
        'duration': '\xa0\xa04:41\xa0\xa0',
        'solutionLink' : '1lNpYDRxUqNPlo18YoHlTKqkdiRSte-iC',
        'noSolutionLink' : '1I5cdZi64F1-wDulWjlBupPkWa-xYN-Nr',
    },
    {
        'id': 'a6',
        'title': 'أسئلة الطلبة - جزء 1',
        'name': '1c8GgTbc2R4Hk0I0JOMkpesAJ6Z8YxW0x',
        'duration': '\xa0\xa06:43\xa0\xa0',
        'empty': '#',
    },
    {
        'id': 'a7',
        'title': 'أسئلة الطلبة - جزء 2',
        'name': '1Iqi4sfw_ISFuwaAmYM3VAK_apOMv_aAZ',
        'duration': '\xa0\xa04:57\xa0\xa0',
        'empty': '#',
    },
];


data.forEach((video, i) => {
        let links = '';
    if (video.powerpointLink1) {
        links += `<a href="https://drive.google.com/file/d/${video.powerpointLink1}/view" target="_blank"  class="powerpoint" style="color: var(--main-color);"> (powerpoint1)\xa0\xa0 </a>`;
    }
    if (video.powerpointLink2) {
        links += `<a href="https://drive.google.com/file/d/${video.powerpointLink2}/view" target="_blank" class="powerpoint" style="color: var(--main-color);"> (powerpoint2) </a>`;
    }
    if (video.powerpointLink) {
        links += `<a href="https://drive.google.com/file/d/${video.powerpointLink}/view" target="_blank" class="powerpoint" style="color: var(--main-color);"> (powerpoint) </a>`;
    }
    if (video.solutionLink) {
        links += video.noSolutionLink ? `<a href="https://drive.google.com/file/d/${video.solutionLink}/view" target="_blank" class="solution" style="color: #57FF33;"> \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0(solution) </a> <span> \xa0|\xa0 </span>` : '';
    }
    if (video.noSolutionLink) {
        links += `<a href="https://drive.google.com/file/d/${video.noSolutionLink}/view" target="_blank" class="no-solution" style="color: #FF5733;"> (NoSolution) </a>`;
    }
    if (video.empty) {
        links += `<a href="#" target="#" class="#" style="color: #FF5733;"> \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 </a>`;
    }
    let video_element = `
      <div class="video" data-id="${video.id}">
        <img src="play.svg" alt="">
        <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
        <h3 class="title">${video.title}</h3>
        ${links ? `<p class="links">${links}</p>` : '<p class="links"></p>'}
        <p class="time">${video.duration}</p>
      </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');

// إضافة حدث النقر على كل فيديو
videos.forEach(selected_video => {
    selected_video.onclick = () => {
        // إزالة الفيديو النشط من قائمة التشغيل
        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'play.svg';
        }

        // إضافة الفيديو المحدد كفيديو نشط
        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'pause.svg';

        // عرض الفيديو المحدد
        let match_video = data.find(video => video.id == selected_video.dataset.id);
        let iframe_src = `https://drive.google.com/file/d/${match_video.name}/preview`;
        let iframe_element = `<iframe src="${iframe_src}" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>`;
        main_video.innerHTML = iframe_element;
        main_video_title.innerHTML = match_video.title;
    }
});

// إضافة حدث النقر على الفيديو المقدم (Introduction)
let introduction_video = {
    'id': 'introduction',
    'title': 'Introduction',
    'duration': '00:19',
};

let introduction_iframe_element = `
    <iframe id="introduction" name="introduction" src="introduction.mp4" frameborder="0" allowfullscreen allow="autoplay" sandbox="allow-scripts allow-same-origin nodownload"></iframe>
`;

main_video.innerHTML = introduction_iframe_element;
main_video_title.innerHTML = introduction_video.title;

// إزالة الفيديو النشط من قائمة التشغيل عند عرض الفيديو المقدم
for (all_videos of videos) {
    all_videos.classList.remove('active');
    all_videos.querySelector('img').src = 'play.svg';
}

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroLL sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

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
