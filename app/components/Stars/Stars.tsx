import * as React from 'react';
import { FaStar } from 'react-icons/fa';
import { StarsProps } from './typing';
import './Stars.scss';

export default (props: StarsProps) => {
    const { count = 0 } = props;
    const stars = [];

    for (let i = 0; i < count; i++) {
        stars.push(<FaStar key={i} color="#f7932e" size="25px" />);
    }

    for (let i = count; i < 5; i++) {
        stars.push(<FaStar key={i} color="#ccc" size="25px" />);
    }

    return <ul className="Stars">{stars}</ul>;
};
