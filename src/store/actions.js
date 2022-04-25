import {
  ADD_APP,
  REMOVE_APP,
  SET_APP,
  SET_SELECTED,
  UPDATE_WAYPOINT,
} from "./constants";

export const getApp = (app) => ({
  type: SET_APP,
  payload: app,
});

export const removeApp = (id) => ({
  type: REMOVE_APP,
  payload: id,
});
export const addApp = (app) => ({
  type: ADD_APP,
  payload: app,
});

export const updateWaypoint = (waypoint, index) => ({
  type: UPDATE_WAYPOINT,
  payload: { waypoint, index },
});

export const setSelected = (app) => ({
  type: SET_SELECTED,
  payload: app,
});
