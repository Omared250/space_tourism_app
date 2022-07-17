import * as model from "./model.js";
import crewView from "./views/crewView.js";
import destination from "./views/destinationView.js";
import view from "./views/view.js";

const controlData = async function() {
    try {
        await model.loadAll();
    } catch (err) {
        console.error(err);
    }
};

const updateDest = function(dest, arr, handler) {
    const destn = dest.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

    view.cleaner();
    destination.renderDestination(arr.filter(d => d.name === destn));
    handler();
}

const updateCrew = function(crw, arr, handler) {
    const crewMem = crw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    
    view.cleaner();
    crewView.renderCrew(arr.filter(c => c.role === crewMem));
    handler();
}

const controlNavBar = function(value) {
    try {
        if (value.classList.contains('destination')) {
            view.cleaner();
            destination.renderDestination(model.state.destinations);
            controlDestinations();
        } else if (value.classList.contains('crew')) {
            view.cleaner();
            crewView.renderCrew(model.state.crew)
            controlCrew()
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
                updateDest(dest, model.state.destinations, controlDestinations);
            } else if (dest === 'MARS') {
                updateDest(dest, model.state.destinations, controlDestinations);
            } else if(dest === 'EUROPA') {
                updateDest(dest, model.state.destinations, controlDestinations);
            } else if(dest === 'TITAN') {
                updateDest(dest, model.state.destinations, controlDestinations);
            }
        }))
    } catch (err) {
        console.error(err);
    }
}

const controlCrew = function() {
    try {
        const crewParentEl = document.querySelector('.dots');
        const crew = crewParentEl.querySelectorAll('button');
        crew.forEach(c => c.addEventListener('click', (e) => {
            e.preventDefault();
            const crw = e.target
            if(crw.classList.contains('commander')) {
                updateCrew('commander', model.state.crew, controlCrew)
            } else if(crw.classList.contains('mission_specialist')) {
                updateCrew('mission specialist', model.state.crew, controlCrew)
            } else if(crw.classList.contains('pilot')) {
                updateCrew('pilot', model.state.crew, controlCrew)
            } else if(crw.classList.contains('flight_engineer')) {
                updateCrew('flight engineer', model.state.crew, controlCrew)
            }
        }))
    } catch (err) {
        console.error(err);
    }
}


const init = function() {
    view.addHandlerRender(controlData);
    view.getClickValue(controlNavBar);
}
init();