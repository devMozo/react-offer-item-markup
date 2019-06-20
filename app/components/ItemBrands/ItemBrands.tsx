import * as React from 'react';
import { ItemBrandsProps } from './typing';
import './ItemBrands.scss';

export default (props: ItemBrandsProps) => {
    const { brands = [] } = props;

    return (
        <ul className="ItemBrands">
            {brands.map((brand, key) => (
                <li key={key}>
                    <img src={brand.logo} alt={brand.name} />
                </li>
            ))}
        </ul>
    );
};
