/**
 * ============================================================
 * ملف شامل لمتغيرات JavaScript (دوال، كائنات، قيم، أنماط، إلخ)
 * يحتوي على جميع القيم الممكنة في JavaScript
 * مرتبة حسب الفئات للاستخدام مع JS Factory
 * ============================================================
 * الإصدار: 8.0
 * تاريخ: 2026
 * يحتوي على: 1000+ متغير وقيمة JavaScript
 * ============================================================
 */

// ============================================================
// 1. الأنواع الأساسية (Primitive Types)
// ============================================================

const PrimitiveTypes = {
  // أنواع البيانات الأساسية
  types: {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    undefined: 'undefined',
    null: 'null',
    symbol: 'symbol',
    bigint: 'bigint',
    object: 'object',
    function: 'function'
  },

  // قيم boolean
  boolean: {
    true: true,
    false: false
  },

  // قيم null و undefined
  nullUndefined: {
    null: null,
    undefined: undefined
  },

  // أرقام خاصة
  numbers: {
    infinity: Infinity,
    negativeInfinity: -Infinity,
    nan: NaN,
    maxSafeInteger: Number.MAX_SAFE_INTEGER,
    minSafeInteger: Number.MIN_SAFE_INTEGER,
    maxValue: Number.MAX_VALUE,
    minValue: Number.MIN_VALUE,
    epsilon: Number.EPSILON
  },

  // Symbols
  symbols: {
    iterator: Symbol.iterator,
    asyncIterator: Symbol.asyncIterator,
    hasInstance: Symbol.hasInstance,
    isConcatSpreadable: Symbol.isConcatSpreadable,
    match: Symbol.match,
    replace: Symbol.replace,
    search: Symbol.search,
    split: Symbol.split,
    species: Symbol.species,
    toPrimitive: Symbol.toPrimitive,
    toStringTag: Symbol.toStringTag,
    unscopables: Symbol.unscopables
  }
};

// ============================================================
// 2. الكائنات العالمية (Global Objects)
// ============================================================

const GlobalObjects = {
  // كائنات JavaScript الأساسية
  basic: {
    Object: Object,
    Array: Array,
    String: String,
    Number: Number,
    Boolean: Boolean,
    Function: Function,
    Symbol: Symbol,
    BigInt: BigInt,
    Date: Date,
    RegExp: RegExp,
    Error: Error,
    Map: Map,
    Set: Set,
    WeakMap: WeakMap,
    WeakSet: WeakSet,
    Promise: Promise,
    Proxy: Proxy,
    Reflect: Reflect,
    JSON: JSON,
    Math: Math,
    console: console,
    window: typeof window !== 'undefined' ? window : null,
    document: typeof document !== 'undefined' ? document : null,
    navigator: typeof navigator !== 'undefined' ? navigator : null,
    location: typeof location !== 'undefined' ? location : null,
    history: typeof history !== 'undefined' ? history : null,
    localStorage: typeof localStorage !== 'undefined' ? localStorage : null,
    sessionStorage: typeof sessionStorage !== 'undefined' ? sessionStorage : null,
    fetch: typeof fetch !== 'undefined' ? fetch : null,
    WebSocket: typeof WebSocket !== 'undefined' ? WebSocket : null,
    Worker: typeof Worker !== 'undefined' ? Worker : null,
    EventSource: typeof EventSource !== 'undefined' ? EventSource : null
  },

  // كائنات الـ Array
  array: {
    from: Array.from,
    isArray: Array.isArray,
    of: Array.of,
    prototype: Array.prototype
  },

  // كائنات الـ Object
  object: {
    assign: Object.assign,
    create: Object.create,
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties,
    entries: Object.entries,
    freeze: Object.freeze,
    fromEntries: Object.fromEntries,
    getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
    getOwnPropertyDescriptors: Object.getOwnPropertyDescriptors,
    getOwnPropertyNames: Object.getOwnPropertyNames,
    getOwnPropertySymbols: Object.getOwnPropertySymbols,
    getPrototypeOf: Object.getPrototypeOf,
    hasOwn: Object.hasOwn,
    is: Object.is,
    isExtensible: Object.isExtensible,
    isFrozen: Object.isFrozen,
    isSealed: Object.isSealed,
    keys: Object.keys,
    preventExtensions: Object.preventExtensions,
    seal: Object.seal,
    setPrototypeOf: Object.setPrototypeOf,
    values: Object.values
  },

  // كائنات الـ String
  string: {
    fromCharCode: String.fromCharCode,
    fromCodePoint: String.fromCodePoint,
    raw: String.raw,
    prototype: String.prototype
  },

  // كائنات الـ Number
  number: {
    isFinite: Number.isFinite,
    isInteger: Number.isInteger,
    isNaN: Number.isNaN,
    isSafeInteger: Number.isSafeInteger,
    parseFloat: Number.parseFloat,
    parseInt: Number.parseInt,
    prototype: Number.prototype
  },

  // كائنات الـ Math
  math: {
    // الثوابت
    E: Math.E,
    LN2: Math.LN2,
    LN10: Math.LN10,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    PI: Math.PI,
    SQRT1_2: Math.SQRT1_2,
    SQRT2: Math.SQRT2,

    // الدوال
    abs: Math.abs,
    acos: Math.acos,
    acosh: Math.acosh,
    asin: Math.asin,
    asinh: Math.asinh,
    atan: Math.atan,
    atan2: Math.atan2,
    atanh: Math.atanh,
    cbrt: Math.cbrt,
    ceil: Math.ceil,
    clz32: Math.clz32,
    cos: Math.cos,
    cosh: Math.cosh,
    exp: Math.exp,
    expm1: Math.expm1,
    floor: Math.floor,
    fround: Math.fround,
    hypot: Math.hypot,
    imul: Math.imul,
    log: Math.log,
    log10: Math.log10,
    log1p: Math.log1p,
    log2: Math.log2,
    max: Math.max,
    min: Math.min,
    pow: Math.pow,
    random: Math.random,
    round: Math.round,
    sign: Math.sign,
    sin: Math.sin,
    sinh: Math.sinh,
    sqrt: Math.sqrt,
    tan: Math.tan,
    tanh: Math.tanh,
    trunc: Math.trunc
  },

  // كائنات الـ Date
  date: {
    now: Date.now,
    parse: Date.parse,
    UTC: Date.UTC,
    prototype: Date.prototype
  },

  // كائنات الـ RegExp
  regexp: {
    prototype: RegExp.prototype
  },

  // كائنات الـ Error
  errors: {
    Error: Error,
    EvalError: EvalError,
    RangeError: RangeError,
    ReferenceError: ReferenceError,
    SyntaxError: SyntaxError,
    TypeError: TypeError,
    URIError: URIError,
    AggregateError: AggregateError
  },

  // كائنات الـ Promise
  promise: {
    all: Promise.all,
    allSettled: Promise.allSettled,
    any: Promise.any,
    race: Promise.race,
    reject: Promise.reject,
    resolve: Promise.resolve,
    prototype: Promise.prototype
  },

  // كائنات الـ Web API
  web: {
    // DOM
    document: typeof document !== 'undefined' ? document : null,
    window: typeof window !== 'undefined' ? window : null,
    Element: typeof Element !== 'undefined' ? Element : null,
    Node: typeof Node !== 'undefined' ? Node : null,
    HTMLElement: typeof HTMLElement !== 'undefined' ? HTMLElement : null,

    // تخزين
    localStorage: typeof localStorage !== 'undefined' ? localStorage : null,
    sessionStorage: typeof sessionStorage !== 'undefined' ? sessionStorage : null,

    // الشبكة
    fetch: typeof fetch !== 'undefined' ? fetch : null,
    XMLHttpRequest: typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : null,
    WebSocket: typeof WebSocket !== 'undefined' ? WebSocket : null,

    // العمال
    Worker: typeof Worker !== 'undefined' ? Worker : null,
    SharedWorker: typeof SharedWorker !== 'undefined' ? SharedWorker : null,
    ServiceWorker: typeof ServiceWorker !== 'undefined' ? ServiceWorker : null,

    // الرسومات
    Canvas: typeof CanvasRenderingContext2D !== 'undefined' ? CanvasRenderingContext2D : null,
    WebGL: typeof WebGLRenderingContext !== 'undefined' ? WebGLRenderingContext : null,

    // الصوت والفيديو
    Audio: typeof Audio !== 'undefined' ? Audio : null,
    Video: typeof HTMLVideoElement !== 'undefined' ? HTMLVideoElement : null,

    // الموقع
    navigator: typeof navigator !== 'undefined' ? navigator : null,
    location: typeof location !== 'undefined' ? location : null,
    history: typeof history !== 'undefined' ? history : null,

    // الإشعارات
    Notification: typeof Notification !== 'undefined' ? Notification : null,
    PushManager: typeof PushManager !== 'undefined' ? PushManager : null,

    // الـ Sensors
    Geolocation: typeof Geolocation !== 'undefined' ? Geolocation : null,
    Battery: typeof BatteryManager !== 'undefined' ? BatteryManager : null,

    // الاتصالات
    Bluetooth: typeof Bluetooth !== 'undefined' ? Bluetooth : null,
    USB: typeof USB !== 'undefined' ? USB : null,

    // التشفير
    Crypto: typeof crypto !== 'undefined' ? crypto : null,

    // المؤقتات
    setTimeout: typeof setTimeout !== 'undefined' ? setTimeout : null,
    setInterval: typeof setInterval !== 'undefined' ? setInterval : null,
    clearTimeout: typeof clearTimeout !== 'undefined' ? clearTimeout : null,
    clearInterval: typeof clearInterval !== 'undefined' ? clearInterval : null,

    // الطلبات
    requestAnimationFrame: typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : null,
    cancelAnimationFrame: typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : null,
    requestIdleCallback: typeof requestIdleCallback !== 'undefined' ? requestIdleCallback : null,
    cancelIdleCallback: typeof cancelIdleCallback !== 'undefined' ? cancelIdleCallback : null
  }
};

