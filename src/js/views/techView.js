class technology {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');
    _data;

    renderTech(data) {
        this._data = data
        const markup = this._generateMarkupTech();
        this._bacgroundEl.style.backgroundImage = "url('./src/images/technology/background-technology-desktop.jpg')"
        this._parentEl.insertAdjacentHTML("beforeend", markup);

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

    _generateMarkupTech() {
        return `
        <h3 class="destination__title"><span>03</span>SPACE LAUNCH 101</h3>
        <section class="tech__container">
            <article class="description__container">
                <div class="tech_dots">
                    <button class="vehicle options active">1</button>
                    <button class="spaceport options">2</button>
                    <button class="capsule options">3</button>
                </div>
                <div class="description">
                    <h4>THE TERMINOLOGY...</h4>
                    <h2>${this._data[0].name}</h2>
                    <blockquote>${this._data[0].description}</blockquote>
                </div>
            </article>
            <img src="${this._data[0].images.portrait}" alt="tech__image">
        </section>`
    }

}

export default new technology();