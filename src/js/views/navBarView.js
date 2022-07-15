class navBar {
    _navBarParentEl = document.querySelector('.menu__options');

    getClickValue(handler) {
        const navOptions = this._navBarParentEl.querySelectorAll('p');
        navOptions.forEach(op => op.addEventListener('click', (e) => {
            e.preventDefault();
            handler(e.target);
        }))
    }

    cleaner() {
        const main = document.querySelector('.main_section');
        main.innerHTML = '';
    }
}

export default new navBar();