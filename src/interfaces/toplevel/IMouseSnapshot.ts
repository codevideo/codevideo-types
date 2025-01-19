import { IPoint } from "../IPoint";

export interface IMouseSnapshot extends IPoint {
    x: number;
    y: number;
    timestamp: number;
    type: 'move' | 'down' | 'up' | 'scroll';
    button?: number;
    buttonStates: {
        left: boolean;
        right: boolean;
        middle: boolean;
    };
    scrollPosition: {
        x: number;
        y: number;
    };
    scrollDelta?: number;
}