// ============================================================
// 3. دوال JavaScript الأساسية (Core Functions)
// ============================================================

const CoreFunctions = {
  // دوال الـ Array
  array: {
    // دوال التكرار
    forEach: (arr, callback) => arr.forEach(callback),
    map: (arr, callback) => arr.map(callback),
    filter: (arr, callback) => arr.filter(callback),
    reduce: (arr, callback, initial) => arr.reduce(callback, initial),
    reduceRight: (arr, callback, initial) => arr.reduceRight(callback, initial),
    some: (arr, callback) => arr.some(callback),
    every: (arr, callback) => arr.every(callback),
    find: (arr, callback) => arr.find(callback),
    findIndex: (arr, callback) => arr.findIndex(callback),
    findLast: (arr, callback) => arr.findLast(callback),
    findLastIndex: (arr, callback) => arr.findLastIndex(callback),

    // دوال التحويل
    sort: (arr, compareFn) => arr.sort(compareFn),
    reverse: (arr) => arr.reverse(),
    slice: (arr, start, end) => arr.slice(start, end),
    splice: (arr, start, deleteCount, ...items) => arr.splice(start, deleteCount, ...items),
    concat: (arr, ...items) => arr.concat(...items),
    join: (arr, separator) => arr.join(separator),
    toString: (arr) => arr.toString(),

    // دوال الإضافة والحذف
    push: (arr, ...items) => arr.push(...items),
    pop: (arr) => arr.pop(),
    shift: (arr) => arr.shift(),
    unshift: (arr, ...items) => arr.unshift(...items),

    // دوال البحث
    indexOf: (arr, searchElement, fromIndex) => arr.indexOf(searchElement, fromIndex),
    lastIndexOf: (arr, searchElement, fromIndex) => arr.lastIndexOf(searchElement, fromIndex),
    includes: (arr, searchElement, fromIndex) => arr.includes(searchElement, fromIndex),

    // دوال التحقق
    isArray: Array.isArray,

    // دوال ثابتة
    from: Array.from,
    of: Array.of
  },

  // دوال الـ Object
  object: {
    // دوال التحويل
    keys: Object.keys,
    values: Object.values,
    entries: Object.entries,
    fromEntries: Object.fromEntries,

    // دوال التعريف
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties,

    // دوال الحماية
    freeze: Object.freeze,
    seal: Object.seal,
    preventExtensions: Object.preventExtensions,

    // دوال التحقق
    is: Object.is,
    isFrozen: Object.isFrozen,
    isSealed: Object.isSealed,
    isExtensible: Object.isExtensible,
    hasOwn: Object.hasOwn,

    // دوال النموذج الأولي
    getPrototypeOf: Object.getPrototypeOf,
    setPrototypeOf: Object.setPrototypeOf,
    create: Object.create,

    // دوال الوصف
    getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
    getOwnPropertyDescriptors: Object.getOwnPropertyDescriptors,
    getOwnPropertyNames: Object.getOwnPropertyNames,
    getOwnPropertySymbols: Object.getOwnPropertySymbols
  },

  // دوال الـ String
  string: {
    // دوال التحويل
    toUpperCase: (str) => str.toUpperCase(),
    toLowerCase: (str) => str.toLowerCase(),
    trim: (str) => str.trim(),
    trimStart: (str) => str.trimStart(),
    trimEnd: (str) => str.trimEnd(),

    // دوال البحث
    indexOf: (str, search, fromIndex) => str.indexOf(search, fromIndex),
    lastIndexOf: (str, search, fromIndex) => str.lastIndexOf(search, fromIndex),
    includes: (str, search, fromIndex) => str.includes(search, fromIndex),
    startsWith: (str, search, fromIndex) => str.startsWith(search, fromIndex),
    endsWith: (str, search, fromIndex) => str.endsWith(search, fromIndex),
    search: (str, regexp) => str.search(regexp),
    match: (str, regexp) => str.match(regexp),
    matchAll: (str, regexp) => str.matchAll(regexp),

    // دوال الاستخراج
    slice: (str, start, end) => str.slice(start, end),
    substring: (str, start, end) => str.substring(start, end),
    substr: (str, start, length) => str.substr(start, length),
    charAt: (str, index) => str.charAt(index),
    charCodeAt: (str, index) => str.charCodeAt(index),
    codePointAt: (str, index) => str.codePointAt(index),

    // دوال التقسيم
    split: (str, separator, limit) => str.split(separator, limit),

    // دوال الاستبدال
    replace: (str, search, replacement) => str.replace(search, replacement),
    replaceAll: (str, search, replacement) => str.replaceAll(search, replacement),

    // دوال التعبئة
    padStart: (str, length, pad) => str.padStart(length, pad),
    padEnd: (str, length, pad) => str.padEnd(length, pad),

    // دوال التكرار
    repeat: (str, count) => str.repeat(count),

    // دوال ثابتة
    fromCharCode: String.fromCharCode,
    fromCodePoint: String.fromCodePoint,
    raw: String.raw
  },

  // دوال الـ Number
  number: {
    // دوال التحقق
    isFinite: Number.isFinite,
    isInteger: Number.isInteger,
    isNaN: Number.isNaN,
    isSafeInteger: Number.isSafeInteger,

    // دوال التحويل
    parseFloat: Number.parseFloat,
    parseInt: Number.parseInt,

    // دوال التنسيق
    toFixed: (num, digits) => num.toFixed(digits),
    toExponential: (num, digits) => num.toExponential(digits),
    toPrecision: (num, precision) => num.toPrecision(precision)
  },

  // دوال الـ Math
  math: {
    // دوال التقريب
    round: Math.round,
    floor: Math.floor,
    ceil: Math.ceil,
    trunc: Math.trunc,

    // دوال القوى والجذور
    pow: Math.pow,
    sqrt: Math.sqrt,
    cbrt: Math.cbrt,
    hypot: Math.hypot,

    // دوال المثلثات
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    atan2: Math.atan2,

    // دوال زائدية
    sinh: Math.sinh,
    cosh: Math.cosh,
    tanh: Math.tanh,
    asinh: Math.asinh,
    acosh: Math.acosh,
    atanh: Math.atanh,

    // دوال لوغاريتمية
    log: Math.log,
    log10: Math.log10,
    log2: Math.log2,
    log1p: Math.log1p,

    // دوال أسية
    exp: Math.exp,
    expm1: Math.expm1,

    // دوال أخرى
    abs: Math.abs,
    max: Math.max,
    min: Math.min,
    sign: Math.sign,
    random: Math.random,
    imul: Math.imul,
    clz32: Math.clz32,
    fround: Math.fround
  },

  // دوال الـ Date
  date: {
    // دوال ثابتة
    now: Date.now,
    parse: Date.parse,
    UTC: Date.UTC,

    // دوال المثيل
    getFullYear: (date) => date.getFullYear(),
    getMonth: (date) => date.getMonth(),
    getDate: (date) => date.getDate(),
    getDay: (date) => date.getDay(),
    getHours: (date) => date.getHours(),
    getMinutes: (date) => date.getMinutes(),
    getSeconds: (date) => date.getSeconds(),
    getMilliseconds: (date) => date.getMilliseconds(),
    getTime: (date) => date.getTime(),
    getTimezoneOffset: (date) => date.getTimezoneOffset(),

    setFullYear: (date, year) => date.setFullYear(year),
    setMonth: (date, month) => date.setMonth(month),
    setDate: (date, day) => date.setDate(day),
    setHours: (date, hours) => date.setHours(hours),
    setMinutes: (date, minutes) => date.setMinutes(minutes),
    setSeconds: (date, seconds) => date.setSeconds(seconds),
    setMilliseconds: (date, ms) => date.setMilliseconds(ms),
    setTime: (date, time) => date.setTime(time),

    toISOString: (date) => date.toISOString(),
    toUTCString: (date) => date.toUTCString(),
    toLocaleString: (date) => date.toLocaleString(),
    toDateString: (date) => date.toDateString(),
    toTimeString: (date) => date.toTimeString()
  },

  // دوال الـ Promise
  promise: {
    all: Promise.all,
    allSettled: Promise.allSettled,
    any: Promise.any,
    race: Promise.race,
    resolve: Promise.resolve,
    reject: Promise.reject,
    then: (promise, onFulfilled, onRejected) => promise.then(onFulfilled, onRejected),
    catch: (promise, onRejected) => promise.catch(onRejected),
    finally: (promise, onFinally) => promise.finally(onFinally)
  },

  // دوال الـ JSON
  json: {
    parse: JSON.parse,
    stringify: JSON.stringify
  },

  // دوال الـ Console
  console: {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug,
    table: console.table,
    group: console.group,
    groupEnd: console.groupEnd,
    time: console.time,
    timeEnd: console.timeEnd,
    trace: console.trace,
    assert: console.assert,
    count: console.count,
    clear: console.clear
  },

  // دوال الـ Window
  window: {
    // المؤقتات
    setTimeout: setTimeout,
    setInterval: setInterval,
    clearTimeout: clearTimeout,
    clearInterval: clearInterval,

    // الإطارات
    requestAnimationFrame: typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : null,
    cancelAnimationFrame: typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : null,
    requestIdleCallback: typeof requestIdleCallback !== 'undefined' ? requestIdleCallback : null,
    cancelIdleCallback: typeof cancelIdleCallback !== 'undefined' ? cancelIdleCallback : null,

    // الملاحة
    open: typeof window !== 'undefined' ? window.open : null,
    close: typeof window !== 'undefined' ? window.close : null,
    alert: typeof window !== 'undefined' ? window.alert : null,
    confirm: typeof window !== 'undefined' ? window.confirm : null,
    prompt: typeof window !== 'undefined' ? window.prompt : null,
    scrollTo: typeof window !== 'undefined' ? window.scrollTo : null,
    scrollBy: typeof window !== 'undefined' ? window.scrollBy : null
  },

  // دوال الـ DOM
  dom: {
    // البحث عن العناصر
    getElementById: typeof document !== 'undefined' ? document.getElementById.bind(document) : null,
    getElementsByClassName: typeof document !== 'undefined' ? document.getElementsByClassName.bind(document) : null,
    getElementsByTagName: typeof document !== 'undefined' ? document.getElementsByTagName.bind(document) : null,
    getElementsByName: typeof document !== 'undefined' ? document.getElementsByName.bind(document) : null,
    querySelector: typeof document !== 'undefined' ? document.querySelector.bind(document) : null,
    querySelectorAll: typeof document !== 'undefined' ? document.querySelectorAll.bind(document) : null,

    // إنشاء العناصر
    createElement: typeof document !== 'undefined' ? document.createElement.bind(document) : null,
    createElementNS: typeof document !== 'undefined' ? document.createElementNS.bind(document) : null,
    createTextNode: typeof document !== 'undefined' ? document.createTextNode.bind(document) : null,
    createAttribute: typeof document !== 'undefined' ? document.createAttribute.bind(document) : null,
    createComment: typeof document !== 'undefined' ? document.createComment.bind(document) : null,
    createDocumentFragment: typeof document !== 'undefined' ? document.createDocumentFragment.bind(document) : null,

    // التعديل
    appendChild: (parent, child) => parent.appendChild(child),
    removeChild: (parent, child) => parent.removeChild(child),
    replaceChild: (parent, newChild, oldChild) => parent.replaceChild(newChild, oldChild),
    insertBefore: (parent, newChild, referenceChild) => parent.insertBefore(newChild, referenceChild),
    insertAdjacentHTML: (element, position, html) => element.insertAdjacentHTML(position, html),
    insertAdjacentElement: (element, position, newElement) => element.insertAdjacentElement(position, newElement),
    insertAdjacentText: (element, position, text) => element.insertAdjacentText(position, text),

    // السمات
    setAttribute: (element, name, value) => element.setAttribute(name, value),
    getAttribute: (element, name) => element.getAttribute(name),
    removeAttribute: (element, name) => element.removeAttribute(name),

    // الفئات
    classList: {
      add: (element, ...classes) => element.classList.add(...classes),
      remove: (element, ...classes) => element.classList.remove(...classes),
      toggle: (element, className) => element.classList.toggle(className),
      contains: (element, className) => element.classList.contains(className)
    },

    // الأحداث
    addEventListener: (element, event, handler) => element.addEventListener(event, handler),
    removeEventListener: (element, event, handler) => element.removeEventListener(event, handler),
    dispatchEvent: (element, event) => element.dispatchEvent(event),
    createEvent: typeof document !== 'undefined' ? document.createEvent.bind(document) : null
  }
};

