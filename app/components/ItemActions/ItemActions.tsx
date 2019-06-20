import * as React from 'react';
import Stars from '../Stars/Stars';
import { ItemActionProps } from './typing';
import './ItemActions.scss';

export default (props: ItemActionProps) => {
    const { count } = props;

    return (
        <section className="ItemActions">
            <button> Play Now </button>
            <Stars count={count} />
            <a> Our Review </a>
        </section>
    );
};
