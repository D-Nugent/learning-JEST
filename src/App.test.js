import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import App from './App';

describe('App Component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0')
  });
  it ('increments count by 1 when increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrBtn = wrapper.find('button.increment');
    incrBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1')
  });
  describe('resets count to zero', () => {
    beforeEach(() => {
      const wrapper = shallow(<App />);
      const incrBtn = wrapper.find('button.increment');
      incrBtn.simulate('click');
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: 1')
    })
    
    it ('with the count set at 1, reset returns to 0', () => {
      const wrapper = shallow(<App />);
      const resetBtn = wrapper.find('button.reset');
      resetBtn.simulate('click')
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: 0')
    })
  })
  it('matches the snapshot', () => {
    const tree = create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('Basic math', () => {
  it('knows 2+2=4', () => {
    expect(2+2).toBe(4)
  })
})