/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  // Import methods that your schema can use to interact with your database
  NewsFeed,
  Article,
  getNewsFeed,
  getArticle,
  getArticles
} from './database';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'NewsFeed') {
      return getNewsFeed(id);
    } else if (type === 'Article') {
      return getArticle(id);
    } else {
      return null;
    }
  },
  obj => {
    if (obj instanceof NewsFeed) {
      return newsFeedType;
    } else if (obj instanceof Article)  {
      return articleType;
    } else {
      return null;
    }
  }
);

/**
 * Types
 */

var newsFeedType = new GraphQLObjectType({
  name: 'NewsFeed',
  description: 'A list of articles',
  fields: () => ({
    id: globalIdField('NewsFeed'),
    articles: {
      type: articleConnection,
      description: 'Articles on some news and stories',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getArticles(), args)
    }
  }),
  interfaces: [nodeInterface]
});

var articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'An article about something',
  fields: () => ({
    id: globalIdField('Article'),
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Article\'s title',
    },
    content: {
      type: GraphQLString,
      description: 'Article\'s content'
    },
    type: {
      type: GraphQLString,
      description: 'Article\'s type'
    }
  }),
  interfaces: [nodeInterface]
});

/**
 * Define your own connection types here
 */

const articleConnection = connectionDefinitions({
  name: 'Article',
  nodeType: articleType
}).connectionType;

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    newsFeed: {
      type: newsFeedType,
      resolve: () => getNewsFeed()
    }
  })
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export const Schema = new GraphQLSchema({
  query: queryType,
  // Uncomment the following after adding some mutation fields:
  // mutation: mutationType
});
