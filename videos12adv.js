const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '1.1 كثيرات الحدود والدوال النسبية',
        'name': '1.1 كثيرات الحدود والدوال النسبية.mp4',
        'duration': '2:47',
        'solutionLink': 'solution1_1.pdf',
        'noSolutionLink': 'nosolution1_1.pdf',
        'powerpointLink': 'powerpoint1_1.pdf',
    },
    {
        'id': 'a2',
        'title': '1.2 الدوال العكسية',
        'name': '1.2 الدوال العكسية.mp4',
        'duration': '2:45',
        'solutionLink': 'solution1_2.pdf',
        'noSolutionLink': 'nosolution1_2.pdf',
        'powerpointLink' : 'powerpoint1_2.pdf',
    },
    {
        'id': 'a3',
        'title': '1.3 الدوال المثلثية والدوال المثلثية العكسية',
        'name': '1.3 الدوال المثلثية والدوال المثلثية العكسية.mp4',
        'duration': '24:49',
        'solutionLink': 'solution1_3.pdf',
        'noSolutionLink': 'nosolution1_3.pdf',
        'powerpointLink': 'powerpoint1_3.pdf',
    },

    {
        'id': 'a4',
        'title': '1.4 الدوال الأسية واللوغاريتمية',
        'name': '1.4 الدوال الأسية واللوغاريتمية.mp4',
        'duration': '3:59',
        'solutionLink': 'solution1_4.pdf',
        'noSolutionLink': 'nosolution1_4.pdf',
        'powerpointLink': 'powerpoint1_4.pdf',
    },
    {
        'id': 'a5',
        'title': '1.5 تحويلات الدوال',
        'name': '1.5 تحويلات الدوال.mp4',
        'duration': '4:25',
        'solutionLink': 'solution1_5.pdf',
        'noSolutionLink': 'nosolution1_5.pdf',
        'powerpointLink': 'powerpoint1_5.pdf',
    },
    {
        'id': 'a6',
        'title': '2.1 مراجعة موجزة عن التفاضل والتكامل: المماسات وطول المنحنى',
        'name': '2.1 مراجعة موجزة عن التفاضل والتكامل: المماسات وطول المنحنى.mp4',
        'duration': '5:33',
        'solutionLink': 'solution2_1.pdf',
        'noSolutionLink': 'nosolution2_1.pdf',
        'powerpointLink': 'powerpoint2_1.pdf',
    },
    {
        'id': 'a7',
        'title': '2.2 مفهوم النهاية',
        'name': '2.2 مفهوم النهاية.mp4',
        'duration': '0:29',
        'solutionLink': 'solution2_2.pdf',
        'noSolutionLink': 'nosolution2_2.pdf',
        'powerpointLink': 'powerpoint2_2.pdf',
    },

    {
        'id': 'a8',
        'title': '2.3 حساب النهايات',
        'name': '2.3 حساب النهايات.mp4',
        'duration': '1:12',
        'solutionLink': 'solution2_3.pdf',
        'noSolutionLink': 'nosolution2_3.pdf',
        'powerpointLink': 'powerpoint2_3.pdf',
    },
    {
        'id': 'a9',
        'title': '2.4 الاتصال ونتائجه',
        'name': '2.4 الاتصال ونتائجه.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_4.pdf',
        'noSolutionLink': 'nosolution2_4.pdf',
        'powerpointLink': 'powerpoint2_4.pdf',
    },
    {
        'id': 'a10',
        'title': '2.5 النهايات التي تتضمن اللانهاية: خطوط التقارب',
        'name': '2.5 النهايات التي تتضمن اللانهاية: خطوط التقارب.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_5.pdf',
        'noSolutionLink': 'nosolution2_5.pdf',
        'powerpointLink': 'powerpoint2_5.pdf',
    },
    {
        'id': 'a11',
        'title': '2.6 التعريف الرسمي للنهاية',
        'name': '2.6 التعريف الرسمي للنهاية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_6.pdf',
        'noSolutionLink': 'nosolution2_6.pdf',
        'powerpointLink': 'powerpoint2_6.pdf',
    },
    {
        'id': 'a12',
        'title': '2.7 النهايات وأخطاء فقدان الدلالة',
        'name': '2.7 النهايات وأخطاء فقدان الدلالة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution2_7.pdf',
        'noSolutionLink': 'nosolution2_7.pdf',
        'powerpointLink': 'powerpoint2_7.pdf',
    },
    {
        'id': 'a13',
        'title': '3.1 المماسات والسرعة المتجهة',
        'name': '3.1 المماسات والسرعة المتجهة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_1.pdf',
        'noSolutionLink': 'nosolution3_1.pdf',
        'powerpointLink': 'powerpoint3_1.pdf',
    },
    {
        'id': 'a14',
        'title': '3.2 الاشتقاق',
        'name': '3.2 الاشتقاق.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_2.pdf',
        'noSolutionLink': 'nosolution3_2.pdf',
        'powerpointLink': 'powerpoint3_2.pdf',
    },
    {
        'id': 'a15',
        'title': '3.3 حساب المشتقات: قاعدة القوة',
        'name': '3.3 حساب المشتقات: قاعدة القوة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_3.pdf',
        'noSolutionLink': 'nosolution3_3.pdf',
        'powerpointLink': 'powerpoint3_3.pdf',
    },    
    {
        'id': 'a16',
        'title': '3.4 قواعد الضرب والقسمة',
        'name': '3.4 قواعد الضرب والقسمة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_4.pdf',
        'noSolutionLink': 'nosolution3_4.pdf',
        'powerpointLink': 'powerpoint3_4.pdf',
    },    
    {
        'id': 'a17',
        'title': '3.5 قاعدة السلسلة',
        'name': '3.5 قاعدة السلسلة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_5.pdf',
        'noSolutionLink': 'nosolution3_5.pdf',
        'powerpointLink': 'powerpoint3_5.pdf',
    },    
    {
        'id': 'a18',
        'title': '3.6 مشتقات الدوال المثلثية',
        'name': '3.6 مشتقات الدوال المثلثية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_6.pdf',
        'noSolutionLink': 'nosolution3_6.pdf',
        'powerpointLink': 'powerpoint3_6.pdf',
    },    
    {
        'id': 'a19',
        'title': '3.7 اشتقاق الدوال الأسية والدوال اللوغاريتمية',
        'name': '3.7 اشتقاق الدوال الأسية والدوال اللوغاريتمية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_7.pdf',
        'noSolutionLink': 'nosolution3_7.pdf',
        'powerpointLink': 'powerpoint3_7.pdf',
    },
    {
        'id': 'a20',
        'title': '3.8 الاشتقاق الضمني والدوال المثلثية المعكوسة',
        'name': '3.8 الاشتقاق الضمني والدوال المثلثية المعكوسة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_8.pdf',
        'noSolutionLink': 'nosolution3_8.pdf',
        'powerpointLink': 'powerpoint3_8.pdf',
    },
    {
        'id': 'a21',
        'title': '3.9 دوال القطع الزائد',
        'name': '3.9 دوال القطع الزائد.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_9.pdf',
        'noSolutionLink': 'nosolution3_9.pdf',
        'powerpointLink': 'powerpoint3_9.pdf',
    },
    {
        'id': 'a22',
        'title': '3.10 نظرية القيمة المتوسطة',
        'name': '3.10 نظرية القيمة المتوسطة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution3_10.pdf',
        'noSolutionLink': 'nosolution3_10.pdf',
        'powerpointLink': 'powerpoint3_10.pdf',
    },
    {
        'id': 'a23',
        'title': '4.1 التقريبات الخطية وطريقة نيوتن',
        'name': '4.1 التقريبات الخطية وطريقة نيوتن.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_1.pdf',
        'noSolutionLink': 'nosolution4_1.pdf',
        'powerpointLink': 'powerpoint4_1.pdf',
    },
    {
        'id': 'a24',
        'title': '4.2 الصيغ غير المعرفة وقاعدة لوبيتال',
        'name': '4.2 الصيغ غير المعرفة وقاعدة لوبيتال.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_2.pdf',
        'noSolutionLink': 'nosolution4_2.pdf',
        'powerpointLink': 'powerpoint4_2.pdf',
    },
    {
        'id': 'a25',
        'title': '4.3 القيم العظمى والصغرى',
        'name': '4.3 القيم العظمى والصغرى.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_3.pdf',
        'noSolutionLink': 'nosolution4_3.pdf',
        'powerpointLink': 'powerpoint4_3.pdf',
    },
    {
        'id': 'a26',
        'title': '4.4 الدوال المتزايدة والمتناقصة',
        'name': '4.4 الدوال المتزايدة والمتناقصة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_4.pdf',
        'noSolutionLink': 'nosolution4_4.pdf',
        'powerpointLink': 'powerpoint4_4.pdf',
    },
    {
        'id': 'a27',
        'title': '4.5 التقعر واختبار المشتقة الثانية',
        'name': '4.5 التقعر واختبار المشتقة الثانية.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_5.pdf',
        'noSolutionLink': 'nosolution4_5.pdf',
        'powerpointLink': 'powerpoint4_5.pdf',
    },
    {
        'id': 'a28',
        'title': '4.6 نظرة عامة على رسم المنحنيات',
        'name': '4.6 نظرة عامة على رسم المنحنيات.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_6.pdf',
        'noSolutionLink': 'nosolution4_6.pdf',
        'powerpointLink': 'powerpoint4_6.pdf',
    },
    {
        'id': 'a29',
        'title': '4.7 القيم المثلى',
        'name': '4.7 القيم المثلى.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_7.pdf',
        'noSolutionLink': 'nosolution4_7.pdf',
        'powerpointLink': 'powerpoint4_7.pdf',
    },
    {
        'id': 'a30',
        'title': '4.8 المعدلات المرتبطة',
        'name': '4.8 المعدلات المرتبطة.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_8.pdf',
        'noSolutionLink': 'nosolution4_8.pdf',
        'powerpointLink': 'powerpoint4_8.pdf',
    },
    {
        'id': 'a31',
        'title': '4.9 معدلات التغير في الاقتصاد والعلوم',
        'name': 'animated shopping cart.mp4',
        'duration': '3:38',
        'solutionLink': 'solution4_9.pdf',
        'noSolutionLink': 'nosolution4_9.pdf',
        'powerpointLink': 'powerpoint4_9.pdf',
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
        main_video.src = 'http://localhost/zn/' + match_video.name;
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

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
