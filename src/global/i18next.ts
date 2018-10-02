import i18next from 'i18next';
import ICU from 'i18next-icu';

export default (function() {
    return i18next
        .use(ICU)
        .init({
            lng: 'en',
            debug: true,
            resources: {
                en: {
                    translation: {
                        "hello": "Heya",
                        "NUM_PHOTOS": 'You have {numPhotos, plural, ' +
                            '=0 {no photos.}' +
                            '=1 {one photo.}' +
                            'other {# photos.}}'
                    }
                },
                es: {
                    translation: {
                        "hello": "Hola",
                        "NUM_PHOTOS": 'Usted {numPhotos, plural, ' +
                            '=0 {no tiene fotos.}' +
                            '=1 {tiene una foto.}' +
                            'other {tiene # fotos.}}'
                    }
                }
            }
        });
})();