const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1.1 الدوال',
        'name': '1.1 الدوال.mp4',
        'duration': '2:47',
        'solutionLink': 'solution1_1.pdf',
        'noSolutionLink': 'nosolution1_1.pdf',
        'powerpointLink': 'powerpoint1_1.pdf',
    },
    {
        'id': 'a2',
        'title': '1.2 تحليل التمثيلات البيانية للدوال والعلاقات',
        'name': '1.2 تحليل التمثيلات البيانية للدوال والعلاقات.mp4',
        'duration': '2:45',
        'solutionLink': 'solution1_2.pdf',
        'noSolutionLink': 'nosolution1_2.pdf',
        'powerpointLink' : 'powerpoint1_2.pdf',
    },
    {
        'id': 'a3',
        'title': '1.3 الاتصال والسلوك الطرفي والنهايات',
        'name': '1.3 الاتصال والسلوك الطرفي والنهايات.mp4',
        'duration': '24:49',
        'solutionLink': 'solution1_3.pdf',
        'noSolutionLink': 'nosolution1_3.pdf',
        'powerpointLink': 'powerpoint1_3.pdf',
    },

    {
        'id': 'a4',
        'title': '1.4 القيم القصوى ومتوسط معدلات التغير',
        'name': '1.4 القيم القصوى ومتوسط معدلات التغير.mp4',
        'duration': '3:59',
        'solutionLink': 'solution1_4.pdf',
        'noSolutionLink': 'nosolution1_4.pdf',
        'powerpointLink': 'powerpoint1_4.pdf',
    },
    {
        'id': 'a5',
        'title': '1.5 الدوال الأصلية والتحويلات',
        'name': '1.5 الدوال الأصلية والتحويلات.mp4',
        'duration': '4:25',
        'solutionLink': 'solution1_5.pdf',
        'noSolutionLink': 'nosolution1_5.pdf',
        'powerpointLink': 'powerpoint1_5.pdf',
    },
    {
        'id': 'a6',
        'title': '1.6 العمليات على الدوال وتركيب الدوال',
        'name': '1.6 العمليات على الدوال وتركيب الدوال.mp4',
        'duration': '5:33',
        'solutionLink': 'solution1_6.pdf',
        'noSolutionLink': 'nosolution1_6.pdf',
        'powerpointLink': 'powerpoint1_6.pdf',
    },
    {
        'id': 'a7',
        'title': '1.7 العلاقات والدوال العكسية',
        'name': '1.7 العلاقات والدوال العكسية.mp4',
        'duration': '0:29',
        'solutionLink': 'solution1_7.pdf',
        'noSolutionLink': 'nosolution1_7.pdf',
        'powerpointLink': 'powerpoint1_7.pdf',
    },

    {
        'id': 'a8',
        'title': '2.1 دوال القوة والدوال الجذرية',
        'name': '2.1 دوال القوة والدوال الجذرية.mp4',
        'duration': '1:12',
        'solutionLink': 'solution2_1.pdf',
        'noSolutionLink': 'nosolution2_1.pdf',
        'powerpointLink': 'powerpoint2_1.pdf',
    },
    {
        'id': 'a9',
        'title': '2.2 الدوال كثيرة الحدود',
        'name': '2.2 الدوال كثيرة الحدود.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_2.pdf',
        'noSolutionLink': 'nosolution2_2.pdf',
        'powerpointLink': 'powerpoint2_2.pdf',
    },
    {
        'id': 'a10',
        'title': '2.3 نظريتا الباقي والعامل',
        'name': '2.3 نظريتا الباقي والعامل.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_3.pdf',
        'noSolutionLink': 'nosolution2_3.pdf',
        'powerpointLink': 'powerpoint2_3.pdf',
    },
    {
        'id': 'a11',
        'title': '2.4 أصفار الدوال كثيرة الحدود',
        'name': '2.4 أصفار الدوال كثيرة الحدود.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_4.pdf',
        'noSolutionLink': 'nosolution2_4.pdf',
        'powerpointLink': 'powerpoint2_4.pdf',
    },
    {
        'id': 'a12',
        'title': '2.5 الدوال النسبية',
        'name': '2.5 الدوال النسبية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_5.pdf',
        'noSolutionLink': 'nosolution2_5.pdf',
        'powerpointLink': 'powerpoint2_5.pdf',
    },
    {
        'id': 'a13',
        'title': '2.6 المتباينات غير الخطية',
        'name': '2.6 المتباينات غير الخطية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_6.pdf',
        'noSolutionLink': 'nosolution2_6.pdf',
        'powerpointLink': 'powerpoint2_6.pdf',
    },
    {
        'id': 'a14',
        'title': '3.1 المتباينات غير الخطية',
        'name': '3.1 المتباينات غير الخطية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_1.pdf',
        'noSolutionLink': 'nosolution3_1.pdf',
        'powerpointLink': 'powerpoint3_1.pdf',
    },
    {
        'id': 'a15',
        'title': '3.2 الدوال اللوغاريتمية',
        'name': '3.2 الدوال اللوغاريتمية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_2.pdf',
        'noSolutionLink': 'nosolution3_2.pdf',
        'powerpointLink': 'powerpoint3_2.pdf',
    },    
    {
        'id': 'a16',
        'title': '3.3 خصائص اللوغاريتمات',
        'name': '3.3 خصائص اللوغاريتمات.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_3.pdf',
        'noSolutionLink': 'nosolution3_3.pdf',
        'powerpointLink': 'powerpoint3_3.pdf',
    },    
    {
        'id': 'a17',
        'title': '3.4 المعادلات الأسية واللوغاريتمية',
        'name': '3.4 المعادلات الأسية واللوغاريتمية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_4.pdf',
        'noSolutionLink': 'nosolution3_4.pdf',
        'powerpointLink': 'powerpoint3_4.pdf',
    },    
    {
        'id': 'a18',
        'title': '4.1 حساب المثلثات قائمة الزوايا',
        'name': '4.1 حساب المثلثات قائمة الزوايا.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_1.pdf',
        'noSolutionLink': 'nosolution4_1.pdf',
        'powerpointLink': 'powerpoint4_1.pdf',
    },    
    {
        'id': 'a19',
        'title': '4.2 الدرجات والراديان',
        'name': '4.2 الدرجات والراديان.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_2.pdf',
        'noSolutionLink': 'nosolution4_2.pdf',
        'powerpointLink': 'powerpoint4_2.pdf',
    },
    {
        'id': 'a20',
        'title': '4.3 النسب المثلثية على دائرة الوحدة',
        'name': '4.3 النسب المثلثية على دائرة الوحدة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_3.pdf',
        'noSolutionLink': 'nosolution4_3.pdf',
        'powerpointLink': 'powerpoint4_3.pdf',
    },
    {
        'id': 'a21',
        'title': '4.4 الزاوية بيانيًا Cosine و Sine تمثيل دوال',
        'name': '4.4 الزاوية بيانيًا Cosine و Sine تمثيل دوال.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_4.pdf',
        'noSolutionLink': 'nosolution4_4.pdf',
        'powerpointLink': 'powerpoint4_4.pdf',
    },
    {
        'id': 'a22',
        'title': '4.5 التمثيل البياني للدوال المثلثية الأخرى',
        'name': '4.5 التمثيل البياني للدوال المثلثية الأخرى.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_5.pdf',
        'noSolutionLink': 'nosolution4_5.pdf',
        'powerpointLink': 'powerpoint4_5.pdf',
    },
    {
        'id': 'a23',
        'title': '4.6 الدوال المثلثية العكسية',
        'name': '4.6 الدوال المثلثية العكسية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_6.pdf',
        'noSolutionLink': 'nosolution4_6.pdf',
        'powerpointLink': 'powerpoint4_6.pdf',
    },
    {
        'id': 'a24',
        'title': '5.1 المتطابقات المثلثية',
        'name': '5.1 المتطابقات المثلثية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution5_1.pdf',
        'noSolutionLink': 'nosolution5_1.pdf',
        'powerpointLink': 'powerpoint5_1.pdf',
    },
    {
        'id': 'a25',
        'title': '5.2 إثبات صحة المتطابقات المثلثية',
        'name': '5.2 إثبات صحة المتطابقات المثلثية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution5_2.pdf',
        'noSolutionLink': 'nosolution5_2.pdf',
        'powerpointLink': 'powerpoint5_2.pdf',
    },
    {
        'id': 'a26',
        'title': '5.3 حل المعادلات المثلثية',
        'name': '5.3 حل المعادلات المثلثية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution5_3.pdf',
        'noSolutionLink': 'nosolution5_3.pdf',
        'powerpointLink': 'powerpoint5_3.pdf',
    },
    {
        'id': 'a27',
        'title': '5.4 متطابقات المجموع والفرق',
        'name': '5.4 متطابقات المجموع والفرق.mp4',
        'duration': '3:38',
        'solutionLink': 'solution5_4.pdf',
        'noSolutionLink': 'nosolution5_4.pdf',
        'powerpointLink': 'powerpoint5_4.pdf',
    },
    {
        'id': 'a28',
        'title': '5.5 متطابقات ضعف الزاوية وتحويل ناتج الضرب إلى مجموع',
        'name': '5.5 متطابقات ضعف الزاوية وتحويل ناتج الضرب إلى مجموع.mp4',
        'duration': '3:38',
        'solutionLink': 'solution5_5.pdf',
        'noSolutionLink': 'nosolution5_5.pdf',
        'powerpointLink': 'powerpoint5_5.pdf',
    },
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    ${video.powerpointLink ? `<a href="${video.powerpointLink}" target="_blank" class="powerpoint" style="color: var(--main-color);"> (powerpoint) </a>` : `<a href="${video.solutionLink}" target="_blank" class="solution" style="color: #57FF33;"> (solution) </a> <span> \xa0|\xa0 </span> <a href="${video.noSolutionLink}" target="_blank" class="no-solution" style="color: #FF5733;"> (no solution) </a>`}
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

const videoContainer = document.getElementById('video-container');
const authenticatedUsers = [
  { email: 'h@z', password: 'h' }
];

// Check if the user is authenticated
const user = localStorage.getItem('user');
if (!user) {
  const userData = JSON.parse(user);
  const authenticatedUser = authenticatedUsers.find((u) => u.email === userData.email && u.password === userData.password);
  if (authenticatedUser) {
    // Render video list
    authenticatedUser.videos.forEach((video) => {
      const videoElement = document.createElement('video');
      videoElement.src = `videos/${video}`;
      videoElement.controls = true;
      videoContainer.appendChild(videoElement);
    });
  } else {
    // Redirect to login page if authentication fails
    window.location.href = 'login.html';
  }
} else {
    // Redirect to login page if user is not authenticated
    window.location.href = 'login.html';
  }
