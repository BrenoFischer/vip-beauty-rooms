import { createSelector } from 'reselect';

const selectDaysReducer = (state) => state.openingHours;

export const selectOpeningHours = createSelector(
    [selectDaysReducer],
    (daysSlice) => daysSlice.openingHours
);

export const selectDaysMap = createSelector(
    [selectOpeningHours],
    (openingHours) => openingHours.reduce((acc, day) => {
        const { title, items } = day;
        acc[title.toLowerCase()] = items;
        return acc;
  }, {})
);