import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../Header';
import { getName } from '../../../data/candidate';

jest.mock('../../../data/candidate')

const name = 'Eduardo Moroni'

describe('<Header />', () => {
  let wrapper;
  let instance;

  beforeAll(() => {
    getName.mockReturnValue(Promise.resolve(name));
    wrapper = shallow(<Header />);
    instance = wrapper.instance();
    instance.componentDidMount();
  });

  it('should show candidate name', async () => {
    await wrapper.update();

    expect(wrapper.find('.Header-title').text()).toEqual(`${name} Resume`);
    expect(wrapper.state('name')).toEqual(name);
  });
});
