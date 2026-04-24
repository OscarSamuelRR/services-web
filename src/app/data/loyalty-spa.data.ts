import { LoyaltyLevel } from '../interfaces/loyalty-level.interface';

export const LOYALTY_SPA_HEADER = {
    title: 'spa_loyalty.header.title',
    levelsTitle: 'spa_loyalty.header.levels',
    participationTitle: 'spa_loyalty.participation.title',
    conditionsTitle: 'spa_loyalty.conditions.title',
    subtitleLevels: 'spa_loyalty.subtitle',
};

export const LOYALTY_LEVELS_SPA: LoyaltyLevel[] = [
    {
        id: 1,
        name: 'spa_loyalty.levels.1.name',
        nights: 4,
        color: 'border-blue-700',
        headerColor: 'bg-blue-700',
        image: '/images/spaorlane.svg',
        benefits: [
            'spa_loyalty.levels.1.benefits.0',
            'spa_loyalty.levels.1.benefits.1',
            'spa_loyalty.levels.1.benefits.2',
            'spa_loyalty.levels.1.benefits.3',
        ],
        requirements: []
    }
];

export const LOYALTY_PARTICIPATION = [
    'spa_loyalty.participation.0',
    'spa_loyalty.participation.1',
    'spa_loyalty.participation.2',
];

export const LOYALTY_CONDITIONS = [
    'spa_loyalty.conditions.0',
    'spa_loyalty.conditions.1',
    'spa_loyalty.conditions.2',
    'spa_loyalty.conditions.3',
];