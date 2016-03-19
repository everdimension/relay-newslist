import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import CheckboxList from '../CheckboxList';

describe('CheckboxList', () => {
  const possibleTypes = ['one', 'two', 'three'];

  it('renders a list of checkboxes', () => {
    const wrapper = shallow(
      <CheckboxList
        possibleTypes={possibleTypes}
        types={[]}
      />
    );

    expect(wrapper.find('input[type="checkbox"]'))
      .to.have.length(possibleTypes.length);
  });

  it('renders passed types as checked', () => {
    const SELECTED_INDEX = 2;
    const UNCHECKED_LENGTH = possibleTypes.length - 1;
    const activeTypes = [possibleTypes[SELECTED_INDEX]];

    const wrapper = mount(
      <CheckboxList
        possibleTypes={possibleTypes}
        types={activeTypes}
      />
    );

    const inputs = wrapper.find('input');

    expect(inputs.get(SELECTED_INDEX).checked).to.equal(true);
    expect(inputs.filterWhere(i => !i.node.checked))
      .to.have.length(UNCHECKED_LENGTH);
  });

  it('invokes provided callback when checkbox is toggled', () => {
    let timesCalled = 0;
    function callback() {
      console.log('clicking');
      ++timesCalled;
    }

    const wrapper = mount(
      <CheckboxList
        possibleTypes={possibleTypes}
        types={[]}
        onUpdate={callback}
      />
    );

    const input = wrapper.find('input').at(0);
    input.simulate('change');
    expect(timesCalled).to.equal(1);

    input.simulate('change');
    expect(timesCalled).to.equal(2);
  });
});