// ============================================================
// 4. أنماط البرمجة (Programming Patterns)
// ============================================================

const ProgrammingPatterns = {
  // أنماط التصميم (Design Patterns)
  design: {
    singleton: 'Singleton',
    factory: 'Factory',
    abstractFactory: 'Abstract Factory',
    builder: 'Builder',
    prototype: 'Prototype',
    adapter: 'Adapter',
    bridge: 'Bridge',
    composite: 'Composite',
    decorator: 'Decorator',
    facade: 'Facade',
    flyweight: 'Flyweight',
    proxy: 'Proxy',
    chainOfResponsibility: 'Chain of Responsibility',
    command: 'Command',
    interpreter: 'Interpreter',
    iterator: 'Iterator',
    mediator: 'Mediator',
    memento: 'Memento',
    observer: 'Observer',
    state: 'State',
    strategy: 'Strategy',
    template: 'Template',
    visitor: 'Visitor'
  },

  // أنماط البرمجة الوظيفية
  functional: {
    pure: 'Pure Functions',
    impure: 'Impure Functions',
    recursion: 'Recursion',
    closure: 'Closure',
    currying: 'Currying',
    partial: 'Partial Application',
    composition: 'Function Composition',
    memoization: 'Memoization',
    monad: 'Monad',
    functor: 'Functor',
    applicative: 'Applicative',
    monoid: 'Monoid',
    semigroup: 'Semigroup',
    foldable: 'Foldable',
    traversable: 'Traversable'
  },

  // أنماط البرمجة الشيئية
  oop: {
    class: 'Class',
    inheritance: 'Inheritance',
    polymorphism: 'Polymorphism',
    encapsulation: 'Encapsulation',
    abstraction: 'Abstraction',
    composition: 'Composition',
    mixin: 'Mixin',
    trait: 'Trait',
    interface: 'Interface',
    abstractClass: 'Abstract Class'
  },

  // أنماط البرمجة المتزامنة
  concurrency: {
    callback: 'Callback',
    promise: 'Promise',
    asyncAwait: 'Async/Await',
    generator: 'Generator',
    observer: 'Observer',
    eventEmitter: 'Event Emitter',
    pubSub: 'Publish/Subscribe',
    worker: 'Web Worker',
    serviceWorker: 'Service Worker',
    sharedWorker: 'Shared Worker',
    thread: 'Thread',
    lock: 'Lock',
    semaphore: 'Semaphore',
    mutex: 'Mutex'
  }
};

// ============================================================
// 5. متغيرات الـ ES6+
// ============================================================

