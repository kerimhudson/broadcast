import kleur from 'kleur'

const timestamp = date => {
    return new Date().toDateString()
}

const levels = {
    info: () => kleur.bold(`[INFO - ${timestamp(new Date())}]`),
    error: () => kleur.bold().red(`[ERROR - ${timestamp(new Date())}]`),
    warn: () => kleur.bold().yellow(`[WARNING - ${timestamp(new Date())}]`)
}

/**
 * @typedef Logger
 * @type {object}
 * @property {(message: string) => Logger} info
 * @property {(message: string) => Logger} error
 * @property {(message: string) => Logger} warn
 *  
 */

/**
 * @param {"info" | "error" | "warn"} level 
 */
const loggerFunction = (level, logger) => {
 
    /**
     * 
     * @param {string} message 
     * @returns {Logger}
     */
    logger[level] = (message) => {
        console[level](`${levels[level]()}: ${message}`)
        return logger
    }

}

/**
 * @returns {Logger & { style: import('kleur').Kleur }}
 */
const logger = () => {
    const logger = { style: kleur } 
    Object.keys(levels).map((level) => loggerFunction(level, logger))
    
    return logger
}


export default logger

