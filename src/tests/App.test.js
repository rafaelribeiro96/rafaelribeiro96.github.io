import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import mockData from './mock/mockData';
import {
  BUTTON_FILTER, COLUMN_FILTER, COMPARISON_FILTER, VALUE_FILTER
} from '../helpers/constants';

const planets = mockData.results;
describe('Testando a aplicação', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),}));
    render(<App />);});

  it('filtra o número de planetas por número, maior que', () => {
    const maxPopulation = 2000000000;
    const filteredPlanet = mockData.results[6];
    userEvent.selectOptions(screen.getByTestId(COLUMN_FILTER), 'population');
    userEvent.selectOptions(screen.getByTestId(COMPARISON_FILTER), 'maior que');
    userEvent.type(screen.getByTestId(VALUE_FILTER), maxPopulation);
    userEvent.click(screen.getByTestId(BUTTON_FILTER));
    expect(screen.getByRole('cell', { name: filteredPlanet.name })).toBeInTheDocument();
  })
});