const ES6Variables = {
  // كلمات محجوزة (Reserved Words)
  reserved: {
    // ES5
    es5: [
      'break', 'case', 'catch', 'class', 'const', 'continue',
      'debugger', 'default', 'delete', 'do', 'else', 'export',
      'extends', 'finally', 'for', 'function', 'if', 'import',
      'in', 'instanceof', 'new', 'return', 'super', 'switch',
      'this', 'throw', 'try', 'typeof', 'var', 'void',
      'while', 'with', 'yield'
    ],
    // ES6+
    es6: [
      'await', 'let', 'of', 'from', 'as', 'async', 'static',
      'get', 'set', 'constructor', 'has', 'target', 'meta'
    ],
    // المستقبلية
    future: [
      'enum', 'implements', 'interface', 'package', 'private',
      'protected', 'public'
    ]
  },

  // الكلمات المفتاحية للـ Modules
  modules: {
    import: 'import',
    export: 'export',
    from: 'from',
    as: 'as',
    default: 'default',
    module: 'module'
  },

  // الميزات الجديدة
  features: {
    // ES6
    es6: {
      arrowFunctions: 'Arrow Functions',
      templateLiterals: 'Template Literals',
      destructuring: 'Destructuring',
      spreadOperator: 'Spread Operator',
      restParameters: 'Rest Parameters',
      defaultParameters: 'Default Parameters',
      classes: 'Classes',
      modules: 'Modules',
      promises: 'Promises',
      symbols: 'Symbols',
      iterators: 'Iterators',
      generators: 'Generators',
      map: 'Map',
      set: 'Set',
      weakMap: 'WeakMap',
      weakSet: 'WeakSet',
      proxies: 'Proxies',
      reflect: 'Reflect'
    },
    // ES7
    es7: {
      includes: 'Array.includes()',
      exponential: 'Exponential Operator (**)',
      asyncAwait: 'Async/Await'
    },
    // ES8
    es8: {
      objectValues: 'Object.values()',
      objectEntries: 'Object.entries()',
      padStart: 'String.padStart()',
      padEnd: 'String.padEnd()',
      trailingCommas: 'Trailing Commas'
    },
    // ES9
    es9: {
      restSpread: 'Rest/Spread for Objects',
      asyncIteration: 'Async Iteration',
      promiseFinally: 'Promise.finally()',
      regexpNamedGroups: 'RegExp Named Groups'
    },
    // ES10
    es10: {
      flat: 'Array.flat()',
      flatMap: 'Array.flatMap()',
      fromEntries: 'Object.fromEntries()',
      trimStart: 'String.trimStart()',
      trimEnd: 'String.trimEnd()',
      optionalCatch: 'Optional Catch Binding'
    },
    // ES11
    es11: {
      optionalChaining: 'Optional Chaining (?.)',
      nullishCoalescing: 'Nullish Coalescing (??)',
      bigInt: 'BigInt',
      globalThis: 'globalThis',
      matchAll: 'String.matchAll()',
      promiseAllSettled: 'Promise.allSettled()',
      dynamicImport: 'Dynamic Import'
    },
    // ES12
    es12: {
      numericSeparators: 'Numeric Separators (_)',
      logicalAssignment: 'Logical Assignment Operators',
      replaceAll: 'String.replaceAll()',
      promiseAny: 'Promise.any()',
      weakRef: 'WeakRef',
      finalizers: 'FinalizationRegistry'
    },
    // ES13 (ES2022)
    es13: {
      classFields: 'Class Fields',
      privateMethods: 'Private Methods (#)',
      staticBlock: 'Static Block',
      awaitTopLevel: 'Top-level Await',
      arrayAt: 'Array.at()',
      hasOwn: 'Object.hasOwn()',
      cause: 'Error.cause'
    }
  }
};

// ============================================================
// 6. دوال الـ Utility (مفيدة)
// ============================================================

const UtilityFunctions = {
  // دوال التحقق من الأنواع
  typeCheck: {
    isString: (value) => typeof value === 'string',
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
    isBoolean: (value) => typeof value === 'boolean',
    isUndefined: (value) => value === undefined,
    isNull: (value) => value === null,
    isObject: (value) => value !== null && typeof value === 'object',
    isArray: (value) => Array.isArray(value),
    isFunction: (value) => typeof value === 'function',
    isSymbol: (value) => typeof value === 'symbol',
    isBigInt: (value) => typeof value === 'bigint',
    isDate: (value) => value instanceof Date,
    isRegExp: (value) => value instanceof RegExp,
    isPromise: (value) => value instanceof Promise,
    isNaN: (value) => isNaN(value),
    isFinite: (value) => isFinite(value)
  },

  // دوال التحويل
  conversion: {
    toString: (value) => String(value),
    toNumber: (value) => Number(value),
    toBoolean: (value) => Boolean(value),
    toInteger: (value) => parseInt(value, 10),
    toFloat: (value) => parseFloat(value),
    toArray: (value) => Array.from(value),
    toObject: (value) => Object(value)
  },

  // دوال التلاعب بالكائنات
  objectManipulation: {
    // دمج الكائنات
    merge: (target, ...sources) => Object.assign(target, ...sources),
    // نسخ عميق
    deepClone: (obj) => JSON.parse(JSON.stringify(obj)),
    // استخراج الخصائص
    pick: (obj, keys) => {
      const result = {};
      keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
      });
      return result;
    },
    // استبعاد الخصائص
    omit: (obj, keys) => {
      const result = { ...obj };
      keys.forEach(key => {
        delete result[key];
      });
      return result;
    },
    // التحقق من الخصائص
    hasKey: (obj, key) => obj.hasOwnProperty(key),
    // الحصول على المفاتيح
    keys: Object.keys,
    // الحصول على القيم
    values: Object.values,
    // الحصول على الإدخالات
    entries: Object.entries
  },

  // دوال التلاعب بالمصفوفات
  arrayManipulation: {
    // التكرار
    forEach: (arr, callback) => arr.forEach(callback),
    map: (arr, callback) => arr.map(callback),
    filter: (arr, callback) => arr.filter(callback),
    reduce: (arr, callback, initial) => arr.reduce(callback, initial),
    reduceRight: (arr, callback, initial) => arr.reduceRight(callback, initial),

    // البحث
    find: (arr, callback) => arr.find(callback),
    findIndex: (arr, callback) => arr.findIndex(callback),
    some: (arr, callback) => arr.some(callback),
    every: (arr, callback) => arr.every(callback),
    includes: (arr, value) => arr.includes(value),
    indexOf: (arr, value) => arr.indexOf(value),

    // التحويل
    slice: (arr, start, end) => arr.slice(start, end),
    splice: (arr, start, deleteCount, ...items) => arr.splice(start, deleteCount, ...items),
    concat: (arr, ...items) => arr.concat(...items),
    join: (arr, separator) => arr.join(separator),

    // الإضافة والحذف
    push: (arr, ...items) => arr.push(...items),
    pop: (arr) => arr.pop(),
    shift: (arr) => arr.shift(),
    unshift: (arr, ...items) => arr.unshift(...items),

    // الترتيب
    sort: (arr, compareFn) => arr.sort(compareFn),
    reverse: (arr) => arr.reverse(),

    // التصفية
    unique: (arr) => [...new Set(arr)],
    flatten: (arr) => arr.flat(Infinity),
    groupBy: (arr, key) => arr.reduce((groups, item) => {
      const group = item[key];
      if (!groups[group]) groups[group] = [];
      groups[group].push(item);
      return groups;
    }, {}),
    chunk: (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    },
    shuffle: (arr) => {
      const shuffled = [...arr];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  },

  // دوال التلاعب بالنصوص
  stringManipulation: {
    // التنسيق
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    capitalizeAll: (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),
    camelCase: (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    ).replace(/\s+/g, ''),
    snakeCase: (str) => str.replace(/\s+/g, '_').toLowerCase(),
    kebabCase: (str) => str.replace(/\s+/g, '-').toLowerCase(),
    titleCase: (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),

    // الاستخراج
    truncate: (str, length, suffix = '...') => {
      if (str.length <= length) return str;
      return str.slice(0, length) + suffix;
    },
    ellipsis: (str, maxLength) => {
      if (str.length <= maxLength) return str;
      return str.slice(0, maxLength) + '...';
    },

    // التحقق
    isEmpty: (str) => str.trim().length === 0,
    isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
    isURL: (str) => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(str),
    isPhone: (str) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(str),
    isNumeric: (str) => /^[0-9]+$/.test(str),
    isAlpha: (str) => /^[a-zA-Z]+$/.test(str),
    isAlphanumeric: (str) => /^[a-zA-Z0-9]+$/.test(str),

    // التحويل
    reverse: (str) => str.split('').reverse().join(''),
    slugify: (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    countWords: (str) => str.trim().split(/\s+/).length,
    countChars: (str) => str.length,
    countLines: (str) => str.split('\n').length
  },

  // دوال التلاعب بالأرقام
  numberManipulation: {
    // التقريب
    round: (num, decimals = 0) => Number(Math.round(num + 'e' + decimals) + 'e-' + decimals),
    floor: (num, decimals = 0) => Number(Math.floor(num + 'e' + decimals) + 'e-' + decimals),
    ceil: (num, decimals = 0) => Number(Math.ceil(num + 'e' + decimals) + 'e-' + decimals),

    // التنسيق
    formatCurrency: (num, currency = '$') => `${currency}${num.toFixed(2)}`,
    formatNumber: (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    formatPercent: (num) => `${(num * 100).toFixed(1)}%`,

    // التحقق
    isEven: (num) => num % 2 === 0,
    isOdd: (num) => num % 2 !== 0,
    isPrime: (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    },
    isBetween: (num, min, max) => num >= min && num <= max,

    // العمليات
    clamp: (num, min, max) => Math.min(Math.max(num, min), max),
    lerp: (a, b, t) => a + (b - a) * t,
    remap: (num, fromMin, fromMax, toMin, toMax) => {
      const t = (num - fromMin) / (fromMax - fromMin);
      return toMin + (toMax - toMin) * t;
    }
  },

  // دوال التلاعب بالوقت
  timeManipulation: {
    // تنسيق الوقت
    formatDate: (date, format = 'YYYY-MM-DD') => {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
      const seconds = String(d.getSeconds()).padStart(2, '0');

      return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
    },

    // مقارنة الوقت
    isToday: (date) => {
      const today = new Date();
      const d = new Date(date);
      return d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth() &&
        d.getDate() === today.getDate();
    },
    isYesterday: (date) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const d = new Date(date);
      return d.getFullYear() === yesterday.getFullYear() &&
        d.getMonth() === yesterday.getMonth() &&
        d.getDate() === yesterday.getDate();
    },
    isTomorrow: (date) => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const d = new Date(date);
      return d.getFullYear() === tomorrow.getFullYear() &&
        d.getMonth() === tomorrow.getMonth() &&
        d.getDate() === tomorrow.getDate();
    },

    // الفروق
    daysBetween: (date1, date2) => {
      const diff = Math.abs(new Date(date1) - new Date(date2));
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    },
    hoursBetween: (date1, date2) => {
      const diff = Math.abs(new Date(date1) - new Date(date2));
      return Math.ceil(diff / (1000 * 60 * 60));
    },
    minutesBetween: (date1, date2) => {
      const diff = Math.abs(new Date(date1) - new Date(date2));
      return Math.ceil(diff / (1000 * 60));
    },

    // إضافة وقت
    addDays: (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    addHours: (date, hours) => {
      const result = new Date(date);
      result.setHours(result.getHours() + hours);
      return result;
    },
    addMinutes: (date, minutes) => {
      const result = new Date(date);
      result.setMinutes(result.getMinutes() + minutes);
      return result;
    }
  }
};

// ============================================================
// 7. دوال الـ Debugging (تصحيح الأخطاء)
// ============================================================

const Debugging = {
  // دوال التصحيح
  debug: {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug,
    table: console.table,
    group: console.group,
    groupEnd: console.groupEnd,
    time: console.time,
    timeEnd: console.timeEnd,
    trace: console.trace,
    assert: console.assert,
    count: console.count,
    clear: console.clear,

    // دوال مخصصة
    inspect: (obj) => JSON.stringify(obj, null, 2),
    pretty: (obj) => console.log(JSON.stringify(obj, null, 2)),
    measure: (fn, ...args) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      console.log(`Execution time: ${end - start}ms`);
      return result;
    }
  },

  // أنماط التصحيح
  patterns: {
    console: 'Console',
    debugger: 'Debugger',
    breakpoint: 'Breakpoint',
    watch: 'Watch',
    step: 'Step',
    trace: 'Trace'
  }
};

