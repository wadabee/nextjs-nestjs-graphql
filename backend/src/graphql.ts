
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

export interface User {
    id: string;
    name: string;
}

export interface IQuery {
    user(id: string): User | Promise<User>;
}

export interface IMutation {
    createUser(data: UserCreateInput): User | Promise<User>;
}

type Nullable<T> = T | null;
