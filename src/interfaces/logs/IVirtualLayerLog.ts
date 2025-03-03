import { LogType } from "../../types/logs/LogType";
import { VirtualLayerLogSource } from "../../types/logs/VirtualLayerLogSource";

// represents a log from the various virtual layers - virtual-file-explorer, virtual-editor, etc.
export interface IVirtualLayerLog {
    source: VirtualLayerLogSource;
    type: LogType
    message: string;
    timestamp: number;
}