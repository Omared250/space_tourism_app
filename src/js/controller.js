import * as model from "./model.js";
import destination from "./views/destination.js";

const controlData = async function() {
    try {
        await model.loadAll();
        console.log(model.state);
    } catch (err) {
        console.error(err);
    }
}


const init = function() {
    destination.addHandlerRender(controlData);
}
init();