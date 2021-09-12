import { Type } from "./constants";
export interface GetHistoryResponse {
    recordID: number;
    type: number;
    timeStamp: number;
    historyTag?: string;
}
export interface GetStatusResponse {
    batteryPercentage: number;
    batteryVoltage: number;
    position: number;
    CHSesame2Status: string;
    timestamp: number;
    wm2State: boolean;
}
export interface History {
    id: number;
    type: Type;
    timestamp: Date;
    username?: string;
}
