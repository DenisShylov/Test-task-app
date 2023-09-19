import createCache from '@emotion/cache';

const cache = createCache({ key: 'my-styles', prepend: true });

export default cache;
