class navBar {
    _navBarParentEl = document.querySelector('.menu__options');

    getClickValue(handler) {
        this._navBarParentEl.addEventListener('click', (e) => {
            e.preventDefault();
            const navVal = e.target;
            handler(navVal);
        })
    }

    cleaner() {
        const main = document.querySelector('.main_section');
        main.innerHTML = '';
    }
}

export default new navBar();