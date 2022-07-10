class Destination  {
    _destinationEl = document.querySelector('#destination'); 
    _parentEl = document.querySelector('.main_section');
    _data;

    _generateMarkup() {
        return `
        <h3 class="destination__title"><span>01</span>PICK YOUR DESTINATION</h3>
        <img src="./src/images/destination/image-moon.png" alt="destination" class="destination__image">
        <section class="destination__info">
           <ul>
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
           </ul>
           <h1>MOON</h1>
           <p>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you’re there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.
           </p>
           <hr>
           <article class="destination__details">
               <div class="distance">
                   <h4>AVG. DISTANCE</h4>
                   <span>384,400 KM</span>
               </div>
               <div class="travel__time">
                   <h4>EST. TRAVEL TIME</h4>
                   <span>3 DAYS</span>
               </div>
           </article> 
        `
    }
}

export default new Destination();