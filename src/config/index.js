import dev from './dev';
import pre from './pre';
import pro from './pro';

const env = process.env.VUE_APP_ENV || 'dev';

const config = {
    dev,
    pre,
    pro,
};
export default config[env];
