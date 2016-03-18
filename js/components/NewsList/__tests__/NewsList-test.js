import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NewsList from '../NewsList';

describe('NewsList', () => {

  const newsFeed = {
    articles: {
      edges: [
        {
          node: {
            title: 'rnd',
            id: '1',
            content: 'rnd',
            type: 'rnd'
          }
        }, {
          node: {
            title: 'rnd',
            id: '2',
            content: 'rnd',
            type: 'rnd'
          }
        }, {
          node: {
            title: 'rnd',
            id: '3',
            content: 'rnd',
            type: 'rnd'
          }
        }
      ]
    }
  };

  it('renders all articles', () => {
    const wrapper = shallow(<NewsList newsFeed={newsFeed} />);
    expect(wrapper.find('li')).to.have.length(newsFeed.articles.edges.length);
  });

});