// ============================================================
// 8. متغيرات الـ Performance (الأداء)
// ============================================================

const Performance = {
  // دوال الأداء
  timing: {
    now: performance.now,
    mark: performance.mark,
    measure: performance.measure,
    clearMarks: performance.clearMarks,
    clearMeasures: performance.clearMeasures,

    // قياس وقت التنفيذ
    measureExecution: (fn, name = 'Execution') => {
      performance.mark(`${name}-start`);
      const result = fn();
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      const entries = performance.getEntriesByName(name);
      console.log(`${name}: ${entries[0].duration}ms`);
      return result;
    }
  },

  // تحسين الأداء
  optimization: {
    memoize: (fn) => {
      const cache = new Map();
      return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
      };
    },
    debounce: (fn, delay = 250) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    },
    throttle: (fn, limit = 250) => {
      let inThrottle = false;
      return (...args) => {
        if (!inThrottle) {
          fn(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  }
};

// ============================================================
// 9. دوال الـ Fetch (الشبكة)
// ============================================================

const FetchUtils = {
  // دوال الـ Fetch الأساسية
  basic: {
    get: async (url) => {
      const response = await fetch(url);
      return response.json();
    },
    post: async (url, data) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    put: async (url, data) => {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    delete: async (url) => {
      const response = await fetch(url, {
        method: 'DELETE'
      });
      return response.json();
    }
  },

  // دوال الـ Fetch مع معالجة الأخطاء
  withErrorHandling: {
    get: async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    }
  },

  // رؤوس HTTP الشائعة
  headers: {
    json: { 'Content-Type': 'application/json' },
    form: { 'Content-Type': 'application/x-www-form-urlencoded' },
    multipart: { 'Content-Type': 'multipart/form-data' },
    auth: (token) => ({ 'Authorization': `Bearer ${token}` })
  }
};

// ============================================================
// 10. دوال الـ DOM (نموذج كائن المستند)
// ============================================================

const DOMVariables = {
  // دوال إنشاء العناصر
  create: {
    element: (tag, attributes = {}, children = []) => {
      const element = document.createElement(tag);
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      });
      return element;
    },
    fragment: (children = []) => {
      const fragment = document.createDocumentFragment();
      children.forEach(child => {
        if (typeof child === 'string') {
          fragment.appendChild(document.createTextNode(child));
        } else {
          fragment.appendChild(child);
        }
      });
      return fragment;
    }
  },

  // دوال البحث عن العناصر
  find: {
    byId: (id) => document.getElementById(id),
    byClass: (className) => document.getElementsByClassName(className),
    byTag: (tag) => document.getElementsByTagName(tag),
    byName: (name) => document.getElementsByName(name),
    query: (selector) => document.querySelector(selector),
    queryAll: (selector) => document.querySelectorAll(selector)
  },

  // دوال التلاعب بالعناصر
  manipulate: {
    append: (parent, child) => parent.appendChild(child),
    prepend: (parent, child) => parent.prepend(child),
    before: (element, child) => element.before(child),
    after: (element, child) => element.after(child),
    remove: (element) => element.remove(),
    replace: (oldElement, newElement) => oldElement.replaceWith(newElement),
    clone: (element) => element.cloneNode(true)
  },

  // دوال السمات
  attributes: {
    get: (element, name) => element.getAttribute(name),
    set: (element, name, value) => element.setAttribute(name, value),
    remove: (element, name) => element.removeAttribute(name),
    has: (element, name) => element.hasAttribute(name),
    toggle: (element, name) => element.toggleAttribute(name)
  },

  // دوال الفئات
  classes: {
    add: (element, ...classes) => element.classList.add(...classes),
    remove: (element, ...classes) => element.classList.remove(...classes),
    toggle: (element, className) => element.classList.toggle(className),
    contains: (element, className) => element.classList.contains(className),
    replace: (element, oldClass, newClass) => element.classList.replace(oldClass, newClass)
  },

  // دوال الأحداث
  events: {
    on: (element, event, handler) => element.addEventListener(event, handler),
    off: (element, event, handler) => element.removeEventListener(event, handler),
    once: (element, event, handler) => element.addEventListener(event, handler, { once: true }),
    dispatch: (element, event) => element.dispatchEvent(event),
    create: (type, options = {}) => new Event(type, options)
  },

  // دوال الأنماط
  styles: {
    set: (element, property, value) => element.style[property] = value,
    get: (element, property) => getComputedStyle(element)[property],
    setMultiple: (element, styles) => {
      Object.entries(styles).forEach(([property, value]) => {
        element.style[property] = value;
      });
    }
  },

  // دوال النصوص
  text: {
    get: (element) => element.textContent,
    set: (element, text) => element.textContent = text,
    append: (element, text) => element.textContent += text
  },

  // دوال HTML
  html: {
    get: (element) => element.innerHTML,
    set: (element, html) => element.innerHTML = html,
    append: (element, html) => element.insertAdjacentHTML('beforeend', html)
  }
};

