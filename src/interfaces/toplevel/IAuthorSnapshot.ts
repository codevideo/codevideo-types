import { IAuthor } from "../IAuthor";

// represents one or more authors
export interface IAuthorSnapshot {
    authors: Array<IAuthor>;
}