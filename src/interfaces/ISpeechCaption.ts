export interface ISpeechCaption { 
    speechType: 'speak-before' | 'speak-after' | 'speak-during' | '';
    speechValue: string;
}