

export const state = {
    destination : [],
};

const destinationObject = function(dst) {
    return {
        name : dst.name,
        image : dst.images.png,
        info : dst.description,
        distance : dst.distance,
        travelDays : dst.travel,
    }
};

console.log(data);