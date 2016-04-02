import Hero from '../hero';
import Overlord from '../overlord';

export default class Board {
    constructor() {

    }
    
    heroes: Array<Hero> = [];
    turn: number | Overlord;
}