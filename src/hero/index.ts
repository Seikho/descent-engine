import Monster from '../monster';
import Equipment from '../equipment';

export default class Hero {
    constructor() {
        
    }
    
    // Base Statistics
    maximumHealth: number = 0;
    maximumFatigue: number = 0;
    baseArmor: number = 0;
    baseSpeed: number = 0;
    conquestValue: number = 0;    
    traits: {
        melee: number,
        range: number,
        magic: number
    }
    
    // Persistent Statistics
    level: number = 0;
    questsCompleted: number = 0;
    baseSkills: any = [];
    
    // Game Statistics
    gold: number = 0;
    wounds: number = 0;
    equipment: Array<Equipment> = [];
    gameSkills: any = [];
    effects: any = [];
    training: any = [];
       
    
    buy(equipment: Equipment) {}
    sell(equipment: Equipment) {}
    attack(monster: Monster) {}
}