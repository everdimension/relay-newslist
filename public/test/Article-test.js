import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Article from '../js/components/Article';

describe('Article', () => {
  it('renders', () => {
    const mockArticle = {
      title: 'rnd',
      id: '1',
      content: 'rnd',
      type: 'rnd'
    };
    expect(shallow(<Article article={mockArticle} />).contains(<div />)).to.equal(true);
  });
});
