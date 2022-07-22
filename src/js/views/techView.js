class technology {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');
    _data;

    renderTech(data) {
        this._data = data
        const markup = this._generateMarkupTech();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
        this._checkingWidthScreen();
        this._backImage();
    }

    _checkingWidthScreen() {
        if (screen.width > 1020) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-desktop.jpg')";
        } else if (screen.width < 1019) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-tablet.jpg')";
        } else if (screen.width < 769) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-mobile.jpg')";
        }
    }

    _backImage() {
        const backDesktopImage = window.matchMedia("(min-width: 800px)");
        const backTabletpImage = window.matchMedia("(max-width: 769px)");
        const backMobilepImage = window.matchMedia("(max-width: 430px)");
        backDesktopImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-desktop.jpg')";
            }
        }

        backTabletpImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-tablet.jpg')";
            }
        }

        backMobilepImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-mobile.jpg')";
            }
        }
    }

    _image(descData) {
        const descImage = window.matchMedia("(max-width: 769px)");
        return descImage.onchange = (e) => {
            if (e.matches) {
                return descData.images.landscape;
            } else {
                return descData.images.portrait;
            }
        }
    }

    _generateMarkupTech() {
        return `
        <h3 class="tech__title"><span>03</span>SPACE LAUNCH 101</h3>
        <section class="tech__container">
            <article class="description__container">
                <div class="tech_dots">
                    <button class="vehicle options active">1</button>
                    <button class="spaceport options">2</button>
                    <button class="capsule options">3</button>
                </div>
                <div class="description">
                    <h4>THE TERMINOLOGY...</h4>
                    <h2>${this._data[0].name.toUpperCase()}</h2>
                    <blockquote>${this._data[0].description}</blockquote>
                </div>
            </article>
            <img src="${this._data[0].images.portrait}" alt="tech__image class="tech__image">
        </section>`
    }

}

export default new technology();