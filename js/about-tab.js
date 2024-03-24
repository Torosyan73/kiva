const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tab.forEach(function(item) {
    item.addEventListener('click', function(){

        tab.forEach(function(item) {
            item.classList.remove('about-us__item--active');
        });

        this.classList.add('about-us__item--active');
        
        
        tabContent.forEach(function(item) {
            item.classList.add('about-us__content-item--hidden'); 
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('about-us__content-item--hidden');

    });
});