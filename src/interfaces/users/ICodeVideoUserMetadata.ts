export interface ICodeVideoUserMetadata {
    tokens: number;
    stripeId: string;
    unlimited: boolean;
    subscriptionPlan: string;
    subscriptionStatus: string;
    tokensPerCycle: number;
}