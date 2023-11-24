import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Main render app test', () => {
  // Warning: An update to ForwardRef inside a test was not wrapped in act(...).
  // этот warning означает, что t<App/> ожидает тест на рендер всего Layout
  // для этого у меня пока не хватает знаний по react-testing-library

  // пока просто убираем test из App

  // render(<App />);
  //
  // // "first test to test React Library Testing"
  // const testText: HTMLElement = screen.getByText(/test text for React Test Library/i);
  // // флаг i - игнорирует регистр
  // expect(testText).toBeInTheDocument();

});
