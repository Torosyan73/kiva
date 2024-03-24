const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tab.forEach(function(item) {
    item.addEventListener('click', function(){

        tab.forEach(function(item) {
            item.classList.remove('showrooms__tab-item--active');
        });

        this.classList.add('showrooms__tab-item--active');
        
        
        tabContent.forEach(function(item) {
            item.classList.add('tab-content--hidden'); 
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('tab-content--hidden');

    });
});