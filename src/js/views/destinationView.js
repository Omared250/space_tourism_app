class Destination  {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');
    _data;

    renderDestination(data) {
        this._data = data
        const markup = this._generateMarkup();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
        this._checkingWidthScreen();
        this._backImage();
    }

    _checkingWidthScreen() {
        if (screen.width > 1020) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-desktop.jpg')";
        } else if (screen.width < 1019) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-tablet.jpg')";
        } else if (screen.width < 769) {
            this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-mobile.jpg')";
        }
    }

    _backImage() {
        const backDesktopImage = window.matchMedia("(min-width: 800px)");
        const backTabletpImage = window.matchMedia("(max-width: 769px)");
        const backMobilepImage = window.matchMedia("(max-width: 430px)");
        backDesktopImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-desktop.jpg')";
            }
        }

        backTabletpImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-tablet.jpg')";
            }
        }

        backMobilepImage.onchange = (e) => {
            if (e.matches) {
                this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-mobile.jpg')";
            }
        }
        
    }
 
    _generateMarkup() {
        return `
        <h3 class="destination__title"><span>01</span>PICK YOUR DESTINATION</h3>
        <img src="${this._data[0].images.png}" alt="destination" class="destination__image">
        <section class="destination__info">
           <ul class="destination__options">
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
           </ul>
           <h1>${this._data[0].name.toUpperCase()}</h1>
           <p>${this._data[0].description}</p>
           <hr>
           <article class="destination__details">
               <div class="distance">
                   <h4>AVG. DISTANCE</h4>
                   <span>${this._data[0].distance.toUpperCase()}</span>
               </div>
               <div class="travel__time">
                   <h4>EST. TRAVEL TIME</h4>
                   <span>${this._data[0].travel.toUpperCase()}</span>
               </div>
           </article>
        </section>`
    }
}

export default new Destination();