
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: string;
    name: string;
}

export interface IQuery {
    user(id: string): User | Promise<User>;
}

type Nullable<T> = T | null;
