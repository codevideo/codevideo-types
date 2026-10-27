export interface IAudioItem {
    text: string;
    mp3Url: string;
    /** Index within the manifest's actions; preferred over text matching. */
    actionIndex?: number;
    /** Content identity of the prepared audio asset. */
    assetId?: string;
    /** Probed audio duration, required for deterministic speech playback. */
    durationMs?: number;
}
