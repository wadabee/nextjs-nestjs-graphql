
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserCreateInput {
    id: string;
    name: string;
}

export interface ArticleCreateInput {
    title: string;
    body: string;
}

export interface User {
    id: string;
    name: string;
}

export interface Article {
    id: string;
    title: string;
    body: string;
    comments?: Nullable<Comment>;
}

export interface Comment {
    id: string;
    body: string;
}

export interface IQuery {
    user(id: string): User | Promise<User>;
    articles(): Article[] | Promise<Article[]>;
    article(id: string): Article | Promise<Article>;
}

export interface IMutation {
    createUser(data: UserCreateInput): User | Promise<User>;
    createArticle(data: ArticleCreateInput): Article | Promise<Article>;
}

type Nullable<T> = T | null;
