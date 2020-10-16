import { createSelector } from 'reselect';

const selectNavigation = state => state.navigation;

export const selectNavigationHidden = createSelector(
    [selectNavigation],
    (navigation) => navigation.hidden
);

