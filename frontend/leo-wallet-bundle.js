/******/ var __webpack_modules__ = ({

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWalletAdapter: () => (/* binding */ BaseWalletAdapter),
/* harmony export */   EventEmitter: () => (/* reexport default from dynamic */ eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   WalletReadyState: () => (/* binding */ WalletReadyState),
/* harmony export */   scopePollingDetectionStrategy: () => (/* binding */ scopePollingDetectionStrategy)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


/**
 * A wallet's readiness describes a series of states that the wallet can be in,
 * depending on what kind of wallet it is. An installable wallet (eg. a browser
 * extension like Phantom) might be `Installed` if we've found the Phantom API
 * in the global scope, or `NotDetected` otherwise. A loadable, zero-install
 * runtime (eg. Torus Wallet) might simply signal that it's `Loadable`. Use this
 * metadata to personalize the wallet list for each user (eg. to show their
 * installed wallets first).
 */
var WalletReadyState;
(function (WalletReadyState) {
    /**
     * User-installable wallets can typically be detected by scanning for an API
     * that they've injected into the global context. If such an API is present,
     * we consider the wallet to have been installed.
     */
    WalletReadyState["Installed"] = "Installed";
    WalletReadyState["NotDetected"] = "NotDetected";
    /**
     * Loadable wallets are always available to you. Since you can load them at
     * any time, it's meaningless to say that they have been detected.
     */
    WalletReadyState["Loadable"] = "Loadable";
    /**
     * If a wallet is not supported on a given platform (eg. server-rendering, or
     * mobile) then it will stay in the `Unsupported` state.
     */
    WalletReadyState["Unsupported"] = "Unsupported";
})(WalletReadyState || (WalletReadyState = {}));
class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {
    get connected() {
        return !!this.publicKey;
    }
}
function scopePollingDetectionStrategy(detect) {
    // Early return when server-side rendering
    if (typeof window === 'undefined' || typeof document === 'undefined')
        return;
    const disposers = [];
    function detectAndDispose() {
        const detected = detect();
        if (detected) {
            for (const dispose of disposers) {
                dispose();
            }
        }
    }
    // Strategy #1: Try detecting every second.
    const interval = 
    // TODO: #334 Replace with idle callback strategy.
    setInterval(detectAndDispose, 1000);
    disposers.push(() => clearInterval(interval));
    // Strategy #2: Detect as soon as the DOM becomes 'ready'/'interactive'.
    if (
    // Implies that `DOMContentLoaded` has not yet fired.
    document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectAndDispose, { once: true });
        disposers.push(() => document.removeEventListener('DOMContentLoaded', detectAndDispose));
    }
    // Strategy #3: Detect after the `window` has fully loaded.
    if (
    // If the `complete` state has been reached, we're too late.
    document.readyState !== 'complete') {
        window.addEventListener('load', detectAndDispose, { once: true });
        disposers.push(() => window.removeEventListener('load', detectAndDispose));
    }
    // Strategy #4: Detect synchronously, now.
    detectAndDispose();
}
//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/deployment.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/deployment.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deployment: () => (/* binding */ Deployment)
/* harmony export */ });
class Deployment {
    address;
    chainId;
    program;
    fee;
    constructor(address, chainId, program, fee) {
        this.address = address;
        this.chainId = chainId;
        this.program = program;
        this.fee = fee;
    }
}
//# sourceMappingURL=deployment.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletAccountError: () => (/* binding */ WalletAccountError),
/* harmony export */   WalletConfigError: () => (/* binding */ WalletConfigError),
/* harmony export */   WalletConnectionError: () => (/* binding */ WalletConnectionError),
/* harmony export */   WalletDecryptionError: () => (/* binding */ WalletDecryptionError),
/* harmony export */   WalletDecryptionNotAllowedError: () => (/* binding */ WalletDecryptionNotAllowedError),
/* harmony export */   WalletDisconnectedError: () => (/* binding */ WalletDisconnectedError),
/* harmony export */   WalletDisconnectionError: () => (/* binding */ WalletDisconnectionError),
/* harmony export */   WalletError: () => (/* binding */ WalletError),
/* harmony export */   WalletKeypairError: () => (/* binding */ WalletKeypairError),
/* harmony export */   WalletLoadError: () => (/* binding */ WalletLoadError),
/* harmony export */   WalletNotConnectedError: () => (/* binding */ WalletNotConnectedError),
/* harmony export */   WalletNotReadyError: () => (/* binding */ WalletNotReadyError),
/* harmony export */   WalletNotSelectedError: () => (/* binding */ WalletNotSelectedError),
/* harmony export */   WalletPublicKeyError: () => (/* binding */ WalletPublicKeyError),
/* harmony export */   WalletRecordsError: () => (/* binding */ WalletRecordsError),
/* harmony export */   WalletRequestViewKeyError: () => (/* binding */ WalletRequestViewKeyError),
/* harmony export */   WalletSendTransactionError: () => (/* binding */ WalletSendTransactionError),
/* harmony export */   WalletSignMessageError: () => (/* binding */ WalletSignMessageError),
/* harmony export */   WalletSignTransactionError: () => (/* binding */ WalletSignTransactionError),
/* harmony export */   WalletTimeoutError: () => (/* binding */ WalletTimeoutError),
/* harmony export */   WalletTransactionError: () => (/* binding */ WalletTransactionError),
/* harmony export */   WalletWindowBlockedError: () => (/* binding */ WalletWindowBlockedError),
/* harmony export */   WalletWindowClosedError: () => (/* binding */ WalletWindowClosedError)
/* harmony export */ });
class WalletError extends Error {
    error;
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
class WalletNotReadyError extends WalletError {
    name = 'WalletNotReadyError';
}
class WalletLoadError extends WalletError {
    name = 'WalletLoadError';
}
class WalletConfigError extends WalletError {
    name = 'WalletConfigError';
}
class WalletConnectionError extends WalletError {
    name = 'WalletConnectionError';
}
class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}
class WalletDisconnectedError extends WalletError {
    name = 'WalletDisconnectedError';
}
class WalletDisconnectionError extends WalletError {
    name = 'WalletDisconnectionError';
}
class WalletAccountError extends WalletError {
    name = 'WalletAccountError';
}
class WalletPublicKeyError extends WalletError {
    name = 'WalletPublicKeyError';
}
class WalletKeypairError extends WalletError {
    name = 'WalletKeypairError';
}
class WalletNotConnectedError extends WalletError {
    name = 'WalletNotConnectedError';
}
class WalletSendTransactionError extends WalletError {
    name = 'WalletSendTransactionError';
}
class WalletSignMessageError extends WalletError {
    name = 'WalletSignMessageError';
}
class WalletSignTransactionError extends WalletError {
    name = 'WalletSignTransactionError';
}
class WalletRequestViewKeyError extends WalletError {
    name = 'WalletRequestViewKeyError';
}
class WalletTimeoutError extends WalletError {
    name = 'WalletTimeoutError';
}
class WalletWindowBlockedError extends WalletError {
    name = 'WalletWindowBlockedError';
}
class WalletWindowClosedError extends WalletError {
    name = 'WalletWindowClosedError';
}
class WalletDecryptionNotAllowedError extends WalletError {
    name = 'WalletDecryptionNotAllowedError';
}
class WalletDecryptionError extends WalletError {
    name = 'WalletDecryptionError';
}
class WalletRecordsError extends WalletError {
    name = 'WalletRecordsError';
}
class WalletTransactionError extends WalletError {
    name = 'WalletTransactionError';
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseMessageSignerWalletAdapter: () => (/* reexport safe */ _signer__WEBPACK_IMPORTED_MODULE_2__.BaseMessageSignerWalletAdapter),
/* harmony export */   BaseSignerWalletAdapter: () => (/* reexport safe */ _signer__WEBPACK_IMPORTED_MODULE_2__.BaseSignerWalletAdapter),
/* harmony export */   BaseWalletAdapter: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter),
/* harmony export */   DecryptPermission: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.DecryptPermission),
/* harmony export */   Deployment: () => (/* reexport safe */ _deployment__WEBPACK_IMPORTED_MODULE_5__.Deployment),
/* harmony export */   EventEmitter: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter),
/* harmony export */   Transaction: () => (/* reexport safe */ _transaction__WEBPACK_IMPORTED_MODULE_4__.Transaction),
/* harmony export */   Transition: () => (/* reexport safe */ _transaction__WEBPACK_IMPORTED_MODULE_4__.Transition),
/* harmony export */   WalletAccountError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError),
/* harmony export */   WalletAdapterNetwork: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork),
/* harmony export */   WalletConfigError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletConfigError),
/* harmony export */   WalletConnectionError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletConnectionError),
/* harmony export */   WalletDecryptionError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDecryptionError),
/* harmony export */   WalletDecryptionNotAllowedError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDecryptionNotAllowedError),
/* harmony export */   WalletDisconnectedError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectedError),
/* harmony export */   WalletDisconnectionError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectionError),
/* harmony export */   WalletError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletError),
/* harmony export */   WalletKeypairError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletKeypairError),
/* harmony export */   WalletLoadError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletLoadError),
/* harmony export */   WalletNotConnectedError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError),
/* harmony export */   WalletNotReadyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotReadyError),
/* harmony export */   WalletNotSelectedError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError),
/* harmony export */   WalletPublicKeyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletPublicKeyError),
/* harmony export */   WalletReadyState: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState),
/* harmony export */   WalletRecordsError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletRecordsError),
/* harmony export */   WalletRequestViewKeyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletRequestViewKeyError),
/* harmony export */   WalletSendTransactionError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSendTransactionError),
/* harmony export */   WalletSignMessageError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSignMessageError),
/* harmony export */   WalletSignTransactionError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSignTransactionError),
/* harmony export */   WalletTimeoutError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletTimeoutError),
/* harmony export */   WalletTransactionError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletTransactionError),
/* harmony export */   WalletWindowBlockedError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletWindowBlockedError),
/* harmony export */   WalletWindowClosedError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletWindowClosedError),
/* harmony export */   scopePollingDetectionStrategy: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js");
/* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signer */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/transaction.js");
/* harmony import */ var _deployment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deployment */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/deployment.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseMessageSignerWalletAdapter: () => (/* binding */ BaseMessageSignerWalletAdapter),
/* harmony export */   BaseSignerWalletAdapter: () => (/* binding */ BaseSignerWalletAdapter)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js");

