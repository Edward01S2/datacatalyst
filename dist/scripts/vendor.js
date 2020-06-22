(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/vendor"],{

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function saferEval(expression, dataContext, additionalHelperVariables = {}) {
    return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var result; with($data) { result = ${expression} }; return result`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  function saferEvalNoReturn(expression, dataContext, additionalHelperVariables = {}) {
    // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
    // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.
    if (Object.keys(dataContext).includes(expression)) {
      let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

      if (typeof methodReference === 'function') {
        return methodReference.call(dataContext, additionalHelperVariables['$event']);
      }
    }

    return new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, type) {
    return Array.from(el.attributes).filter(isXAttr).map(attr => {
      const name = replaceAtAndColonWithStandardSyntax(attr.name);
      const typeMatch = name.match(xAttrRE);
      const valueMatch = name.match(/:([a-zA-Z\-:]+)/);
      const modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map(i => i.replace('.', '')),
        expression: attr.value
      };
    }).filter(i => {
      // If no type is passed in for filtering, bypass filter
      if (!type) return true;
      return i.type === type;
    });
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function transitionIn(el, show, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();
    const attrs = getXAttrs(el, 'transition');
    const showAttr = getXAttrs(el, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.filter(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value)).length > 0) {
      transitionClassesIn(el, attrs, show);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, forceSkip = false) {
    if (forceSkip) return hide();
    const attrs = getXAttrs(el, 'transition');
    const showAttr = getXAttrs(el, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
    } else if (attrs.filter(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value)).length > 0) {
      transitionClassesOut(el, attrs, hide);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, styleValues);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, styleValues);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, styleValues) {
    // If the user set these style values, we'll put them back when we're done with them.
    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages);
  }
  function transitionClassesIn(el, directives, showCallback) {
    const enter = (directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const enterStart = (directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const enterEnd = (directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {});
  }
  function transitionClassesOut(el, directives, hideCallback) {
    const leave = (directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const leaveStart = (directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const leaveEnd = (directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2) {
    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages);
  }
  function transition(el, stages) {
    stages.start();
    stages.during();
    requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;
      stages.show();
      requestAnimationFrame(() => {
        stages.end();
        setTimeout(() => {
          stages.hide(); // Adding an "isConnected" check, in case the callback
          // removed the element from the DOM.

          if (el.isConnected) {
            stages.cleanup();
          }
        }, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !isNaN(subject);
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfNotTemplateTag(templateEl);
    let iteratorNames = parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function warnIfNotTemplateTag(el) {
    if (el.tagName.toLowerCase() !== 'template') console.warn('Alpine: [x-for] directive should only be added to <template> tags.');
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    return component.evaluateReturnExpression(el, iteratorNames.items, extraVars);
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    if (clone.childElementCount !== 1) console.warn('Alpine: <template> tag with [x-for] encountered with multiple element roots. Make sure <template> only has a single child node.');
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      });
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      // If nested model key is undefined, set the default value to empty string.
      if (value === undefined && expression.match(/\./).length) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = el.value == value;
        }
      } else if (el.type === 'checkbox') {
        if (Array.isArray(value)) {
          // I'm purposely not using Array.includes here because it's
          // strict, and because of Numeric/String mis-casting, I
          // want the "includes" to be "fuzzy".
          let valueFound = false;
          value.forEach(val => {
            if (val == el.value) {
              valueFound = true;
            }
          });
          el.checked = valueFound;
        } else {
          el.checked = !!value;
        } // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.


        if (typeof value === 'string') {
          el.value = value;
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            classNames.split(' ').filter(Boolean).forEach(className => el.classList.add(className));
          } else {
            classNames.split(' ').filter(Boolean).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value.split(' ').filter(Boolean);
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      // If an attribute's bound value is null, undefined or false, remove the attribute
      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? el.setAttribute(attrName, attrName) : el.setAttribute(attrName, value);
      }
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./).length) {
      output = '';
    }

    el.innerText = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = resolve => {
      if (!value) {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          });
        } else {
          resolve(() => {});
        }
      } else {
        if (el.style.display !== '') {
          transitionIn(el, () => {
            show();
          });
        } // Resolve immediately, only hold up parent `x-show`s for hidin.


        resolve(() => {});
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish());
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    } // We'll push the handler onto a stack to be handled later.


    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    if (el.nodeName.toLowerCase() !== 'template') console.warn(`Alpine: [x-if] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#x-if`);
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && !elementHasAlreadyBeenAdded) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came form the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);

          if (returnValue === false) {
            e.preventDefault();
          } else {
            if (modifiers.includes('once')) {
              listenerTarget.removeEventListener(event, handler);
            }
          }
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2({}, extraVars(), {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2({}, extraVars(), {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle it's value inside the array.
        if (Array.isArray(currentValue)) {
          return event.target.checked ? currentValue.concat([event.target.value]) : currentValue.filter(i => i !== event.target.value);
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          const number = rawValue ? parseFloat(rawValue) : null;
          return isNaN(number) ? rawValue : number;
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        const number = rawValue ? parseFloat(rawValue) : null;
        return modifiers.includes('number') ? isNaN(number) ? rawValue : number : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, seedDataForCloning = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      this.unobservedData = seedDataForCloning ? seedDataForCloning : saferEval(dataExpression, {});
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !seedDataForCloning) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.getUnobservedData());
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el).length > 0) {
        el.__x_original_classes = el.getAttribute('class').split(' ');
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el) {
        // Walk through the $nextTick stack and clear it as we go.
        while (this.nextTickStack.length > 0) {
          this.nextTickStack.shift()();
        }
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(thing => {
        return new Promise(resolve => {
          thing(finish => {
            resolve(finish);
          });
        });
      }).reduce((nestedPromise, promise) => {
        return nestedPromise.then(() => {
          return promise.then(finish => finish());
        });
      }, Promise.resolve(() => {})); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el);

      if (el.type !== undefined && el.type === 'radio') {
        // If there's an x-model on a radio input, move it to end of attribute list
        // to ensure that x-bind:value (if present) is processed first.
        const modelIdx = attrs.findIndex(attr => attr.type === 'model');

        if (modelIdx > -1) {
          attrs.push(attrs.splice(modelIdx, 1)[0]);
        }
      }

      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.filter(i => i.type === 'for').length > 0) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(expression, this.$data, _objectSpread2({}, extraVars(), {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(expression, this.$data, _objectSpread2({}, extraVars(), {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const rawData = saferEval(mutations[i].target.getAttribute('x-data'), {});
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]')) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.3.5",
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime(el => {
        this.initializeComponent(el);
      });
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        el.__x = new Component(el);
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component.getUnobservedData());
      }
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Canvas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Canvas {
    constructor(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    init() {
        this.resize();
        const options = this.container.options;
        const cover = options.backgroundMask.cover;
        const color = cover.color;
        const trail = options.particles.move.trail;
        this.coverColor = Utils_1.ColorUtils.colorToRgb(color);
        this.trailFillColor = Utils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    }
    loadCanvas(canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Utils_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    }
    destroy() {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    }
    resize() {
        if (!this.element) {
            return;
        }
        this.element.width = this.size.width;
        this.element.height = this.size.height;
    }
    paint() {
        const options = this.container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.coverColor));
            }
            else {
                this.paintBase();
            }
        }
    }
    clear() {
        const options = this.container.options;
        const trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    }
    drawLinkTriangle(p1, link1, link2) {
        var _a, _b;
        const container = this.container;
        const options = container.options;
        const p2 = link1.destination;
        const p3 = link2.destination;
        const triangleOptions = p1.particlesOptions.links.triangles;
        const opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const pos3 = p3.getPosition();
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        let colorTriangle = Utils_1.ColorUtils.colorToRgb(triangleOptions.color);
        if (!colorTriangle) {
            const linksOptions = p1.particlesOptions.links;
            const linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors[linksOptions.id]
                : container.particles.linksColor;
            if (linkColor === Utils_1.Constants.randomColorValue) {
                colorTriangle = Utils_1.ColorUtils.getRandomRgbColor();
            }
            else if (linkColor === "mid") {
                const sourceColor = p1.getColor();
                const destColor = p2.getColor();
                if (sourceColor && destColor) {
                    colorTriangle = Utils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
                }
                else {
                    const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                    if (!hslColor) {
                        return;
                    }
                    colorTriangle = Utils_1.ColorUtils.hslToRgb(hslColor);
                }
            }
            else {
                colorTriangle = linkColor;
            }
        }
        const width = (_b = p1.linksWidth) !== null && _b !== void 0 ? _b : container.retina.linksWidth;
        Utils_1.CanvasUtils.drawLinkTriangle(ctx, width, pos1, pos2, pos3, options.backgroundMask.enable, colorTriangle, opacityTriangle);
    }
    drawLinkLine(p1, link) {
        var _a;
        const container = this.container;
        const options = container.options;
        const p2 = link.destination;
        let opacity = link.opacity;
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        let colorLine;
        const twinkle = p1.particlesOptions.twinkle.lines;
        if (twinkle.enable) {
            const twinkleFreq = twinkle.frequency;
            const twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
            const twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== undefined) {
                colorLine = twinkleRgb;
                opacity = twinkle.opacity;
            }
        }
        if (!colorLine) {
            const linksOptions = p1.particlesOptions.links;
            const linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors[linksOptions.id]
                : container.particles.linksColor;
            if (linkColor === Utils_1.Constants.randomColorValue) {
                colorLine = Utils_1.ColorUtils.getRandomRgbColor();
            }
            else if (linkColor === "mid") {
                const sourceColor = p1.getColor();
                const destColor = p2.getColor();
                if (sourceColor && destColor) {
                    colorLine = Utils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
                }
                else {
                    const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                    if (!hslColor) {
                        return;
                    }
                    colorLine = Utils_1.ColorUtils.hslToRgb(hslColor);
                }
            }
            else {
                colorLine = linkColor;
            }
        }
        const width = (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
        Utils_1.CanvasUtils.drawLinkLine(ctx, width, pos1, pos2, p1.particlesOptions.links.distance, container.canvas.size, p1.particlesOptions.links.warp, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.links.shadow);
    }
    drawConnectLine(p1, p2) {
        var _a;
        const lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        Utils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
    }
    drawGrabLine(particle, lineColor, opacity, mousePos) {
        var _a;
        const container = this.container;
        const ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        const beginPos = particle.getPosition();
        Utils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
    }
    drawParticle(particle, delta) {
        var _a, _b;
        const pColor = particle.getColor();
        if (pColor === undefined) {
            return;
        }
        const options = this.container.options;
        const twinkle = particle.particlesOptions.twinkle.particles;
        const twinkleFreq = twinkle.frequency;
        const twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
        const twinkling = twinkle.enable && Math.random() < twinkleFreq;
        const radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        const opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        const infectionStage = particle.infectionStage;
        const infection = options.infection;
        const infectionStages = infection.stages;
        const infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
        const infectionRgb = Utils_1.ColorUtils.colorToRgb(infectionColor);
        const color = twinkling && twinkleRgb !== undefined ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : Utils_1.ColorUtils.hslToRgb(pColor);
        const colorValue = color !== undefined ? Utils_1.ColorUtils.getStyleFromRgb(color, opacity) : undefined;
        if (!this.context || !colorValue) {
            return;
        }
        if (particle.links.length > 0) {
            this.context.save();
            for (const link of particle.links) {
                if (particle.particlesOptions.links.triangles.enable) {
                    const links = particle.links.map((l) => l.destination);
                    const vertices = link.destination.links.filter((t) => links.indexOf(t.destination) >= 0);
                    if (vertices.length) {
                        for (const vertice of vertices) {
                            this.drawLinkTriangle(particle, link, vertice);
                        }
                    }
                }
                this.drawLinkLine(particle, link);
            }
            this.context.restore();
        }
        Utils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    }
    drawPlugin(plugin, delta) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    }
    paintBase(baseColor) {
        if (this.context) {
            Utils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
        }
    }
    lineStyle(p1, p2) {
        const options = this.container.options;
        const connectOptions = options.interactivity.modes.connect;
        if (this.context) {
            return Utils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.links.opacity);
        }
    }
    initBackground() {
        const options = this.container.options;
        const background = options.background;
        const element = this.element;
        if (!element) {
            return;
        }
        const elementStyle = element.style;
        if (background.color) {
            const color = Utils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = Utils_1.ColorUtils.getStyleFromRgb(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    }
}
exports.Canvas = Canvas;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const Canvas_1 = __webpack_require__(/*! ./Canvas */ "./node_modules/tsparticles/dist/Core/Canvas.js");
const Particles_1 = __webpack_require__(/*! ./Particles */ "./node_modules/tsparticles/dist/Core/Particles.js");
const Retina_1 = __webpack_require__(/*! ./Retina */ "./node_modules/tsparticles/dist/Core/Retina.js");
const FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "./node_modules/tsparticles/dist/Core/FrameManager.js");
const Options_1 = __webpack_require__(/*! ../Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Container {
    constructor(id, sourceOptions, ...presets) {
        this.id = id;
        this.sourceOptions = sourceOptions;
        this.started = false;
        this.destroyed = false;
        this.paused = true;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.noise = {
            generate: () => {
                return {
                    angle: Math.random() * Math.PI * 2,
                    length: Math.random(),
                };
            },
            init: () => {
            },
            update: () => {
            },
        };
        this.interactivity = {
            mouse: {},
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.plugins = new Map();
        this.drawers = new Map();
        this.density = 1;
        this.options = new Options_1.Options();
        for (const preset of presets) {
            this.options.load(Utils_1.Plugins.getPreset(preset));
        }
        const shapes = Utils_1.Plugins.getSupportedShapes();
        for (const type of shapes) {
            const drawer = Utils_1.Plugins.getShapeDrawer(type);
            if (drawer) {
                this.drawers.set(type, drawer);
            }
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.eventListeners = new Utils_1.EventListeners(this);
    }
    play(force) {
        const needsUpdate = this.paused || force;
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (const [, plugin] of this.plugins) {
                if (plugin.play) {
                    plugin.play();
                }
            }
            this.lastFrameTime = performance.now();
        }
        this.draw();
    }
    pause() {
        if (this.drawAnimationFrame !== undefined) {
            Utils_1.Utils.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (this.paused) {
            return;
        }
        for (const [, plugin] of this.plugins) {
            if (plugin.pause) {
                plugin.pause();
            }
        }
        if (!this.pageHidden) {
            this.paused = true;
        }
    }
    draw() {
        this.drawAnimationFrame = Utils_1.Utils.animate((t) => { var _a; return (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.nextFrame(t); });
    }
    getAnimationStatus() {
        return !this.paused;
    }
    setNoise(noiseOrGenerator, init, update) {
        if (!noiseOrGenerator) {
            return;
        }
        if (typeof noiseOrGenerator === "function") {
            this.noise.generate = noiseOrGenerator;
            if (init) {
                this.noise.init = init;
            }
            if (update) {
                this.noise.update = update;
            }
        }
        else {
            if (noiseOrGenerator.generate) {
                this.noise.generate = noiseOrGenerator.generate;
            }
            if (noiseOrGenerator.init) {
                this.noise.init = noiseOrGenerator.init;
            }
            if (noiseOrGenerator.update) {
                this.noise.update = noiseOrGenerator.update;
            }
        }
    }
    densityAutoParticles() {
        this.initDensityFactor();
        const numberOptions = this.options.particles.number;
        const optParticlesNumber = numberOptions.value;
        const optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        const particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
        const particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    }
    destroy() {
        this.stop();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.bubble;
        delete this.repulse;
        delete this.drawer;
        delete this.eventListeners;
        for (const [, drawer] of this.drawers) {
            if (drawer.destroy) {
                drawer.destroy(this);
            }
        }
        this.drawers = new Map();
        this.destroyed = true;
    }
    exportImg(callback) {
        this.exportImage(callback);
    }
    exportImage(callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    }
    exportConfiguration() {
        return JSON.stringify(this.options, undefined, 2);
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            this.stop();
            yield this.start();
        });
    }
    stop() {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.clear();
        for (const [, plugin] of this.plugins) {
            if (plugin.stop) {
                plugin.stop();
            }
        }
        this.plugins = new Map();
        this.particles.linksColors = {};
        delete this.particles.linksColor;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.started) {
                return;
            }
            yield this.init();
            this.started = true;
            this.eventListeners.addListeners();
            for (const [, plugin] of this.plugins) {
                if (plugin.startAsync !== undefined) {
                    yield plugin.startAsync();
                }
                else if (plugin.start !== undefined) {
                    plugin.start();
                }
            }
            this.play();
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.retina.init();
            this.canvas.init();
            const availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
            for (const [id, plugin] of availablePlugins) {
                this.plugins.set(id, plugin);
            }
            for (const [, drawer] of this.drawers) {
                if (drawer.init) {
                    yield drawer.init(this);
                }
            }
            for (const [, plugin] of this.plugins) {
                if (plugin.init) {
                    plugin.init(this.options);
                }
                else if (plugin.initAsync !== undefined) {
                    yield plugin.initAsync(this.options);
                }
            }
            this.particles.init();
            this.densityAutoParticles();
        });
    }
    initDensityFactor() {
        const densityOptions = this.options.particles.number.density;
        if (!this.canvas.element || !densityOptions.enable) {
            return;
        }
        const canvas = this.canvas.element;
        const pxRatio = this.retina.pixelRatio;
        this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
    }
}
exports.Container = Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/FrameManager.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/FrameManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameManager = void 0;
class FrameManager {
    constructor(container) {
        this.container = container;
    }
    nextFrame(timestamp) {
        const container = this.container;
        const options = container.options;
        const fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;
        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / fpsLimit) {
            container.draw();
            return;
        }
        const delta = timestamp - container.lastFrameTime;
        container.lastFrameTime = timestamp;
        container.particles.draw(delta);
        if (options.particles.move.enable && container.getAnimationStatus()) {
            container.draw();
        }
    }
}
exports.FrameManager = FrameManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Loader.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const Container_1 = __webpack_require__(/*! ./Container */ "./node_modules/tsparticles/dist/Core/Container.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const tsParticlesDom = [];
class Loader {
    static dom() {
        return tsParticlesDom;
    }
    static domItem(index) {
        const dom = Loader.dom();
        const item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    }
    static loadFromArray(tagId, params, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index));
        });
    }
    static setFromArray(id, domContainer, params, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index));
        });
    }
    static load(tagId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const domContainer = document.getElementById(tagId);
            if (!domContainer) {
                return;
            }
            return this.set(tagId, domContainer, params);
        });
    }
    static set(id, domContainer, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const dom = Loader.dom();
            const oldIndex = dom.findIndex((v) => v.id === id);
            if (oldIndex >= 0) {
                const old = this.domItem(oldIndex);
                if (old && !old.destroyed) {
                    old.destroy();
                    dom.splice(oldIndex, 1);
                }
            }
            let canvasEl;
            let generatedCanvas;
            if (domContainer.tagName === "canvas") {
                canvasEl = domContainer;
                generatedCanvas = false;
            }
            else {
                const existingCanvases = domContainer.getElementsByTagName("canvas");
                if (existingCanvases.length) {
                    canvasEl = existingCanvases[0];
                    if (!canvasEl.className) {
                        canvasEl.className = Utils_1.Constants.canvasClass;
                    }
                    generatedCanvas = false;
                }
                else {
                    generatedCanvas = true;
                    canvasEl = document.createElement("canvas");
                    canvasEl.className = Utils_1.Constants.canvasClass;
                    canvasEl.style.width = "100%";
                    canvasEl.style.height = "100%";
                    domContainer.appendChild(canvasEl);
                }
            }
            const newItem = new Container_1.Container(id, params);
            if (oldIndex >= 0) {
                dom.splice(oldIndex, 0, newItem);
            }
            else {
                dom.push(newItem);
            }
            newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
            yield newItem.start();
            return newItem;
        });
    }
    static loadJSON(tagId, jsonUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(jsonUrl);
            if (response.ok) {
                const params = yield response.json();
                if (params instanceof Array) {
                    return Loader.loadFromArray(tagId, params);
                }
                else {
                    return Loader.load(tagId, params);
                }
            }
            else {
                this.fetchError(response.status);
            }
        });
    }
    static setJSON(id, domContainer, jsonUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(jsonUrl);
            if (response.ok) {
                const params = yield response.json();
                if (params instanceof Array) {
                    return Loader.setFromArray(id, domContainer, params);
                }
                else {
                    return Loader.set(id, domContainer, params);
                }
            }
            else {
                this.fetchError(response.status);
            }
        });
    }
    static setOnClickHandler(callback) {
        const dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (const domItem of dom) {
            const el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    }
    static fetchError(statusCode) {
        console.error(`Error tsParticles - fetch status: ${statusCode}`);
        console.error("Error tsParticles - File config not found");
    }
}
exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particle = void 0;
const Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "./node_modules/tsparticles/dist/Core/Particle/Updater.js");
const Particles_1 = __webpack_require__(/*! ../Options/Classes/Particles/Particles */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js");
const Shape_1 = __webpack_require__(/*! ../Options/Classes/Particles/Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Particle {
    constructor(container, position, overrideOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.container = container;
        this.fill = true;
        this.close = true;
        this.links = [];
        this.lastNoiseTime = 0;
        this.destroyed = false;
        const options = container.options;
        const particlesOptions = new Particles_1.Particles();
        particlesOptions.load(options.particles);
        if ((overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) !== undefined) {
            const shapeType = (_a = overrideOptions.shape.type) !== null && _a !== void 0 ? _a : particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            const shapeOptions = new Shape_1.Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape !== undefined) {
                const shapeData = shapeOptions.options[this.shape];
                if (shapeData !== undefined) {
                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData);
                    this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
                    this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
                }
            }
        }
        else {
            const shapeType = particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            const shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData);
                this.fill = (_g = (_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.fill) !== null && _g !== void 0 ? _g : this.fill;
                this.close = (_j = (_h = this.shapeData) === null || _h === void 0 ? void 0 : _h.close) !== null && _j !== void 0 ? _j : this.close;
            }
        }
        if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
        }
        if (((_k = this.shapeData) === null || _k === void 0 ? void 0 : _k.particles) !== undefined) {
            particlesOptions.load((_l = this.shapeData) === null || _l === void 0 ? void 0 : _l.particles);
        }
        this.particlesOptions = particlesOptions;
        const noiseDelay = this.particlesOptions.move.noise.delay;
        this.noiseDelay =
            (noiseDelay.random.enable
                ? Utils_1.Utils.randomInRange(noiseDelay.random.minimumValue, noiseDelay.value)
                : noiseDelay.value) * 1000;
        container.retina.initParticle(this);
        const color = this.particlesOptions.color;
        const sizeValue = (_m = this.sizeValue) !== null && _m !== void 0 ? _m : container.retina.sizeValue;
        const randomSize = typeof this.particlesOptions.size.random === "boolean"
            ? this.particlesOptions.size.random
            : this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined
                ? Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue)
                : sizeValue,
        };
        this.direction = this.particlesOptions.move.direction;
        this.bubble = {
            inRange: false,
        };
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction === Enums_1.RotateDirection.random) {
            const index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = Enums_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = Enums_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            switch (this.particlesOptions.size.animation.startValue) {
                case Enums_1.StartValueType.min:
                    if (!randomSize) {
                        const pxRatio = container.retina.pixelRatio;
                        this.size.value = this.particlesOptions.size.animation.minimumValue * pxRatio;
                    }
                    break;
            }
            this.size.status = Enums_1.SizeAnimationStatus.increasing;
            this.size.velocity = ((_o = this.sizeAnimationSpeed) !== null && _o !== void 0 ? _o : container.retina.sizeAnimationSpeed) / 100;
            if (!this.particlesOptions.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (this.particlesOptions.color.animation.enable) {
            this.colorVelocity = this.particlesOptions.color.animation.speed / 100;
            if (!this.particlesOptions.color.animation.sync) {
                this.colorVelocity = this.colorVelocity * Math.random();
            }
        }
        else {
            this.colorVelocity = 0;
        }
        if (this.particlesOptions.rotate.animation.enable) {
            if (!this.particlesOptions.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        this.offset = {
            x: 0,
            y: 0,
        };
        if (this.particlesOptions.collisions.enable) {
            this.checkOverlap(position);
        }
        this.color = Utils_1.ColorUtils.colorToHsl(color);
        const randomOpacity = this.particlesOptions.opacity.random;
        const opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = Enums_1.OpacityAnimationStatus.increasing;
            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
            if (!this.particlesOptions.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = this.calculateVelocity();
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = Utils_1.Plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        if (this.shape === Enums_1.ShapeType.image || this.shape === Enums_1.ShapeType.images) {
            const shape = this.particlesOptions.shape;
            const imageDrawer = drawer;
            const imagesOptions = shape.options[this.shape];
            const images = imageDrawer.getImages(container).images;
            const index = Utils_1.Utils.arrayRandomIndex(images);
            const image = images[index];
            const optionsImage = (imagesOptions instanceof Array
                ? imagesOptions.filter((t) => t.src === image.source)[0]
                : imagesOptions);
            const color = this.getColor();
            if ((image === null || image === void 0 ? void 0 : image.svgData) !== undefined && optionsImage.replaceColor && color) {
                const svgColoredData = Utils_1.Utils.replaceColorSvg(image, color, this.opacity.value);
                const svg = new Blob([svgColoredData], { type: "image/svg+xml" });
                const domUrl = window.URL || window.webkitURL || window;
                const url = domUrl.createObjectURL(svg);
                const img = new Image();
                this.image = {
                    data: image,
                    loaded: false,
                    ratio: optionsImage.width / optionsImage.height,
                    replaceColor: (_p = optionsImage.replaceColor) !== null && _p !== void 0 ? _p : optionsImage.replace_color,
                    source: optionsImage.src,
                };
                img.addEventListener("load", () => {
                    if (this.image) {
                        this.image.loaded = true;
                        image.element = img;
                    }
                    domUrl.revokeObjectURL(url);
                });
                img.addEventListener("error", () => {
                    domUrl.revokeObjectURL(url);
                    Utils_1.Utils.loadImage(optionsImage.src).then((img2) => {
                        if (this.image) {
                            image.element = img2.element;
                            this.image.loaded = true;
                        }
                    });
                });
                img.src = url;
            }
            else {
                this.image = {
                    data: image,
                    loaded: true,
                    ratio: optionsImage.width / optionsImage.height,
                    replaceColor: (_q = optionsImage.replaceColor) !== null && _q !== void 0 ? _q : optionsImage.replace_color,
                    source: optionsImage.src,
                };
            }
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_r = optionsImage.fill) !== null && _r !== void 0 ? _r : this.fill;
            this.close = (_s = optionsImage.close) !== null && _s !== void 0 ? _s : this.close;
        }
        this.stroke =
            this.particlesOptions.stroke instanceof Array
                ? Utils_1.Utils.itemFromArray(this.particlesOptions.stroke)
                : this.particlesOptions.stroke;
        this.strokeColor = Utils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = Utils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater_1.Updater(this.container, this);
    }
    update(delta) {
        this.links = [];
        this.updater.update(delta);
    }
    draw(delta) {
        var _a;
        if (((_a = this.image) === null || _a === void 0 ? void 0 : _a.loaded) === false) {
            return;
        }
        this.container.canvas.drawParticle(this, delta);
    }
    isOverlapping() {
        const container = this.container;
        let collisionFound = false;
        let iterations = 0;
        const pos1 = this.getPosition();
        for (const p2 of container.particles.array.filter((t) => t != this)) {
            iterations++;
            const pos2 = p2.getPosition();
            const dist = Utils_1.Utils.getDistance(pos1, pos2);
            if (dist <= this.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    }
    checkOverlap(position) {
        const container = this.container;
        const overlapResult = this.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            this.position.x = position ? position.x : Math.random() * container.canvas.size.width;
            this.position.y = position ? position.y : Math.random() * container.canvas.size.height;
            this.checkOverlap();
        }
    }
    startInfection(stage) {
        const container = this.container;
        const options = container.options;
        const stages = options.infection.stages;
        const stagesCount = stages.length;
        if (stage > stagesCount || stage < 0) {
            return;
        }
        this.infectionDelay = 0;
        this.infectionDelayStage = stage;
    }
    updateInfectionStage(stage) {
        const container = this.container;
        const options = container.options;
        const stagesCount = options.infection.stages.length;
        if (stage > stagesCount || stage < 0 || (this.infectionStage !== undefined && this.infectionStage > stage)) {
            return;
        }
        if (this.infectionTimeout !== undefined) {
            window.clearTimeout(this.infectionTimeout);
        }
        this.infectionStage = stage;
        this.infectionTime = 0;
    }
    updateInfection(delta) {
        const container = this.container;
        const options = container.options;
        const infection = options.infection;
        const stages = options.infection.stages;
        const stagesCount = stages.length;
        if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
            const stage = this.infectionDelayStage;
            if (stage > stagesCount || stage < 0) {
                return;
            }
            if (this.infectionDelay > infection.delay * 1000) {
                this.infectionStage = stage;
                this.infectionTime = 0;
                delete this.infectionDelay;
                delete this.infectionDelayStage;
            }
            else {
                this.infectionDelay += delta;
            }
        }
        else {
            delete this.infectionDelay;
            delete this.infectionDelayStage;
        }
        if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
            const infectionStage = stages[this.infectionStage];
            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
                if (this.infectionTime > infectionStage.duration * 1000) {
                    this.nextInfectionStage();
                }
                else {
                    this.infectionTime += delta;
                }
            }
            else {
                this.infectionTime += delta;
            }
        }
        else {
            delete this.infectionStage;
            delete this.infectionTime;
        }
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
        };
    }
    getColor() {
        var _a;
        return (_a = this.bubble.color) !== null && _a !== void 0 ? _a : this.color;
    }
    destroy() {
        this.destroyed = true;
    }
    nextInfectionStage() {
        const container = this.container;
        const options = container.options;
        const stagesCount = options.infection.stages.length;
        if (stagesCount <= 0 || this.infectionStage === undefined) {
            return;
        }
        this.infectionTime = 0;
        if (stagesCount <= ++this.infectionStage) {
            if (options.infection.cure) {
                delete this.infectionStage;
                delete this.infectionTime;
                return;
            }
            else {
                this.infectionStage = 0;
                this.infectionTime = 0;
            }
        }
    }
    calcPosition(container, position) {
        var _a, _b;
        for (const [, plugin] of container.plugins) {
            const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) {
                return Utils_1.Utils.deepExtend({}, pluginPos);
            }
        }
        const pos = {
            x: (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * container.canvas.size.width,
            y: (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * container.canvas.size.height,
        };
        const outMode = this.particlesOptions.move.outMode;
        if (Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounce) || Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounceHorizontal)) {
            if (pos.x > container.canvas.size.width - this.size.value * 2) {
                pos.x -= this.size.value;
            }
            else if (pos.x < this.size.value * 2) {
                pos.x += this.size.value;
            }
        }
        if (Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounce) || Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounceVertical)) {
            if (pos.y > container.canvas.size.height - this.size.value * 2) {
                pos.y -= this.size.value;
            }
            else if (pos.y < this.size.value * 2) {
                pos.y += this.size.value;
            }
        }
        return pos;
    }
    calculateVelocity() {
        const baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
        const res = {
            horizontal: 0,
            vertical: 0,
        };
        const moveOptions = this.particlesOptions.move;
        const rad = (Math.PI / 180) * moveOptions.angle;
        const rad45 = Math.PI / 4;
        const range = {
            left: Math.sin(rad45 + rad / 2) - Math.sin(rad45 - rad / 2),
            right: Math.cos(rad45 + rad / 2) - Math.cos(rad45 - rad / 2),
        };
        if (moveOptions.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (moveOptions.random) {
                res.horizontal += Utils_1.Utils.randomInRange(range.left, range.right) / 2;
                res.vertical += Utils_1.Utils.randomInRange(range.left, range.right) / 2;
            }
        }
        else {
            res.horizontal = baseVelocity.x + Utils_1.Utils.randomInRange(range.left, range.right) / 2;
            res.vertical = baseVelocity.y + Utils_1.Utils.randomInRange(range.left, range.right) / 2;
        }
        return res;
    }
}
exports.Particle = Particle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionManager = void 0;
const Grabber_1 = __webpack_require__(/*! ./Interactions/Mouse/Grabber */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js");
const Repulser_1 = __webpack_require__(/*! ./Interactions/Mouse/Repulser */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js");
const Bubbler_1 = __webpack_require__(/*! ./Interactions/Mouse/Bubbler */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js");
const Connector_1 = __webpack_require__(/*! ./Interactions/Mouse/Connector */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js");
const Linker_1 = __webpack_require__(/*! ./Interactions/Particles/Linker */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js");
const Attractor_1 = __webpack_require__(/*! ./Interactions/Particles/Attractor */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js");
const Collider_1 = __webpack_require__(/*! ./Interactions/Particles/Collider */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js");
const Infecter_1 = __webpack_require__(/*! ./Interactions/Particles/Infecter */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js");
class InteractionManager {
    constructor(container) {
        this.container = container;
        this.externalInteractors = [
            new Bubbler_1.Bubbler(container),
            new Connector_1.Connector(container),
            new Grabber_1.Grabber(container),
            new Repulser_1.Repulser(container),
        ];
        this.particleInteractors = [
            new Attractor_1.Attractor(container),
            new Collider_1.Collider(container),
            new Infecter_1.Infecter(container),
            new Linker_1.Linker(container),
        ];
    }
    init() {
    }
    interact(delta) {
        this.externalInteract(delta);
        this.particlesInteract(delta);
    }
    externalInteract(delta) {
        for (const interactor of this.externalInteractors) {
            if (interactor.isEnabled()) {
                interactor.interact(delta);
            }
        }
    }
    particlesInteract(delta) {
        for (const particle of this.container.particles.array) {
            for (const interactor of this.externalInteractors) {
                interactor.reset(particle);
            }
            for (const interactor of this.particleInteractors) {
                if (interactor.isEnabled(particle)) {
                    interactor.interact(particle, delta);
                }
            }
        }
    }
}
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubbler = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Bubbler {
    constructor(container) {
        this.container = container;
    }
    static calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
        if (modeValue > optionsValue) {
            const size = particleValue + (modeValue - optionsValue) * ratio;
            return Utils_1.Utils.clamp(size, particleValue, modeValue);
        }
        else if (modeValue < optionsValue) {
            const size = particleValue - (optionsValue - modeValue) * ratio;
            return Utils_1.Utils.clamp(size, modeValue, particleValue);
        }
    }
    isEnabled() {
        const container = this.container;
        const options = container.options;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        const divBubble = Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.bubble, divs);
        if (!(divBubble || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return (Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode) || divBubble);
    }
    reset(particle, force) {
        if (!particle.bubble.inRange || force) {
            delete particle.bubble.divId;
            delete particle.bubble.opacity;
            delete particle.bubble.radius;
            delete particle.bubble.color;
        }
    }
    interact() {
        const options = this.container.options;
        const events = options.interactivity.events;
        const onHover = events.onHover;
        const onClick = events.onClick;
        const hoverEnabled = onHover.enable;
        const hoverMode = onHover.mode;
        const clickEnabled = onClick.enable;
        const clickMode = onClick.mode;
        const divs = events.onDiv;
        if (hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode)) {
            this.clickBubble();
        }
        else {
            Utils_1.Utils.divModeExecute(Enums_1.DivMode.bubble, divs, (id, div) => this.singleDivHover(id, div));
        }
    }
    singleDivHover(id, div) {
        const container = this.container;
        const elem = document.getElementById(id);
        if (!elem) {
            return;
        }
        const pxRatio = container.retina.pixelRatio;
        const pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
        };
        const repulseRadius = (elem.offsetWidth / 2) * pxRatio;
        const area = div.type === Enums_1.DivType.circle
            ? new Utils_1.Circle(pos.x, pos.y, repulseRadius)
            : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
        const query = container.particles.quadTree.query(area);
        for (const particle of query.filter((t) => area.contains(t.getPosition()))) {
            particle.bubble.inRange = true;
            const divs = container.options.interactivity.modes.bubble.divs;
            const divBubble = Utils_1.Utils.divMode(divs, id);
            if (!particle.bubble.divId || particle.bubble.divId !== id) {
                this.reset(particle, true);
                particle.bubble.divId = id;
            }
            this.hoverBubbleSize(particle, 1, divBubble);
            this.hoverBubbleOpacity(particle, 1, divBubble);
            this.hoverBubbleColor(particle, divBubble);
        }
    }
    process(particle, distMouse, timeSpent, data) {
        const container = this.container;
        const bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        const options = container.options;
        const bubbleDuration = options.interactivity.modes.bubble.duration;
        const bubbleDistance = container.retina.bubbleModeDistance;
        const particlesParam = data.particlesObj.optValue;
        const pObjBubble = data.bubbleObj.value;
        const pObj = data.particlesObj.value || 0;
        const type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        const value = pObj - (timeSpent * (pObj - bubbleParam)) / bubbleDuration;
                        if (type === Enums_1.ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === Enums_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === Enums_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === Enums_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === Enums_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === Enums_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    }
    clickBubble() {
        var _a;
        const container = this.container;
        const options = container.options;
        const mouseClickPos = container.interactivity.mouse.clickPosition;
        if (mouseClickPos === undefined) {
            return;
        }
        const distance = container.retina.bubbleModeDistance;
        const query = container.particles.quadTree.query(new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, distance));
        for (const particle of query) {
            particle.bubble.inRange = true;
            const pos = particle.getPosition();
            const distMouse = Utils_1.Utils.getDistance(pos, mouseClickPos);
            const timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (container.bubble.clicking) {
                if (timeSpent > options.interactivity.modes.bubble.duration) {
                    container.bubble.durationEnd = true;
                }
                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                    container.bubble.clicking = false;
                    container.bubble.durationEnd = false;
                }
                const sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius,
                    },
                    particlesObj: {
                        optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                        value: particle.size.value,
                    },
                    type: Enums_1.ProcessBubbleType.size,
                };
                this.process(particle, distMouse, timeSpent, sizeData);
                const opacityData = {
                    bubbleObj: {
                        optValue: options.interactivity.modes.bubble.opacity,
                        value: particle.bubble.opacity,
                    },
                    particlesObj: {
                        optValue: particle.particlesOptions.opacity.value,
                        value: particle.opacity.value,
                    },
                    type: Enums_1.ProcessBubbleType.opacity,
                };
                this.process(particle, distMouse, timeSpent, opacityData);
                if (!container.bubble.durationEnd) {
                    if (distMouse <= container.retina.bubbleModeDistance) {
                        this.hoverBubbleColor(particle);
                    }
                    else {
                        delete particle.bubble.color;
                    }
                }
                else {
                    delete particle.bubble.color;
                }
            }
        }
    }
    hoverBubble() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) {
            return;
        }
        const distance = container.retina.bubbleModeDistance;
        const query = container.particles.quadTree.query(new Utils_1.Circle(mousePos.x, mousePos.y, distance));
        for (const particle of query) {
            particle.bubble.inRange = true;
            const pos = particle.getPosition();
            const distance = Utils_1.Utils.getDistance(pos, mousePos);
            const ratio = 1 - distance / container.retina.bubbleModeDistance;
            if (distance <= container.retina.bubbleModeDistance) {
                if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(particle, ratio);
                    this.hoverBubbleOpacity(particle, ratio);
                    this.hoverBubbleColor(particle);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    }
    hoverBubbleSize(particle, ratio, divBubble) {
        var _a;
        const container = this.container;
        const modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio
            : container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        const optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
        const pSize = particle.size.value;
        const size = Bubbler.calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    }
    hoverBubbleOpacity(particle, ratio, divBubble) {
        var _a;
        const options = this.container.options;
        const modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        const optOpacity = particle.particlesOptions.opacity.value;
        const pOpacity = particle.opacity.value;
        const opacity = Bubbler.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    }
    hoverBubbleColor(particle, divBubble) {
        var _a;
        const options = this.container.options;
        if (particle.bubble.color === undefined) {
            const modeColor = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.color) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            const bubbleColor = modeColor instanceof Array ? Utils_1.Utils.itemFromArray(modeColor) : modeColor;
            particle.bubble.color = Utils_1.ColorUtils.colorToHsl(bubbleColor);
        }
    }
}
exports.Bubbler = Bubbler;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class Connector {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.options.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.Utils.isInArray(Modes_1.HoverMode.connect, hoverMode);
    }
    reset() {
    }
    interact() {
        const container = this.container;
        const options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            const distance = Math.abs(container.retina.connectModeRadius);
            const query = container.particles.quadTree.query(new Utils_1.Circle(mousePos.x, mousePos.y, distance));
            let i = 0;
            for (const p1 of query) {
                const pos1 = p1.getPosition();
                for (const p2 of query.slice(i + 1)) {
                    const pos2 = p2.getPosition();
                    const distMax = Math.abs(container.retina.connectModeDistance);
                    const xDiff = Math.abs(pos1.x - pos2.x);
                    const yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    }
}
exports.Connector = Connector;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grabber = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class Grabber {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.options.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.Utils.isInArray(Modes_1.HoverMode.grab, hoverMode);
    }
    reset() {
    }
    interact() {
        var _a, _b;
        const container = this.container;
        const options = container.options;
        const interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
            const mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            const distance = container.retina.grabModeDistance;
            const query = container.particles.quadTree.query(new Utils_1.Circle(mousePos.x, mousePos.y, distance));
            for (const particle of query) {
                const pos = particle.getPosition();
                const distance = Utils_1.Utils.getDistance(pos, mousePos);
                if (distance <= container.retina.grabModeDistance) {
                    const grabLineOptions = interactivity.modes.grab.links;
                    const lineOpacity = grabLineOptions.opacity;
                    const grabDistance = container.retina.grabModeDistance;
                    const opacityLine = lineOpacity - (distance * lineOpacity) / grabDistance;
                    if (opacityLine > 0) {
                        const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.particlesOptions.links.color;
                        if (!container.particles.grabLineColor) {
                            container.particles.grabLineColor =
                                optColor === Utils_1.Constants.randomColorValue ||
                                    ((_b = optColor) === null || _b === void 0 ? void 0 : _b.value) === Utils_1.Constants.randomColorValue
                                    ? Utils_1.Constants.randomColorValue
                                    : Utils_1.ColorUtils.colorToRgb(optColor);
                        }
                        let colorLine;
                        if (container.particles.grabLineColor === Utils_1.Constants.randomColorValue) {
                            colorLine = Utils_1.ColorUtils.getRandomRgbColor();
                        }
                        else {
                            colorLine = container.particles.grabLineColor;
                        }
                        if (colorLine === undefined) {
                            return;
                        }
                        container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
                    }
                }
            }
        }
    }
}
exports.Grabber = Grabber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulser = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Repulser {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const options = container.options;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        const divBubble = Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.repulse, divs);
        if (!(divBubble || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return (Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode) || divBubble);
    }
    reset() {
    }
    interact() {
        const container = this.container;
        const options = container.options;
        const mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        const events = options.interactivity.events;
        const hoverEnabled = events.onHover.enable;
        const hoverMode = events.onHover.mode;
        const clickEnabled = events.onClick.enable;
        const clickMode = events.onClick.mode;
        const divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse();
        }
        else {
            Utils_1.Utils.divModeExecute(Enums_1.DivMode.repulse, divs, (id, div) => this.singleDivRepulse(id, div));
        }
    }
    singleDivRepulse(id, div) {
        const container = this.container;
        const elem = document.getElementById(id);
        if (!elem) {
            return;
        }
        const pxRatio = container.retina.pixelRatio;
        const pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
        };
        const repulseRadius = (elem.offsetWidth / 2) * pxRatio;
        const area = div.type === Enums_1.DivType.circle
            ? new Utils_1.Circle(pos.x, pos.y, repulseRadius)
            : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
        const divs = container.options.interactivity.modes.repulse.divs;
        const divRepulse = Utils_1.Utils.divMode(divs, id);
        this.processRepulse(pos, repulseRadius, area, divRepulse);
    }
    hoverRepulse() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
    }
    processRepulse(position, repulseRadius, area, divRepulse) {
        var _a;
        const container = this.container;
        const query = container.particles.quadTree.query(area);
        for (const particle of query) {
            const { dx, dy, distance } = Utils_1.Utils.getDistances(particle.position, position);
            const normVec = {
                x: dx / distance,
                y: dy / distance,
            };
            const velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : container.options.interactivity.modes.repulse.speed) * 100;
            const repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(distance / repulseRadius, 2)) * velocity, 0, 50);
            const outMode = particle.particlesOptions.move.outMode;
            const sizeValue = particle.size.value;
            const pos = {
                x: particle.position.x + normVec.x * repulseFactor,
                y: particle.position.y + normVec.y * repulseFactor,
            };
            if (outMode === Enums_1.OutMode.bounce ||
                outMode === Enums_1.OutMode.bounceVertical ||
                outMode === Enums_1.OutMode.bounceHorizontal) {
                const isInside = {
                    horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
                    vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height,
                };
                if (outMode === Enums_1.OutMode.bounceVertical || isInside.horizontal) {
                    particle.position.x = pos.x;
                }
                if (outMode === Enums_1.OutMode.bounceHorizontal || isInside.vertical) {
                    particle.position.y = pos.y;
                }
            }
            else {
                particle.position.x = pos.x;
                particle.position.y = pos.y;
            }
        }
    }
    clickRepulse() {
        const container = this.container;
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            const repulseDistance = container.retina.repulseModeDistance;
            const repulseRadius = Math.pow(repulseDistance / 6, 3);
            const mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            const range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
            const query = container.particles.quadTree.query(range);
            for (const particle of query) {
                const { dx, dy, distance } = Utils_1.Utils.getDistances(mouseClickPos, particle.position);
                const d = distance * distance;
                const velocity = container.options.interactivity.modes.repulse.speed;
                const force = (-repulseRadius * velocity) / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    this.processClickRepulse(particle, dx, dy, force);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (const particle of container.repulse.particles) {
                particle.velocity.horizontal = particle.initialVelocity.horizontal;
                particle.velocity.vertical = particle.initialVelocity.vertical;
            }
            container.repulse.particles = [];
        }
    }
    processClickRepulse(particle, dx, dy, force) {
        const container = this.container;
        const options = container.options;
        const f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        const outMode = options.particles.move.outMode;
        if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceHorizontal || outMode === Enums_1.OutMode.bounceVertical) {
            const pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== Enums_1.OutMode.bounceVertical) {
                if (pos.x + particle.size.value > container.canvas.size.width || pos.x - particle.size.value < 0) {
                    particle.velocity.horizontal *= -1;
                }
            }
            if (outMode !== Enums_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.size.value > container.canvas.size.height || pos.y - particle.size.value < 0) {
                    particle.velocity.vertical *= -1;
                }
            }
        }
    }
}
exports.Repulser = Repulser;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attractor = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Attractor {
    constructor(container) {
        this.container = container;
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const options = container.options;
        const distance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, distance));
        for (const p2 of query) {
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            const pos2 = p2.getPosition();
            const { dx, dy } = Utils_1.Utils.getDistances(pos1, pos2);
            const rotate = options.particles.move.attract.rotate;
            const ax = dx / (rotate.x * 1000);
            const ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    }
    isEnabled(particle) {
        return particle.particlesOptions.move.attract.enable;
    }
    reset() {
    }
}
exports.Attractor = Attractor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Collider {
    constructor(container) {
        this.container = container;
    }
    static rotate(velocity, angle) {
        return {
            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
        };
    }
    static collisionVelocity(v1, v2, m1, m2) {
        return {
            horizontal: (v1.horizontal * (m1 - m2)) / (m1 + m2) + (v2.horizontal * 2 * m2) / (m1 + m2),
            vertical: v1.vertical,
        };
    }
    static bounce(p1, p2) {
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
        const yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
        const xDist = pos2.x - pos1.x;
        const yDist = pos2.y - pos1.y;
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
            const m1 = p1.size.value;
            const m2 = p2.size.value;
            const u1 = Collider.rotate(p1.velocity, angle);
            const u2 = Collider.rotate(p2.velocity, angle);
            const v1 = Collider.collisionVelocity(u1, u2, m1, m2);
            const v2 = Collider.collisionVelocity(u2, u1, m1, m2);
            const vFinal1 = Collider.rotate(v1, -angle);
            const vFinal2 = Collider.rotate(v2, -angle);
            p1.velocity.horizontal = vFinal1.horizontal;
            p1.velocity.vertical = vFinal1.vertical;
            p2.velocity.horizontal = vFinal2.horizontal;
            p2.velocity.vertical = vFinal2.vertical;
        }
    }
    static destroy(p1, p2) {
        if (p1.size.value === undefined && p2.size.value !== undefined) {
            p1.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value === undefined) {
            p2.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value !== undefined) {
            if (p1.size.value >= p2.size.value) {
                p2.destroy();
            }
            else {
                p1.destroy();
            }
        }
    }
    static getRadius(particle, fallback) {
        return particle.bubble.radius || particle.size.value || fallback;
    }
    isEnabled(particle) {
        return particle.particlesOptions.collisions.enable;
    }
    reset() {
    }
    interact(p1) {
        const container = this.container;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, p1.size.value * 2));
        for (const p2 of query) {
            if (p1 === p2 ||
                !p2.particlesOptions.collisions.enable ||
                p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
                continue;
            }
            const pos2 = p2.getPosition();
            const dist = Utils_1.Utils.getDistance(pos1, pos2);
            const defaultSize = container.retina.sizeValue;
            const radius1 = Collider.getRadius(p1, defaultSize);
            const radius2 = Collider.getRadius(p2, defaultSize);
            const distP = radius1 + radius2;
            if (dist <= distP) {
                this.resolveCollision(p1, p2);
            }
        }
    }
    resolveCollision(p1, p2) {
        switch (p1.particlesOptions.collisions.mode) {
            case Enums_1.CollisionMode.absorb: {
                this.absorb(p1, p2);
                break;
            }
            case Enums_1.CollisionMode.bounce: {
                Collider.bounce(p1, p2);
                break;
            }
            case Enums_1.CollisionMode.destroy: {
                Collider.destroy(p1, p2);
                break;
            }
        }
    }
    absorb(p1, p2) {
        const container = this.container;
        const fps = container.options.fpsLimit / 1000;
        if (p1.size.value === undefined && p2.size.value !== undefined) {
            p1.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value === undefined) {
            p2.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value !== undefined) {
            if (p1.size.value >= p2.size.value) {
                const factor = Utils_1.Utils.clamp(p1.size.value / p2.size.value, 0, p2.size.value) * fps;
                p1.size.value += factor;
                p2.size.value -= factor;
                if (p2.size.value <= container.retina.pixelRatio) {
                    p2.size.value = 0;
                    p2.destroy();
                }
            }
            else {
                const factor = Utils_1.Utils.clamp(p2.size.value / p1.size.value, 0, p1.size.value) * fps;
                p1.size.value -= factor;
                p2.size.value += factor;
                if (p1.size.value <= container.retina.pixelRatio) {
                    p1.size.value = 0;
                    p1.destroy();
                }
            }
        }
    }
}
exports.Collider = Collider;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infecter = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Infecter {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        return this.container.options.infection.enable;
    }
    reset() {
    }
    interact(p1, delta) {
        var _a, _b;
        p1.updateInfection(delta);
        if (p1.infectionStage === undefined) {
            return;
        }
        const container = this.container;
        const options = container.options;
        const infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        const infectionStage1 = infectionOptions.stages[p1.infectionStage];
        const pxRatio = container.retina.pixelRatio;
        const radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
        const pos = p1.getPosition();
        const infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infectionStage;
        const query = container.particles.quadTree
            .query(new Utils_1.Circle(pos.x, pos.y, radius))
            .filter((t) => t.infectionStage === undefined || t.infectionStage !== p1.infectionStage);
        const infections = infectionStage1.rate;
        const neighbors = query.length;
        for (const p2 of query) {
            if (Math.random() < infections / neighbors) {
                if (p2.infectionStage === undefined) {
                    p2.startInfection(infectedStage1);
                }
                else if (p2.infectionStage < p1.infectionStage) {
                    p2.updateInfectionStage(infectedStage1);
                }
                else if (p2.infectionStage > p1.infectionStage) {
                    const infectionStage2 = infectionOptions.stages[p2.infectionStage];
                    const infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : p2.infectionStage;
                    p1.updateInfectionStage(infectedStage2);
                }
            }
        }
    }
}
exports.Infecter = Infecter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Linker = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Linker {
    constructor(container) {
        this.container = container;
    }
    isEnabled(particle) {
        return particle.particlesOptions.links.enable;
    }
    reset() {
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const linkOpt1 = p1.particlesOptions.links;
        const optOpacity = linkOpt1.opacity;
        const optDistance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const canvasSize = container.canvas.size;
        const warp = linkOpt1.warp;
        const pos1 = p1.getPosition();
        const range = warp
            ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize)
            : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
        const query = container.particles.quadTree.query(range);
        for (const p2 of query) {
            const linkOpt2 = p2.particlesOptions.links;
            if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id) {
                continue;
            }
            const pos2 = p2.getPosition();
            let distance = Utils_1.Utils.getDistance(pos1, pos2);
            if (warp) {
                if (distance > optDistance) {
                    const pos2NE = {
                        x: pos2.x - canvasSize.width,
                        y: pos2.y,
                    };
                    distance = Utils_1.Utils.getDistance(pos1, pos2NE);
                    if (distance > optDistance) {
                        const pos2SE = {
                            x: pos2.x - canvasSize.width,
                            y: pos2.y - canvasSize.height,
                        };
                        distance = Utils_1.Utils.getDistance(pos1, pos2SE);
                        if (distance > optDistance) {
                            const pos2SW = {
                                x: pos2.x,
                                y: pos2.y - canvasSize.height,
                            };
                            distance = Utils_1.Utils.getDistance(pos1, pos2SW);
                        }
                    }
                }
            }
            if (distance > optDistance) {
                return;
            }
            const opacityLine = optOpacity - (distance * optOpacity) / optDistance;
            if (opacityLine > 0) {
                const linksOptions = p1.particlesOptions.links;
                let linkColor = linksOptions.id !== undefined
                    ? container.particles.linksColors[linksOptions.id]
                    : container.particles.linksColor;
                if (!linkColor) {
                    const optColor = linksOptions.color;
                    const color = typeof optColor === "string" ? optColor : optColor.value;
                    if (color === Utils_1.Constants.randomColorValue) {
                        if (linksOptions.consent) {
                            linkColor = Utils_1.ColorUtils.colorToRgb({
                                value: color,
                            });
                        }
                        else if (linksOptions.blink) {
                            linkColor = Utils_1.Constants.randomColorValue;
                        }
                        else {
                            linkColor = Utils_1.Constants.midColorValue;
                        }
                    }
                    else {
                        linkColor = Utils_1.ColorUtils.colorToRgb({
                            value: color,
                        });
                    }
                    if (linksOptions.id !== undefined) {
                        container.particles.linksColors[linksOptions.id] = linkColor;
                    }
                    else {
                        container.particles.linksColor = linkColor;
                    }
                }
                if (p2.links.map((t) => t.destination).indexOf(p1) === -1 &&
                    p1.links.map((t) => t.destination).indexOf(p2) === -1) {
                    p1.links.push({
                        destination: p2,
                        opacity: opacityLine,
                    });
                }
            }
        }
    }
}
exports.Linker = Linker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Mover.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Mover.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Mover = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Mover {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    move(delta) {
        this.moveParticle(delta);
        this.moveParallax();
    }
    moveParticle(delta) {
        var _a;
        const particle = this.particle;
        const particlesOptions = particle.particlesOptions;
        if (!particlesOptions.move.enable) {
            return;
        }
        const container = this.container;
        const options = container.options;
        const slowFactor = this.getProximitySpeedFactor();
        const deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        const baseSpeed = (_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed;
        const moveSpeed = (baseSpeed / 2) * slowFactor * deltaFactor;
        this.applyNoise(delta);
        particle.position.x += particle.velocity.horizontal * moveSpeed;
        particle.position.y += particle.velocity.vertical * moveSpeed;
        if (particlesOptions.move.vibrate) {
            particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
            particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
        }
    }
    applyNoise(delta) {
        const particle = this.particle;
        const particlesOptions = particle.particlesOptions;
        const noiseOptions = particlesOptions.move.noise;
        const noiseEnabled = noiseOptions.enable;
        if (!noiseEnabled) {
            return;
        }
        const container = this.container;
        if (particle.lastNoiseTime <= particle.noiseDelay) {
            particle.lastNoiseTime += delta;
            return;
        }
        const noise = container.noise.generate(particle);
        particle.velocity.horizontal += Math.cos(noise.angle) * noise.length;
        particle.velocity.horizontal = Utils_1.Utils.clamp(particle.velocity.horizontal, -1, 1);
        particle.velocity.vertical += Math.sin(noise.angle) * noise.length;
        particle.velocity.vertical = Utils_1.Utils.clamp(particle.velocity.vertical, -1, 1);
        particle.lastNoiseTime -= particle.noiseDelay;
    }
    moveParallax() {
        const container = this.container;
        const options = container.options;
        if (!options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        const particle = this.particle;
        const parallaxForce = options.interactivity.events.onHover.parallax.force;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const windowDimension = {
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
        };
        const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        const tmp = {
            x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
            y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce),
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    }
    getProximitySpeedFactor() {
        const container = this.container;
        const options = container.options;
        const active = Utils_1.Utils.isInArray(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        const mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        const particlePos = this.particle.getPosition();
        const dist = Utils_1.Utils.getDistance(mousePos, particlePos);
        const radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        const proximityFactor = dist / radius || 0;
        const slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    }
}
exports.Mover = Mover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Updater.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Updater.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Mover_1 = __webpack_require__(/*! ./Mover */ "./node_modules/tsparticles/dist/Core/Particle/Mover.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Updater {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    static checkBounds(coordinate, radius, size, velocity, outside) {
        if ((coordinate + radius > size && velocity > 0) || (coordinate - radius < 0 && velocity < 0)) {
            outside();
        }
    }
    update(delta) {
        this.mover.move(delta);
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.updateColor(delta);
        this.fixOutOfCanvasPosition();
        this.updateOutMode(delta);
    }
    updateOpacity(delta) {
        const options = this.container.options;
        const particle = this.particle;
        const deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.opacity.animation.enable) {
            switch (particle.opacity.status) {
                case Enums_1.OpacityAnimationStatus.increasing:
                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
                        particle.opacity.status = Enums_1.OpacityAnimationStatus.decreasing;
                    }
                    else {
                        particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
                case Enums_1.OpacityAnimationStatus.decreasing:
                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
                        particle.opacity.status = Enums_1.OpacityAnimationStatus.increasing;
                    }
                    else {
                        particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    }
    updateSize(delta) {
        var _a;
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        const deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        const sizeOpt = particle.particlesOptions.size;
        const sizeAnim = sizeOpt.animation;
        if (sizeAnim.enable) {
            switch (particle.size.status) {
                case Enums_1.SizeAnimationStatus.increasing:
                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
                        particle.size.status = Enums_1.SizeAnimationStatus.decreasing;
                    }
                    else {
                        particle.size.value += (particle.size.velocity || 0) * deltaFactor;
                    }
                    break;
                case Enums_1.SizeAnimationStatus.decreasing:
                    if (particle.size.value <= sizeAnim.minimumValue) {
                        particle.size.status = Enums_1.SizeAnimationStatus.increasing;
                    }
                    else {
                        particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
                    }
            }
            switch (sizeAnim.destroy) {
                case Enums_1.DestroyType.max:
                    if (particle.size.value >= sizeOpt.value * container.retina.pixelRatio) {
                        particle.destroy();
                    }
                    break;
                case Enums_1.DestroyType.min:
                    if (particle.size.value <= sizeAnim.minimumValue * container.retina.pixelRatio) {
                        particle.destroy();
                    }
                    break;
            }
            if (particle.size.value < 0 && !particle.destroyed) {
                particle.size.value = 0;
            }
        }
    }
    updateAngle(delta) {
        const options = this.container.options;
        const particle = this.particle;
        const deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case Enums_1.RotateDirection.clockwise:
                    particle.angle += ((particle.particlesOptions.rotate.animation.speed * Math.PI) / 18) * deltaFactor;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case Enums_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= ((particle.particlesOptions.rotate.animation.speed * Math.PI) / 18) * deltaFactor;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    }
    updateColor(delta) {
        const options = this.container.options;
        const particle = this.particle;
        if (particle.color === undefined) {
            return;
        }
        const deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.color.animation.enable) {
            particle.color.h += (particle.colorVelocity || 0) * deltaFactor;
            if (particle.color.h > 360) {
                particle.color.h -= 360;
            }
        }
    }
    fixOutOfCanvasPosition() {
        const container = this.container;
        const particle = this.particle;
        const outMode = particle.particlesOptions.move.outMode;
        const wrap = particle.particlesOptions.move.warp;
        const canvasSize = container.canvas.size;
        let newPos;
        if (outMode === Enums_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.size.value,
                right: canvasSize.width,
                top: particle.size.value,
            };
        }
        else if (outMode === Enums_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: particle.size.value,
                right: canvasSize.width,
                top: -particle.size.value - particle.offset.y,
            };
        }
        else if (outMode === Enums_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: particle.size.value,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: -particle.size.value - particle.offset.y,
            };
        }
        if (outMode === Enums_1.OutMode.destroy) {
            const sizeValue = particle.size.value;
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, sizeValue)) {
                container.particles.remove(particle);
            }
        }
        else {
            const sizeValue = particle.size.value;
            const nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                if (!wrap) {
                    particle.position.y = Math.random() * canvasSize.height;
                }
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                if (!wrap) {
                    particle.position.y = Math.random() * canvasSize.height;
                }
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                if (!wrap) {
                    particle.position.x = Math.random() * canvasSize.width;
                }
                particle.position.y = newPos.top;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                if (!wrap) {
                    particle.position.x = Math.random() * canvasSize.width;
                }
                particle.position.y = newPos.bottom;
            }
        }
    }
    updateOutMode(delta) {
        switch (this.particle.particlesOptions.move.outMode) {
            case Enums_1.OutMode.bounce:
            case Enums_1.OutMode.bounceVertical:
            case Enums_1.OutMode.bounceHorizontal:
                this.updateBounce(delta);
                break;
        }
    }
    updateBounce(delta) {
        const container = this.container;
        const particle = this.particle;
        let handled = false;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta);
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            const outMode = particle.particlesOptions.move.outMode;
            const pos = particle.getPosition();
            if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceHorizontal) {
                const size = particle.size.value;
                const velocity = particle.velocity.horizontal;
                Updater.checkBounds(pos.x, size, container.canvas.size.width, velocity, () => {
                    particle.velocity.horizontal *= -1;
                });
            }
            if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceVertical) {
                const size = particle.size.value;
                const velocity = particle.velocity.vertical;
                Updater.checkBounds(pos.y, size, container.canvas.size.height, velocity, () => {
                    particle.velocity.vertical *= -1;
                });
            }
        }
    }
}
exports.Updater = Updater;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particles.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particles.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particles = void 0;
const Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Core/Particle.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const InteractionManager_1 = __webpack_require__(/*! ./Particle/InteractionManager */ "./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js");
class Particles {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.interactionManager = new InteractionManager_1.InteractionManager(container);
        const canvasSize = this.container.canvas.size;
        this.linksColors = {};
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
    }
    get count() {
        return this.array.length;
    }
    init() {
        const container = this.container;
        const options = container.options;
        let handled = false;
        for (const [, plugin] of container.plugins) {
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            for (let i = this.count; i < options.particles.number.value; i++) {
                this.addParticle();
            }
        }
        if (options.infection.enable) {
            for (let i = 0; i < options.infection.infections; i++) {
                const notInfected = this.array.filter((p) => p.infectionStage === undefined);
                const infected = Utils_1.Utils.itemFromArray(notInfected);
                infected.startInfection(0);
            }
        }
        this.interactionManager.init();
        container.noise.init();
    }
    redraw() {
        this.clear();
        this.init();
        this.draw(0);
    }
    removeAt(index, quantity) {
        if (index >= 0 && index <= this.count) {
            for (const particle of this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1)) {
                particle.destroy();
            }
        }
    }
    remove(particle) {
        this.removeAt(this.array.indexOf(particle));
    }
    update(delta) {
        const container = this.container;
        const particlesToDelete = [];
        container.noise.update();
        for (const particle of this.array) {
            particle.bubble.inRange = false;
            for (const [, plugin] of container.plugins) {
                if (particle.destroyed) {
                    break;
                }
                if (plugin.particleUpdate) {
                    plugin.particleUpdate(particle, delta);
                }
            }
            if (!particle.destroyed) {
                particle.update(delta);
            }
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            this.quadTree.insert(new Utils_1.Point(particle.getPosition(), particle));
        }
        for (const particle of particlesToDelete) {
            this.remove(particle);
        }
        this.interactionManager.interact(delta);
    }
    draw(delta) {
        const container = this.container;
        container.canvas.clear();
        const canvasSize = this.container.canvas.size;
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
        this.update(delta);
        for (const [, plugin] of container.plugins) {
            container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this.array) {
            p.draw(delta);
        }
    }
    clear() {
        this.array = [];
    }
    push(nb, mousePosition) {
        var _a;
        const container = this.container;
        const options = container.options;
        const limit = options.particles.number.limit * container.density;
        this.pushing = true;
        if (limit > 0) {
            const countToRemove = this.count + nb - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        let pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (let i = 0; i < nb; i++) {
            this.addParticle(pos);
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    }
    addParticle(position, overrideOptions) {
        const particle = new Particle_1.Particle(this.container, position, overrideOptions);
        this.array.push(particle);
        return particle;
    }
    removeQuantity(quantity) {
        const options = this.container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    }
}
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Retina.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Retina.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Retina = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Retina {
    constructor(container) {
        this.container = container;
    }
    init() {
        const container = this.container;
        const options = container.options;
        if (options.detectRetina) {
            this.pixelRatio = Utils_1.Utils.isSsr() ? 1 : window.devicePixelRatio;
        }
        else {
            this.pixelRatio = 1;
        }
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles;
        this.linksDistance = particles.links.distance * ratio;
        this.linksWidth = particles.links.width * ratio;
        this.moveSpeed = particles.move.speed * ratio;
        this.sizeValue = particles.size.value * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        const modes = options.interactivity.modes;
        this.connectModeDistance = modes.connect.distance * ratio;
        this.connectModeRadius = modes.connect.radius * ratio;
        this.grabModeDistance = modes.grab.distance * ratio;
        this.repulseModeDistance = modes.repulse.distance * ratio;
        this.slowModeRadius = modes.slow.radius * ratio;
        this.bubbleModeDistance = modes.bubble.distance * ratio;
        if (modes.bubble.size) {
            this.bubbleModeSize = modes.bubble.size * ratio;
        }
    }
    initParticle(particle) {
        const particlesOptions = particle.particlesOptions;
        const ratio = this.pixelRatio;
        particle.linksDistance = particlesOptions.links.distance * ratio;
        particle.linksWidth = particlesOptions.links.width * ratio;
        particle.moveSpeed = particlesOptions.move.speed * ratio;
        particle.sizeValue = particlesOptions.size.value * ratio;
        if (typeof particlesOptions.size.random !== "boolean") {
            particle.randomMinimumSize = particlesOptions.size.random.minimumValue * ratio;
        }
        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
    }
}
exports.Retina = Retina;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDirection = void 0;
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateDirection = void 0;
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MoveDirection */ "./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js"), exports);
__exportStar(__webpack_require__(/*! ./RotateDirection */ "./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractivityDetect = void 0;
var InteractivityDetect;
(function (InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickMode = void 0;
var ClickMode;
(function (ClickMode) {
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
    ClickMode["pause"] = "pause";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionMode = void 0;
var CollisionMode;
(function (CollisionMode) {
    CollisionMode["absorb"] = "absorb";
    CollisionMode["bounce"] = "bounce";
    CollisionMode["destroy"] = "destroy";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivMode = void 0;
var DivMode;
(function (DivMode) {
    DivMode["bubble"] = "bubble";
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverMode = void 0;
var HoverMode;
(function (HoverMode) {
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/OutMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/OutMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutMode = void 0;
var OutMode;
(function (OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeMode = void 0;
var SizeMode;
(function (SizeMode) {
    SizeMode["precise"] = "precise";
    SizeMode["percent"] = "percent";
})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js"), exports);
__exportStar(__webpack_require__(/*! ./DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js"), exports);
__exportStar(__webpack_require__(/*! ./HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js"), exports);
__exportStar(__webpack_require__(/*! ./CollisionMode */ "./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js"), exports);
__exportStar(__webpack_require__(/*! ./OutMode */ "./node_modules/tsparticles/dist/Enums/Modes/OutMode.js"), exports);
__exportStar(__webpack_require__(/*! ./SizeMode */ "./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Statuses/OpacityAnimationStatus.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Statuses/OpacityAnimationStatus.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityAnimationStatus = void 0;
var OpacityAnimationStatus;
(function (OpacityAnimationStatus) {
    OpacityAnimationStatus[OpacityAnimationStatus["increasing"] = 0] = "increasing";
    OpacityAnimationStatus[OpacityAnimationStatus["decreasing"] = 1] = "decreasing";
})(OpacityAnimationStatus = exports.OpacityAnimationStatus || (exports.OpacityAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Statuses/SizeAnimationStatus.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Statuses/SizeAnimationStatus.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeAnimationStatus = void 0;
var SizeAnimationStatus;
(function (SizeAnimationStatus) {
    SizeAnimationStatus[SizeAnimationStatus["increasing"] = 0] = "increasing";
    SizeAnimationStatus[SizeAnimationStatus["decreasing"] = 1] = "decreasing";
})(SizeAnimationStatus = exports.SizeAnimationStatus || (exports.SizeAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Statuses/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Statuses/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./SizeAnimationStatus */ "./node_modules/tsparticles/dist/Enums/Statuses/SizeAnimationStatus.js"), exports);
__exportStar(__webpack_require__(/*! ./OpacityAnimationStatus */ "./node_modules/tsparticles/dist/Enums/Statuses/OpacityAnimationStatus.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/DestroyType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DestroyType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyType = void 0;
var DestroyType;
(function (DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType = exports.DestroyType || (exports.DestroyType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/DivType.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DivType.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivType = void 0;
var DivType;
(function (DivType) {
    DivType["circle"] = "circle";
    DivType["rectangle"] = "rectangle";
})(DivType = exports.DivType || (exports.DivType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBubbleType = void 0;
var ProcessBubbleType;
(function (ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/ShapeType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ShapeType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeType = void 0;
var ShapeType;
(function (ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["image"] = "image";
    ShapeType["images"] = "images";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/StartValueType.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/StartValueType.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartValueType = void 0;
var StartValueType;
(function (StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
})(StartValueType = exports.StartValueType || (exports.StartValueType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./DestroyType */ "./node_modules/tsparticles/dist/Enums/Types/DestroyType.js"), exports);
__exportStar(__webpack_require__(/*! ./ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js"), exports);
__exportStar(__webpack_require__(/*! ./ShapeType */ "./node_modules/tsparticles/dist/Enums/Types/ShapeType.js"), exports);
__exportStar(__webpack_require__(/*! ./StartValueType */ "./node_modules/tsparticles/dist/Enums/Types/StartValueType.js"), exports);
__exportStar(__webpack_require__(/*! ./DivType */ "./node_modules/tsparticles/dist/Enums/Types/DivType.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Statuses */ "./node_modules/tsparticles/dist/Enums/Statuses/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js"), exports);
__exportStar(__webpack_require__(/*! ./InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Background {
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.Background = Background;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMask = void 0;
const BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js");
class BackgroundMask {
    constructor() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.cover !== undefined) {
            const cover = data.cover;
            const color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
            this.cover.load(cover.color !== undefined ? cover : { color: color });
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMaskCover = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class BackgroundMaskCover {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infection = void 0;
const InfectionStage_1 = __webpack_require__(/*! ./InfectionStage */ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js");
class Infection {
    constructor() {
        this.cure = false;
        this.delay = 0;
        this.enable = false;
        this.infections = 0;
        this.stages = [];
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.cure !== undefined) {
            this.cure = data.cure;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.infections !== undefined) {
            this.infections = data.infections;
        }
        if (data.stages === undefined) {
            return;
        }
        this.stages = data.stages.map((t) => {
            const s = new InfectionStage_1.InfectionStage();
            s.load(t);
            return s;
        });
    }
}
exports.Infection = Infection;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InfectionStage = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class InfectionStage {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#ff0000";
        this.radius = 0;
        this.rate = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        this.duration = data.duration;
        this.infectedStage = data.infectedStage;
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
        if (data.rate !== undefined) {
            this.rate = data.rate;
        }
    }
}
exports.InfectionStage = InfectionStage;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEvent = void 0;
class ClickEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivEvent = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class DivEvent {
    constructor() {
        this.ids = [];
        this.enable = false;
        this.mode = [];
        this.type = Enums_1.DivType.circle;
    }
    get elementId() {
        return this.ids;
    }
    set elementId(value) {
        this.ids = value;
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
        if (ids !== undefined) {
            this.ids = ids;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}
exports.DivEvent = DivEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js");
const DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js");
const HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js");
class Events {
    constructor() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
        const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
        if (onDiv !== undefined) {
            if (onDiv instanceof Array) {
                this.onDiv = onDiv.map((div) => {
                    const tmp = new DivEvent_1.DivEvent();
                    tmp.load(div);
                    return tmp;
                });
            }
            else {
                this.onDiv = new DivEvent_1.DivEvent();
                this.onDiv.load(onDiv);
            }
        }
        this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
        if (data.resize !== undefined) {
            this.resize = data.resize;
        }
    }
}
exports.Events = Events;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverEvent = void 0;
const Parallax_1 = __webpack_require__(/*! ./Parallax */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js");
class HoverEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
    }
}
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parallax = void 0;
class Parallax {
    constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.force !== undefined) {
            this.force = data.force;
        }
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}
exports.Parallax = Parallax;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Interactivity = void 0;
const Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Events_1 = __webpack_require__(/*! ./Events/Events */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js");
const Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js");
class Interactivity {
    constructor() {
        this.detectsOn = Enums_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    get detect_on() {
        return this.detectsOn;
    }
    set detect_on(value) {
        this.detectsOn = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
        if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
            if (this.events.onHover.mode instanceof Array) {
                if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) {
                    this.events.onHover.mode.push(Enums_1.HoverMode.slow);
                }
            }
            else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) {
                this.events.onHover.mode = [this.events.onHover.mode, Enums_1.HoverMode.slow];
            }
        }
    }
}
exports.Interactivity = Interactivity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
const BubbleDiv_1 = __webpack_require__(/*! ./BubbleDiv */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js");
const BubbleBase_1 = __webpack_require__(/*! ./BubbleBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js");
class Bubble extends BubbleBase_1.BubbleBase {
    load(data) {
        super.load(data);
        if (!(data !== undefined && data.divs !== undefined)) {
            return;
        }
        if (data.divs instanceof Array) {
            this.divs = data.divs.map((s) => {
                const tmp = new BubbleDiv_1.BubbleDiv();
                tmp.load(s);
                return tmp;
            });
        }
        else {
            if (this.divs instanceof Array || !this.divs) {
                this.divs = new BubbleDiv_1.BubbleDiv();
            }
            this.divs.load(data.divs);
        }
    }
}
exports.Bubble = Bubble;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleBase = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class BubbleBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.color !== undefined) {
            if (data.color instanceof Array) {
                this.color = data.color.map((s) => OptionsColor_1.OptionsColor.create(undefined, s));
            }
            else {
                if (this.color instanceof Array) {
                    this.color = new OptionsColor_1.OptionsColor();
                }
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
    }
}
exports.BubbleBase = BubbleBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleDiv = void 0;
const BubbleBase_1 = __webpack_require__(/*! ./BubbleBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js");
class BubbleDiv extends BubbleBase_1.BubbleBase {
    constructor() {
        super();
        this.ids = [];
    }
    load(data) {
        super.load(data);
        if (!(data !== undefined && data.ids !== undefined)) {
            return;
        }
        this.ids = data.ids;
    }
}
exports.BubbleDiv = BubbleDiv;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const ConnectLinks_1 = __webpack_require__(/*! ./ConnectLinks */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js");
class Connect {
    constructor() {
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.Connect = Connect;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectLinks = void 0;
class ConnectLinks {
    constructor() {
        this.opacity = 0.5;
    }
    load(data) {
        if (!(data !== undefined && data.opacity !== undefined)) {
            return;
        }
        this.opacity = data.opacity;
    }
}
exports.ConnectLinks = ConnectLinks;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grab = void 0;
const GrabLinks_1 = __webpack_require__(/*! ./GrabLinks */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js");
class Grab {
    constructor() {
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    }
}
exports.Grab = Grab;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GrabLinks = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class GrabLinks {
    constructor() {
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
    }
}
exports.GrabLinks = GrabLinks;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Modes = void 0;
const Bubble_1 = __webpack_require__(/*! ./Bubble */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js");
const Connect_1 = __webpack_require__(/*! ./Connect */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js");
const Grab_1 = __webpack_require__(/*! ./Grab */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js");
const Remove_1 = __webpack_require__(/*! ./Remove */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js");
const Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js");
const Repulse_1 = __webpack_require__(/*! ./Repulse */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js");
const Slow_1 = __webpack_require__(/*! ./Slow */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js");
class Modes {
    constructor() {
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.grab = new Grab_1.Grab();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.bubble.load(data.bubble);
        this.connect.load(data.connect);
        this.grab.load(data.grab);
        this.push.load(data.push);
        this.remove.load(data.remove);
        this.repulse.load(data.repulse);
        this.slow.load(data.slow);
    }
}
exports.Modes = Modes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Push = void 0;
class Push {
    constructor() {
        this.quantity = 4;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
    }
}
exports.Push = Push;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
class Remove {
    constructor() {
        this.quantity = 2;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
    }
}
exports.Remove = Remove;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulse = void 0;
const RepulseDiv_1 = __webpack_require__(/*! ./RepulseDiv */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js");
const RepulseBase_1 = __webpack_require__(/*! ./RepulseBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js");
class Repulse extends RepulseBase_1.RepulseBase {
    load(data) {
        super.load(data);
        if ((data === null || data === void 0 ? void 0 : data.divs) === undefined) {
            return;
        }
        if (data.divs instanceof Array) {
            this.divs = data.divs.map((s) => {
                const tmp = new RepulseDiv_1.RepulseDiv();
                tmp.load(s);
                return tmp;
            });
        }
        else {
            if (this.divs instanceof Array || !this.divs) {
                this.divs = new RepulseDiv_1.RepulseDiv();
            }
            this.divs.load(data.divs);
        }
    }
}
exports.Repulse = Repulse;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RepulseBase = void 0;
class RepulseBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
exports.RepulseBase = RepulseBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RepulseDiv = void 0;
const RepulseBase_1 = __webpack_require__(/*! ./RepulseBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js");
class RepulseDiv extends RepulseBase_1.RepulseBase {
    constructor() {
        super();
        this.ids = [];
    }
    load(data) {
        super.load(data);
        if (data === undefined) {
            return;
        }
        if (data.ids === undefined) {
            return;
        }
        this.ids = data.ids;
    }
}
exports.RepulseDiv = RepulseDiv;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Slow = void 0;
class Slow {
    constructor() {
        this.factor = 3;
        this.radius = 200;
    }
    get active() {
        return false;
    }
    set active(_value) {
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.Slow = Slow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js");
const Particles_1 = __webpack_require__(/*! ./Particles/Particles */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js");
const BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js");
const Background_1 = __webpack_require__(/*! ./Background/Background */ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js");
const Infection_1 = __webpack_require__(/*! ./Infection/Infection */ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Options {
    constructor() {
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = true;
        this.fpsLimit = 30;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        if (data.preset !== undefined) {
            if (data.preset instanceof Array) {
                for (const preset of data.preset) {
                    this.importPreset(preset);
                }
            }
            else {
                this.importPreset(data.preset);
            }
        }
        const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        this.background.load(data.background);
        this.particles.load(data.particles);
        this.infection.load(data.infection);
        this.interactivity.load(data.interactivity);
        this.backgroundMask.load(data.backgroundMask);
        Utils_1.Plugins.loadOptions(this, data);
    }
    importPreset(preset) {
        this.load(Utils_1.Plugins.getPreset(preset));
    }
}
exports.Options = Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsColor = void 0;
class OptionsColor {
    constructor() {
        this.value = "#fff";
    }
    static create(source, data) {
        const color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    }
    load(data) {
        if ((data === null || data === void 0 ? void 0 : data.value) === undefined) {
            return;
        }
        this.value = data.value;
    }
}
exports.OptionsColor = OptionsColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatableColor = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
const ColorAnimation_1 = __webpack_require__(/*! ./ColorAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js");
class AnimatableColor extends OptionsColor_1.OptionsColor {
    constructor() {
        super();
        this.animation = new ColorAnimation_1.ColorAnimation();
    }
    static create(source, data) {
        const color = source !== null && source !== void 0 ? source : new AnimatableColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    }
    load(data) {
        super.load(data);
        this.animation.load(data === null || data === void 0 ? void 0 : data.animation);
    }
}
exports.AnimatableColor = AnimatableColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attract = void 0;
class Attract {
    constructor() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    get rotateX() {
        return this.rotate.x;
    }
    set rotateX(value) {
        this.rotate.x = value;
    }
    get rotateY() {
        return this.rotate.y;
    }
    set rotateY(value) {
        this.rotate.y = value;
    }
    load(data) {
        var _a, _b, _c, _d;
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
        if (rotateX !== undefined) {
            this.rotate.x = rotateX;
        }
        const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
        if (rotateY !== undefined) {
            this.rotate.y = rotateY;
        }
    }
}
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collisions = void 0;
const Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Collisions {
    constructor() {
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}
exports.Collisions = Collisions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorAnimation = void 0;
class ColorAnimation {
    constructor() {
        this.enable = false;
        this.speed = 1;
        this.sync = true;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.ColorAnimation = ColorAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Density = void 0;
class Density {
    constructor() {
        this.enable = false;
        this.area = 800;
        this.factor = 1000;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
        if (area !== undefined) {
            this.area = area;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
    }
}
exports.Density = Density;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Links = void 0;
const LinksShadow_1 = __webpack_require__(/*! ./LinksShadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js");
const LinksTriangle_1 = __webpack_require__(/*! ./LinksTriangle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js");
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Links {
    constructor() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.id !== undefined) {
            this.id = data.id;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
exports.Links = Links;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksShadow = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class LinksShadow {
    constructor() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "lime";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.LinksShadow = LinksShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksTriangle = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class LinksTriangle {
    constructor() {
        this.enable = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.LinksTriangle = LinksTriangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js");
const Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js");
const Noise_1 = __webpack_require__(/*! ./Noise/Noise */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js");
class Move {
    constructor() {
        this.angle = 90;
        this.attract = new Attract_1.Attract();
        this.direction = Enums_1.MoveDirection.none;
        this.enable = false;
        this.noise = new Noise_1.Noise();
        this.outMode = Enums_1.OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
        this.warp = false;
    }
    get collisions() {
        return false;
    }
    set collisions(value) {
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        if (data.angle !== undefined) {
            this.angle = data.angle;
        }
        this.attract.load(data.attract);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.noise.load(data.noise);
        const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
        if (outMode !== undefined) {
            this.outMode = outMode;
        }
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.straight !== undefined) {
            this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Noise = void 0;
const NoiseDelay_1 = __webpack_require__(/*! ./NoiseDelay */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js");
class Noise {
    constructor() {
        this.delay = new NoiseDelay_1.NoiseDelay();
        this.enable = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.delay.load(data.delay);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.Noise = Noise;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseDelay = void 0;
const NoiseRandom_1 = __webpack_require__(/*! ./NoiseRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js");
class NoiseDelay {
    constructor() {
        this.random = new NoiseRandom_1.NoiseRandom();
        this.value = 0;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.NoiseDelay = NoiseDelay;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseRandom = void 0;
class NoiseRandom {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
exports.NoiseRandom = NoiseRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Opacity = void 0;
const OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js");
const OpacityRandom_1 = __webpack_require__(/*! ./OpacityRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js");
class Opacity {
    constructor() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new OpacityRandom_1.OpacityRandom();
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
        if (data.random !== undefined) {
            if (typeof data.random === "boolean") {
                this.random.enable = data.random;
            }
            else {
                this.random.load(data.random);
            }
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.Opacity = Opacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityAnimation = void 0;
class OpacityAnimation {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.sync = false;
    }
    get opacity_min() {
        return this.minimumValue;
    }
    set opacity_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
        if (minimumValue !== undefined) {
            this.minimumValue = minimumValue;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityRandom = void 0;
class OpacityRandom {
    constructor() {
        this.enable = false;
        this.minimumValue = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
exports.OpacityRandom = OpacityRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particles = void 0;
const Links_1 = __webpack_require__(/*! ./Links/Links */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js");
const Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js");
const ParticlesNumber_1 = __webpack_require__(/*! ./ParticlesNumber */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js");
const Opacity_1 = __webpack_require__(/*! ./Opacity/Opacity */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js");
const Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
const Size_1 = __webpack_require__(/*! ./Size/Size */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js");
const Rotate_1 = __webpack_require__(/*! ./Rotate/Rotate */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js");
const Shadow_1 = __webpack_require__(/*! ./Shadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js");
const Stroke_1 = __webpack_require__(/*! ./Stroke */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js");
const Collisions_1 = __webpack_require__(/*! ./Collisions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js");
const Twinkle_1 = __webpack_require__(/*! ./Twinkle/Twinkle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js");
const AnimatableColor_1 = __webpack_require__(/*! ./AnimatableColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js");
class Particles {
    constructor() {
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.links = new Links_1.Links();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.twinkle = new Twinkle_1.Twinkle();
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        }
        const links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
        if (links !== undefined) {
            this.links.load(links);
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.rotate.load(data.rotate);
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.twinkle.load(data.twinkle);
        const collisions = (_d = (_c = data.move) === null || _c === void 0 ? void 0 : _c.collisions) !== null && _d !== void 0 ? _d : (_e = data.move) === null || _e === void 0 ? void 0 : _e.bounce;
        if (collisions !== undefined) {
            this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        const strokeToLoad = (_f = data.stroke) !== null && _f !== void 0 ? _f : (_g = data.shape) === null || _g === void 0 ? void 0 : _g.stroke;
        if (strokeToLoad === undefined) {
            return;
        }
        if (strokeToLoad instanceof Array) {
            this.stroke = strokeToLoad.map((s) => {
                const tmp = new Stroke_1.Stroke();
                tmp.load(s);
                return tmp;
            });
        }
        else {
            if (this.stroke instanceof Array) {
                this.stroke = new Stroke_1.Stroke();
            }
            this.stroke.load(strokeToLoad);
        }
    }
}
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticlesNumber = void 0;
const Density_1 = __webpack_require__(/*! ./Density */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js");
class ParticlesNumber {
    constructor() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    get max() {
        return this.limit;
    }
    set max(value) {
        this.limit = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        this.density.load(data.density);
        const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
        if (limit !== undefined) {
            this.limit = limit;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
const RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js");
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Rotate {
    constructor() {
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.animation.load(data.animation);
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.Rotate = Rotate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateAnimation = void 0;
class RotateAnimation {
    constructor() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Shadow {
    constructor() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset === undefined) {
            return;
        }
        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }
        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}
exports.Shadow = Shadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Shape {
    constructor() {
        this.options = {};
        this.type = Enums_1.ShapeType.circle;
    }
    get image() {
        var _a;
        return ((_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images]);
    }
    set image(value) {
        this.options[Enums_1.ShapeType.image] = value;
        this.options[Enums_1.ShapeType.images] = value;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get images() {
        return this.image instanceof Array ? this.image : [this.image];
    }
    set images(value) {
        this.image = value;
    }
    get stroke() {
        return [];
    }
    set stroke(_value) {
    }
    get character() {
        var _a;
        return ((_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.char]);
    }
    set character(value) {
        this.options[Enums_1.ShapeType.character] = value;
        this.options[Enums_1.ShapeType.char] = value;
    }
    get polygon() {
        var _a;
        return ((_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star]);
    }
    set polygon(value) {
        this.options[Enums_1.ShapeType.polygon] = value;
        this.options[Enums_1.ShapeType.star] = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
        if (options !== undefined) {
            for (const shape in options) {
                const item = options[shape];
                if (item !== undefined) {
                    this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                }
            }
        }
        this.loadShape(data.character, Enums_1.ShapeType.character, Enums_1.ShapeType.char, true);
        this.loadShape(data.polygon, Enums_1.ShapeType.polygon, Enums_1.ShapeType.star, false);
        this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, Enums_1.ShapeType.image, Enums_1.ShapeType.images, true);
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
    loadShape(item, mainKey, altKey, altOverride) {
        var _a, _b, _c, _d;
        if (item === undefined) {
            return;
        }
        if (item instanceof Array) {
            if (!(this.options[mainKey] instanceof Array)) {
                this.options[mainKey] = [];
                if (!this.options[altKey] || altOverride) {
                    this.options[altKey] = [];
                }
            }
            this.options[mainKey] = Utils_1.Utils.deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);
            if (!this.options[altKey] || altOverride) {
                this.options[altKey] = Utils_1.Utils.deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
            }
        }
        else {
            if (this.options[mainKey] instanceof Array) {
                this.options[mainKey] = {};
                if (!this.options[altKey] || altOverride) {
                    this.options[altKey] = {};
                }
            }
            this.options[mainKey] = Utils_1.Utils.deepExtend((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);
            if (!this.options[altKey] || altOverride) {
                this.options[altKey] = Utils_1.Utils.deepExtend((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
            }
        }
    }
}
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
const SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js");
const SizeRandom_1 = __webpack_require__(/*! ./SizeRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js");
class Size {
    constructor() {
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random = new SizeRandom_1.SizeRandom();
        this.value = 3;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
        if (data.random !== undefined) {
            if (typeof data.random === "boolean") {
                this.random.enable = data.random;
            }
            else {
                this.random.load(data.random);
            }
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.Size = Size;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeAnimation = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class SizeAnimation {
    constructor() {
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.startValue = Enums_1.StartValueType.max;
        this.sync = false;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
        if (minimumValue !== undefined) {
            this.minimumValue = minimumValue;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeRandom = void 0;
class SizeRandom {
    constructor() {
        this.enable = false;
        this.minimumValue = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
exports.SizeRandom = SizeRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stroke = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Stroke {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.Stroke = Stroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Trail = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Trail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Twinkle = void 0;
const TwinkleValues_1 = __webpack_require__(/*! ./TwinkleValues */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js");
class Twinkle {
    constructor() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}
exports.Twinkle = Twinkle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TwinkleValues = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class TwinkleValues {
    constructor() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.TwinkleValues = TwinkleValues;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberInstance = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class AbsorberInstance {
    constructor(absorbers, container, options, position) {
        var _a, _b;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position;
        this.options = options;
        let size = options.size.value * container.retina.pixelRatio;
        const random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        const minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Utils_1.Utils.randomInRange(minSize, size);
        }
        this.opacity = this.options.opacity;
        this.size = size * container.retina.pixelRatio;
        this.mass = this.size * options.size.density;
        const limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio : limit;
        const color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = Utils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    }
    attract(particle) {
        const pos = particle.getPosition();
        const { dx, dy, distance } = Utils_1.Utils.getDistances(this.position, pos);
        const angle = Math.atan2(dx, dy) * (180 / Math.PI);
        const acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size + particle.size.value) {
            const sizeFactor = particle.size.value * 0.033;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                particle.destroy();
            }
            else {
                particle.size.value -= sizeFactor;
                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
        }
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = Utils_1.ColorUtils.getStyleFromRgb(this.color, this.opacity);
        context.fill();
    }
    calcPosition() {
        var _a;
        const container = this.container;
        const percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: (percentPosition.x / 100) * container.canvas.size.width,
            y: (percentPosition.y / 100) * container.canvas.size.height,
        };
    }
}
exports.AbsorberInstance = AbsorberInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorbers = void 0;
const AbsorberInstance_1 = __webpack_require__(/*! ./AbsorberInstance */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js");
class Absorbers {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
    }
    init(options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.absorbers) {
            if (options.absorbers instanceof Array) {
                this.absorbers = options.absorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.absorbers instanceof Array) {
                    this.absorbers = new Absorber_1.Absorber();
                }
                this.absorbers.load(options.absorbers);
            }
        }
        const interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                this.interactivityAbsorbers = interactivityAbsorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityAbsorbers instanceof Array) {
                    this.interactivityAbsorbers = new Absorber_1.Absorber();
                }
                this.interactivityAbsorbers.load(interactivityAbsorbers);
            }
        }
        if (this.absorbers instanceof Array) {
            for (const absorberOptions of this.absorbers) {
                const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, absorberOptions);
                this.addAbsorber(absorber);
            }
        }
        else {
            const absorberOptions = this.absorbers;
            const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, absorberOptions);
            this.addAbsorber(absorber);
        }
    }
    particleUpdate(particle) {
        for (const absorber of this.array) {
            absorber.attract(particle);
            if (particle.destroyed) {
                break;
            }
        }
    }
    draw(context) {
        for (const absorber of this.array) {
            context.save();
            absorber.draw(context);
            context.restore();
        }
    }
    stop() {
        this.array = [];
    }
    resize() {
        for (const absorber of this.array) {
            absorber.resize();
        }
    }
    handleClickMode(mode) {
        const container = this.container;
        const absorberOptions = this.absorbers;
        const modeAbsorbers = this.interactivityAbsorbers;
        if (mode === Enums_1.AbsorberClickMode.absorber) {
            let absorbersModeOptions;
            if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) {
                    absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
                }
            }
            else {
                absorbersModeOptions = modeAbsorbers;
            }
            const absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (absorberOptions instanceof Array ? Utils_1.Utils.itemFromArray(absorberOptions) : absorberOptions);
            const aPosition = container.interactivity.mouse.clickPosition;
            const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, absorbersOptions, aPosition);
            this.addAbsorber(absorber);
        }
    }
    addAbsorber(absorber) {
        this.array.push(absorber);
    }
    removeAbsorber(absorber) {
        const index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
}
exports.Absorbers = Absorbers;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorbersPlugin = void 0;
const Absorbers_1 = __webpack_require__(/*! ./Absorbers */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js");
const Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js");
class AbsorbersPlugin {
    constructor() {
        this.id = "absorbers";
    }
    getPlugin(container) {
        return new Absorbers_1.Absorbers(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (!(options === null || options === void 0 ? void 0 : options.absorbers)) {
            return false;
        }
        const absorbers = options.absorbers;
        let loadAbsorbers = false;
        if (absorbers instanceof Array) {
            if (absorbers.length) {
                loadAbsorbers = true;
            }
        }
        else if (absorbers !== undefined) {
            loadAbsorbers = true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            Utils_1.Utils.isInArray(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadAbsorbers = true;
        }
        return loadAbsorbers;
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        if (optionsCast.absorbers === undefined) {
            optionsCast.absorbers = new Absorber_1.Absorber();
        }
        if (source === null || source === void 0 ? void 0 : source.absorbers) {
            if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
                optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.absorbers instanceof Array) {
                    optionsCast.absorbers = new Absorber_1.Absorber();
                }
                optionsCast.absorbers.load(source === null || source === void 0 ? void 0 : source.absorbers);
            }
        }
        const interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.interactivity.modes.absorbers instanceof Array ||
                    optionsCast.interactivity.modes.absorbers === undefined) {
                    optionsCast.interactivity.modes.absorbers = new Absorber_1.Absorber();
                }
                optionsCast.interactivity.modes.absorbers.load(interactivityAbsorbers);
            }
        }
    }
}
const plugin = new AbsorbersPlugin();
exports.AbsorbersPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberClickMode = void 0;
var AbsorberClickMode;
(function (AbsorberClickMode) {
    AbsorberClickMode["absorber"] = "absorber";
})(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberClickMode = void 0;
const AbsorberClickMode_1 = __webpack_require__(/*! ./AbsorberClickMode */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js");
Object.defineProperty(exports, "AbsorberClickMode", { enumerable: true, get: function () { return AbsorberClickMode_1.AbsorberClickMode; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorber = void 0;
const AbsorberSize_1 = __webpack_require__(/*! ./AbsorberSize */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js");
const OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Absorber {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.opacity = 1;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    load(data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
            if (data.size !== undefined) {
                this.size.load(data.size);
            }
        }
    }
}
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberRandomSize.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberRandomSize.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberRandomSize = void 0;
class AbsorberRandomSize {
    constructor() {
        this.enable = false;
        this.minimumValue = 1;
    }
    load(data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    }
}
exports.AbsorberRandomSize = AbsorberRandomSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberSize = void 0;
const AbsorberRandomSize_1 = __webpack_require__(/*! ./AbsorberRandomSize */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberRandomSize.js");
class AbsorberSize {
    constructor() {
        this.density = 5;
        this.random = new AbsorberRandomSize_1.AbsorberRandomSize();
        this.value = 50;
    }
    load(data) {
        if (data !== undefined) {
            if (data.density !== undefined) {
                this.density = data.density;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.load({ enable: data.random });
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.limit !== undefined) {
                this.limit = data.limit;
            }
        }
    }
}
exports.AbsorberSize = AbsorberSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterInstance = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const EmitterSize_1 = __webpack_require__(/*! ./Options/Classes/EmitterSize */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js");
class EmitterInstance {
    constructor(emitters, container, emitterOptions, position) {
        var _a, _b, _c;
        this.emitters = emitters;
        this.container = container;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        let particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);
        if (particlesOptions === undefined) {
            particlesOptions = {};
        }
        if (particlesOptions.move === undefined) {
            particlesOptions.move = {};
        }
        if (particlesOptions.move.direction === undefined) {
            particlesOptions.move.direction = this.emitterOptions.direction;
        }
        this.particlesOptions = particlesOptions;
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : (() => {
            const size = new EmitterSize_1.EmitterSize();
            size.load({
                height: 0,
                mode: Enums_1.SizeMode.percent,
                width: 0,
            });
            return size;
        })();
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.play();
    }
    play() {
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = window.setInterval(() => {
                    this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    }
    pause() {
        const interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    }
    prepareToDie() {
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            window.setTimeout(() => {
                var _a;
                this.pause();
                this.lifeCount--;
                if (this.lifeCount > 0) {
                    this.position = this.calcPosition();
                    window.setTimeout(() => {
                        this.play();
                    }, (_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    }
    destroy() {
        this.emitters.removeEmitter(this);
    }
    calcPosition() {
        var _a;
        const container = this.container;
        const percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: (percentPosition.x / 100) * container.canvas.size.width,
            y: (percentPosition.y / 100) * container.canvas.size.height,
        };
    }
    emit() {
        const container = this.container;
        const position = this.position;
        const offset = {
            x: this.size.mode === Enums_1.SizeMode.percent
                ? (container.canvas.size.width * this.size.width) / 100
                : this.size.width,
            y: this.size.mode === Enums_1.SizeMode.percent
                ? (container.canvas.size.height * this.size.height) / 100
                : this.size.height,
        };
        for (let i = 0; i < this.emitterOptions.rate.quantity; i++) {
            container.particles.addParticle({
                x: position.x + offset.x * (Math.random() - 0.5),
                y: position.y + offset.y * (Math.random() - 0.5),
            }, this.particlesOptions);
        }
    }
}
exports.EmitterInstance = EmitterInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitters = void 0;
const EmitterInstance_1 = __webpack_require__(/*! ./EmitterInstance */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js");
class Emitters {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
    }
    init(options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.emitters) {
            if (options.emitters instanceof Array) {
                this.emitters = options.emitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.emitters instanceof Array) {
                    this.emitters = new Emitter_1.Emitter();
                }
                this.emitters.load(options.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                this.interactivityEmitters = interactivityEmitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityEmitters instanceof Array) {
                    this.interactivityEmitters = new Emitter_1.Emitter();
                }
                this.interactivityEmitters.load(interactivityEmitters);
            }
        }
        if (this.emitters instanceof Array) {
            for (const emitterOptions of this.emitters) {
                const emitter = new EmitterInstance_1.EmitterInstance(this, this.container, emitterOptions);
                this.addEmitter(emitter);
            }
        }
        else {
            const emitterOptions = this.emitters;
            const emitter = new EmitterInstance_1.EmitterInstance(this, this.container, emitterOptions);
            this.addEmitter(emitter);
        }
    }
    play() {
        for (const emitter of this.array) {
            emitter.play();
        }
    }
    pause() {
        for (const emitter of this.array) {
            emitter.pause();
        }
    }
    stop() {
        this.array = [];
    }
    handleClickMode(mode) {
        const container = this.container;
        const emitterOptions = this.emitters;
        const modeEmitters = this.interactivityEmitters;
        if (mode === Enums_1.EmitterClickMode.emitter) {
            let emitterModeOptions;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            const emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (emitterOptions instanceof Array ? Utils_1.Utils.itemFromArray(emitterOptions) : emitterOptions);
            const ePosition = container.interactivity.mouse.clickPosition;
            const emitter = new EmitterInstance_1.EmitterInstance(this, this.container, Utils_1.Utils.deepExtend({}, emittersOptions), ePosition);
            this.addEmitter(emitter);
        }
    }
    resize() {
        for (const emitter of this.array) {
            emitter.resize();
        }
    }
    addEmitter(emitter) {
        this.array.push(emitter);
    }
    removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
}
exports.Emitters = Emitters;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmittersPlugin = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Emitters_1 = __webpack_require__(/*! ./Emitters */ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js");
const Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js");
class EmittersPlugin {
    constructor() {
        this.id = "emitters";
    }
    getPlugin(container) {
        return new Emitters_1.Emitters(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (!(options === null || options === void 0 ? void 0 : options.emitters)) {
            return false;
        }
        const emitters = options.emitters;
        let loadEmitters = false;
        if (emitters instanceof Array) {
            if (emitters.length) {
                loadEmitters = true;
            }
        }
        else if (emitters !== undefined) {
            loadEmitters = true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            Utils_1.Utils.isInArray(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode)) {
            loadEmitters = true;
        }
        return loadEmitters;
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        if (optionsCast.emitters === undefined) {
            optionsCast.emitters = new Emitter_1.Emitter();
        }
        if (source === null || source === void 0 ? void 0 : source.emitters) {
            if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
                optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.emitters instanceof Array) {
                    optionsCast.emitters = new Emitter_1.Emitter();
                }
                optionsCast.emitters.load(source === null || source === void 0 ? void 0 : source.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                optionsCast.interactivity.modes.emitters = interactivityEmitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.interactivity.modes.emitters instanceof Array ||
                    optionsCast.interactivity.modes.emitters === undefined) {
                    optionsCast.interactivity.modes.emitters = new Emitter_1.Emitter();
                }
                optionsCast.interactivity.modes.emitters.load(interactivityEmitters);
            }
        }
    }
}
const plugin = new EmittersPlugin();
exports.EmittersPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterClickMode = void 0;
var EmitterClickMode;
(function (EmitterClickMode) {
    EmitterClickMode["emitter"] = "emitter";
})(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterClickMode = void 0;
const EmitterClickMode_1 = __webpack_require__(/*! ./EmitterClickMode */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js");
Object.defineProperty(exports, "EmitterClickMode", { enumerable: true, get: function () { return EmitterClickMode_1.EmitterClickMode; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const EmitterRate_1 = __webpack_require__(/*! ./EmitterRate */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js");
const EmitterLife_1 = __webpack_require__(/*! ./EmitterLife */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const EmitterSize_1 = __webpack_require__(/*! ./EmitterSize */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js");
class Emitter {
    constructor() {
        this.direction = Enums_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    load(data) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                if (this.size === undefined) {
                    this.size = new EmitterSize_1.EmitterSize();
                }
                this.size.load(data.size);
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = Utils_1.Utils.deepExtend({}, data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    }
}
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterLife = void 0;
class EmitterLife {
    load(data) {
        if (data !== undefined) {
            if (data.count !== undefined) {
                this.count = data.count;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    }
}
exports.EmitterLife = EmitterLife;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterRate = void 0;
class EmitterRate {
    constructor() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    load(data) {
        if (data !== undefined) {
            if (data.quantity !== undefined) {
                this.quantity = data.quantity;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
        }
    }
}
exports.EmitterRate = EmitterRate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterSize = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class EmitterSize {
    constructor() {
        this.mode = Enums_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }
    load(data) {
        if (data !== undefined) {
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            if (data.height !== undefined) {
                this.height = data.height;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
exports.EmitterSize = EmitterSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineArrangement = void 0;
var InlineArrangement;
(function (InlineArrangement) {
    InlineArrangement["equidistant"] = "equidistant";
    InlineArrangement["onePerPoint"] = "one-per-point";
    InlineArrangement["perPoint"] = "per-point";
    InlineArrangement["randomLength"] = "random-length";
    InlineArrangement["randomPoint"] = "random-point";
})(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveType = void 0;
var MoveType;
(function (MoveType) {
    MoveType["path"] = "path";
    MoveType["radius"] = "radius";
})(MoveType = exports.MoveType || (exports.MoveType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type["inline"] = "inline";
    Type["inside"] = "inside";
    Type["outside"] = "outside";
    Type["none"] = "none";
})(Type = exports.Type || (exports.Type = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.MoveType = exports.InlineArrangement = void 0;
const InlineArrangement_1 = __webpack_require__(/*! ./InlineArrangement */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js");
Object.defineProperty(exports, "InlineArrangement", { enumerable: true, get: function () { return InlineArrangement_1.InlineArrangement; } });
const MoveType_1 = __webpack_require__(/*! ./MoveType */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js");
Object.defineProperty(exports, "MoveType", { enumerable: true, get: function () { return MoveType_1.MoveType; } });
const Type_1 = __webpack_require__(/*! ./Type */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js");
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return Type_1.Type; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Draw = void 0;
const DrawStroke_1 = __webpack_require__(/*! ./DrawStroke */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js");
const OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Draw {
    constructor() {
        this.enable = false;
        this.stroke = new DrawStroke_1.DrawStroke();
    }
    get lineWidth() {
        return this.stroke.width;
    }
    set lineWidth(value) {
        this.stroke.width = value;
    }
    get lineColor() {
        return this.stroke.color;
    }
    set lineColor(value) {
        this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    }
}
exports.Draw = Draw;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawStroke = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class DrawStroke {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = Utils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
exports.DrawStroke = DrawStroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Inline = void 0;
const InlineArrangement_1 = __webpack_require__(/*! ../../Enums/InlineArrangement */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js");
class Inline {
    constructor() {
        this.arrangement = InlineArrangement_1.InlineArrangement.onePerPoint;
    }
    load(data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    }
}
exports.Inline = Inline;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSvg = void 0;
class LocalSvg {
    constructor() {
        this.path = [];
        this.size = {
            height: 0,
            width: 0,
        };
    }
    load(data) {
        if (data !== undefined) {
            if (data.path !== undefined) {
                this.path = data.path;
            }
            if (data.size !== undefined) {
                if (data.size.width !== undefined) {
                    this.size.width = data.size.width;
                }
                if (data.size.height !== undefined) {
                    this.size.height = data.size.height;
                }
            }
        }
    }
}
exports.LocalSvg = LocalSvg;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const MoveType_1 = __webpack_require__(/*! ../../Enums/MoveType */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js");
class Move {
    constructor() {
        this.radius = 10;
        this.type = MoveType_1.MoveType.path;
    }
    load(data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    }
}
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMask = void 0;
const Type_1 = __webpack_require__(/*! ../../Enums/Type */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js");
const Draw_1 = __webpack_require__(/*! ./Draw */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js");
const Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js");
const Inline_1 = __webpack_require__(/*! ./Inline */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js");
const LocalSvg_1 = __webpack_require__(/*! ./LocalSvg */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js");
class PolygonMask {
    constructor() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new Inline_1.Inline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = Type_1.Type.none;
    }
    get inlineArrangement() {
        return this.inline.arrangement;
    }
    set inlineArrangement(value) {
        this.inline.arrangement = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== Type_1.Type.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.data !== undefined) {
                if (typeof data.data === "string") {
                    this.data = data.data;
                }
                else {
                    this.data = new LocalSvg_1.LocalSvg();
                    this.data.load(data.data);
                }
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    }
}
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskInstance = void 0;
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js");
class PolygonMaskInstance {
    constructor(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.path2DSupported = !!window.Path2D;
        this.options = new PolygonMask_1.PolygonMask();
        this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
    }
    static polygonBounce(particle) {
        particle.velocity.horizontal = particle.velocity.vertical / 2 - particle.velocity.horizontal;
        particle.velocity.vertical = particle.velocity.horizontal / 2 - particle.velocity.vertical;
    }
    static drawPolygonMask(context, rawData, stroke) {
        const color = Utils_1.ColorUtils.colorToRgb(stroke.color);
        if (!color) {
            return;
        }
        context.beginPath();
        context.moveTo(rawData[0].x, rawData[0].y);
        for (const item of rawData) {
            context.lineTo(item.x, item.y);
        }
        context.closePath();
        context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color);
        context.lineWidth = stroke.width;
        context.stroke();
    }
    static drawPolygonMaskPath(context, path, stroke, position) {
        context.translate(position.x, position.y);
        const color = Utils_1.ColorUtils.colorToRgb(stroke.color);
        if (!color) {
            return;
        }
        context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color, stroke.opacity);
        context.lineWidth = stroke.width;
        context.stroke(path);
    }
    static parsePaths(paths, scale, offset) {
        const res = [];
        for (const path of paths) {
            const segments = path.element.pathSegList;
            const len = segments.numberOfItems;
            const p = {
                x: 0,
                y: 0,
            };
            for (let i = 0; i < len; i++) {
                const segment = segments.getItem(i);
                const svgPathSeg = window.SVGPathSeg;
                switch (segment.pathSegType) {
                    case svgPathSeg.PATHSEG_MOVETO_ABS:
                    case svgPathSeg.PATHSEG_LINETO_ABS:
                    case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    case svgPathSeg.PATHSEG_ARC_ABS:
                    case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                        const absSeg = segment;
                        p.x = absSeg.x;
                        p.y = absSeg.y;
                        break;
                    }
                    case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        p.x = segment.x;
                        break;
                    case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        p.y = segment.y;
                        break;
                    case svgPathSeg.PATHSEG_LINETO_REL:
                    case svgPathSeg.PATHSEG_MOVETO_REL:
                    case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    case svgPathSeg.PATHSEG_ARC_REL:
                    case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                        const relSeg = segment;
                        p.x += relSeg.x;
                        p.y += relSeg.y;
                        break;
                    }
                    case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        p.x += segment.x;
                        break;
                    case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        p.y += segment.y;
                        break;
                    case svgPathSeg.PATHSEG_UNKNOWN:
                    case svgPathSeg.PATHSEG_CLOSEPATH:
                        continue;
                }
                res.push({
                    x: p.x * scale + offset.x,
                    y: p.y * scale + offset.y,
                });
            }
        }
        return res;
    }
    initAsync(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
            const polygonMaskOptions = this.options;
            this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
            if (polygonMaskOptions.enable) {
                yield this.initRawData();
            }
        });
    }
    resize() {
        const container = this.container;
        const options = this.options;
        if (!(options.enable && options.type !== Enums_1.Type.none)) {
            return;
        }
        if (this.redrawTimeout) {
            clearTimeout(this.redrawTimeout);
        }
        this.redrawTimeout = window.setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            yield this.initRawData(true);
            container.particles.redraw();
        }), 250);
    }
    stop() {
        delete this.raw;
        delete this.paths;
    }
    particlesInitialization() {
        const options = this.options;
        if (options.enable &&
            options.type === Enums_1.Type.inline &&
            (options.inline.arrangement === Enums_1.InlineArrangement.onePerPoint ||
                options.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
            this.drawPoints();
            return true;
        }
        return false;
    }
    particlePosition(position, particle) {
        var _a, _b;
        const options = this.options;
        if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
            return;
        }
        const pos = Utils_1.Utils.deepExtend({}, position ? position : this.randomPoint());
        if (options.type === Enums_1.Type.inline && particle) {
            particle.initialPosition = pos;
        }
        return pos;
    }
    particleBounce(particle) {
        const options = this.options;
        if (options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline) {
            if (!this.checkInsidePolygon(particle.getPosition())) {
                PolygonMaskInstance.polygonBounce(particle);
                return true;
            }
        }
        else if (options.enable && options.type === Enums_1.Type.inline && particle.initialPosition) {
            const dist = Utils_1.Utils.getDistance(particle.initialPosition, particle.getPosition());
            if (dist > this.polygonMaskMoveRadius) {
                PolygonMaskInstance.polygonBounce(particle);
                return true;
            }
        }
        return false;
    }
    clickPositionValid(position) {
        const options = this.options;
        return (options.enable &&
            options.type !== Enums_1.Type.none &&
            options.type !== Enums_1.Type.inline &&
            this.checkInsidePolygon(position));
    }
    draw(context) {
        var _a;
        if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const options = this.options;
        const polygonDraw = options.draw;
        if (!(options.enable && polygonDraw.enable)) {
            return;
        }
        const rawData = this.raw;
        for (const path of this.paths) {
            const path2d = path.path2d;
            const path2dSupported = this.path2DSupported;
            if (!context) {
                continue;
            }
            if (path2dSupported && path2d && this.offset) {
                PolygonMaskInstance.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
            }
            else if (rawData) {
                PolygonMaskInstance.drawPolygonMask(context, rawData, polygonDraw.stroke);
            }
        }
    }
    checkInsidePolygon(position) {
        var _a, _b;
        const container = this.container;
        const options = this.options;
        if (!options.enable || options.type === Enums_1.Type.none || options.type === Enums_1.Type.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Utils_1.Constants.noPolygonFound);
        }
        const canvasSize = container.canvas.size;
        const x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
        const y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
        let inside = false;
        for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            const pi = this.raw[i];
            const pj = this.raw[j];
            const intersect = pi.y > y !== pj.y > y && x < ((pj.x - pi.x) * (y - pi.y)) / (pj.y - pi.y) + pi.x;
            if (intersect) {
                inside = !inside;
            }
        }
        return options.type === Enums_1.Type.inside ? inside : options.type === Enums_1.Type.outside ? !inside : false;
    }
    parseSvgPath(xml, force) {
        var _a, _b, _c;
        const forceDownload = force !== null && force !== void 0 ? force : false;
        if (this.paths !== undefined && !forceDownload) {
            return this.raw;
        }
        const container = this.container;
        const options = this.options;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "image/svg+xml");
        const svg = doc.getElementsByTagName("svg")[0];
        let svgPaths = svg.getElementsByTagName("path");
        if (!svgPaths.length) {
            svgPaths = doc.getElementsByTagName("path");
        }
        this.paths = [];
        for (let i = 0; i < svgPaths.length; i++) {
            const path = svgPaths.item(i);
            if (path) {
                this.paths.push({
                    element: path,
                    length: path.getTotalLength(),
                });
            }
        }
        const pxRatio = container.retina.pixelRatio;
        const scale = options.scale / pxRatio;
        this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
        this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
        const position = (_c = options.position) !== null && _c !== void 0 ? _c : {
            x: 50,
            y: 50,
        };
        this.offset = {
            x: (container.canvas.size.width * position.x) / (100 * pxRatio) - this.dimension.width / 2,
            y: (container.canvas.size.height * position.y) / (100 * pxRatio) - this.dimension.height / 2,
        };
        return PolygonMaskInstance.parsePaths(this.paths, scale, this.offset);
    }
    downloadSvgPath(svgUrl, force) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.options;
            const url = svgUrl || options.url;
            const forceDownload = force !== null && force !== void 0 ? force : false;
            if (!url || (this.paths !== undefined && !forceDownload)) {
                return this.raw;
            }
            const req = yield fetch(url);
            if (!req.ok) {
                throw new Error("tsParticles Error - Error occurred during polygon mask download");
            }
            return this.parseSvgPath(yield req.text(), force);
        });
    }
    drawPoints() {
        if (!this.raw) {
            return;
        }
        for (const item of this.raw) {
            this.container.particles.addParticle({
                x: item.x,
                y: item.y,
            });
        }
    }
    randomPoint() {
        const container = this.container;
        const options = this.options;
        let position;
        if (options.type === Enums_1.Type.inline) {
            switch (options.inline.arrangement) {
                case Enums_1.InlineArrangement.randomPoint:
                    position = this.getRandomPoint();
                    break;
                case Enums_1.InlineArrangement.randomLength:
                    position = this.getRandomPointByLength();
                    break;
                case Enums_1.InlineArrangement.equidistant:
                    position = this.getEquidistantPointByIndex(container.particles.count);
                    break;
                case Enums_1.InlineArrangement.onePerPoint:
                case Enums_1.InlineArrangement.perPoint:
                default:
                    position = this.getPointByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPoint();
        }
    }
    getRandomPoint() {
        if (!this.raw || !this.raw.length) {
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    }
    getRandomPointByLength() {
        var _a, _b, _c;
        const options = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const path = Utils_1.Utils.itemFromArray(this.paths);
        const distance = Math.floor(Math.random() * path.length) + 1;
        const point = path.element.getPointAtLength(distance);
        return {
            x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
            y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0),
        };
    }
    getEquidistantPointByIndex(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        const options = this.container.options;
        const polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        let offset = 0;
        let point;
        const totalLength = this.paths.reduce((tot, path) => tot + path.length, 0);
        const distance = totalLength / options.particles.number.value;
        for (const path of this.paths) {
            const pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
            y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0),
        };
    }
    getPointByIndex(index) {
        if (!this.raw || !this.raw.length) {
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    }
    createPath2D() {
        var _a, _b;
        const options = this.options;
        if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        for (const path of this.paths) {
            const pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
            if (pathData) {
                const path2d = new Path2D(pathData);
                const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                const finalPath = new Path2D();
                const transform = matrix.scale(options.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (path.path2d || !this.raw) {
                continue;
            }
            path.path2d = new Path2D();
            path.path2d.moveTo(this.raw[0].x, this.raw[0].y);
            this.raw.forEach((pos, i) => {
                var _a;
                if (i > 0) {
                    (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                }
            });
            path.path2d.closePath();
        }
    }
    initRawData(force) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.options;
            if (options.url) {
                this.raw = yield this.downloadSvgPath(options.url, force);
            }
            else if (options.data) {
                const data = options.data;
                let svg;
                if (typeof data !== "string") {
                    const path = data.path instanceof Array
                        ? data.path.map((t) => `<path d="${t}" />`).join("")
                        : `<path d="${data.path}" />`;
                    const namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                    svg = `<svg ${namespaces} width="${data.size.width}" height="${data.size.height}">${path}</svg>`;
                }
                else {
                    svg = data;
                }
                this.raw = this.parseSvgPath(svg, force);
            }
            this.createPath2D();
        });
    }
}
exports.PolygonMaskInstance = PolygonMaskInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskPlugin = void 0;
const PolygonMaskInstance_1 = __webpack_require__(/*! ./PolygonMaskInstance */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js");
const PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
class PolygonMaskPlugin {
    constructor() {
        this.id = "polygonMask";
    }
    getPlugin(container) {
        return new PolygonMaskInstance_1.PolygonMaskInstance(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : (((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none);
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        if (optionsCast.polygon === undefined) {
            optionsCast.polygon = new PolygonMask_1.PolygonMask();
        }
        optionsCast.polygon.load(source === null || source === void 0 ? void 0 : source.polygon);
    }
}
const plugin = new PolygonMaskPlugin();
exports.PolygonMaskPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleDrawer = void 0;
class CircleDrawer {
    draw(context, particle, radius) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    }
}
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDrawer = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class ImageDrawer {
    constructor() {
        this.images = [];
    }
    getImages(container) {
        const containerImages = this.images.filter((t) => t.id === container.id);
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        else {
            return containerImages[0];
        }
    }
    addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    }
    init(container) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const options = container.options;
            const shapeOptions = options.particles.shape;
            if (!Utils_1.Utils.isInArray(Enums_1.ShapeType.image, shapeOptions.type) &&
                !Utils_1.Utils.isInArray(Enums_1.ShapeType.images, shapeOptions.type)) {
                return;
            }
            const imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];
            if (imageOptions instanceof Array) {
                for (const optionsImage of imageOptions) {
                    yield this.loadImageShape(container, optionsImage);
                }
            }
            else {
                yield this.loadImageShape(container, imageOptions);
            }
        });
    }
    destroy() {
        this.images = [];
    }
    loadImageShape(container, imageShape) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = imageShape.replaceColor
                    ? yield Utils_1.Utils.downloadSvgImage(imageShape.src)
                    : yield Utils_1.Utils.loadImage(imageShape.src);
                this.addImage(container, image);
            }
            catch (_a) {
                console.log(`tsParticles error - ${imageShape.src} not found`);
            }
        });
    }
    draw(context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        const image = particle.image;
        const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        const pos = {
            x: -radius,
            y: -radius,
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    }
}
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LineDrawer = void 0;
class LineDrawer {
    draw(context, particle, radius) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    }
}
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonDrawer = void 0;
const PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js");
class PolygonDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getSidesData(particle, radius) {
        var _a, _b;
        const polygon = particle.shapeData;
        const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: (radius * 2.66) / (sides / 3),
        };
    }
    getCenter(particle, radius) {
        var _a, _b;
        const polygon = particle.shapeData;
        const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    }
}
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonDrawerBase = void 0;
class PolygonDrawerBase {
    draw(context, particle, radius) {
        const start = this.getCenter(particle, radius);
        const side = this.getSidesData(particle, radius);
        const sideCount = side.count.numerator * side.count.denominator;
        const decimalSides = side.count.numerator / side.count.denominator;
        const interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        const interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (let i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    }
}
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareDrawer = void 0;
class SquareDrawer {
    draw(context, particle, radius) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    }
}
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StarDrawer = void 0;
class StarDrawer {
    draw(context, particle, radius) {
        var _a, _b, _c;
        const star = particle.shapeData;
        const sides = (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
        const inset = (_c = star === null || star === void 0 ? void 0 : star.inset) !== null && _c !== void 0 ? _c : 2;
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    }
}
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDrawer = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class TextDrawer {
    init(container) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const options = container.options;
            if (Utils_1.Utils.isInArray(Enums_1.ShapeType.char, options.particles.shape.type) ||
                Utils_1.Utils.isInArray(Enums_1.ShapeType.character, options.particles.shape.type)) {
                const shapeOptions = ((_a = options.particles.shape.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[Enums_1.ShapeType.char]);
                if (shapeOptions instanceof Array) {
                    for (const character of shapeOptions) {
                        yield Utils_1.Utils.loadFont(character);
                    }
                }
                else {
                    if (shapeOptions !== undefined) {
                        yield Utils_1.Utils.loadFont(shapeOptions);
                    }
                }
            }
        });
    }
    draw(context, particle, radius) {
        const character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        const textData = character.value;
        if (textData === undefined) {
            return;
        }
        const textParticle = particle;
        if (textParticle.text === undefined) {
            if (textData instanceof Array) {
                textParticle.text = Utils_1.Utils.itemFromArray(textData, particle.randomIndexData);
            }
            else {
                textParticle.text = textData;
            }
        }
        const text = textParticle.text;
        const style = character.style;
        const weight = character.weight;
        const size = Math.round(radius) * 2;
        const font = character.font;
        const fill = particle.fill;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    }
}
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleDrawer = void 0;
const PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js");
class TriangleDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getSidesData(particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    }
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    }
}
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CanvasUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasUtils = void 0;
const ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
class CanvasUtils {
    static paintBase(context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    }
    static clear(context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    }
    static drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, colorLine, opacity, shadow) {
        let drawn = false;
        if (Utils_1.Utils.getDistance(begin, end) <= maxDistance) {
            this.drawLine(context, begin, end);
            drawn = true;
        }
        else if (warp) {
            let pi1;
            let pi2;
            const endNE = {
                x: end.x - canvasSize.width,
                y: end.y,
            };
            const { dx, dy, distance } = Utils_1.Utils.getDistances(begin, endNE);
            if (distance <= maxDistance) {
                const yi = begin.y - (dy / dx) * begin.x;
                pi1 = { x: 0, y: yi };
                pi2 = { x: canvasSize.width, y: yi };
            }
            else {
                const endSW = {
                    x: end.x,
                    y: end.y - canvasSize.height,
                };
                const { dx, dy, distance } = Utils_1.Utils.getDistances(begin, endSW);
                if (distance <= maxDistance) {
                    const yi = begin.y - (dy / dx) * begin.x;
                    const xi = -yi / (dy / dx);
                    pi1 = { x: xi, y: 0 };
                    pi2 = { x: xi, y: canvasSize.height };
                }
                else {
                    const endSE = {
                        x: end.x - canvasSize.width,
                        y: end.y - canvasSize.height,
                    };
                    const { dx, dy, distance } = Utils_1.Utils.getDistances(begin, endSE);
                    if (distance <= maxDistance) {
                        const yi = begin.y - (dy / dx) * begin.x;
                        const xi = -yi / (dy / dx);
                        pi1 = { x: xi, y: yi };
                        pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                    }
                }
            }
            if (pi1 && pi2) {
                this.drawLine(context, begin, pi1);
                this.drawLine(context, end, pi2);
                drawn = true;
            }
        }
        if (!drawn) {
            return;
        }
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        if (shadow.enable) {
            const shadowColor = ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
            if (shadowColor) {
                context.shadowBlur = shadow.blur;
                context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            }
        }
        context.stroke();
    }
    static drawLinkTriangle(context, width, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle) {
        this.drawTriangle(context, pos1, pos2, pos3);
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorTriangle, opacityTriangle);
        context.fill();
    }
    static drawConnectLine(context, width, lineStyle, begin, end) {
        context.save();
        this.drawLine(context, begin, end);
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
    }
    static gradient(context, p1, p2, opacity) {
        const gradStop = Math.floor(p2.size.value / p1.size.value);
        const color1 = p1.getColor();
        const color2 = p2.getColor();
        if (!color1 || !color2) {
            return;
        }
        const sourcePos = p1.getPosition();
        const destPos = p2.getPosition();
        const midRgb = ColorUtils_1.ColorUtils.mix(color1, color2, p1.size.value, p2.size.value);
        const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromHsl(color1, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromRgb(midRgb, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromHsl(color2, opacity));
        return grad;
    }
    static drawGrabLine(context, width, begin, end, colorLine, opacity) {
        context.save();
        this.drawLine(context, begin, end);
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
    }
    static drawParticle(container, context, particle, delta, colorValue, backgroundMask, radius, opacity, shadow) {
        const pos = particle.getPosition();
        context.save();
        context.translate(pos.x, pos.y);
        context.beginPath();
        if (particle.angle !== 0) {
            context.rotate((particle.angle * Math.PI) / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        const shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        const stroke = particle.stroke;
        context.lineWidth = stroke.width;
        if (particle.strokeColor) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(particle.strokeColor, particle.stroke.opacity);
        }
        if (particle.close) {
            context.closePath();
        }
        this.drawShape(container, context, particle, radius, opacity, delta);
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
        context.save();
        context.translate(pos.x, pos.y);
        if (particle.angle !== 0) {
            context.rotate((particle.angle * Math.PI) / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        this.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
        context.restore();
    }
    static drawShape(container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        const drawer = container.drawers.get(particle.shape);
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity, delta);
    }
    static drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        const drawer = container.drawers.get(particle.shape);
        if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
            return;
        }
        drawer.afterEffect(context, particle, radius, opacity, delta);
    }
    static drawPlugin(context, plugin, delta) {
        if (plugin.draw !== undefined) {
            context.save();
            plugin.draw(context, delta);
            context.restore();
        }
    }
    static drawLine(context, begin, end) {
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
    }
    static drawTriangle(context, p1, p2, p3) {
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.lineTo(p3.x, p3.y);
        context.closePath();
    }
}
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Circle.js":
/*!*******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Circle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
class Circle extends Range_1.Range {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    contains(point) {
        const d = Math.pow(point.x - this.position.x, 2) + Math.pow(point.y - this.position.y, 2);
        return d <= this.radius * this.radius;
    }
    intersects(range) {
        const rect = range;
        const circle = range;
        const pos1 = this.position;
        const pos2 = range.position;
        const xDist = Math.abs(pos2.x - pos1.x);
        const yDist = Math.abs(pos2.y - pos1.y);
        const r = this.radius;
        if (circle.radius !== undefined) {
            const r2 = circle.radius;
            const rSum = r + r2;
            const dist = Math.sqrt(xDist * xDist + yDist + yDist);
            return rSum > dist;
        }
        else if (rect.size !== undefined) {
            const w = rect.size.width;
            const h = rect.size.height;
            const edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
            if (xDist > r + w || yDist > r + h) {
                return false;
            }
            if (xDist <= w || yDist <= h) {
                return true;
            }
            return edges <= r * r;
        }
        return false;
    }
}
exports.Circle = Circle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CircleWarp.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CircleWarp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleWarp = void 0;
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
const Circle_1 = __webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
class CircleWarp extends Circle_1.Circle {
    constructor(x, y, radius, canvasSize) {
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = {
            height: canvasSize.height,
            width: canvasSize.width,
        };
    }
    contains(point) {
        if (super.contains(point)) {
            return true;
        }
        const posNE = {
            x: point.x - this.canvasSize.width,
            y: point.y,
        };
        if (super.contains(posNE)) {
            return true;
        }
        const posSE = {
            x: point.x - this.canvasSize.width,
            y: point.y - this.canvasSize.height,
        };
        if (super.contains(posSE)) {
            return true;
        }
        const posSW = {
            x: point.x,
            y: point.y - this.canvasSize.height,
        };
        return super.contains(posSW);
    }
    intersects(range) {
        if (super.intersects(range)) {
            return true;
        }
        const rect = range;
        const circle = range;
        const newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height,
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
            return super.intersects(biggerCircle);
        }
        else if (rect.size !== undefined) {
            const rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return super.intersects(rectSW);
        }
        return false;
    }
}
exports.CircleWarp = CircleWarp;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/ColorUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/ColorUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUtils = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
class ColorUtils {
    static colorToRgb(input) {
        var _a, _b;
        if (input === undefined) {
            return;
        }
        const color = typeof input === "string" ? { value: input } : input;
        let res;
        if (typeof color.value === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = this.getRandomRgbColor();
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                const colorSelected = Utils_1.Utils.itemFromArray(color.value);
                res = ColorUtils.colorToRgb({ value: colorSelected });
            }
            else {
                const colorValue = color.value;
                const rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                else {
                    const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
                    if (hslColor.h !== undefined) {
                        res = ColorUtils.hslToRgb(hslColor);
                    }
                }
            }
        }
        return res;
    }
    static colorToHsl(color) {
        const rgb = this.colorToRgb(color);
        return rgb !== undefined ? this.rgbToHsl(rgb) : rgb;
    }
    static rgbToHsl(color) {
        const r1 = color.r / 255;
        const g1 = color.g / 255;
        const b1 = color.b / 255;
        const maxColor = Math.max(r1, g1, b1);
        const minColor = Math.min(r1, g1, b1);
        const res = {
            h: 0,
            l: (maxColor + minColor) / 2,
            s: 0,
        };
        if (maxColor != minColor) {
            res.s =
                res.l < 0.5
                    ? (maxColor - minColor) / (maxColor + minColor)
                    : (maxColor - minColor) / (2.0 - maxColor - minColor);
            res.h =
                r1 === maxColor
                    ? (g1 - b1) / (maxColor - minColor)
                    : (res.h =
                        g1 === maxColor
                            ? 2.0 + (b1 - r1) / (maxColor - minColor)
                            : 4.0 + (r1 - g1) / (maxColor - minColor));
        }
        res.l *= 100;
        res.s *= 100;
        res.h *= 60;
        if (res.h < 0) {
            res.h += 360;
        }
        return res;
    }
    static stringToAlpha(input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    }
    static stringToRgb(input) {
        return ColorUtils.stringToRgba(input);
    }
    static hslToRgb(hsl) {
        const result = { b: 0, g: 0, r: 0 };
        const hslPercent = {
            h: hsl.h / 360,
            l: hsl.l / 100,
            s: hsl.s / 100,
        };
        if (hslPercent.s === 0) {
            result.b = hslPercent.l;
            result.g = hslPercent.l;
            result.r = hslPercent.l;
        }
        else {
            const q = hslPercent.l < 0.5
                ? hslPercent.l * (1 + hslPercent.s)
                : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
            const p = 2 * hslPercent.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
            result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
        }
        result.r = Math.floor(result.r * 255);
        result.g = Math.floor(result.g * 255);
        result.b = Math.floor(result.b * 255);
        return result;
    }
    static hslaToRgba(hsla) {
        const rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    }
    static getRandomRgbColor(min) {
        var _a;
        const fixedMin = min || 0;
        const minColor = fixedMin + fixedMin * Math.pow(16, 2) + fixedMin * Math.pow(16, 4);
        const factor = minColor ^ 0xffffff;
        const randomColor = Math.floor((Math.random() * factor) | minColor).toString(16);
        return ((_a = this.stringToRgb(`#${randomColor}`)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        });
    }
    static getStyleFromRgb(color, opacity) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
    }
    static getStyleFromHsl(color, opacity) {
        return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
    }
    static mix(color1, color2, size1, size2) {
        let rgb1 = color1;
        let rgb2 = color2;
        if (rgb1.r === undefined) {
            rgb1 = this.hslToRgb(color1);
        }
        if (rgb2.r === undefined) {
            rgb2 = this.hslToRgb(color2);
        }
        return {
            b: Utils_1.Utils.mix(rgb1.b, rgb2.b, size1, size2),
            g: Utils_1.Utils.mix(rgb1.g, rgb2.g, size1, size2),
            r: Utils_1.Utils.mix(rgb1.r, rgb2.r, size1, size2),
        };
    }
    static hue2rgb(p, q, t) {
        let tCalc = t;
        if (tCalc < 0) {
            tCalc += 1;
        }
        if (tCalc > 1) {
            tCalc -= 1;
        }
        if (tCalc < 1 / 6) {
            return p + (q - p) * 6 * tCalc;
        }
        if (tCalc < 1 / 2) {
            return q;
        }
        if (tCalc < 2 / 3) {
            return p + (q - p) * (2 / 3 - tCalc) * 6;
        }
        return p;
    }
    static stringToRgba(input) {
        if (input.startsWith("rgb")) {
            const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
            const result = regex.exec(input);
            return result
                ? {
                    a: result.length > 4 ? parseFloat(result[5]) : 1,
                    b: parseInt(result[3], 10),
                    g: parseInt(result[2], 10),
                    r: parseInt(result[1], 10),
                }
                : undefined;
        }
        else if (input.startsWith("hsl")) {
            const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
            const result = regex.exec(input);
            return result
                ? ColorUtils.hslaToRgba({
                    a: result.length > 4 ? parseFloat(result[5]) : 1,
                    h: parseInt(result[1], 10),
                    l: parseInt(result[3], 10),
                    s: parseInt(result[2], 10),
                })
                : undefined;
        }
        else {
            const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
                return r + r + g + g + b + b + (a !== undefined ? a + a : "");
            });
            const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            const result = regex.exec(hexFixed);
            return result
                ? {
                    a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
                    b: parseInt(result[3], 16),
                    g: parseInt(result[2], 16),
                    r: parseInt(result[1], 16),
                }
                : undefined;
        }
    }
}
exports.ColorUtils = ColorUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.midColorValue = "mid";
Constants.touchEndEvent = "touchend";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
Constants.noPolygonDataLoaded = "No polygon data loaded.";
Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/EventListeners.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/EventListeners.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListeners = void 0;
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
class EventListeners {
    constructor(container) {
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchStartHandler = (e) => this.mouseTouchMove(e);
        this.touchMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchEndHandler = () => this.mouseTouchFinish();
        this.mouseLeaveHandler = () => this.mouseTouchFinish();
        this.touchCancelHandler = () => this.mouseTouchFinish();
        this.touchEndClickHandler = (e) => this.mouseTouchClick(e);
        this.mouseUpHandler = (e) => this.mouseTouchClick(e);
        this.visibilityChangeHandler = () => this.handleVisibilityChange();
        this.resizeHandler = () => this.handleWindowResize();
    }
    static manageListener(element, event, handler, add, options) {
        if (add) {
            let addOptions = { passive: true };
            if (typeof options === "boolean") {
                addOptions.capture = options;
            }
            else if (options !== undefined) {
                addOptions = options;
            }
            element.addEventListener(event, handler, addOptions);
        }
        else {
            const removeOptions = options;
            element.removeEventListener(event, handler, removeOptions);
        }
    }
    addListeners() {
        this.manageListeners(true);
    }
    removeListeners() {
        this.manageListeners(false);
    }
    manageListeners(add) {
        const container = this.container;
        const options = container.options;
        const detectType = options.interactivity.detectsOn;
        if (detectType === Enums_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        const interactivityEl = container.interactivity.element;
        if (interactivityEl &&
            (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    }
    handleWindowResize() {
        const container = this.container;
        const options = container.options;
        const canvas = container.canvas.element;
        if (!canvas) {
            return;
        }
        const pxRatio = container.retina.pixelRatio;
        container.canvas.size.width = canvas.offsetWidth * pxRatio;
        container.canvas.size.height = canvas.offsetHeight * pxRatio;
        canvas.width = container.canvas.size.width;
        canvas.height = container.canvas.size.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (const [, plugin] of container.plugins) {
            if (plugin.resize !== undefined) {
                plugin.resize();
            }
        }
    }
    handleVisibilityChange() {
        const container = this.container;
        const options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw();
            }
        }
    }
    mouseTouchMove(e) {
        var _a, _b, _c;
        const container = this.container;
        const options = container.options;
        let pos;
        const canvas = container.canvas.element;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            const mouseEvent = e;
            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
                return;
            }
            if (container.interactivity.element === window) {
                if (canvas) {
                    const clientRect = canvas.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
                const source = mouseEvent.target;
                const target = mouseEvent.currentTarget;
                if (source && target) {
                    const sourceRect = source.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            const touchEvent = e;
            const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            const canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
            };
        }
        const pxRatio = container.retina.pixelRatio;
        if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    }
    mouseTouchFinish() {
        const container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    }
    mouseTouchClick(e) {
        const container = this.container;
        const options = container.options;
        let handled = false;
        const mousePosition = container.interactivity.mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (const [, plugin] of container.plugins) {
            if (plugin.clickPositionValid !== undefined) {
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
    }
    doMouseTouchClick(e) {
        const container = this.container;
        const options = container.options;
        if (this.canPush) {
            const mousePos = container.interactivity.mouse.position;
            if (mousePos) {
                container.interactivity.mouse.clickPosition = {
                    x: mousePos.x,
                    y: mousePos.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            const onClick = options.interactivity.events.onClick;
            if (onClick.mode instanceof Array) {
                for (const mode of onClick.mode) {
                    this.handleClickMode(mode);
                }
            }
            else {
                this.handleClickMode(onClick.mode);
            }
        }
        if (e.type === "touchend") {
            setTimeout(() => this.mouseTouchFinish(), 500);
        }
    }
    handleClickMode(mode) {
        const container = this.container;
        const options = container.options;
        const pushNb = options.interactivity.modes.push.quantity;
        const removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
            case Enums_1.ClickMode.push: {
                if (pushNb > 0) {
                    if (options.particles.move.enable) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else {
                        if (pushNb === 1) {
                            container.particles.push(pushNb, container.interactivity.mouse);
                        }
                        else if (pushNb > 1) {
                            container.particles.push(pushNb);
                        }
                    }
                }
                break;
            }
            case Enums_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case Enums_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case Enums_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (const particle of container.repulse.particles) {
                    particle.velocity.horizontal = particle.initialVelocity.horizontal;
                    particle.velocity.vertical = particle.initialVelocity.vertical;
                }
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(() => {
                    if (!container.destroyed) {
                        container.repulse.clicking = false;
                    }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
            case Enums_1.ClickMode.pause:
                if (container.getAnimationStatus()) {
                    container.pause();
                }
                else {
                    container.play();
                }
                break;
        }
        for (const [, plugin] of container.plugins) {
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    }
}
exports.EventListeners = EventListeners;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Plugins.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Plugins.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugins = void 0;
class Plugins {
    static getPlugin(plugin) {
        return this.plugins.filter((t) => t.id === plugin)[0];
    }
    static addPlugin(plugin) {
        if (!this.getPlugin(plugin.id)) {
            this.plugins.push(plugin);
        }
    }
    static getAvailablePlugins(container) {
        const res = new Map();
        const availablePlugins = this.plugins.filter((t) => t.needsPlugin(container.options));
        for (const plugin of availablePlugins) {
            res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
    }
    static loadOptions(options, sourceOptions) {
        for (const plugin of this.plugins) {
            plugin.loadOptions(options, sourceOptions);
        }
    }
    static getPreset(preset) {
        return this.presets.get(preset);
    }
    static addPreset(presetKey, options) {
        if (!this.getPreset(presetKey)) {
            this.presets.set(presetKey, options);
        }
    }
    static addShapeDrawer(type, drawer) {
        if (!this.getShapeDrawer(type)) {
            this.drawers.set(type, drawer);
        }
    }
    static getShapeDrawer(type) {
        return this.drawers.get(type);
    }
    static getSupportedShapes() {
        return this.drawers.keys();
    }
}
exports.Plugins = Plugins;
Plugins.plugins = [];
Plugins.presets = new Map();
Plugins.drawers = new Map();


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Point.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Point.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(position, particle) {
        this.position = position;
        this.particle = particle;
    }
}
exports.Point = Point;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/QuadTree.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/QuadTree.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadTree = void 0;
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
class QuadTree {
    constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }
    subdivide() {
        const x = this.rectangle.position.x;
        const y = this.rectangle.position.y;
        const w = this.rectangle.size.width;
        const h = this.rectangle.size.height;
        const capacity = this.capacity;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
        this.divided = true;
    }
    insert(point) {
        var _a, _b, _c, _d, _e;
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        if (!this.divided) {
            this.subdivide();
        }
        return ((_e = (((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)))) !== null && _e !== void 0 ? _e : false);
    }
    query(range, found) {
        var _a, _b, _c, _d;
        const res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        else {
            for (const p of this.points.filter((p) => range.contains(p.position))) {
                res.push(p.particle);
            }
            if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
            }
        }
        return res;
    }
}
exports.QuadTree = QuadTree;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Range.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
class Range {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
}
exports.Range = Range;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Rectangle.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Rectangle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
class Rectangle extends Range_1.Range {
    constructor(x, y, width, height) {
        super(x, y);
        this.size = {
            height: height,
            width: width,
        };
    }
    contains(point) {
        return (point.x >= this.position.x &&
            point.x <= this.position.x + this.size.width &&
            point.y >= this.position.y &&
            point.y <= this.position.y + this.size.height);
    }
    intersects(range) {
        const rect = range;
        const circle = range;
        const w = this.size.width;
        const h = this.size.height;
        const pos1 = this.position;
        const pos2 = range.position;
        if (circle.radius !== undefined) {
            return circle.intersects(this);
        }
        else if (rect.size !== undefined) {
            const size2 = rect.size;
            const w2 = size2.width;
            const h2 = size2.height;
            return (pos2.x - w2 < pos1.x + w &&
                pos2.x + w2 > pos1.x - w &&
                pos2.y - h2 < pos1.y + h &&
                pos2.y + h2 > pos1.y - h);
        }
        return false;
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Utils.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
class Utils {
    static isSsr() {
        return typeof window === "undefined" || !window;
    }
    static get animate() {
        return this.isSsr()
            ? (callback) => setTimeout(callback)
            : (callback) => (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.setTimeout)(callback);
    }
    static get cancelAnimation() {
        return this.isSsr()
            ? (handle) => clearTimeout(handle)
            : (handle) => (window.cancelAnimationFrame ||
                window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame ||
                window.oCancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame ||
                window.clearTimeout)(handle);
    }
    static replaceColorSvg(image, color, opacity) {
        if (!image.svgData) {
            return "";
        }
        const svgXml = image.svgData;
        const rgbHex = /#([0-9A-F]{3,6})/gi;
        return svgXml.replace(rgbHex, () => ColorUtils_1.ColorUtils.getStyleFromHsl(color, opacity));
    }
    static clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }
    static isInArray(value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    }
    static mix(comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    }
    static getParticleBaseVelocity(particle) {
        let velocityBase;
        switch (particle.direction) {
            case Enums_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case Enums_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case Enums_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case Enums_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case Enums_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case Enums_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case Enums_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case Enums_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    }
    static getDistances(pointA, pointB) {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        return { dx: dx, dy: dy, distance: Math.sqrt(dx * dx + dy * dy) };
    }
    static getDistance(pointA, pointB) {
        return this.getDistances(pointA, pointB).distance;
    }
    static loadFont(character) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield document.fonts.load(`${character.weight} 36px '${character.font}'`);
            }
            catch (_a) {
            }
        });
    }
    static arrayRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    static itemFromArray(array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    }
    static randomInRange(r1, r2) {
        const max = Math.max(r1, r2);
        const min = Math.min(r1, r2);
        return Math.random() * (max - min) + min;
    }
    static isPointInside(point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    }
    static areBoundsInside(bounds, size) {
        return bounds.left < size.width && bounds.right > 0 && bounds.top < size.height && bounds.bottom > 0;
    }
    static calculateBounds(point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    }
    static loadImage(source) {
        return new Promise((resolve, reject) => {
            const image = {
                source: source,
                type: source.substr(source.length - 3),
            };
            if (source) {
                const img = new Image();
                img.addEventListener("load", () => {
                    image.element = img;
                    resolve(image);
                });
                img.addEventListener("error", () => {
                    reject(`Error tsParticles - loading image: ${source}`);
                });
                img.src = source;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    }
    static downloadSvgImage(source) {
        return __awaiter(this, void 0, void 0, function* () {
            if (source) {
                const image = {
                    source: source,
                    type: source.substr(source.length - 3),
                };
                if (image.type !== "svg") {
                    return this.loadImage(source);
                }
                const response = yield fetch(image.source);
                if (response.ok) {
                    image.svgData = yield response.text();
                    return image;
                }
                else {
                    throw new Error("Error tsParticles - Image not found");
                }
            }
            else {
                throw new Error("Error tsParticles - No image.src");
            }
        });
    }
    static deepExtend(destination, ...sources) {
        for (const source of sources) {
            if (source === undefined || source === null) {
                continue;
            }
            if (typeof source !== "object") {
                destination = source;
                continue;
            }
            const sourceIsArray = Array.isArray(source);
            if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
                destination = [];
            }
            else if (!sourceIsArray &&
                (typeof destination !== "object" || !destination || Array.isArray(destination))) {
                destination = {};
            }
            for (const key in source) {
                if (key === "__proto__") {
                    continue;
                }
                const value = source[key];
                const isObject = typeof value === "object";
                destination[key] =
                    isObject && Array.isArray(value)
                        ? value.map((v) => this.deepExtend(destination[key], v))
                        : this.deepExtend(destination[key], value);
            }
        }
        return destination;
    }
    static isDivModeEnabled(mode, divs) {
        return divs instanceof Array
            ? divs.filter((t) => t.enable && Utils.isInArray(mode, t.mode)).length > 0
            : Utils.isInArray(mode, divs.mode);
    }
    static divModeExecute(mode, divs, callback) {
        if (divs instanceof Array) {
            for (const div of divs) {
                const divMode = div.mode;
                const divEnabled = div.enable;
                if (divEnabled && Utils.isInArray(mode, divMode)) {
                    this.singleDivModeExecute(div, callback);
                }
            }
        }
        else {
            const divMode = divs.mode;
            const divEnabled = divs.enable;
            if (divEnabled && Utils.isInArray(mode, divMode)) {
                this.singleDivModeExecute(divs, callback);
            }
        }
    }
    static singleDivModeExecute(div, callback) {
        const ids = div.ids;
        if (ids instanceof Array) {
            for (const id of ids) {
                callback(id, div);
            }
        }
        else {
            callback(ids, div);
        }
    }
    static divMode(divs, divId) {
        if (!divId) {
            return;
        }
        if (!divs) {
            return;
        }
        if (divs instanceof Array) {
            return divs.find((d) => Utils.isInArray(divId, d.ids));
        }
        else if (Utils.isInArray(divId, divs.ids)) {
            return divs;
        }
    }
}
exports.Utils = Utils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./CanvasUtils */ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js"), exports);
__exportStar(__webpack_require__(/*! ./CircleWarp */ "./node_modules/tsparticles/dist/Utils/CircleWarp.js"), exports);
__exportStar(__webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js"), exports);
__exportStar(__webpack_require__(/*! ./EventListeners */ "./node_modules/tsparticles/dist/Utils/EventListeners.js"), exports);
__exportStar(__webpack_require__(/*! ./Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js"), exports);
__exportStar(__webpack_require__(/*! ./Point */ "./node_modules/tsparticles/dist/Utils/Point.js"), exports);
__exportStar(__webpack_require__(/*! ./QuadTree */ "./node_modules/tsparticles/dist/Utils/QuadTree.js"), exports);
__exportStar(__webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js"), exports);
__exportStar(__webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js"), exports);
__exportStar(__webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsParticles = exports.pJSDom = exports.particlesJS = void 0;
const pjs_1 = __webpack_require__(/*! ./pjs */ "./node_modules/tsparticles/dist/pjs.js");
const main_1 = __webpack_require__(/*! ./main */ "./node_modules/tsparticles/dist/main.js");
const tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();
const { particlesJS, pJSDom } = pjs_1.initPjs(tsParticles);
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/main.js":
/*!***********************************************!*\
  !*** ./node_modules/tsparticles/dist/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const main_slim_1 = __webpack_require__(/*! ./main.slim */ "./node_modules/tsparticles/dist/main.slim.js");
const AbsorbersPlugin_1 = __webpack_require__(/*! ./Plugins/Absorbers/AbsorbersPlugin */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js");
const EmittersPlugin_1 = __webpack_require__(/*! ./Plugins/Emitters/EmittersPlugin */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js");
const PolygonMaskPlugin_1 = __webpack_require__(/*! ./Plugins/PolygonMask/PolygonMaskPlugin */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js");
class Main extends main_slim_1.MainSlim {
    constructor() {
        super();
        this.addPlugin(AbsorbersPlugin_1.AbsorbersPlugin);
        this.addPlugin(EmittersPlugin_1.EmittersPlugin);
        this.addPlugin(PolygonMaskPlugin_1.PolygonMaskPlugin);
    }
}
exports.Main = Main;


/***/ }),

/***/ "./node_modules/tsparticles/dist/main.slim.js":
/*!****************************************************!*\
  !*** ./node_modules/tsparticles/dist/main.slim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSlim = void 0;
const SquareDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/SquareDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js");
const TextDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TextDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js");
const ImageDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/ImageDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Types_1 = __webpack_require__(/*! ./Enums/Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js");
const LineDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/LineDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js");
const CircleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/CircleDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js");
const TriangleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TriangleDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js");
const StarDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/StarDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js");
const PolygonDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/PolygonDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js");
const Loader_1 = __webpack_require__(/*! ./Core/Loader */ "./node_modules/tsparticles/dist/Core/Loader.js");
class MainSlim {
    constructor() {
        this.initialized = false;
        const squareDrawer = new SquareDrawer_1.SquareDrawer();
        const textDrawer = new TextDrawer_1.TextDrawer();
        const imageDrawer = new ImageDrawer_1.ImageDrawer();
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.edge, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.square, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.char, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.character, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.image, imageDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.images, imageDrawer);
    }
    init() {
        if (!this.initialized) {
            this.initialized = true;
        }
    }
    loadFromArray(tagId, params, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.loadFromArray(tagId, params, index);
        });
    }
    load(tagId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.load(tagId, params);
        });
    }
    loadJSON(tagId, pathConfigJson) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson);
    }
    setOnClickHandler(callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    }
    dom() {
        return Loader_1.Loader.dom();
    }
    domItem(index) {
        return Loader_1.Loader.domItem(index);
    }
    addShape(shape, drawer, init, afterEffect, destroy) {
        let customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                afterEffect: afterEffect,
                destroy: destroy,
                draw: drawer,
                init: init,
            };
        }
        else {
            customDrawer = drawer;
        }
        Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
    }
    addPreset(preset, options) {
        Utils_1.Plugins.addPreset(preset, options);
    }
    addPlugin(plugin) {
        Utils_1.Plugins.addPlugin(plugin);
    }
}
exports.MainSlim = MainSlim;


/***/ }),

/***/ "./node_modules/tsparticles/dist/pjs.js":
/*!**********************************************!*\
  !*** ./node_modules/tsparticles/dist/pjs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initPjs = void 0;
const initPjs = (main) => {
    const particlesJS = (tagId, params) => {
        return main.load(tagId, params);
    };
    particlesJS.load = (tagId, pathConfigJson, callback) => {
        main.loadJSON(tagId, pathConfigJson).then((container) => {
            if (container) {
                callback(container);
            }
        });
    };
    particlesJS.setOnClickHandler = (callback) => {
        main.setOnClickHandler(callback);
    };
    const pJSDom = main.dom();
    return { particlesJS, pJSDom };
};
exports.initPjs = initPjs;


/***/ })

}]);
//# sourceMappingURL=vendor.js.map