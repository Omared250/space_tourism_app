class crew {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');
    _data;

    renderCrew(data) {
        this._data = data
        const markup = this._generateMarkupCrew();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
        this._checkingWidthScreen();
        this._backImage();
    }

    _checkingWidthScreen() {
        if (screen.width > 1020) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-desktop.jpg')";
        } else if (screen.width < 1019) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-tablet.jpg')";
        } else if (screen.width < 769) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-mobile.jpg')";
        }
    }

    _backImage() {
        const backDesktopImage = window.matchMedia("(min-width: 800px)");
        const backTabletpImage = window.matchMedia("(max-width: 769px)");
        const backMobilepImage = window.matchMedia("(max-width: 430px)");
        backDesktopImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-desktop.jpg')";
            }
        }

        backTabletpImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-tablet.jpg')";
            }
        }

        backMobilepImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-mobile.jpg')";
            }
        }
        
    }

    _generateMarkupCrew() {
        return `
        <h3 class="crew__title"><span>02</span>MEET YOUR CREW</h3>
        <div class="slider">
            <div class="slide slide--1">
                <div class="biografia">
                    <h4 class="role">${this._data[0].role.toUpperCase()}</h4>
                    <h2 class="name">${this._data[0].name.toUpperCase()}</h2>
                    <blockquote class="biografia__text">${this._data[0].bio}</blockquote>
                    <div class="dots">
                        <button class="dots__dot commander"></button>
                        <button class="dots__dot mission_specialist"></button>
                        <button class="dots__dot pilot"></button>
                        <button class="dots__dot flight_engineer"></button>
                    </div>
                </div>
                <img src="${this._data[0].images.png}" class="crew__photo" alt="crew__photo">
            </div>
        </div>`
    }
}

export default new crew();