// ============================================================
// 11. دوال الـ Regular Expressions (التعبيرات النمطية)
// ============================================================

const RegexPatterns = {
  // أنماط شائعة
  common: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    ipv4: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    ipv6: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    username: /^[a-zA-Z0-9_]{3,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    hex: /^[0-9a-fA-F]+$/,
    binary: /^[01]+$/,
    octal: /^[0-7]+$/,
    decimal: /^[0-9]+$/,
    float: /^[0-9]+\.[0-9]+$/,
    scientific: /^[0-9]+(\.[0-9]+)?[eE][+-]?[0-9]+$/,
    creditCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    ssn: /^\d{3}-\d{2}-\d{4}$/,
    zipCode: /^\d{5}(-\d{4})?$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    time: /^\d{2}:\d{2}(:\d{2})?$/,
    datetime: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/,
    htmlTag: /<("[^"]*"|'[^']*'|[^'">])*>/,
    htmlComment: /<!--[\s\S]*?-->/,
    cssComment: /\/\*[\s\S]*?\*\//,
    jsComment: /\/\/.*|\/\*[\s\S]*?\*\//,
    whitespace: /\s+/,
    word: /\b\w+\b/
  },

  // أنماط للعربية
  arabic: {
    arabic: /[\u0600-\u06FF]/,
    arabicLetters: /[\u0621-\u064A]/,
    arabicDiacritics: /[\u064B-\u065F]/,
    arabicNumbers: /[\u0660-\u0669]/,
    arabicFull: /^[\u0600-\u06FF\s]+$/
  },

  // أنماط للإنجليزية
  english: {
    english: /[a-zA-Z]/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    letters: /[a-zA-Z]/,
    words: /\b[a-zA-Z]+\b/
  },

  // أنماط للعلامات التجارية
  brands: {
    twitter: /@[a-zA-Z0-9_]{1,15}/,
    hashtag: /#[a-zA-Z0-9_]+/,
    mention: /@[a-zA-Z0-9_]+/,
    url: /(https?:\/\/[^\s]+)/,
    emoji: /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u
  }
};

// ============================================================
// 12. متغيرات الـ Events (الأحداث)
// ============================================================

const Events = {
  // أنواع الأحداث
  types: {
    // أحداث الفأرة
    mouse: {
      click: 'click',
      dblclick: 'dblclick',
      mousedown: 'mousedown',
      mouseup: 'mouseup',
      mouseover: 'mouseover',
      mouseout: 'mouseout',
      mousemove: 'mousemove',
      mouseenter: 'mouseenter',
      mouseleave: 'mouseleave',
      contextmenu: 'contextmenu',
      wheel: 'wheel'
    },

    // أحداث لوحة المفاتيح
    keyboard: {
      keydown: 'keydown',
      keyup: 'keyup',
      keypress: 'keypress'
    },

    // أحداث النموذج
    form: {
      submit: 'submit',
      reset: 'reset',
      change: 'change',
      input: 'input',
      focus: 'focus',
      blur: 'blur',
      select: 'select',
      invalid: 'invalid'
    },

    // أحداث السحب
    drag: {
      drag: 'drag',
      dragstart: 'dragstart',
      dragend: 'dragend',
      dragenter: 'dragenter',
      dragleave: 'dragleave',
      dragover: 'dragover',
      drop: 'drop'
    },

    // أحداث اللمس
    touch: {
      touchstart: 'touchstart',
      touchmove: 'touchmove',
      touchend: 'touchend',
      touchcancel: 'touchcancel'
    },

    // أحداث الوسائط
    media: {
      play: 'play',
      pause: 'pause',
      ended: 'ended',
      volumechange: 'volumechange',
      timeupdate: 'timeupdate',
      loadeddata: 'loadeddata',
      canplay: 'canplay',
      canplaythrough: 'canplaythrough',
      progress: 'progress',
      stalled: 'stalled',
      suspend: 'suspend',
      emptied: 'emptied',
      abort: 'abort',
      error: 'error'
    },

    // أحداث المستند
    document: {
      DOMContentLoaded: 'DOMContentLoaded',
      load: 'load',
      beforeunload: 'beforeunload',
      unload: 'unload',
      resize: 'resize',
      scroll: 'scroll',
      hashchange: 'hashchange',
      popstate: 'popstate',
      pageshow: 'pageshow',
      pagehide: 'pagehide'
    },

    // أحداث الـ WebSocket
    websocket: {
      open: 'open',
      close: 'close',
      message: 'message',
      error: 'error'
    },

    // أحداث الـ Worker
    worker: {
      message: 'message',
      messageerror: 'messageerror',
      error: 'error'
    }
  }
};

// ============================================================
// 13. متغيرات الـ Storage (التخزين)
// ============================================================

const Storage = {
  // أنواع التخزين
  types: {
    localStorage: 'localStorage',
    sessionStorage: 'sessionStorage',
    cookie: 'cookie',
    indexedDB: 'indexedDB',
    cache: 'cache'
  },

  // دوال التخزين المحلي
  local: {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    },
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
    keys: () => Object.keys(localStorage),
    has: (key) => localStorage.getItem(key) !== null
  },

  // دوال التخزين المؤقت
  session: {
    set: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
    get: (key) => {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    },
    remove: (key) => sessionStorage.removeItem(key),
    clear: () => sessionStorage.clear(),
    keys: () => Object.keys(sessionStorage),
    has: (key) => sessionStorage.getItem(key) !== null
  },

  // دوال الـ Cookies
  cookie: {
    set: (name, value, days = 7) => {
      const expires = new Date();
      expires.setDate(expires.getDate() + days);
      document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    },
    get: (name) => {
      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
      }
      return null;
    },
    remove: (name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
    getAll: () => {
      const cookies = {};
      document.cookie.split('; ').forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookies[key] = value;
      });
      return cookies;
    }
  },

  // دوال الـ IndexedDB
  indexedDB: {
    open: (name, version = 1) => {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(name, version);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          resolve(db);
        };
      });
    },
    add: async (dbName, storeName, data) => {
      const db = await Storage.indexedDB.open(dbName);
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.add(data);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    get: async (dbName, storeName, key) => {
      const db = await Storage.indexedDB.open(dbName);
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    getAll: async (dbName, storeName) => {
      const db = await Storage.indexedDB.open(dbName);
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
  }
};

// ============================================================
// 14. دوال الـ Array المتقدمة
// ============================================================

const AdvancedArray = {
  // دوال التصفية المتقدمة
  filter: {
    unique: (arr) => [...new Set(arr)],
    uniqueBy: (arr, key) => {
      const seen = new Set();
      return arr.filter(item => {
        const value = typeof key === 'function' ? key(item) : item[key];
        if (seen.has(value)) return false;
        seen.add(value);
        return true;
      });
    },
    filterBy: (arr, key, value) => arr.filter(item => item[key] === value),
    filterByRegex: (arr, key, regex) => arr.filter(item => regex.test(item[key])),
    filterNull: (arr) => arr.filter(item => item !== null && item !== undefined),
    filterFalsy: (arr) => arr.filter(Boolean)
  },

  // دوال الترتيب المتقدمة
  sort: {
    byKey: (arr, key, ascending = true) => {
      return [...arr].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (ascending) {
          return aVal > bVal ? 1 : -1;
        } else {
          return bVal > aVal ? 1 : -1;
        }
      });
    },
    byMultipleKeys: (arr, keys) => {
      return [...arr].sort((a, b) => {
        for (const key of keys) {
          const aVal = a[key.key];
          const bVal = b[key.key];
          if (aVal !== bVal) {
            return key.ascending !== false ? aVal > bVal ? 1 : -1 : bVal > aVal ? 1 : -1;
          }
        }
        return 0;
      });
    },
    random: (arr) => {
      const sorted = [...arr];
      for (let i = sorted.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
      }
      return sorted;
    }
  },

  // دوال التحويل المتقدمة
  transform: {
    flatten: (arr) => arr.flat(Infinity),
    groupBy: (arr, key) => {
      return arr.reduce((groups, item) => {
        const group = typeof key === 'function' ? key(item) : item[key];
        if (!groups[group]) groups[group] = [];
        groups[group].push(item);
        return groups;
      }, {});
    },
    indexBy: (arr, key) => {
      return arr.reduce((indexed, item) => {
        const index = typeof key === 'function' ? key(item) : item[key];
        indexed[index] = item;
        return indexed;
      }, {});
    },
    mapTo: (arr, ...keys) => {
      return arr.map(item => {
        const result = {};
        keys.forEach(key => {
          if (key in item) result[key] = item[key];
        });
        return result;
      });
    },
    keyBy: (arr, key) => {
      const result = {};
      arr.forEach(item => {
        result[item[key]] = item;
      });
      return result;
    }
  },

  // دوال الحساب المتقدمة
  math: {
    sum: (arr) => arr.reduce((a, b) => a + b, 0),
    average: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
    min: (arr) => Math.min(...arr),
    max: (arr) => Math.max(...arr),
    median: (arr) => {
      const sorted = [...arr].sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      }
      return sorted[middle];
    },
    mode: (arr) => {
      const counts = {};
      arr.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
      });
      let maxCount = 0;
      let mode = null;
      Object.entries(counts).forEach(([key, count]) => {
        if (count > maxCount) {
          maxCount = count;
          mode = key;
        }
      });
      return mode;
    },
    variance: (arr) => {
      const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
      return arr.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / arr.length;
    },
    standardDeviation: (arr) => Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - arr.reduce((a, b) => a + b, 0) / arr.length, 2), 0) / arr.length)
  },

  // دوال التشغيل المتقدمة
  operation: {
    difference: (a, b) => a.filter(item => !b.includes(item)),
    intersection: (a, b) => a.filter(item => b.includes(item)),
    union: (a, b) => [...new Set([...a, ...b])],
    symmetricDifference: (a, b) => [
      ...a.filter(item => !b.includes(item)),
      ...b.filter(item => !a.includes(item))
    ],
    contains: (arr, ...items) => items.every(item => arr.includes(item)),
    containsAny: (arr, ...items) => items.some(item => arr.includes(item)),
    equals: (a, b) => a.length === b.length && a.every((item, index) => item === b[index])
  }
};

