import type { TeamList } from '../models/team.model';

export const teamData: TeamList = {
    teams: [
        {
            name: 'Imperial Nobility',
            id: 1,
            players: [
                { id: 1, max: 12 },
                { id: 2, max: 2 },
                { id: 3, max: 2 },
                { id: 4, max: 4 },
                { id: 5, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Old World Classic'],
        },
        {
            name: 'Black Orc',
            id: 2,
            players: [
                { id: 6, max: 12 },
                { id: 7, max: 6 },
                { id: 8, max: 1 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Badlands Brawl', 'Bribery and Corruption'],
        },
        {
            name: 'Chaos Chosen',
            id: 3,
            players: [
                { id: 9, max: 16 },
                { id: 10, max: 4 },
                { id: 11, max: 1 },
                { id: 12, max: 1 },
                { id: 13, max: 1 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: [
                'Favoured of...',
                'Favoured of Khorne',
                'Favoured of Nurgle',
            ],
            maxBigGuys: 1,
        },
        {
            name: 'Dark Elf',
            id: 4,
            players: [
                { id: 14, max: 12 },
                { id: 15, max: 2 },
                { id: 16, max: 4 },
                { id: 17, max: 2 },
                { id: 18, max: 2 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Elven Kingdoms League'],
        },
        {
            name: 'Dwarf',
            id: 5,
            players: [
                { id: 19, max: 12 },
                { id: 20, max: 2 },
                { id: 21, max: 2 },
                { id: 22, max: 2 },
                { id: 23, max: 1 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Old World Classic', 'Worlds Edge Superleague'],
        },
        {
            name: 'Elven Union',
            id: 6,
            players: [
                { id: 24, max: 12 },
                { id: 25, max: 2 },
                { id: 26, max: 4 },
                { id: 27, max: 2 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Elven Kingdoms League'],
        },
        {
            name: 'Goblin',
            id: 7,
            players: [
                { id: 28, max: 16 },
                { id: 29, max: 1 },
                { id: 30, max: 1 },
                { id: 31, max: 1 },
                { id: 32, max: 1 },
                { id: 33, max: 1 },
                { id: 34, max: 1 },
                { id: 8, max: 2 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 3,
            specialRules: [
                'Badlands Brawl',
                'Bribery and Corruption',
                'Underworld Challenge',
            ],
        },
        {
            name: 'Halfling',
            id: 8,
            players: [
                { id: 35, max: 16 },
                { id: 36, max: 2 },
                { id: 37, max: 2 },
                { id: 38, max: 2 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 3,
            specialRules: ['Halfling Thimble Cup', 'Old World Classic'],
        },
        {
            name: 'Human',
            id: 9,
            players: [
                { id: 39, max: 16 },
                { id: 40, max: 2 },
                { id: 41, max: 4 },
                { id: 42, max: 4 },
                { id: 35, max: 3 },
                { id: 5, max: 1 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Old World Classic'],
        },
        {
            name: 'Lizardmen',
            id: 10,
            players: [
                { id: 43, max: 12 },
                { id: 44, max: 2 },
                { id: 45, max: 6 },
                { id: 46, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Lustrian Superleague'],
        },
        {
            name: 'Necromantic Horror',
            id: 11,
            players: [
                { id: 47, max: 16 },
                { id: 48, max: 2 },
                { id: 49, max: 2 },
                { id: 50, max: 2 },
                { id: 51, max: 2 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: false,
            tier: 2,
            specialRules: ['Masters of Undeath', 'Sylvanian Spotlight'],
        },
        {
            name: 'Nurgle',
            id: 12,
            players: [
                { id: 52, max: 12 },
                { id: 53, max: 4 },
                { id: 54, max: 4 },
                { id: 55, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: false,
            tier: 2,
            specialRules: ['Favoured of Nurgle'],
        },
        {
            name: 'Ogre',
            id: 13,
            players: [
                { id: 56, max: 16 },
                { id: 57, max: 1 },
                { id: 58, max: 5 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 3,
            specialRules: [
                'Badlands Brawl',
                'Low Cost Linemen',
                'Old World Classic',
            ],
        },
        {
            name: 'Old World Alliance',
            id: 14,
            players: [
                { id: 115, max: 12 },
                { id: 116, max: 1 },
                { id: 117, max: 1 },
                { id: 118, max: 1 },
                { id: 119, max: 2 },
                { id: 120, max: 1 },
                { id: 121, max: 1 },
                { id: 122, max: 1 },
                { id: 123, max: 2 },
                { id: 5, max: 1 },
                { id: 124, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Old World Classic'],
            maxBigGuys: 1,
        },
        {
            name: 'Orc',
            id: 15,
            players: [
                { id: 59, max: 16 },
                { id: 60, max: 2 },
                { id: 61, max: 4 },
                { id: 62, max: 4 },
                { id: 63, max: 4 },
                { id: 64, max: 1 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Badlands Brawl'],
        },
        {
            name: 'Shambling Undead',
            id: 16,
            players: [
                { id: 65, max: 12 },
                { id: 47, max: 12 },
                { id: 48, max: 4 },
                { id: 66, max: 2 },
                { id: 67, max: 2 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: false,
            tier: 1,
            specialRules: ['Masters of Undeath', 'Sylvanian Spotlight'],
        },
        {
            name: 'Skaven',
            id: 17,
            players: [
                { id: 68, max: 16 },
                { id: 69, max: 2 },
                { id: 70, max: 4 },
                { id: 71, max: 2 },
                { id: 72, max: 1 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Underworld Challenge'],
        },
        {
            name: 'Snotling',
            id: 18,
            players: [
                { id: 73, max: 16 },
                { id: 74, max: 2 },
                { id: 75, max: 2 },
                { id: 76, max: 2 },
                { id: 77, max: 2 },
                { id: 8, max: 2 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 3,
            specialRules: [
                'Bribery and Corruption',
                'Low Cost Linemen',
                'Underworld Challenge',
            ],
        },
        {
            name: 'Underworld Denizens',
            id: 19,
            players: [
                { id: 125, max: 12 },
                { id: 126, max: 6 },
                { id: 127, max: 3 },
                { id: 128, max: 1 },
                { id: 129, max: 1 },
                { id: 130, max: 1 },
                { id: 131, max: 1 },
                { id: 132, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Bribery and Corruption', 'Underworld Challenge'],
            maxBigGuys: 1,
        },
        {
            name: 'Wood Elf',
            id: 20,
            players: [
                { id: 78, max: 12 },
                { id: 79, max: 2 },
                { id: 80, max: 4 },
                { id: 81, max: 2 },
                { id: 82, max: 1 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Elven Kingdoms League'],
        },
        {
            name: 'Chaos Renegade',
            id: 21,
            players: [
                { id: 83, max: 12 },
                { id: 84, max: 1 },
                { id: 85, max: 1 },
                { id: 86, max: 1 },
                { id: 87, max: 1 },
                { id: 88, max: 1 },
                { id: 89, max: 1 },
                { id: 90, max: 1 },
                { id: 91, max: 1 },
                { id: 72, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Favoured of...'],
            maxBigGuys: 3,
        },
        {
            name: 'Amazon',
            id: 22,
            players: [
                { id: 92, max: 16 },
                { id: 93, max: 2 },
                { id: 94, max: 2 },
                { id: 95, max: 4 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Lustrian Superleague'],
        },
        {
            name: 'Chaos Dwarf',
            id: 23,
            players: [
                { id: 96, max: 16 },
                { id: 97, max: 6 },
                { id: 98, max: 2 },
                { id: 99, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: [
                'Badlands Brawl',
                'Favoured of...',
                'Worlds Edge Superleague',
            ],
        },
        {
            name: 'High Elf',
            id: 24,
            players: [
                { id: 100, max: 16 },
                { id: 101, max: 2 },
                { id: 102, max: 4 },
                { id: 103, max: 2 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Elven Kingdoms League'],
        },
        {
            name: 'Norse (ToL)',
            id: 25,
            players: [
                { id: 104, max: 12 },
                { id: 105, max: 2 },
                { id: 106, max: 2 },
                { id: 107, max: 2 },
                { id: 108, max: 2 },
                { id: 109, max: 1 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: ['Lustrian Superleague', 'Old World Classic'],
        },
        {
            name: 'Tomb Kings',
            id: 26,
            players: [
                { id: 65, max: 16 },
                { id: 110, max: 2 },
                { id: 111, max: 2 },
                { id: 112, max: 4 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: false,
            tier: 2,
            specialRules: ['Sylvanian Spotlight'],
        },
        {
            name: 'Vampire',
            id: 27,
            players: [
                { id: 113, max: 12 },
                { id: 114, max: 6 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Sylvanian Spotlight'],
        },
        {
            name: 'Daemons of Khorne',
            id: 28,
            players: [
                { id: 133, max: 16 },
                { id: 134, max: 4 },
                { id: 135, max: 2 },
                { id: 136, max: 1 },
            ],
            reroll: { cost: 70, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Favoured of...', 'Favoured of Khorne'],
        },
        {
            name: 'Slann',
            id: 29,
            players: [
                { id: 137, max: 16 },
                { id: 138, max: 4 },
                { id: 139, max: 4 },
                { id: 46, max: 1 },
            ],
            reroll: { cost: 50, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Lustrian Superleague'],
        },
        {
            name: 'Khorne',
            id: 30,
            players: [
                { id: 140, max: 16 },
                { id: 141, max: 4 },
                { id: 142, max: 4 },
                { id: 143, max: 1 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 2,
            specialRules: ['Favoured of...', 'Favoured of Khorne'],
        },
        {
            name: 'Norse',
            id: 31,
            players: [
                { id: 144, max: 16 },
                { id: 149, max: 2 },
                { id: 145, max: 2 },
                { id: 146, max: 2 },
                { id: 147, max: 2 },
                { id: 148, max: 1 },
            ],
            reroll: { cost: 60, max: 8 },
            allowedApothecary: true,
            tier: 1,
            specialRules: [
                'Old World Classic',
                'Favoured of Khorne',
                'Favoured of Nurgle',
                'Favoured of...',
            ],
        },
    ],
};
