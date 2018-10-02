import IntlMessageFormat from 'intl-messageformat/src/main.js';

var MESSAGES = {
    'en': {
        NUM_PHOTOS: 'You have {numPhotos, plural, ' +
            '=0 {no photos.}' +
            '=1 {one photo.}' +
            'other {# photos.}}'
    },

    'es': {
        NUM_PHOTOS: 'Usted {numPhotos, plural, ' +
            '=0 {no tiene fotos.}' +
            '=1 {tiene una foto.}' +
            'other {tiene # fotos.}}'
    }
}

export default {
    locale: 'en',
    t(key, options) {
        return new IntlMessageFormat(MESSAGES[this.locale][key], this.locale)
            .format(options);
    },
    changeLanguage(lng) {
        this.locale = lng
    }
}