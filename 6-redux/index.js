//node index.js

const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
};
  
  const wagonReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case "gather":
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1,
        };
      case "travel":
        const daysToTravel = action.payload;
        const suppliesNeeded = daysToTravel * 20;
        if (state.supplies < suppliesNeeded) {
          return state;
        }
        return {
          ...state,
          supplies: state.supplies - suppliesNeeded,
          distance: state.distance + daysToTravel * 10,
          days: state.days + daysToTravel,
        };
      case "tippedWagon":
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1,
        };
      default:
        return state;
    }
};

// Initialize the game
let wagon = wagonReducer(undefined, {});
console.log(wagon);

// Travel for one day
wagon = wagonReducer(wagon, { type: "travel", payload: 1 });
console.log(wagon);

// Gather supplies
wagon = wagonReducer(wagon, { type: "gather" });
console.log(wagon);

// Tipped wagon
wagon = wagonReducer(wagon, { type: "tippedWagon" });
console.log(wagon);

// Travel for three days
wagon = wagonReducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);