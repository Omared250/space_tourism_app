class Destination  {
    _parentEl = document.querySelector('.main_section');
    _bacgroundEl = document.querySelector('body');
    _data;

    renderDestination(data) {
        this._data = data
        const markup = this._generateMarkup();
        this._bacgroundEl.style.backgroundImage = "url('./src/images/destination/background-destination-desktop.jpg')"
        this._parentEl.insertAdjacentHTML("beforeend", markup);
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
           <h1>${this._data[0].name}</h1>
           <p>${this._data[0].description}</p>
           <hr>
           <article class="destination__details">
               <div class="distance">
                   <h4>AVG. DISTANCE</h4>
                   <span>${this._data[0].distance}</span>
               </div>
               <div class="travel__time">
                   <h4>EST. TRAVEL TIME</h4>
                   <span>${this._data[0].travel}</span>
               </div>
           </article>
        </section>`
    }
}

export default new Destination();