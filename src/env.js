const envValues = (() => {
    const prefix = 'REACT_APP_ENV_';
    return Object.keys(process.env)
        .filter((k) => k.startsWith(prefix))
        .map((k) => ({ [k.replace(prefix, '')]: process.env[k] }))
        .reduce((acc, item) => ({ ...acc, ...item }), {});
})();

const get = (param) => envValues[param];

const env = {
    get,
    ...envValues,
};
  
export default env;
  