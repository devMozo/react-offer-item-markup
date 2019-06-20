import * as React from 'react';
import ItemDescription from '../ItemDescription/ItemDescription';
import ItemBonus from '../ItemBonus/ItemBonus';
import ItemActions from '../ItemActions/ItemActions';
import ItemBrands from '../ItemBrands/ItemBrands';
import { ItemProps } from './typing';
import './Item.scss';

export default (props: ItemProps) => {
    const { description, bonus, brands } = props;

    return (
        <section className="Item">
            <ItemDescription {...description} />
            <ItemBonus {...bonus} />
            <ItemActions count={description.count} />
            <ItemBrands brands={brands} />
        </section>
    );
};
