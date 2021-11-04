// class= search인 요소를 할당 
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input');

// .search 를 클릭하면 이벤트를 발생시키겠다
searchEl.addEventListener('click', function(){
    //input요소에 포커스를 한다
    searchInputEl.focus();
});

//핸들러
searchInputEl.addEventListener('focus', function() {
    //input요소에 포커스가 되면 focused라는 클래스를 추가한다
    searchEl.classList.add('focused');
    //속성 추가
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    //input요소에 포커스 해제 되면 focused라는 클래스를 제거한다
    searchEl.classList.remove('focused');
    //속성 추가
    searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
//요소가 갖고 있는 글자내용을 알아내거나 지정할 수 있다
thisYear.textContent = new Date().getFullYear(); // 2021