// ============================================================
// 15. دوال الـ Object المتقدمة
// ============================================================

const AdvancedObject = {
  // دوال التحويل
  transform: {
    omit: (obj, ...keys) => {
      const result = { ...obj };
      keys.forEach(key => delete result[key]);
      return result;
    },
    pick: (obj, ...keys) => {
      const result = {};
      keys.forEach(key => {
        if (key in obj) result[key] = obj[key];
      });
      return result;
    },
    mapValues: (obj, fn) => {
      const result = {};
      Object.entries(obj).forEach(([key, value]) => {
        result[key] = fn(value, key);
      });
      return result;
    },
    mapKeys: (obj, fn) => {
      const result = {};
      Object.entries(obj).forEach(([key, value]) => {
        result[fn(value, key)] = value;
      });
      return result;
    },
    filterValues: (obj, fn) => {
      const result = {};
      Object.entries(obj).forEach(([key, value]) => {
        if (fn(value, key)) result[key] = value;
      });
      return result;
    }
  },

  // دوال التحقق
  validation: {
    isEmpty: (obj) => Object.keys(obj).length === 0,
    hasKey: (obj, key) => obj.hasOwnProperty(key),
    hasKeys: (obj, ...keys) => keys.every(key => obj.hasOwnProperty(key)),
    hasAnyKey: (obj, ...keys) => keys.some(key => obj.hasOwnProperty(key)),
    isEqual: (a, b) => JSON.stringify(a) === JSON.stringify(b),
    deepEqual: function deepEqual(a, b) {
      if (a === b) return true;
      if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      return keysA.every(key => deepEqual(a[key], b[key]));
    }
  },

  // دوال الدمج
  merge: {
    shallow: (target, ...sources) => Object.assign(target, ...sources),
    deep: function deep(target, ...sources) {
      const result = { ...target };
      sources.forEach(source => {
        Object.entries(source).forEach(([key, value]) => {
          if (value && typeof value === 'object' && !Array.isArray(value)) {
            if (result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
              result[key] = deep(result[key], value);
            } else {
              result[key] = { ...value };
            }
          } else {
            result[key] = value;
          }
        });
      });
      return result;
    },
    withDefaults: (obj, defaults) => {
      const result = { ...defaults };
      Object.entries(obj).forEach(([key, value]) => {
        if (value !== undefined) result[key] = value;
      });
      return result;
    }
  },

  // دوال الاستخراج
  extract: {
    values: (obj) => Object.values(obj),
    keys: (obj) => Object.keys(obj),
    entries: (obj) => Object.entries(obj),
    nested: (obj, path) => {
      return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : undefined;
      }, obj);
    },
    fromPath: (obj, path, defaultValue = undefined) => {
      const result = path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : undefined;
      }, obj);
      return result !== undefined ? result : defaultValue;
    }
  }
};

// ============================================================
// 16. دوال الـ String المتقدمة
// ============================================================

const AdvancedString = {
  // دوال التنسيق
  format: {
    camelCase: (str) => {
      return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
    },
    snakeCase: (str) => {
      return str.replace(/([A-Z])/g, '_$1').toLowerCase();
    },
    kebabCase: (str) => {
      return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    },
    pascalCase: (str) => {
      return str.replace(/([-_\s]\w)/g, (g) => g[1].toUpperCase())
        .replace(/^./, (g) => g.toUpperCase());
    },
    constantCase: (str) => {
      return str.replace(/([A-Z])/g, '_$1').toUpperCase();
    },
    titleCase: (str) => {
      return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    },
    sentenceCase: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  },

  // دوال المعالجة
  manipulate: {
    truncate: (str, maxLength, suffix = '...') => {
      if (str.length <= maxLength) return str;
      return str.slice(0, maxLength - suffix.length) + suffix;
    },
    ellipsis: (str, maxLength) => {
      if (str.length <= maxLength) return str;
      return str.slice(0, maxLength) + '...';
    },
    extract: (str, start, end) => {
      return str.substring(start, end);
    },
    extractBetween: (str, start, end) => {
      const startIndex = str.indexOf(start);
      if (startIndex === -1) return '';
      const endIndex = str.indexOf(end, startIndex + start.length);
      if (endIndex === -1) return '';
      return str.substring(startIndex + start.length, endIndex);
    },
    extractAllBetween: (str, start, end) => {
      const results = [];
      let currentIndex = 0;
      while (true) {
        const startIndex = str.indexOf(start, currentIndex);
        if (startIndex === -1) break;
        const endIndex = str.indexOf(end, startIndex + start.length);
        if (endIndex === -1) break;
        results.push(str.substring(startIndex + start.length, endIndex));
        currentIndex = endIndex + end.length;
      }
      return results;
    },
    replaceBetween: (str, start, end, replacement) => {
      const startIndex = str.indexOf(start);
      if (startIndex === -1) return str;
      const endIndex = str.indexOf(end, startIndex + start.length);
      if (endIndex === -1) return str;
      return str.substring(0, startIndex + start.length) + replacement + str.substring(endIndex);
    }
  },

  // دوال التحقق
  validation: {
    isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
    isURL: (str) => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(str),
    isPhone: (str) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(str),
    isIP: (str) => /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str),
    isUUID: (str) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(str),
    isDate: (str) => /^\d{4}-\d{2}-\d{2}$/.test(str),
    isTime: (str) => /^\d{2}:\d{2}(:\d{2})?$/.test(str),
    isDateTime: (str) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/.test(str),
    isNumeric: (str) => /^[0-9]+$/.test(str),
    isAlpha: (str) => /^[a-zA-Z]+$/.test(str),
    isAlphanumeric: (str) => /^[a-zA-Z0-9]+$/.test(str),
    isHex: (str) => /^[0-9a-fA-F]+$/.test(str),
    isBinary: (str) => /^[01]+$/.test(str),
    isOctal: (str) => /^[0-7]+$/.test(str),
    isFloat: (str) => /^[0-9]+\.[0-9]+$/.test(str)
  },

  // دوال التعديل
  modify: {
    reverse: (str) => str.split('').reverse().join(''),
    slugify: (str) => {
      return str.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    },
    normalize: (str) => {
      return str.normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/g, '')
        .trim();
    },
    removeSpaces: (str) => str.replace(/\s+/g, ''),
    removePunctuation: (str) => str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''),
    removeAccents: (str) => str.normalize('NFKD').replace(/[\u0300-\u036f]/g, ''),
    countWords: (str) => str.trim().split(/\s+/).length,
    countChars: (str) => str.length,
    countLines: (str) => str.split('\n').length,
    countVowels: (str) => (str.match(/[aeiouAEIOU]/g) || []).length,
    countConsonants: (str) => (str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length
  },

  // دوال التنسيق المتقدمة
  advanced: {
    wrap: (str, prefix, suffix) => `${prefix}${str}${suffix}`,
    unwrap: (str, prefix, suffix) => {
      if (str.startsWith(prefix) && str.endsWith(suffix)) {
        return str.substring(prefix.length, str.length - suffix.length);
      }
      return str;
    },
    repeat: (str, count) => str.repeat(count),
    pad: (str, length, char = ' ') => str.padStart(length, char),
    padBoth: (str, length, char = ' ') => {
      const padLength = length - str.length;
      if (padLength <= 0) return str;
      const halfPad = Math.floor(padLength / 2);
      return char.repeat(halfPad) + str + char.repeat(padLength - halfPad);
    },
    truncateWords: (str, maxWords) => {
      const words = str.split(' ');
      if (words.length <= maxWords) return str;
      return words.slice(0, maxWords).join(' ') + '...';
    }
  }
};

