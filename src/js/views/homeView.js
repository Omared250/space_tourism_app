class home {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');

    addHandlerHome(handler) {
        ['load'].forEach(ev => window.addEventListener(ev, handler()));
    };

    renderHome() {
        const markup = this._generateMarkupHome();
        this._bacgroundEl.style.backgroundImage = "url('./src/images/home/background-home-desktop.jpg')"
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    }

    _generateMarkupHome() {
        return `
        <article class="home__info">
            <h3>
                SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1>
                SPACE
            </h1>
            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
            <section class="explore">
                <p>EXPLORE</p>
            </section>   
        </article>`
    }

}

export default new home();