export interface IProjectError {
    file: string;
    message: string;
    line: number;
    column?: number;
    code?: string;
}