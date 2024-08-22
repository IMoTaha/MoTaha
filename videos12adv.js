const main_video = document.getElementById('main-video-container');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1.1 كثيرات الحدود والدوال النسبية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a2',
        'title': '1.2 الدوال العكسية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a3',
        'title': '1.3 الدوال المثلثية والدوال المثلثية العكسية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },

    {
        'id': 'a4',
        'title': '1.4 الدوال الأسية واللوغاريتمية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a5',
        'title': '1.5 تحويلات الدوال',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a6',
        'title': '2.1 مراجعة موجزة عن التفاضل والتكامل: المماسات وطول المنحنى',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a7',
        'title': '2.2 مفهوم النهاية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },

    {
        'id': 'a8',
        'title': '2.3 حساب النهايات',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a9',
        'title': '2.4 الاتصال ونتائجه',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a10',
        'title': '2.5 النهايات التي تتضمن اللانهاية: خطوط التقارب',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a11',
        'title': '3.1 المماسات والسرعة المتجهة',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a12',
        'title': '3.2 الاشتقاق',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a13',
        'title': '3.3 حساب المشتقات: قاعدة القوة',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },    
    {
        'id': 'a14',
        'title': '3.4 قواعد الضرب والقسمة',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },    
    {
        'id': 'a15',
        'title': '3.5 قاعدة السلسلة',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },    
    {
        'id': 'a16',
        'title': '3.6 مشتقات الدوال المثلثية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },    
    {
        'id': 'a17',
        'title': '3.7 اشتقاق الدوال الأسية والدوال اللوغاريتمية',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a18',
        'title': '3.8 الاشتقاق الضمني والدوال المثلثية المعكوسة',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a19',
        'title': '3.10 نظرية القيمة المتوسطة',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a21',
        'title': '4.1 التقريبات الخطية وطريقة نيوتن',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
    {
        'id': 'a22',
        'title': '4.2 الصيغ غير المعرفة وقاعدة لوبيتال',
        'name': '1Bn6WjJCVylub3-EzvAP-KtFSe5I3VEgo',
        'duration': '00:00',
        'solutionLink': '',
        'noSolutionLink': '',
        'powerpointLink' : '',
    },
];


data.forEach((video, i) => {
    let links = '';
    if (video.powerpointLink) {
        links += `<a href="${video.powerpointLink}"  class="powerpoint" style="color: var(--main-color);"> (powerpoint) </a>`;
    }
    if (video.solutionLink) {
        links += video.noSolutionLink ? `<a href="${video.solutionLink}" target="_blank" class="solution" style="color: #57FF33;"> (solution) </a> <span> \xa0|\xa0 </span>` : '';
    }
    if (video.noSolutionLink) {
        links += `<a href="${video.noSolutionLink}"  class="no-solution" style="color: #FF5733;"> (NoSolution) </a>`;
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
    'duration': '00:00',
};

let introduction_iframe_element = `
    <iframe id="introduction" name="introduction" src="intro.mp4" frameborder="0" allowfullscreen allow="autoplay" sandbox="allow-scripts allow-same-origin nodownload"></iframe>
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
const videoContainer = document.getElementById('video-container');
const authenticatedUsers = [
  { email: 'a@z', password: 'a' }
];

// Check if the user is authenticated
const user = localStorage.getItem('user');
if (!user) {
  // Redirect to login page if user is not authenticated
  window.location.href = 'login.html';
} else {
  const userData = JSON.parse(user);
  const authenticatedUser = authenticatedUsers.find((u) => u.email === userData.email && u.password === userData.password);
  if (!authenticatedUser) {
    // Redirect to login page if authentication fails
    window.location.href = 'login.html';
  }
}
