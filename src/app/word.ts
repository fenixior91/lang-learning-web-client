import { Meaning } from './meaning';

export class Word {

    public constructor(
        public phrase: string,
        public language: string,
        public wordType: string,
        public progress: number,
        public meanings: Array<Meaning>,
        public version?: number,
        public id?: number
    ) {

    }
}
