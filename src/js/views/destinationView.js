class Destination  {
    _destinationEl = document.querySelector('#destination'); 
    _parentEl = document.querySelector('.main_section');
    _data;

    addHandlerRender(handler) {
        ['load'].forEach(ev => window.addEventListener(ev, handler()));
    };

    renderDestination(data) {
        this._data = data
        const markup = this._generateMarkup();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    }

    _gettingImage(object) {
        console.log(object);
        return Object.values(object)
        .map(e => e.png ? e.png : e);
    }
 
    _generateMarkup() {
        return `
        <h3 class="destination__title"><span>01</span>PICK YOUR DESTINATION</h3>
        <img src="${this._gettingImage(this._data[0].images)}" alt="destination" class="destination__image">
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
        `
    }
}

export default new Destination();