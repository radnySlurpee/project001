import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const selectCurrentHome = createSelector(
    [selectHome],
    (home) => home.currentHome
);