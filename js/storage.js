import { Word } from './word.model';

export let Storage = {
    addWord(name, translation) {
        Object.defineProperty(this, name, {
            value: new Word(name, translation),
            configurable: true,
            writable: true
        });
    },

    removeWord(name) {
        delete Storage[name];
    }
};