import Polyglot from 'node-polyglot';

export default (function(phrases) {
    return new Polyglot({
        phrases,
    });

    // return key => polyglot.t(key);
});