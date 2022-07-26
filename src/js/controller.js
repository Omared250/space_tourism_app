import * as model from "./model.js";
import crewView from "./views/crewView.js";
import destination from "./views/destinationView.js";
import homeView from "./views/homeView.js";
import navBarView from "./views/navBarView.js";
import techView from "./views/techView.js";
import view from "./views/view.js";

const controlData = async function() {
    try {
        await model.loadAll();
    } catch (err) {
        console.error(err);
    }
};

const updateDest = function(dest, arr, handler) {
    const destn = dest.split(' ').map(w => 
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

    view.cleaner();
    destination.renderDestination(arr.filter(d => d.name === destn));
    handler();
}

const updateCrew = function(crw, arr, handler) {
    const crewMem = crw.split(' ').map(w => 
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    
    view.cleaner();
    crewView.renderCrew(arr.filter(c => c.role === crewMem));
    handler();
}

const updateTech = function(crw, arr, handler) {
    const techComp = crw.split(' ').map(w => 
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    
    view.cleaner();
    techView.renderTech(arr.filter(c => c.name === techComp));
    handler();
}

const controlNavBar = function(value) {
    try {
        if (value.classList.contains('home')) {
            view.cleaner();
            homeView.renderHome();
            controlHome();

        } else if (value.classList.contains('destination')) {
            view.cleaner();
            destination.renderDestination(model.state.destinations);
            controlDestinations();

        } else if (value.classList.contains('crew')) {
            view.cleaner();
            crewView.renderCrew(model.state.crew)
            controlCrew();

        } else if (value.classList.contains('technology')) {
            view.cleaner();
            techView.renderTech(model.state.technology);
            controlTech();
        }
    } catch (err) {
        console.error(err);
    }
};

const controlHome = function() {
    try {
        view.cleaner();
        homeView.renderHome();
        const exploreContainer = document.querySelector('.explore');
        exploreContainer.addEventListener('click', (e) => {
            const exp = e.target.closest('.explore');
            if (exp) {
                view.cleaner();
                destination.renderDestination(model.state.destinations)
                controlDestinations();
            }
        })
    } catch (err) {
        console.error(err);
    }
}

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

const controlTech = function() {
    try {
        const techParentEl = document.querySelector('.tech_dots');
        const techDots = techParentEl.querySelectorAll('button');
        techDots.forEach(t => t.addEventListener('click', (e) => {
            e.preventDefault();
            const tech = e.target;
            if(tech.classList.contains('vehicle')) {
                updateTech('launch vehicle', model.state.technology, controlTech)

                const vhcl = document.querySelector('.vehicle');
                vhcl.classList.add('active');

            } else if(tech.classList.contains('spaceport')) {
                updateTech('spaceport', model.state.technology, controlTech)

                const veh = document.querySelector('.vehicle');
                veh.classList.remove('active');

                const port = document.querySelector('.spaceport');
                port.classList.add('active');

            } else if(tech.classList.contains('capsule')) {
                updateTech('Space capsule', model.state.technology, controlTech)

                const veh = document.querySelector('.vehicle');
                veh.classList.remove('active');

                const cap = document.querySelector('.capsule');
                cap.classList.add('active');
            }
        }))
    } catch (err) {
        console.error(err);
    }
}


const init = function() {
    view.addHandlerRender(controlData);
    view.getClickValue(controlNavBar);
    homeView.addHandlerHome(controlHome);
    navBarView.showMenuOptions();
    navBarView.closeMenuOptions();
}
init();