// ============================================================
// 17. دوال الـ Number المتقدمة
// ============================================================

const AdvancedNumber = {
  // دوال التحويل
  convert: {
    toBinary: (num) => num.toString(2),
    toOctal: (num) => num.toString(8),
    toHex: (num) => num.toString(16),
    fromBinary: (str) => parseInt(str, 2),
    fromOctal: (str) => parseInt(str, 8),
    fromHex: (str) => parseInt(str, 16),
    toRoman: (num) => {
      const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
      let result = '';
      let remaining = num;
      for (const { value, numeral } of romanNumerals) {
        while (remaining >= value) {
          result += numeral;
          remaining -= value;
        }
      }
      return result;
    },
    fromRoman: (str) => {
      const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      let result = 0;
      let index = 0;
      while (index < str.length) {
        const twoChars = str.substring(index, index + 2);
        if (twoChars in romanNumerals) {
          result += romanNumerals[twoChars];
          index += 2;
        } else {
          result += romanNumerals[str[index]];
          index++;
        }
      }
      return result;
    }
  },

  // دوال التنسيق
  format: {
    currency: (num, currency = '$', decimals = 2) => `${currency}${num.toFixed(decimals)}`,
    percentage: (num, decimals = 1) => `${(num * 100).toFixed(decimals)}%`,
    number: (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    scientific: (num, decimals = 2) => num.toExponential(decimals),
    fixed: (num, decimals = 2) => num.toFixed(decimals),
    precision: (num, precision = 2) => num.toPrecision(precision)
  },

  // دوال الحساب
  math: {
    factorial: function factorial(num) {
      if (num <= 1) return 1;
      return num * factorial(num - 1);
    },
    fibonacci: function fibonacci(num) {
      if (num <= 1) return num;
      return fibonacci(num - 1) + fibonacci(num - 2);
    },
    gcd: function gcd(a, b) {
      while (b !== 0) {
        [a, b] = [b, a % b];
      }
      return a;
    },
    lcm: (a, b) => (a * b) / AdvancedNumber.math.gcd(a, b),
    isPrime: (num) => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    },
    isEven: (num) => num % 2 === 0,
    isOdd: (num) => num % 2 !== 0,
    isPositive: (num) => num > 0,
    isNegative: (num) => num < 0,
    isZero: (num) => num === 0,
    clamp: (num, min, max) => Math.min(Math.max(num, min), max),
    lerp: (a, b, t) => a + (b - a) * t,
    remap: (num, fromMin, fromMax, toMin, toMax) => {
      const t = (num - fromMin) / (fromMax - fromMin);
      return toMin + (toMax - toMin) * t;
    },
    random: (min, max) => Math.random() * (max - min) + min,
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  },

  // دوال التحقق
  validation: {
    isInteger: (num) => Number.isInteger(num),
    isFloat: (num) => typeof num === 'number' && !Number.isInteger(num),
    isFinite: (num) => Number.isFinite(num),
    isNaN: (num) => Number.isNaN(num),
    isSafeInteger: (num) => Number.isSafeInteger(num),
    isInRange: (num, min, max) => num >= min && num <= max
  }
};

// ============================================================
// 18. تصدير الكل
// ============================================================

const JavaScriptVariables = {
  primitiveTypes: PrimitiveTypes,
  globalObjects: GlobalObjects,
  coreFunctions: CoreFunctions,
  programmingPatterns: ProgrammingPatterns,
  es6Variables: ES6Variables,
  utilityFunctions: UtilityFunctions,
  debugging: Debugging,
  performance: Performance,
  fetchUtils: FetchUtils,
  domUtils: DOMVariables,
  regexPatterns: RegexPatterns,
  events: Events,
  storage: Storage,
  advancedArray: AdvancedArray,
  advancedObject: AdvancedObject,
  advancedString: AdvancedString,
  advancedNumber: AdvancedNumber,

  // دوال مساعدة للوصول السريع
  quick: {
    // أنواع البيانات
    typeof: (value) => typeof value,
    isArray: Array.isArray,
    isObject: (value) => value !== null && typeof value === 'object',
    isFunction: (value) => typeof value === 'function',
    isString: (value) => typeof value === 'string',
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
    isBoolean: (value) => typeof value === 'boolean',
    isUndefined: (value) => value === undefined,
    isNull: (value) => value === null,

    // دوال المصفوفات
    forEach: (arr, fn) => arr.forEach(fn),
    map: (arr, fn) => arr.map(fn),
    filter: (arr, fn) => arr.filter(fn),
    reduce: (arr, fn, initial) => arr.reduce(fn, initial),
    find: (arr, fn) => arr.find(fn),
    findIndex: (arr, fn) => arr.findIndex(fn),
    includes: (arr, value) => arr.includes(value),
    some: (arr, fn) => arr.some(fn),
    every: (arr, fn) => arr.every(fn),
    sort: (arr, fn) => arr.sort(fn),
    reverse: (arr) => arr.reverse(),

    // دوال الكائنات
    keys: Object.keys,
    values: Object.values,
    entries: Object.entries,
    assign: Object.assign,
    freeze: Object.freeze,
    seal: Object.seal,

    // دوال النصوص
    toUpperCase: (str) => str.toUpperCase(),
    toLowerCase: (str) => str.toLowerCase(),
    trim: (str) => str.trim(),
    split: (str, separator) => str.split(separator),
    join: (arr, separator) => arr.join(separator),
    replace: (str, search, replacement) => str.replace(search, replacement),
    substring: (str, start, end) => str.substring(start, end),
    slice: (str, start, end) => str.slice(start, end),

    // دوال الأرقام
    parseInt: parseInt,
    parseFloat: parseFloat,
    isNaN: isNaN,
    isFinite: isFinite,
    round: Math.round,
    floor: Math.floor,
    ceil: Math.ceil,
    abs: Math.abs,
    pow: Math.pow,
    sqrt: Math.sqrt,
    random: Math.random,
    max: Math.max,
    min: Math.min,

    // دوال الوقت
    now: Date.now,
    dateParse: Date.parse,
    UTC: Date.UTC,

    // دوال الـ JSON
    parse: JSON.parse,
    stringify: JSON.stringify,

    // دوال الـ Console
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug,

    // دوال الـ DOM
    getElementById: typeof document !== 'undefined' ? document.getElementById.bind(document) : null,
    querySelector: typeof document !== 'undefined' ? document.querySelector.bind(document) : null,
    querySelectorAll: typeof document !== 'undefined' ? document.querySelectorAll.bind(document) : null,
    createElement: typeof document !== 'undefined' ? document.createElement.bind(document) : null,
    createTextNode: typeof document !== 'undefined' ? document.createTextNode.bind(document) : null,

    // دوال الـ Fetch
    fetch: typeof fetch !== 'undefined' ? fetch : null,
    get: (url) => fetch(url).then(res => res.json()),
    post: (url, data) => fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),

    // دوال الـ Storage
    localStorageSet: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    localStorageGet: (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    },
    sessionStorageSet: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
    sessionStorageGet: (key) => {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
  }
};

// ============================================================
// 19. تصدير للاستخدام
// ============================================================

if (typeof window !== 'undefined') {
  window.JavaScriptVariables = JavaScriptVariables;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = JavaScriptVariables;
}

