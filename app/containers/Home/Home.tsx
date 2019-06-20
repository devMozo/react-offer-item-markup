import * as React from 'react';
import './Home.scss';
import Item from '../../components/Item/Item';
const ItemMockData = require('../../mocks/item.json');

export default class Home extends React.PureComponent {
    render() {
        return (
            <section className="Home">
                {' '}
                <Item {...ItemMockData} />{' '}
            </section>
        );
    }
}
