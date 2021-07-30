import consola from 'consola'

const Logger = {
    error: (name: string, output: string): void => console.error(output),
    warn: (name: string, output: string): void => console.warn(output),
    info: (name: string, output: string): void => console.info(output),
    success: (name: string, output: string): void => console.log(output),
};

export default Logger;
