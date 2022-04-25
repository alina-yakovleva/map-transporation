import {
  ADD_APP,
  REMOVE_APP,
  SET_APP,
  SET_SELECTED,
  UPDATE_WAYPOINT,
} from "./constants";
import { DEFAULT_APPS } from "./data";

const initialState = {
  apps: DEFAULT_APPS,
  selected: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP: {
      return { ...state, apps: action.payload };
    }
    case REMOVE_APP: {
      const id = action.payload;
      return { ...state, apps: state.apps.filter((d) => d.id !== id) };
    }
    case ADD_APP: {
      const app = action.payload;
      return { ...state, apps: [...state.apps, app] };
    }
    case UPDATE_WAYPOINT: {
      const { waypoint, index } = action.payload;
      const newArr = state.apps.map((app) => {
        if (app.id === state.selected?.id) {
          const newApp = { ...app };

          newApp.waypoints[index] = waypoint;

          return newApp;
        }

        return app;
      });
      return { ...state, apps: newArr };
    }
    case SET_SELECTED: {
      return { ...state, selected: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