class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter {
}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {
}
//# sourceMappingURL=signer.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/transaction.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/transaction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transaction: () => (/* binding */ Transaction),
/* harmony export */   Transition: () => (/* binding */ Transition)
/* harmony export */ });
class Transition {
    program;
    functionName;
    inputs;
    constructor(program, functionName, inputs) {
        this.program = program;
        this.functionName = functionName;
        this.inputs = inputs;
    }
}
class Transaction {
    address;
    chainId;
    transitions;
    fee;
    constructor(address, chainId, transitions, fee) {
        this.address = address;
        this.chainId = chainId;
        this.transitions = transitions;
        this.fee = fee;
    }
    static createTransaction(address, chainId, program, functionName, inputs, fee) {
        const transition = new Transition(program, functionName, inputs);
        return new Transaction(address, chainId, [transition], fee);
    }
}
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecryptPermission: () => (/* binding */ DecryptPermission),
/* harmony export */   WalletAdapterNetwork: () => (/* binding */ WalletAdapterNetwork)
/* harmony export */ });
var WalletAdapterNetwork;
(function (WalletAdapterNetwork) {
    WalletAdapterNetwork["Testnet"] = "testnet3";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));
;
var DecryptPermission;
(function (DecryptPermission) {
    DecryptPermission["NoDecrypt"] = "NO_DECRYPT";
    DecryptPermission["UponRequest"] = "DECRYPT_UPON_REQUEST";
    DecryptPermission["AutoDecrypt"] = "AUTO_DECRYPT";
    DecryptPermission["ViewKeyAccess"] = "VIEW_KEY_ACCESS"; // The App gets the View Key of the connected wallet
})(DecryptPermission || (DecryptPermission = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/***/ ((module) => {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./adapter.ts":
/*!********************!*\
  !*** ./adapter.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeoWalletAdapter: () => (/* binding */ LeoWalletAdapter),
/* harmony export */   LeoWalletName: () => (/* binding */ LeoWalletName)
/* harmony export */ });
/* harmony import */ var _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @demox-labs/aleo-wallet-adapter-base */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js");

const LeoWalletName = 'Leo Wallet';
class LeoWalletAdapter extends _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseMessageSignerWalletAdapter {
    name = LeoWalletName;
    url = 'https://leo.app/download';
    icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII=';
    supportedTransactionVersions = null;
    _connecting;
    _wallet;
    _publicKey;
    _decryptPermission;
    _viewKey;
    _readyState = typeof window === 'undefined' || typeof document === 'undefined'
        ? _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Unsupported
        : _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.NotDetected;
    constructor({ appName = 'sample' } = {}) {
        super();
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        this._decryptPermission = _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt;
        this._viewKey = null;
        if (this._readyState !== _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Unsupported) {
            (0,_demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy)(() => {
                if (window?.leoWallet || window?.leo) {
                    this._readyState = _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    return true;
                }
                return false;
            });
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get viewKey() {
        return this._viewKey;
    }
    get decryptPermission() {
        return this._decryptPermission;
    }
    get connecting() {
        return this._connecting;
    }
    get readyState() {
        return this._readyState;
    }
    set readyState(readyState) {
        this._readyState = readyState;
    }
    async decrypt(cipherText, tpk, programId, functionName, index) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            switch (this._decryptPermission) {
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt:
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionNotAllowedError();
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.UponRequest:
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.AutoDecrypt:
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.ViewKeyAccess:
                    {
                        try {
                            const text = await wallet.decrypt(cipherText, tpk, programId, functionName, index);
                            return text.text;
                        }
                        catch (error) {
                            throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionError(error?.message, error);
                        }
                    }
                default:
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionError();
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestRecords(program) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestRecords(program);
                return result.records;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletRecordsError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestTransaction(transaction) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestTransaction(transaction);
                return result.transactionId;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestBulkTransactions(transactions) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestBulkTransactions(transactions);
                return result.transactionIds;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestDeploy(deployment) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestDeploy(deployment);
                return result.transactionId;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async transactionStatus(transactionId) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.transactionStatus(transactionId);
                return result.status;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async connect(decryptPermission, network) {
        try {
            if (this.connected || this.connecting)
                return;
            if (this._readyState !== _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotReadyError();
            this._connecting = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.leoWallet || window.leo;
            try {
                await wallet.connect(decryptPermission, network);
                if (!wallet?.publicKey) {
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError();
                }
                this._publicKey = wallet.publicKey;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(error?.message, error);
            }
            this._wallet = wallet;
            this._decryptPermission = decryptPermission;
            this._viewKey = this._viewKey;
            this.emit('connect', this._publicKey);
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
        finally {
            this._connecting = false;
        }
    }
    async disconnect() {
        const wallet = this._wallet;
        if (wallet) {
            // wallet.off('disconnect', this._disconnected);
            this._wallet = null;
            this._publicKey = null;
            try {
                await wallet.disconnect();
            }
            catch (error) {
                this.emit('error', new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(error?.message, error));
            }
        }
        this.emit('disconnect');
    }
    async signMessage(message) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const signature = await wallet.signMessage(message);
                return signature.signature;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestViewKey() {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const viewKey = await wallet.requestViewKey();
                return viewKey.viewKey;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletRequestViewKeyError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeoWalletAdapter: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.LeoWalletAdapter),
/* harmony export */   LeoWalletName: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.LeoWalletName)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./adapter.ts");


var __webpack_exports__LeoWalletAdapter = __webpack_exports__.LeoWalletAdapter;
var __webpack_exports__LeoWalletName = __webpack_exports__.LeoWalletName;
export { __webpack_exports__LeoWalletAdapter as LeoWalletAdapter, __webpack_exports__LeoWalletName as LeoWalletName };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsTUFBTSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUMxQjtZQUFDLE9BQU8sS0FBVSxFQUFFO2dCQUNqQixNQUFNLElBQUksMkZBQXlCLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5RDtTQUNKO1FBQUMsT0FBTyxLQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUIsTUFBTSxLQUFLLENBQUM7U0FDZjtJQUNMLENBQUM7Q0FDSjs7Ozs7OztTQ3RURDtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC9hZGFwdGVyLmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vbm9kZV9tb2R1bGVzL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9kaXN0L2RlcGxveW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3QvZXJyb3JzLmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vbm9kZV9tb2R1bGVzL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vbm9kZV9tb2R1bGVzL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9kaXN0L3NpZ25lci5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC90cmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC90eXBlcy5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vYWRhcHRlci50cyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xuLyoqXG4gKiBBIHdhbGxldCdzIHJlYWRpbmVzcyBkZXNjcmliZXMgYSBzZXJpZXMgb2Ygc3RhdGVzIHRoYXQgdGhlIHdhbGxldCBjYW4gYmUgaW4sXG4gKiBkZXBlbmRpbmcgb24gd2hhdCBraW5kIG9mIHdhbGxldCBpdCBpcy4gQW4gaW5zdGFsbGFibGUgd2FsbGV0IChlZy4gYSBicm93c2VyXG4gKiBleHRlbnNpb24gbGlrZSBQaGFudG9tKSBtaWdodCBiZSBgSW5zdGFsbGVkYCBpZiB3ZSd2ZSBmb3VuZCB0aGUgUGhhbnRvbSBBUElcbiAqIGluIHRoZSBnbG9iYWwgc2NvcGUsIG9yIGBOb3REZXRlY3RlZGAgb3RoZXJ3aXNlLiBBIGxvYWRhYmxlLCB6ZXJvLWluc3RhbGxcbiAqIHJ1bnRpbWUgKGVnLiBUb3J1cyBXYWxsZXQpIG1pZ2h0IHNpbXBseSBzaWduYWwgdGhhdCBpdCdzIGBMb2FkYWJsZWAuIFVzZSB0aGlzXG4gKiBtZXRhZGF0YSB0byBwZXJzb25hbGl6ZSB0aGUgd2FsbGV0IGxpc3QgZm9yIGVhY2ggdXNlciAoZWcuIHRvIHNob3cgdGhlaXJcbiAqIGluc3RhbGxlZCB3YWxsZXRzIGZpcnN0KS5cbiAqL1xuZXhwb3J0IHZhciBXYWxsZXRSZWFkeVN0YXRlO1xuKGZ1bmN0aW9uIChXYWxsZXRSZWFkeVN0YXRlKSB7XG4gICAgLyoqXG4gICAgICogVXNlci1pbnN0YWxsYWJsZSB3YWxsZXRzIGNhbiB0eXBpY2FsbHkgYmUgZGV0ZWN0ZWQgYnkgc2Nhbm5pbmcgZm9yIGFuIEFQSVxuICAgICAqIHRoYXQgdGhleSd2ZSBpbmplY3RlZCBpbnRvIHRoZSBnbG9iYWwgY29udGV4dC4gSWYgc3VjaCBhbiBBUEkgaXMgcHJlc2VudCxcbiAgICAgKiB3ZSBjb25zaWRlciB0aGUgd2FsbGV0IHRvIGhhdmUgYmVlbiBpbnN0YWxsZWQuXG4gICAgICovXG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIkluc3RhbGxlZFwiXSA9IFwiSW5zdGFsbGVkXCI7XG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIk5vdERldGVjdGVkXCJdID0gXCJOb3REZXRlY3RlZFwiO1xuICAgIC8qKlxuICAgICAqIExvYWRhYmxlIHdhbGxldHMgYXJlIGFsd2F5cyBhdmFpbGFibGUgdG8geW91LiBTaW5jZSB5b3UgY2FuIGxvYWQgdGhlbSBhdFxuICAgICAqIGFueSB0aW1lLCBpdCdzIG1lYW5pbmdsZXNzIHRvIHNheSB0aGF0IHRoZXkgaGF2ZSBiZWVuIGRldGVjdGVkLlxuICAgICAqL1xuICAgIFdhbGxldFJlYWR5U3RhdGVbXCJMb2FkYWJsZVwiXSA9IFwiTG9hZGFibGVcIjtcbiAgICAvKipcbiAgICAgKiBJZiBhIHdhbGxldCBpcyBub3Qgc3VwcG9ydGVkIG9uIGEgZ2l2ZW4gcGxhdGZvcm0gKGVnLiBzZXJ2ZXItcmVuZGVyaW5nLCBvclxuICAgICAqIG1vYmlsZSkgdGhlbiBpdCB3aWxsIHN0YXkgaW4gdGhlIGBVbnN1cHBvcnRlZGAgc3RhdGUuXG4gICAgICovXG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIlVuc3VwcG9ydGVkXCJdID0gXCJVbnN1cHBvcnRlZFwiO1xufSkoV2FsbGV0UmVhZHlTdGF0ZSB8fCAoV2FsbGV0UmVhZHlTdGF0ZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgQmFzZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucHVibGljS2V5O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzY29wZVBvbGxpbmdEZXRlY3Rpb25TdHJhdGVneShkZXRlY3QpIHtcbiAgICAvLyBFYXJseSByZXR1cm4gd2hlbiBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRpc3Bvc2VycyA9IFtdO1xuICAgIGZ1bmN0aW9uIGRldGVjdEFuZERpc3Bvc2UoKSB7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkID0gZGV0ZWN0KCk7XG4gICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXNwb3NlIG9mIGRpc3Bvc2Vycykge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTdHJhdGVneSAjMTogVHJ5IGRldGVjdGluZyBldmVyeSBzZWNvbmQuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBcbiAgICAvLyBUT0RPOiAjMzM0IFJlcGxhY2Ugd2l0aCBpZGxlIGNhbGxiYWNrIHN0cmF0ZWd5LlxuICAgIHNldEludGVydmFsKGRldGVjdEFuZERpc3Bvc2UsIDEwMDApO1xuICAgIGRpc3Bvc2Vycy5wdXNoKCgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpKTtcbiAgICAvLyBTdHJhdGVneSAjMjogRGV0ZWN0IGFzIHNvb24gYXMgdGhlIERPTSBiZWNvbWVzICdyZWFkeScvJ2ludGVyYWN0aXZlJy5cbiAgICBpZiAoXG4gICAgLy8gSW1wbGllcyB0aGF0IGBET01Db250ZW50TG9hZGVkYCBoYXMgbm90IHlldCBmaXJlZC5cbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRldGVjdEFuZERpc3Bvc2UsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgZGlzcG9zZXJzLnB1c2goKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRldGVjdEFuZERpc3Bvc2UpKTtcbiAgICB9XG4gICAgLy8gU3RyYXRlZ3kgIzM6IERldGVjdCBhZnRlciB0aGUgYHdpbmRvd2AgaGFzIGZ1bGx5IGxvYWRlZC5cbiAgICBpZiAoXG4gICAgLy8gSWYgdGhlIGBjb21wbGV0ZWAgc3RhdGUgaGFzIGJlZW4gcmVhY2hlZCwgd2UncmUgdG9vIGxhdGUuXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRldGVjdEFuZERpc3Bvc2UsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgZGlzcG9zZXJzLnB1c2goKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkZXRlY3RBbmREaXNwb3NlKSk7XG4gICAgfVxuICAgIC8vIFN0cmF0ZWd5ICM0OiBEZXRlY3Qgc3luY2hyb25vdXNseSwgbm93LlxuICAgIGRldGVjdEFuZERpc3Bvc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiZXhwb3J0IGNsYXNzIERlcGxveW1lbnQge1xuICAgIGFkZHJlc3M7XG4gICAgY2hhaW5JZDtcbiAgICBwcm9ncmFtO1xuICAgIGZlZTtcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzLCBjaGFpbklkLCBwcm9ncmFtLCBmZWUpIHtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5jaGFpbklkID0gY2hhaW5JZDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5mZWUgPSBmZWU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVwbG95bWVudC5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZXJyb3I7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0TG9hZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0TG9hZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25maWdFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldENvbmZpZ0Vycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRDb25uZWN0aW9uRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXROb3RTZWxlY3RlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldERpc2Nvbm5lY3RlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldEFjY291bnRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldEFjY291bnRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0UHVibGljS2V5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRQdWJsaWNLZXlFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0S2V5cGFpckVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0S2V5cGFpckVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTaWduTWVzc2FnZUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0UmVxdWVzdFZpZXdLZXlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFJlcXVlc3RWaWV3S2V5RXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldFRpbWVvdXRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFRpbWVvdXRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0V2luZG93QmxvY2tlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFdpbmRvd0Nsb3NlZEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREZWNyeXB0aW9uTm90QWxsb3dlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGVjcnlwdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGVjcnlwdGlvbkVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRSZWNvcmRzRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRSZWNvcmRzRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldFRyYW5zYWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRUcmFuc2FjdGlvbkVycm9yJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWduZXInO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZGVwbG95bWVudCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlV2FsbGV0QWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcic7XG5leHBvcnQgY2xhc3MgQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlV2FsbGV0QWRhcHRlciB7XG59XG5leHBvcnQgY2xhc3MgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmVyLmpzLm1hcCIsImV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgICBwcm9ncmFtO1xuICAgIGZ1bmN0aW9uTmFtZTtcbiAgICBpbnB1dHM7XG4gICAgY29uc3RydWN0b3IocHJvZ3JhbSwgZnVuY3Rpb25OYW1lLCBpbnB1dHMpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBmdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuaW5wdXRzID0gaW5wdXRzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiB7XG4gICAgYWRkcmVzcztcbiAgICBjaGFpbklkO1xuICAgIHRyYW5zaXRpb25zO1xuICAgIGZlZTtcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzLCBjaGFpbklkLCB0cmFuc2l0aW9ucywgZmVlKSB7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMgPSB0cmFuc2l0aW9ucztcbiAgICAgICAgdGhpcy5mZWUgPSBmZWU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVUcmFuc2FjdGlvbihhZGRyZXNzLCBjaGFpbklkLCBwcm9ncmFtLCBmdW5jdGlvbk5hbWUsIGlucHV0cywgZmVlKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwcm9ncmFtLCBmdW5jdGlvbk5hbWUsIGlucHV0cyk7XG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24oYWRkcmVzcywgY2hhaW5JZCwgW3RyYW5zaXRpb25dLCBmZWUpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zYWN0aW9uLmpzLm1hcCIsImV4cG9ydCB2YXIgV2FsbGV0QWRhcHRlck5ldHdvcms7XG4oZnVuY3Rpb24gKFdhbGxldEFkYXB0ZXJOZXR3b3JrKSB7XG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmtbXCJUZXN0bmV0XCJdID0gXCJ0ZXN0bmV0M1wiO1xufSkoV2FsbGV0QWRhcHRlck5ldHdvcmsgfHwgKFdhbGxldEFkYXB0ZXJOZXR3b3JrID0ge30pKTtcbjtcbmV4cG9ydCB2YXIgRGVjcnlwdFBlcm1pc3Npb247XG4oZnVuY3Rpb24gKERlY3J5cHRQZXJtaXNzaW9uKSB7XG4gICAgRGVjcnlwdFBlcm1pc3Npb25bXCJOb0RlY3J5cHRcIl0gPSBcIk5PX0RFQ1JZUFRcIjtcbiAgICBEZWNyeXB0UGVybWlzc2lvbltcIlVwb25SZXF1ZXN0XCJdID0gXCJERUNSWVBUX1VQT05fUkVRVUVTVFwiO1xuICAgIERlY3J5cHRQZXJtaXNzaW9uW1wiQXV0b0RlY3J5cHRcIl0gPSBcIkFVVE9fREVDUllQVFwiO1xuICAgIERlY3J5cHRQZXJtaXNzaW9uW1wiVmlld0tleUFjY2Vzc1wiXSA9IFwiVklFV19LRVlfQUNDRVNTXCI7IC8vIFRoZSBBcHAgZ2V0cyB0aGUgVmlldyBLZXkgb2YgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbn0pKERlY3J5cHRQZXJtaXNzaW9uIHx8IChEZWNyeXB0UGVybWlzc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCJpbXBvcnQge1xuICAgIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlcixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgc2NvcGVQb2xsaW5nRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgV2FsbGV0QWNjb3VudEVycm9yLFxuICAgIFdhbGxldENvbm5lY3Rpb25FcnJvcixcbiAgICBXYWxsZXRSZXF1ZXN0Vmlld0tleUVycm9yLFxuICAgIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvcixcbiAgICBXYWxsZXROYW1lLFxuICAgIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLFxuICAgIFdhbGxldE5vdFJlYWR5RXJyb3IsXG4gICAgV2FsbGV0UmVhZHlTdGF0ZSxcbiAgICBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcixcbiAgICBXYWxsZXREZWNyeXB0aW9uTm90QWxsb3dlZEVycm9yLFxuICAgIFdhbGxldERlY3J5cHRpb25FcnJvcixcbiAgICBXYWxsZXRSZWNvcmRzRXJyb3IsXG4gICAgRGVjcnlwdFBlcm1pc3Npb24sXG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmssXG4gICAgQWxlb1RyYW5zYWN0aW9uLFxuICAgIEFsZW9EZXBsb3ltZW50LFxuICAgIFdhbGxldFRyYW5zYWN0aW9uRXJyb3IsXG59IGZyb20gJ0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVvV2FsbGV0RXZlbnRzIHtcbiAgICBjb25uZWN0KC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd247XG4gICAgZGlzY29ubmVjdCguLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlb1dhbGxldCBleHRlbmRzIEV2ZW50RW1pdHRlcjxMZW9XYWxsZXRFdmVudHM+IHtcbiAgICBwdWJsaWNLZXk/OiBzdHJpbmc7XG4gICAgdmlld0tleT86IHN0cmluZztcbiAgICBzaWduTWVzc2FnZShtZXNzYWdlOiBVaW50OEFycmF5KTogUHJvbWlzZTx7IHNpZ25hdHVyZTogVWludDhBcnJheSB9PjtcbiAgICByZXF1ZXN0Vmlld0tleSgpOiBQcm9taXNlPHsgdmlld0tleTogc3RyaW5nIH0+O1xuICAgIGRlY3J5cHQoY2lwaGVyVGV4dDogc3RyaW5nLCB0cGs/OiBzdHJpbmcsIHByb2dyYW1JZD86IHN0cmluZywgZnVuY3Rpb25OYW1lPzogc3RyaW5nLCBpbmRleD86IG51bWJlcik6IFByb21pc2U8eyB0ZXh0OiBzdHJpbmcgfT4sXG4gICAgcmVxdWVzdFJlY29yZHMocHJvZ3JhbTogc3RyaW5nKTogUHJvbWlzZTx7IHJlY29yZHM6IGFueVtdIH0+LFxuICAgIHJlcXVlc3RUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogQWxlb1RyYW5zYWN0aW9uKTogUHJvbWlzZTx7IHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmd9PixcbiAgICByZXF1ZXN0QnVsa1RyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnM6IEFsZW9UcmFuc2FjdGlvbltdKTogUHJvbWlzZTx7IHRyYW5zYWN0aW9uSWRzPzogc3RyaW5nW10gfT4sXG4gICAgcmVxdWVzdERlcGxveShkZXBsb3ltZW50OiBBbGVvRGVwbG95bWVudCk6IFByb21pc2U8eyB0cmFuc2FjdGlvbklkPzogc3RyaW5nfT4sXG4gICAgdHJhbnNhY3Rpb25TdGF0dXModHJhbnNhY3Rpb25JZDogc3RyaW5nKTogUHJvbWlzZTx7IHN0YXR1czogc3RyaW5nIH0+LFxuICAgIGNvbm5lY3QoZGVjcnlwdFBlcm1pc3Npb246IERlY3J5cHRQZXJtaXNzaW9uLCBuZXR3b3JrOiBXYWxsZXRBZGFwdGVyTmV0d29yayk6IFByb21pc2U8dm9pZD47XG4gICAgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlb1dpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gICAgbGVvV2FsbGV0PzogTGVvV2FsbGV0O1xuICAgIGxlbz86IExlb1dhbGxldDtcbn1cblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IExlb1dpbmRvdztcblxuZXhwb3J0IGludGVyZmFjZSBMZW9XYWxsZXRBZGFwdGVyQ29uZmlnIHtcbiAgICBhcHBOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBMZW9XYWxsZXROYW1lID0gJ0xlbyBXYWxsZXQnIGFzIFdhbGxldE5hbWU8J0xlbyBXYWxsZXQnPjtcblxuZXhwb3J0IGNsYXNzIExlb1dhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIge1xuICAgIG5hbWUgPSBMZW9XYWxsZXROYW1lO1xuICAgIHVybCA9ICdodHRwczovL2xlby5hcHAvZG93bmxvYWQnO1xuICAgIGljb24gPVxuICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FJQUFBQk1YUGFjQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURrdU1DMWpNREF3SURjNUxqRTNNV015TjJaaFlpd2dNakF5TWk4d09DOHhOaTB5TWpvek5UbzBNU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREkwTGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSkVSakkxTjBNM05VRkVSakV4UlVRNE9Ua3lSRGt3TmpRd09ERkdNalV3SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pKRVJqSTFOME00TlVGRVJqRXhSVVE0T1RreVJEa3dOalF3T0RGR01qVXdJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TWtSR01qVTNRelUxUVVSR01URkZSRGc1T1RKRU9UQTJOREE0TVVZeU5UQWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNa1JHTWpVM1F6WTFRVVJHTVRGRlJEZzVPVEpFT1RBMk5EQTRNVVl5TlRBaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N1p5TTU5QUFBQ3owbEVRVlI0MnV6ZFQydlRZQURIOGQrVHBvM29ZZXBoNGc0aUU2Ym9aVjY4aWRLRGlIajFzcHQ3QllMNERnVGZnS0RnVGR4WnI0SlhENExDUk1HTGdodFVHUGdIcGJXbWFSdVRzV09UT3Bma3laNSt2K3hXbHJUNWRFK2V3SlBGckxSamtiMDhEZ0VBQUJBQUFCQUFBRkQxK1RtdnhiRkdRNVZ4bWRCb3lNdW1UM1k2ZHVqaXhQZGx6TzRCa3FQdk56Vi9QTytYLzd2dUwvVzZrN2VjN1Bmb3ZJTEFIWUFmM3pRSU13OWpKc0J3cUdNTHV2Y29CU3k4dFlkNnRxYURoeWE4RkEyMGVrdkxGOXdCdUh0Yjc5OG9PTEQ3SVNoQmF3VjVZOFZlaHFDY21zMzBqOCtkMDZ5M2g1UHdlRnpLZTRwakN6dTFWZjZIWlJiRU5CUUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQW1nR0FyR1dVVHViWDdRMDFmRDEvcXZWWFUxYjBGVnMwMEtrenVuZ0ZnTzExdXk5ZmFEU3FkS2Y5bnRyWEFiQTNCQmxqYmR6akpNeEpHQUFDQUFBQ1lEYXI0elEwdVN3cTR6WXg0Nm5WQW1CYXcwZzNWclY0dXZndGIzWDA1TUhPckIrQXpKTHYvdGxsblR0Zi9KYS9iTzRBY0E2WTBpQXNaYlBoSDA3Q0JBQUFCQUFBQkFBQUJBQUFCQUFBQUJBQUFCQUFBQkFBQUJBQUFCQUFBQkFBQUJBQUFGaXBwTWRuTkZ0MUJLamQybEJqMGtXY2M0Y0xmbnFUa1RvYkFQemI5L1R4L1JKMUFaaGVlYmRvQTdCZkR4T3pJQUFJQUFBSUFPZXlNd3VLSXZWL3k2dDJ0bU84T3Y0cktEc0FpMHU2ZExYU3c1Rlk5N3I2OEJhQTdTNWZTMzhxcnJPaE96ZHJkNTB4UStlQWt1NStCWUJaRUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUd3cndCY3VsdW9ucC9GeTMvSGpZWkQzN1hjejJJOE8vQm1wVDM1bnNRNFZoRG81Skk3ZndSaFg1OC9UbjVwUE5iY0VTMmNLR1cvbTUvU2hkbGVCckNmNHhhR2V2ZmFvU0VvK3pGV3lkSDUrVjFmdDByWmI3T1ZlZlNWdnp6ZDRrTmVyUXhRZ1kzeGxsa1EwMUFBQ0FBQUNBQUF5RUovQlJnQUpwaDVJUDFYRnB3QUFBQUFTVVZPUks1Q1lJST0nO1xuICAgIHJlYWRvbmx5IHN1cHBvcnRlZFRyYW5zYWN0aW9uVmVyc2lvbnMgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfY29ubmVjdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF93YWxsZXQ6IExlb1dhbGxldCB8IG51bGw7XG4gICAgcHJpdmF0ZSBfcHVibGljS2V5OiBzdHJpbmcgfCBudWxsO1xuICAgIHByaXZhdGUgX2RlY3J5cHRQZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmlld0tleTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcml2YXRlIF9yZWFkeVN0YXRlOiBXYWxsZXRSZWFkeVN0YXRlID1cbiAgICAgICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBXYWxsZXRSZWFkeVN0YXRlLlVuc3VwcG9ydGVkXG4gICAgICAgICAgICA6IFdhbGxldFJlYWR5U3RhdGUuTm90RGV0ZWN0ZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGFwcE5hbWUgPSAnc2FtcGxlJ30gOiBMZW9XYWxsZXRBZGFwdGVyQ29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICB0aGlzLl9kZWNyeXB0UGVybWlzc2lvbiA9IERlY3J5cHRQZXJtaXNzaW9uLk5vRGVjcnlwdDtcbiAgICAgICAgdGhpcy5fdmlld0tleSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Py5sZW9XYWxsZXQgfHwgd2luZG93Py5sZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdhbGxldFJlYWR5U3RhdGUuSW5zdGFsbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlYWR5U3RhdGVDaGFuZ2UnLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1YmxpY0tleTtcbiAgICB9XG5cbiAgICBnZXQgdmlld0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdLZXk7XG4gICAgfVxuXG4gICAgZ2V0IGRlY3J5cHRQZXJtaXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVjcnlwdFBlcm1pc3Npb247XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cblxuICAgIGdldCByZWFkeVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgcmVhZHlTdGF0ZShyZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY3J5cHQoY2lwaGVyVGV4dDogc3RyaW5nLCB0cGs/OiBzdHJpbmcsIHByb2dyYW1JZD86IHN0cmluZywgZnVuY3Rpb25OYW1lPzogc3RyaW5nLCBpbmRleD86IG51bWJlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fZGVjcnlwdFBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIERlY3J5cHRQZXJtaXNzaW9uLk5vRGVjcnlwdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldERlY3J5cHRpb25Ob3RBbGxvd2VkRXJyb3IoKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVjcnlwdFBlcm1pc3Npb24uVXBvblJlcXVlc3Q6XG4gICAgICAgICAgICAgICAgY2FzZSBEZWNyeXB0UGVybWlzc2lvbi5BdXRvRGVjcnlwdDpcbiAgICAgICAgICAgICAgICBjYXNlIERlY3J5cHRQZXJtaXNzaW9uLlZpZXdLZXlBY2Nlc3M6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHdhbGxldC5kZWNyeXB0KGNpcGhlclRleHQsIHRwaywgcHJvZ3JhbUlkLCBmdW5jdGlvbk5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXREZWNyeXB0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0RGVjcnlwdGlvbkVycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RSZWNvcmRzKHByb2dyYW06IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LnJlcXVlc3RSZWNvcmRzKHByb2dyYW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVjb3JkcztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0UmVjb3Jkc0Vycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogQWxlb1RyYW5zYWN0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudHJhbnNhY3Rpb25JZDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0VHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0QnVsa1RyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnM6IEFsZW9UcmFuc2FjdGlvbltdKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LnJlcXVlc3RCdWxrVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50cmFuc2FjdGlvbklkcztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0VHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0RGVwbG95KGRlcGxveW1lbnQ6IEFsZW9EZXBsb3ltZW50KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0RGVwbG95KGRlcGxveW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudHJhbnNhY3Rpb25JZDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0VHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB0cmFuc2FjdGlvblN0YXR1cyh0cmFuc2FjdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LnRyYW5zYWN0aW9uU3RhdHVzKHRyYW5zYWN0aW9uSWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3RhdHVzO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRUcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNvbm5lY3QoZGVjcnlwdFBlcm1pc3Npb246IERlY3J5cHRQZXJtaXNzaW9uLCBuZXR3b3JrOiBXYWxsZXRBZGFwdGVyTmV0d29yayk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkIHx8IHRoaXMuY29ubmVjdGluZykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IFdhbGxldFJlYWR5U3RhdGUuSW5zdGFsbGVkKSB0aHJvdyBuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHdpbmRvdy5sZW9XYWxsZXQhIHx8IHdpbmRvdy5sZW8hO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHdhbGxldC5jb25uZWN0KGRlY3J5cHRQZXJtaXNzaW9uLCBuZXR3b3JrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldD8ucHVibGljS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gd2FsbGV0LnB1YmxpY0tleSE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl93YWxsZXQgPSB3YWxsZXQ7XG4gICAgICAgICAgICB0aGlzLl9kZWNyeXB0UGVybWlzc2lvbiA9IGRlY3J5cHRQZXJtaXNzaW9uO1xuICAgICAgICAgICAgdGhpcy5fdmlld0tleSA9IHRoaXMuX3ZpZXdLZXk7XG5cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcsIHRoaXMuX3B1YmxpY0tleSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgLy8gd2FsbGV0Lm9mZignZGlzY29ubmVjdCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHdhbGxldC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG5cbiAgICBhc3luYyBzaWduTWVzc2FnZShtZXNzYWdlOiBVaW50OEFycmF5KTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHdhbGxldC5zaWduTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmF0dXJlLnNpZ25hdHVyZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFZpZXdLZXkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld0tleSA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0Vmlld0tleSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3S2V5LnZpZXdLZXk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFJlcXVlc3RWaWV3S2V5RXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==