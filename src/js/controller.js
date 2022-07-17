import * as model from "./model.js";
import destination from "./views/destinationView.js";
import view from "./views/view.js";

const controlData = async function() {
    try {
        await model.loadAll();
    } catch (err) {
        console.error(err);
    }
};

const renderView = function(dest, arr) {
    const destn = dest.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

    view.cleaner();
    destination.renderDestination(arr.filter(d => d.name === destn));
    controlDestinations();
}

const controlNavBar = function(value) {
    try {
        if (value.classList.contains('destination')) {
            view.cleaner();
            destination.renderDestination(model.state.destinations);
            controlDestinations()
        }
    } catch (err) {
        console.error(err);
    }
};

const controlDestinations = function() {
    try {
        const destinationParentEl = document.querySelector('.destination__options');
        const destinations = destinationParentEl.querySelectorAll('li');
        destinations.forEach(d => d.addEventListener('click', (e) => {
            e.preventDefault();
            const dest = e.target.innerHTML;
            if (dest === 'MOON') {
                renderView(dest, model.state.destinations);
            } else if (dest === 'MARS') {
                renderView(dest, model.state.destinations);
            } else if(dest === 'EUROPA') {
                renderView(dest, model.state.destinations);
            } else if(dest === 'TITAN') {
                renderView(dest, model.state.destinations);
            }
        }))
    } catch (err) {
        console.error(err);
    }
}


const init = function() {
    destination.addHandlerRender(controlData);
    view.getClickValue(controlNavBar);
}
init();