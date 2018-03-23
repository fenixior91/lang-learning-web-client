import { Sentence } from './sentence';

export class Meaning {
    public constructor(
        public phrase: string,
        public wordType: string,
        public language: string,
        public sentences: Array<Sentence>,
        public version?: number,
        public id?: number
    ) {

    }
}
