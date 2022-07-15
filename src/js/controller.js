import * as model from "./model.js";
import destination from "./views/destinationView.js";
import navBarView from "./views/navBarView.js";

const controlData = async function() {
    try {
        await model.loadAll();
    } catch (err) {
        console.error(err);
    }
};

const controlNavBar = function(value) {
    try {
        console.log(value);
        if (value.classList.contains('destination')) {
            navBarView.cleaner();
            destination.renderDestination();
        } else {
            console.log('try again');
        }
    } catch (err) {
        console.error(err);
    }
};


const init = function() {
    destination.addHandlerRender(controlData);
    navBarView.getClickValue(controlNavBar);
}
init();