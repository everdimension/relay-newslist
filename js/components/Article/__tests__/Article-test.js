import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Article from '../Article';

describe('Article', () => {
  const mockArticle = {
    title: 'rnd',
    id: '1',
    content: 'rnd',
    type: 'rnd',
  };

  it('renders with an .Article class', () => {
    const wrapper = shallow(<Article article={mockArticle} />);
    expect(wrapper.find('.Article')).to.have.length(1);
  });

  it('renders article\'s content in a paragraph', () => {
    const wrapper = shallow(<Article article={mockArticle} />);
    expect(wrapper.find('p')).to.have.length(1);
    expect(wrapper.find('p').text()).to.equal(mockArticle.content);
  });
});
