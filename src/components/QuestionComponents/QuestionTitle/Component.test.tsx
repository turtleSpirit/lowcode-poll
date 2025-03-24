import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component';

test('测试标题默认属性', () => {
  render(<Component />);
  const el = screen.getByText('一行标题');
  expect(el).toBeInTheDocument();
});

test('标题传入属性', () => {
  render(<Component text="hello" isCenter={true} level={2} />);
  const h = screen.getByText('hello');
  expect(h.style.textAlign).toBe('center');
});
