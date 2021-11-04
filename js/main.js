

//스크롤이 일정값 이상 커지면 badge 없애기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//함수가 우루루 실행되는 것을 방지하기 위해 0.3초 단위로 실행되도록 함
window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기 gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
        	opacity: 0,
					//요소를 감출 뿐만 아니라 아예 지워줘야 뒤에 클릭 가능
					display: 'none'
        });
                //버튼 보이기
                gsap.to(toTopEl, .2, {
                    x: 0 
                });
    }else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
        	opacity: 1,
					display: 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100 
        });
    }
}, 300));
// _.throttle(함수, 시간(밀리세컨트))

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index){
    //애니메이션 처리하는 라이브러리 gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        //요소의 인덱스 순서대로 출력됨 index는 0에서 시작 0.7, 1.4, 2.1, 2.7
        delay: (index+1) * .7,
        opacity: 1
    });
});

//swiper
//자바스크립트 생성자(클래스)
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
     autoplay: true,
     loop: true
});

new Swiper('.promotion .swiper-container',{
    // 기본이 horizontal이라 빼도됨
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 3개씩 보여줌
    spaceBetween: 10, // 슬라이드 사이 여백 10px
    centeredSlides: true, // 1번 슬라이드 가운데 보이기
    autoplay: {
        delay : 5000, // 3초가 기본값, 5초
    },
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true //사용자가 페이지 번호 요소를 제어 할 수 있는지
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})

// promotion 감추기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김 처리
        //요소에 hide라는 클래스 추가
        promotionEl.classList.add('hide');
    }else{
        //보임 처리
        //요소에 hide라는 클래스 삭제
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// 이미지 떠다니는 애니메이션
function floatingObject(selector, delay, size){
    // gsap.to(요소,시간,옵션)
    gsap.to(selector,random(1.5, 2.5),{
        y: size,
        repeat: -1, // 무한반복
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// section 중 scroll-spy클래스를 갖는 요소를 변수에 담는다. 
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    //Scene() 특정요소를 감지함, setClassToggle() 어떤 클래스 속성을 지정, addTo() 컨트롤러 추가
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 할당
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

