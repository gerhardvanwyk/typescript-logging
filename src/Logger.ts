/**
 * Log level for a logger.
 */
export enum LogLevel {

  Trace,
  Debug,
  Info,
  Warn,
  Error,
  Fatal

}

/**
 * Where to log to? Pick one of the constants. Custom requires a callback to be present, see LFService.createLoggerFactory(...)
 * where this comes into play.
 */
export enum LoggerType {

  Console,
  MessageBuffer,
  Custom
}

/**
 * The Logger interface used for logging.
 * You can get a Logger from LoggerFactory.
 * LoggerFactory itself you create and configure through LFService.
 *
 * There are two ways of logging things.
 *
 * The normal way using:
 * trace, debug, info, warn, error, fatal, all of these methods
 * expect at least an error message, optionally an Error.
 *
 * Sample: logger.debug("Hello world");
 *         logger.error("This is an error", new Error("fail"));
 *
 * Using closures:
 * tracec, debugc, infoc, warnc, errorc, fatalc (note the c for closure).
 * These methods expect a closure for the message, and optionally one for the Error.
 * The latter can be very useful if you have something expensive to log, and
 * only really want to log it when the logger framework *will* log it. In addition
 * you can use the closure one to do special things.
 *
 * Sample: logger.debugc(() => "Hello world");
 *         logger.errorc(() => "Very expensive " + obj.toDoThis(), () => new Error("Oops"));
 *         logger.fatalc(() => {
 *           // Do something amazingly custom here
 *           return "My Error Message";
 *         });
 */
export interface Logger {

  trace(msg: string, error?: Error): void;

  debug(msg: string, error?: Error): void;

  info(msg: string, error?: Error): void;

  warn(msg: string, error?: Error): void;

  error(msg: string, error?: Error): void;

  fatal(msg: string, error?: Error): void;

  tracec(msg:() => string, error?:() => Error): void;

  debugc(msg:() => string, error?:() => Error): void;

  infoc(msg:() => string, error?:() => Error): void;

  warnc(msg:() => string, error?:() => Error): void;

  errorc(msg:() => string, error?:() => Error): void;

  fatalc(msg:() => string, error?:() => Error): void;

  isTraceEnabled(): boolean;

  isDebugEnabled(): boolean;

  isInfoEnabled(): boolean;

  isWarnEnabled(): boolean;

  isErrorEnabled(): boolean;

  isFatalEnabled(): boolean;

  /**
   * LogLevel for this Logger.
   */
  getLogLevel(): LogLevel;
}