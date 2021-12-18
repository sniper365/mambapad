import { BiLock, BiCheckSquare, BiRocket, GiPlatform } from "react-icons/all";
import member_0 from './img/team-picture.png';
import member_1 from './img/team-picture.png';
import member_2 from './img/team-picture.png';
import member_3 from './img/team-picture.png';

import card_0 from './img/green_1.png';
import card_1 from './img/green_2.png';

const features = [
    {
        picture: GiPlatform,
        feature: 'FAIR AND HONEST PLATFORM',
        description: 'Risus, enim, egestas sed suscipit odio. Egestas proin dictumst ac ',
        btn_1: 'MEDIUM',
        btn_2: '',        
    }, {
        picture: BiLock,
        feature: 'LIQUIDITY LOCKED',
        description: 'Risus, enim, egestas sed suscipit odio. Egestas proin dictumst ac ',
        btn_1: 'LOCKED',
        btn_2: '',        
    }, {
        picture: BiRocket,
        feature: 'TIERED LAUNCH',
        description: 'Risus, enim, egestas sed suscipit odio. Egestas proin dictumst ac ',
        btn_1: 'TIER SYSTEM',
        btn_2: '',        
    }, {
        picture: BiCheckSquare,
        feature: 'AUDITED',
        description: 'Risus, enim, egestas sed suscipit odio. Egestas proin dictumst ac ',
        btn_1: 'AUDIT',
        btn_2: 'AUDIT',        
    }, 
];
const projects = [
    {
        picture: member_0,
        name: 'TheForce.Trade',
        status: 'Coming',
        progress: 0,
        swap_rate: 10,
        cap: 7000, access: 'Public', message: 'A data aggregation platform that simplifies DeFi and NFT'
    }, {
        picture: member_1,
        name: 'Greenheart (Blue Diamond Private)',
        status: 'Open',
        progress: 30,
        swap_rate: 13.3,
        cap: 3000,
        access: 'Private',
        message: 'Greenheart is a sustainable DeFi token led by Greenheart CBD - one of Europe\'s leading seed to shelf producers of CBD oil'
    }, {
        picture: member_2,
        name: 'TradeStars (Gold+)',
        status: 'Open',
        progress: 60,
        swap_rate: 20,
        cap: 3000,
        access: 'Private',
        message: 'First DEX for Fantasy Stocks Trading on the blockchain using Fractional NFTs + DeFi Gamification'
    }, {
        picture: member_3,
        name: 'Kryptobellion',
        status: 'Closed',
        progress: 100,
        swap_rate: 30,
        cap: 3000,
        access: 'Private',
        message: 'Speed Card Game Powered by NFTs & Blockchain'
    }
];

const tiers = [
    {
        name: 'MAMBA',
        requirement: 1000,
        pool_weight: '10',
        allocation: 'GUARANTEED',
    }, {
        name: 'COBRA',
        requirement: 1000,
        pool_weight: '10',
        allocation: 'GUARANTEED',
    }, {
        name: 'VIPER',
        requirement: 1000,
        pool_weight: '10',
        allocation: 'GUARANTEED',
    }, {
        name: 'PYTHON',
        requirement: 1000,
        pool_weight: '10',
        allocation: 'FCFS',
    }, 
];

const teams = [
    {
        picture: member_0,
        name: 'Jasper Byun',
        position: 'Founder',
        company: 'Blocksync Ventures'
    }, {
        picture: member_0,
        name: 'Lester Lim',
        position: 'Founder',
        company: 'X21 Digital'
    }, {
        picture: member_0,
        name: 'Ian Friend',
        position: 'Co-Founder and COO',
        company: 'Ferrum Network'
    }, {
        picture: member_0,
        name: 'Danish Chaudhry',
        position: 'CEO',
        company: 'Bitcoin.com Exchange – Entrepreneur, Startup Team, Mentor and Investor'
    }, {
        picture: member_0,
        name: 'EXNETWORK CAPITAL',
        position: '',
        company: 'Exnetwork Capital is an investment firm focused on funding and incubating blockchain projects.'
    }, {
        picture: member_0,
        name: 'Tim Frost',
        position: 'CEO and co-founder',
        company: 'IELD App'
    }, 
];

const stakings = [
    {
        name: 'Number of Stakers',
        value: '5133'
    }, {
        name: 'Total BSCPAD Stacked',
        value: '31957734.60'
    }, {
        name: 'APY',
        value: '0.00'
    }, {
        name: 'Stacked',
        value: '0.0000'
    }, {
        name: 'Unstacked',
        value: '0.0000'
    }, {
        name: 'Rewards',
        value: '0.0000'
    }, {
        name: 'Connected with MetaMask',
        value: 'If not connected, click the "Connect Wallet" button in the top right corner'
    }, {
        name: 'BSCPAD available to deposit',
        value: 'Current Balance: 0.0000'
    }, {
        name: 'BNB available in wallet',
        value: 'BNB is required to pay transaction fees on the Binance Smart Chain network. BNB Balance: 0.0000'
    }, {
        name: 'Eligible to stake',
        value: 'You cannot stake if you have an active BSCPAD unstake/withdrawal request'
    }
];

const cards = [
    {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'organisation',
    }
]

export { features, projects, tiers, teams, stakings, cards };