import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ArticleCreateInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  id: Scalars['ID'];
};

export type CommentCreateInput = {
  articleId: Scalars['String'];
  body: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createCommnet: Comment;
  createUser: User;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationCreateCommnetArgs = {
  data: CommentCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type Query = {
  __typename?: 'Query';
  article: Article;
  articles: Array<Article>;
  user: User;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserCreateInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: string, title: string, body: string }> };

export type ArticleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ArticleQuery = { __typename?: 'Query', article: { __typename?: 'Article', id: string, title: string, body: string, comments?: Array<{ __typename?: 'Comment', id: string, body: string }> | null } };

export type AddCommentMutationVariables = Exact<{
  articleId: Scalars['String'];
  body: Scalars['String'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', createCommnet: { __typename?: 'Comment', id: string, body: string } };


export const ArticlesDocument = gql`
    query articles {
  articles {
    id
    title
    body
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const ArticleDocument = gql`
    query article($id: String!) {
  article(id: $id) {
    id
    title
    body
    comments {
      id
      body
    }
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const AddCommentDocument = gql`
    mutation addComment($articleId: String!, $body: String!) {
  createCommnet(data: {articleId: $articleId, body: $body}) {
    id
    body
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      articleId: // value for 'articleId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;