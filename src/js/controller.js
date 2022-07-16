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

const controlNavBar = function(value) {
    try {
        if (value.classList.contains('destination')) {
            view.cleaner();
            destination.renderDestination(model.state.destinations);
            controlDestinations()
        } else {
            // console.log('try again');
            return;
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
            if (dest === 'MARS') {
                view.cleaner();
                destination.renderDestination(model.state.destinations.filter(d => d.name === 'Mars'));
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