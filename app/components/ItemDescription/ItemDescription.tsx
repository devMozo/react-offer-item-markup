import * as React from 'react';
import Stars from '../Stars/Stars';
import { ItemDescriptionProps } from './typing';
import './ItemDescription.scss';
import { FaCheck } from 'react-icons/fa';

export default (props: ItemDescriptionProps) => {
    const { numberLogo, srcLogo, description, features = [], count = 0 } = props;

    return (
        <section className="ItemDescription">
            <div className="ItemDescription__logo">
                <span> {numberLogo} </span>
                <picture>
                    <img src={srcLogo} />
                </picture>
            </div>
            <div className="ItemDescription__info">
                <p>{description}</p>
                <ul className="ItemDescription__features">
                    {features.map(feature => (
                        <li>
                            {' '}
                            <FaCheck /> {feature}{' '}
                        </li>
                    ))}
                </ul>
                <Stars count={count} />
            </div>
        </section>
    );
};
