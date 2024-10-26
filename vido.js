// الحصول على عنصر الفيديو
const video = document.getElementById('my-video');

// وظيفة لتشغيل الفيديو عند النقر عليه
video.addEventListener('click', function() {
    if (video.paused) {
        video.play(); // تشغيل الفيديو إذا كان متوقفًا
    } else {
        video.pause(); // إيقاف الفيديو إذا كان يعمل
    }
});