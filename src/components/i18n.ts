import Polyglot from 'node-polyglot';

export const polyglot = new Polyglot({ phrases: {
    'hello': 'Bonjour',
}});

export class i18n {
    polyglot = polyglot;

    t(key) {
        return polyglot.t(key);
    }
}