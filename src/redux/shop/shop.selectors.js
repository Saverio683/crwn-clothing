import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCategory = categoryUrlParam => 
    createSelector(
        [selectShopItems],
        categories => categories.find(category => category.routeName === categoryUrlParam)
    );