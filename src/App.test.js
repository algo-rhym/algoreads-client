import React from 'react';
import {render} from "@testing-library/react";
import App from './App';


describe('App component', () => {
    it('App component should render app whit error ', () => {
    const{asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    });
});