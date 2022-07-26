class navBarView {
    _menuOptions = document.querySelector('#menu__options');
    _hamMenu = document.querySelector('.hamburger_menu');
    _closeBtn = document.querySelector('.close__icon');

    showMenuOptions() {
        this._hamMenu.addEventListener('click', (e) => {
            e.preventDefault();
            this._menuOptions.style.display = 'inline-block';
            this._hamMenu.style.display = 'none';
        })
    }

    closeMenuOptions() {
        this._closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this._menuOptions.style.display = 'none';
            this._hamMenu.style.display = 'inline-block';
        })
        this._checkingScreenSize();
    }

    _checkingScreenSize() {
        const displayMenu = window.matchMedia("(min-width: 680px)");
        const hiddeMenu = window.matchMedia("(max-width: 680px)");
        displayMenu.onchange = (e) => {
            if (e.matches) {
                this._menuOptions.style.display = 'flex';
                this._hamMenu.style.display = 'none';
            }
        }

        hiddeMenu.onchange = (e) => {
            if (e.matches) {
                this._menuOptions.style.display = 'none';
                this._hamMenu.style.display = 'inline-block';
            }
        }
    }
}

export default new navBarView();