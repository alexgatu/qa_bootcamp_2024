export default class Utils {

    static getRandom(min, max) {
        return min + Math.random() * (max - min) ;
    }

    static getIntRandom(min, max) {
        return Math.floor(this.getRandom(min, max));
    }
}