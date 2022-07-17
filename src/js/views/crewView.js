class crew {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');
    _data;

    renderCrew(data) {
        this._data = data
        const markup = this._generateMarkupCrew();
        this._bacgroundEl.style.backgroundImage = "url('./src/images/crew/background-crew-desktop.jpg')"
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    }

    _generateMarkupCrew() {
        return `
        <h3 class="destination__title"><span>02</span>MEET YOUR CREW</h3>
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