export type ImplementationModuleRef = {
  path: string;
  export?: string;
};
/**
 * What may sit in an `implementation` slot before `loadImplementation`.
 */
export type ImplementationSlot = MinimizerFn | ImplementationModuleRef | string;
export type MinimizedResult = import("./index.js").MinimizedResult;
export type CustomOptions = import("./index.js").CustomOptions;
export type RawSourceMap = import("./index.js").RawSourceMap;
export type EXPECTED_ANY = import("./index.js").EXPECTED_ANY;
export type MinimizeFunctionHelpers =
  import("./index.js").MinimizeFunctionHelpers;
/**
 * A concrete minify function, including optional worker-path helpers.
 */
export type MinimizerFn =
  import("./index.js").BasicMinimizerImplementation<CustomOptions> &
    MinimizeFunctionHelpers;
export type MinimizerOptions<T> = import("./index.js").MinimizerOptions<T>;
/**
 * True when every `minimizer.implementation` is a module path (`string` or
 * `{ path, export }`) and nothing else in the payload needs
 * `serialize-javascript` / `new Function` (e.g. a function or `RegExp`
 * `extractComments` — jest-worker's child_process bridge does not round-trip
 * those the way `serialize-javascript` does). Inline minify functions keep
 * the legacy `transform` path.
 * @template T
 * @param {import("./index.js").InternalOptions<T>} options options
 * @returns {boolean} whether `worker.minify` can run without `transform`
 */
export function canMinifyByPath<T>(
  options: import("./index.js").InternalOptions<T>,
): boolean;
/**
 * @typedef {{ path: string, export?: string }} ImplementationModuleRef
 */
/**
 * What may sit in an `implementation` slot before `loadImplementation`.
 * @typedef {MinimizerFn | ImplementationModuleRef | string} ImplementationSlot
 */
/**
 * @param {unknown} implementation a minify function, module path, or path ref
 * @returns {ImplementationModuleRef | undefined} how to `require` it in a worker
 */
export function getImplementationModuleRef(
  implementation: unknown,
): ImplementationModuleRef | undefined;
/**
 * @param {unknown} implementation a minify function, module path, or path ref
 * @returns {MinimizerFn} the minify function
 */
export function loadImplementation(implementation: unknown): MinimizerFn;
/**
 * @template T
 * @param {import("./index.js").InternalOptions<T>} options options
 * @returns {Promise<MinimizedResult>} minified result
 */
export function minify<T>(
  options: import("./index.js").InternalOptions<T>,
): Promise<MinimizedResult>;
/**
 * @param {string} options options
 * @returns {Promise<MinimizedResult>} minified result
 */
export function transform(options: string): Promise<MinimizedResult>;
