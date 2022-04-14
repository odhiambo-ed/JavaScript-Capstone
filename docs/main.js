/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = { d: (e, i) => { for (const n in i)t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: i[n] }); }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e), r: (t) => { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); } }; const e = {}; t.r(e), t.d(e, {
    afterMain: () => w, afterRead: () => b, afterWrite: () => T, applyStyles: () => D, arrow: () => Y, auto: () => r, basePlacements: () => a, beforeMain: () => v, beforeRead: () => g, beforeWrite: () => E, bottom: () => n, clippingParents: () => h, computeStyles: () => J, createPopper: () => kt, createPopperBase: () => Lt, createPopperLite: () => xt, detectOverflow: () => pt, end: () => c, eventListeners: () => et, flip: () => mt, hide: () => bt, left: () => o, main: () => y, modifierPhases: () => O, offset: () => vt, placements: () => m, popper: () => u, popperGenerator: () => Ct, popperOffsets: () => yt, preventOverflow: () => wt, read: () => _, reference: () => f, right: () => s, start: () => l, top: () => i, variationPlacements: () => p, viewport: () => d, write: () => A,
  }); var i = 'top'; var n = 'bottom'; var s = 'right'; var o = 'left'; var r = 'auto'; var a = [i, n, s, o]; var l = 'start'; var c = 'end'; var h = 'clippingParents'; var d = 'viewport'; var u = 'popper'; var f = 'reference'; var p = a.reduce(((t, e) => t.concat([`${e}-${l}`, `${e}-${c}`])), []); var m = [].concat(a, [r]).reduce(((t, e) => t.concat([e, `${e}-${l}`, `${e}-${c}`])), []); var g = 'beforeRead'; var _ = 'read'; var b = 'afterRead'; var v = 'beforeMain'; var y = 'main'; var w = 'afterMain'; var E = 'beforeWrite'; var A = 'write'; var T = 'afterWrite'; var O = [g, _, b, v, y, w, E, A, T]; function C(t) { return t ? (t.nodeName || '').toLowerCase() : null; } function L(t) { if (t == null) return window; if (t.toString() !== '[object Window]') { const e = t.ownerDocument; return e && e.defaultView || window; } return t; } function k(t) { return t instanceof L(t).Element || t instanceof Element; } function x(t) { return t instanceof L(t).HTMLElement || t instanceof HTMLElement; } function S(t) { return typeof ShadowRoot !== 'undefined' && (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot); } const D = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn(t) { const e = t.state; Object.keys(e.elements).forEach(((t) => { const i = e.styles[t] || {}; const n = e.attributes[t] || {}; const s = e.elements[t]; x(s) && C(s) && (Object.assign(s.style, i), Object.keys(n).forEach(((t) => { const e = n[t]; !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? '' : e); }))); })); },
    effect(t) {
      const e = t.state; const i = {
        popper: {
          position: e.options.strategy, left: '0', top: '0', margin: '0',
        },
        arrow: { position: 'absolute' },
        reference: {},
      }; return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () { Object.keys(e.elements).forEach(((t) => { const n = e.elements[t]; const s = e.attributes[t] || {}; const o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(((t, e) => (t[e] = '', t)), {}); x(n) && C(n) && (Object.assign(n.style, o), Object.keys(s).forEach(((t) => { n.removeAttribute(t); }))); })); };
    },
    requires: ['computeStyles'],
  }; function N(t) { return t.split('-')[0]; } const I = Math.max; const P = Math.min; const M = Math.round; function j(t, e) {
    void 0 === e && (e = !1); const i = t.getBoundingClientRect(); let n = 1; let s = 1; if (x(t) && e) { const o = t.offsetHeight; const r = t.offsetWidth; r > 0 && (n = M(i.width) / r || 1), o > 0 && (s = M(i.height) / o || 1); } return {
      width: i.width / n, height: i.height / s, top: i.top / s, right: i.right / n, bottom: i.bottom / s, left: i.left / n, x: i.left / n, y: i.top / s,
    };
  } function H(t) {
    const e = j(t); let i = t.offsetWidth; let n = t.offsetHeight; return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft, y: t.offsetTop, width: i, height: n,
    };
  } function B(t, e) { const i = e.getRootNode && e.getRootNode(); if (t.contains(e)) return !0; if (i && S(i)) { let n = e; do { if (n && t.isSameNode(n)) return !0; n = n.parentNode || n.host; } while (n); } return !1; } function q(t) { return L(t).getComputedStyle(t); } function R(t) { return ['table', 'td', 'th'].indexOf(C(t)) >= 0; } function W(t) { return ((k(t) ? t.ownerDocument : t.document) || window.document).documentElement; } function $(t) { return C(t) === 'html' ? t : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || W(t); } function z(t) { return x(t) && q(t).position !== 'fixed' ? t.offsetParent : null; } function V(t) { for (var e = L(t), i = z(t); i && R(i) && q(i).position === 'static';)i = z(i); return i && (C(i) === 'html' || C(i) === 'body' && q(i).position === 'static') ? e : i || (function (t) { const e = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1; if (navigator.userAgent.indexOf('Trident') !== -1 && x(t) && q(t).position === 'fixed') return null; let i = $(t); for (S(i) && (i = i.host); x(i) && ['html', 'body'].indexOf(C(i)) < 0;) { const n = q(i); if (n.transform !== 'none' || n.perspective !== 'none' || n.contain === 'paint' || ['transform', 'perspective'].indexOf(n.willChange) !== -1 || e && n.willChange === 'filter' || e && n.filter && n.filter !== 'none') return i; i = i.parentNode; } return null; }(t)) || e; } function F(t) { return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y'; } function U(t, e, i) { return I(t, P(e, i)); } function K(t) {
    return {
      top: 0, right: 0, bottom: 0, left: 0, ...t,
    };
  } function X(t, e) { return e.reduce(((e, i) => (e[i] = t, e)), {}); } const Y = {
    name: 'arrow', enabled: !0, phase: 'main', fn(t) { let e; const r = t.state; const l = t.name; const c = t.options; const h = r.elements.arrow; const d = r.modifiersData.popperOffsets; const u = N(r.placement); const f = F(u); const p = [o, s].indexOf(u) >= 0 ? 'height' : 'width'; if (h && d) { const m = (function (t, e) { return K(typeof (t = typeof t === 'function' ? t({ ...e.rects, placement: e.placement }) : t) !== 'number' ? t : X(t, a)); }(c.padding, r)); const g = H(h); const _ = f === 'y' ? i : o; const b = f === 'y' ? n : s; const v = r.rects.reference[p] + r.rects.reference[f] - d[f] - r.rects.popper[p]; const y = d[f] - r.rects.reference[f]; const w = V(h); const E = w ? f === 'y' ? w.clientHeight || 0 : w.clientWidth || 0 : 0; const A = v / 2 - y / 2; const T = m[_]; const O = E - g[p] - m[b]; const C = E / 2 - g[p] / 2 + A; const L = U(T, C, O); const k = f; r.modifiersData[l] = ((e = {})[k] = L, e.centerOffset = L - C, e); } }, effect(t) { const e = t.state; const i = t.options.element; let n = void 0 === i ? '[data-popper-arrow]' : i; n != null && (typeof n !== 'string' || (n = e.elements.popper.querySelector(n))) && B(e.elements.popper, n) && (e.elements.arrow = n); }, requires: ['popperOffsets'], requiresIfExists: ['preventOverflow'],
  }; function Q(t) { return t.split('-')[1]; } const Z = {
    top: 'auto', right: 'auto', bottom: 'auto', left: 'auto',
  }; function G(t) { let e; const r = t.popper; const a = t.popperRect; const l = t.placement; const h = t.variation; const d = t.offsets; const u = t.position; const f = t.gpuAcceleration; const p = t.adaptive; const m = t.roundOffsets; const g = t.isFixed; const _ = d.x; let b = void 0 === _ ? 0 : _; const v = d.y; let y = void 0 === v ? 0 : v; const w = typeof m === 'function' ? m({ x: b, y }) : { x: b, y }; b = w.x, y = w.y; const E = d.hasOwnProperty('x'); const A = d.hasOwnProperty('y'); let T = o; let O = i; const C = window; if (p) { let k = V(r); let x = 'clientHeight'; let S = 'clientWidth'; k === L(r) && q(k = W(r)).position !== 'static' && u === 'absolute' && (x = 'scrollHeight', S = 'scrollWidth'), k = k, (l === i || (l === o || l === s) && h === c) && (O = n, y -= (g && k === C && C.visualViewport ? C.visualViewport.height : k[x]) - a.height, y *= f ? 1 : -1), l !== o && (l !== i && l !== n || h !== c) || (T = s, b -= (g && k === C && C.visualViewport ? C.visualViewport.width : k[S]) - a.width, b *= f ? 1 : -1); } let D; const N = { position: u, ...p && Z }; const I = !0 === m ? (function (t) { const e = t.x; const i = t.y; const n = window.devicePixelRatio || 1; return { x: M(e * n) / n || 0, y: M(i * n) / n || 0 }; }({ x: b, y })) : { x: b, y }; return b = I.x, y = I.y, f ? ({ ...N, ...((D = {})[O] = A ? '0' : '', D[T] = E ? '0' : '', D.transform = (C.devicePixelRatio || 1) <= 1 ? `translate(${b}px, ${y}px)` : `translate3d(${b}px, ${y}px, 0)`, D) }) : ({ ...N, ...((e = {})[O] = A ? `${y}px` : '', e[T] = E ? `${b}px` : '', e.transform = '', e) }); } const J = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn(t) {
      const e = t.state; const i = t.options; const n = i.gpuAcceleration; const s = void 0 === n || n; const o = i.adaptive; const r = void 0 === o || o; const a = i.roundOffsets; const l = void 0 === a || a; const c = {
        placement: N(e.placement), variation: Q(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: e.options.strategy === 'fixed',
      }; e.modifiersData.popperOffsets != null && (e.styles.popper = {
        ...e.styles.popper,
        ...G({
          ...c, offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l,
        }),
      }), e.modifiersData.arrow != null && (e.styles.arrow = {
        ...e.styles.arrow,
        ...G({
          ...c, offsets: e.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: l,
        }),
      }), e.attributes.popper = { ...e.attributes.popper, 'data-popper-placement': e.placement };
    },
    data: {},
  }; const tt = { passive: !0 }; const et = {
    name: 'eventListeners', enabled: !0, phase: 'write', fn() {}, effect(t) { const e = t.state; const i = t.instance; const n = t.options; const s = n.scroll; const o = void 0 === s || s; const r = n.resize; const a = void 0 === r || r; const l = L(e.elements.popper); const c = [].concat(e.scrollParents.reference, e.scrollParents.popper); return o && c.forEach(((t) => { t.addEventListener('scroll', i.update, tt); })), a && l.addEventListener('resize', i.update, tt), function () { o && c.forEach(((t) => { t.removeEventListener('scroll', i.update, tt); })), a && l.removeEventListener('resize', i.update, tt); }; }, data: {},
  }; const it = {
    left: 'right', right: 'left', bottom: 'top', top: 'bottom',
  }; function nt(t) { return t.replace(/left|right|bottom|top/g, ((t) => it[t])); } const st = { start: 'end', end: 'start' }; function ot(t) { return t.replace(/start|end/g, ((t) => st[t])); } function rt(t) { const e = L(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }; } function at(t) { return j(W(t)).left + rt(t).scrollLeft; } function lt(t) { const e = q(t); const i = e.overflow; const n = e.overflowX; const s = e.overflowY; return /auto|scroll|overlay|hidden/.test(i + s + n); } function ct(t) { return ['html', 'body', '#document'].indexOf(C(t)) >= 0 ? t.ownerDocument.body : x(t) && lt(t) ? t : ct($(t)); } function ht(t, e) { let i; void 0 === e && (e = []); const n = ct(t); const s = n === ((i = t.ownerDocument) == null ? void 0 : i.body); const o = L(n); const r = s ? [o].concat(o.visualViewport || [], lt(n) ? n : []) : n; const a = e.concat(r); return s ? a : a.concat(ht($(r))); } function dt(t) {
    return {
      ...t, left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height,
    };
  } function ut(t, e) {
    return e === d ? dt(function (t) {
      const e = L(t); const i = W(t); const n = e.visualViewport; let s = i.clientWidth; let o = i.clientHeight; let r = 0; let a = 0; return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s, height: o, x: r + at(t), y: a,
      };
    }(t)) : k(e) ? (function (t) { const e = j(t); return e.top += t.clientTop, e.left += t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e; }(e)) : dt(function (t) {
      let e; const i = W(t); const n = rt(t); const s = (e = t.ownerDocument) == null ? void 0 : e.body; const o = I(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0); const r = I(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0); let a = -n.scrollLeft + at(t); const l = -n.scrollTop; return q(s || i).direction === 'rtl' && (a += I(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o, height: r, x: a, y: l,
      };
    }(W(t)));
  } function ft(t) { let e; const r = t.reference; const a = t.element; const h = t.placement; const d = h ? N(h) : null; const u = h ? Q(h) : null; const f = r.x + r.width / 2 - a.width / 2; const p = r.y + r.height / 2 - a.height / 2; switch (d) { case i: e = { x: f, y: r.y - a.height }; break; case n: e = { x: f, y: r.y + r.height }; break; case s: e = { x: r.x + r.width, y: p }; break; case o: e = { x: r.x - a.width, y: p }; break; default: e = { x: r.x, y: r.y }; } const m = d ? F(d) : null; if (m != null) { const g = m === 'y' ? 'height' : 'width'; switch (u) { case l: e[m] = e[m] - (r[g] / 2 - a[g] / 2); break; case c: e[m] = e[m] + (r[g] / 2 - a[g] / 2); } } return e; } function pt(t, e) {
    void 0 === e && (e = {}); const o = e; const r = o.placement; const l = void 0 === r ? t.placement : r; const c = o.boundary; const p = void 0 === c ? h : c; const m = o.rootBoundary; const g = void 0 === m ? d : m; const _ = o.elementContext; const b = void 0 === _ ? u : _; const v = o.altBoundary; const y = void 0 !== v && v; const w = o.padding; const E = void 0 === w ? 0 : w; const A = K(typeof E !== 'number' ? E : X(E, a)); const T = b === u ? f : u; const O = t.rects.popper; const L = t.elements[y ? T : b]; const S = (function (t, e, i) { const n = e === 'clippingParents' ? (function (t) { const e = ht($(t)); const i = ['absolute', 'fixed'].indexOf(q(t).position) >= 0 && x(t) ? V(t) : t; return k(i) ? e.filter(((t) => k(t) && B(t, i) && C(t) !== 'body')) : []; }(t)) : [].concat(e); const s = [].concat(n, [i]); const o = s[0]; const r = s.reduce(((e, i) => { const n = ut(t, i); return e.top = I(n.top, e.top), e.right = P(n.right, e.right), e.bottom = P(n.bottom, e.bottom), e.left = I(n.left, e.left), e; }), ut(t, o)); return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r; }(k(L) ? L : L.contextElement || W(t.elements.popper), p, g)); const D = j(t.elements.reference); const N = ft({
      reference: D, element: O, strategy: 'absolute', placement: l,
    }); const M = dt({ ...O, ...N }); const H = b === u ? M : D; const R = {
      top: S.top - H.top + A.top, bottom: H.bottom - S.bottom + A.bottom, left: S.left - H.left + A.left, right: H.right - S.right + A.right,
    }; const z = t.modifiersData.offset; if (b === u && z) { const F = z[l]; Object.keys(R).forEach(((t) => { const e = [s, n].indexOf(t) >= 0 ? 1 : -1; const o = [i, n].indexOf(t) >= 0 ? 'y' : 'x'; R[t] += F[o] * e; })); } return R;
  } const mt = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn(t) {
      const e = t.state; const c = t.options; const h = t.name; if (!e.modifiersData[h]._skip) {
        for (var d = c.mainAxis, u = void 0 === d || d, f = c.altAxis, g = void 0 === f || f, _ = c.fallbackPlacements, b = c.padding, v = c.boundary, y = c.rootBoundary, w = c.altBoundary, E = c.flipVariations, A = void 0 === E || E, T = c.allowedAutoPlacements, O = e.options.placement, C = N(O), L = _ || (C !== O && A ? (function (t) { if (N(t) === r) return []; const e = nt(t); return [ot(t), e, ot(e)]; }(O)) : [nt(O)]), k = [O].concat(L).reduce(((t, i) => t.concat(N(i) === r ? (function (t, e) {
            void 0 === e && (e = {}); const i = e; const n = i.placement; const s = i.boundary; const o = i.rootBoundary; const r = i.padding; const l = i.flipVariations; const c = i.allowedAutoPlacements; const h = void 0 === c ? m : c; const d = Q(n); const u = d ? l ? p : p.filter(((t) => Q(t) === d)) : a; let f = u.filter(((t) => h.indexOf(t) >= 0)); f.length === 0 && (f = u); const g = f.reduce(((e, i) => (e[i] = pt(t, {
              placement: i, boundary: s, rootBoundary: o, padding: r,
            })[N(i)], e)), {}); return Object.keys(g).sort(((t, e) => g[t] - g[e]));
          }(e, {
            placement: i, boundary: v, rootBoundary: y, padding: b, flipVariations: A, allowedAutoPlacements: T,
          })) : i)), []), x = e.rects.reference, S = e.rects.popper, D = new Map(), I = !0, P = k[0], M = 0; M < k.length; M++) {
          const j = k[M]; const H = N(j); const B = Q(j) === l; const q = [i, n].indexOf(H) >= 0; const R = q ? 'width' : 'height'; const W = pt(e, {
            placement: j, boundary: v, rootBoundary: y, altBoundary: w, padding: b,
          }); let $ = q ? B ? s : o : B ? n : i; x[R] > S[R] && ($ = nt($)); const z = nt($); const V = []; if (u && V.push(W[H] <= 0), g && V.push(W[$] <= 0, W[z] <= 0), V.every(((t) => t))) { P = j, I = !1; break; }D.set(j, V);
        } if (I) for (let F = function (t) { const e = k.find(((e) => { const i = D.get(e); if (i) return i.slice(0, t).every(((t) => t)); })); if (e) return P = e, 'break'; }, U = A ? 3 : 1; U > 0 && F(U) !== 'break'; U--);e.placement !== P && (e.modifiersData[h]._skip = !0, e.placement = P, e.reset = !0);
      }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 },
  }; function gt(t, e, i) {
    return void 0 === i && (i = { x: 0, y: 0 }), {
      top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x,
    };
  } function _t(t) { return [i, s, n, o].some(((e) => t[e] >= 0)); } const bt = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn(t) {
      const e = t.state; const i = t.name; const n = e.rects.reference; const s = e.rects.popper; const o = e.modifiersData.preventOverflow; const r = pt(e, { elementContext: 'reference' }); const a = pt(e, { altBoundary: !0 }); const l = gt(r, n); const c = gt(a, s, o); const h = _t(l); const d = _t(c); e.modifiersData[i] = {
        referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: h, hasPopperEscaped: d,
      }, e.attributes.popper = { ...e.attributes.popper, 'data-popper-reference-hidden': h, 'data-popper-escaped': d };
    },
  }; const vt = {
    name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn(t) { const e = t.state; const n = t.options; const r = t.name; const a = n.offset; const l = void 0 === a ? [0, 0] : a; const c = m.reduce(((t, n) => (t[n] = (function (t, e, n) { const r = N(t); const a = [o, i].indexOf(r) >= 0 ? -1 : 1; const l = 'function' === typeof n ? n({ ...e, placement: t }) : n; let c = l[0]; let h = l[1]; return c = c || 0, h = (h || 0) * a, [o, s].indexOf(r) >= 0 ? { x: h, y: c } : { x: c, y: h }; }(n, e.rects, l)), t)), {}); const h = c[e.placement]; const d = h.x; const u = h.y; e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += d, e.modifiersData.popperOffsets.y += u), e.modifiersData[r] = c; },
  }; const yt = {
    name: 'popperOffsets',
    enabled: !0,
    phase: 'read',
    fn(t) {
      const e = t.state; const i = t.name; e.modifiersData[i] = ft({
        reference: e.rects.reference, element: e.rects.popper, strategy: 'absolute', placement: e.placement,
      });
    },
    data: {},
  }; const wt = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn(t) {
      const e = t.state; const r = t.options; const a = t.name; const c = r.mainAxis; const h = void 0 === c || c; const d = r.altAxis; const u = void 0 !== d && d; const f = r.boundary; const p = r.rootBoundary; const m = r.altBoundary; const g = r.padding; const _ = r.tether; const b = void 0 === _ || _; const v = r.tetherOffset; const y = void 0 === v ? 0 : v; const w = pt(e, {
        boundary: f, rootBoundary: p, padding: g, altBoundary: m,
      }); const E = N(e.placement); const A = Q(e.placement); const T = !A; const O = F(E); const C = O === 'x' ? 'y' : 'x'; const L = e.modifiersData.popperOffsets; const k = e.rects.reference; const x = e.rects.popper; const S = typeof y === 'function' ? y({ ...e.rects, placement: e.placement }) : y; const D = typeof S === 'number' ? { mainAxis: S, altAxis: S } : ({ mainAxis: 0, altAxis: 0, ...S }); const M = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null; const j = { x: 0, y: 0 }; if (L) {
        if (h) {
          let B; const q = O === 'y' ? i : o; const R = O === 'y' ? n : s; const W = O === 'y' ? 'height' : 'width'; const $ = L[O]; const z = $ + w[q]; const K = $ - w[R]; const X = b ? -x[W] / 2 : 0; const Y = A === l ? k[W] : x[W]; const Z = A === l ? -x[W] : -k[W]; const G = e.elements.arrow; const J = b && G ? H(G) : { width: 0, height: 0 }; const tt = e.modifiersData['arrow#persistent'] ? e.modifiersData['arrow#persistent'].padding : {
            top: 0, right: 0, bottom: 0, left: 0,
          }; const et = tt[q]; const it = tt[R]; const nt = U(0, k[W], J[W]); const st = T ? k[W] / 2 - X - nt - et - D.mainAxis : Y - nt - et - D.mainAxis; const ot = T ? -k[W] / 2 + X + nt + it + D.mainAxis : Z + nt + it + D.mainAxis; const rt = e.elements.arrow && V(e.elements.arrow); const at = rt ? O === 'y' ? rt.clientTop || 0 : rt.clientLeft || 0 : 0; const lt = (B = M == null ? void 0 : M[O]) != null ? B : 0; const ct = $ + ot - lt; const ht = U(b ? P(z, $ + st - lt - at) : z, $, b ? I(K, ct) : K); L[O] = ht, j[O] = ht - $;
        } if (u) { let dt; const ut = O === 'x' ? i : o; const ft = O === 'x' ? n : s; const mt = L[C]; const gt = C === 'y' ? 'height' : 'width'; const _t = mt + w[ut]; const bt = mt - w[ft]; const vt = [i, o].indexOf(E) !== -1; const yt = (dt = M == null ? void 0 : M[C]) != null ? dt : 0; const wt = vt ? _t : mt - k[gt] - x[gt] - yt + D.altAxis; const Et = vt ? mt + k[gt] + x[gt] - yt - D.altAxis : bt; const At = b && vt ? (function (t, e, i) { const n = U(t, e, i); return n > i ? i : n; }(wt, mt, Et)) : U(b ? wt : _t, mt, b ? Et : bt); L[C] = At, j[C] = At - mt; }e.modifiersData[a] = j;
      }
    },
    requiresIfExists: ['offset'],
  }; function Et(t, e, i) {
    void 0 === i && (i = !1); let n; let s; const o = x(e); const r = x(e) && (function (t) { const e = t.getBoundingClientRect(); const i = M(e.width) / t.offsetWidth || 1; const n = M(e.height) / t.offsetHeight || 1; return i !== 1 || n !== 1; }(e)); const a = W(e); const l = j(t, r); let c = { scrollLeft: 0, scrollTop: 0 }; let h = { x: 0, y: 0 }; return (o || !o && !i) && ((C(e) !== 'body' || lt(a)) && (c = (n = e) !== L(n) && x(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : rt(n)), x(e) ? ((h = j(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = at(a))), {
      x: l.left + c.scrollLeft - h.x, y: l.top + c.scrollTop - h.y, width: l.width, height: l.height,
    };
  } function At(t) {
    const e = new Map(); const i = new Set(); const
      n = []; function s(t) { i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(((t) => { if (!i.has(t)) { const n = e.get(t); n && s(n); } })), n.push(t); } return t.forEach(((t) => { e.set(t.name, t); })), t.forEach(((t) => { i.has(t.name) || s(t); })), n;
  } const Tt = { placement: 'bottom', modifiers: [], strategy: 'absolute' }; function Ot() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i]; return !e.some(((t) => !(t && typeof t.getBoundingClientRect === 'function'))); } function Ct(t) {
    void 0 === t && (t = {}); const e = t; const i = e.defaultModifiers; const n = void 0 === i ? [] : i; const s = e.defaultOptions; const o = void 0 === s ? Tt : s; return function (t, e, i) {
      void 0 === i && (i = o); let s; let r; let a = {
        placement: 'bottom', orderedModifiers: [], options: { ...Tt, ...o }, modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {},
      }; let l = []; let c = !1; var h = {
        state: a,
        setOptions(i) {
          const s = typeof i === 'function' ? i(a.options) : i; d(), a.options = { ...o, ...a.options, ...s }, a.scrollParents = { reference: k(t) ? ht(t) : t.contextElement ? ht(t.contextElement) : [], popper: ht(e) }; let r; let c; const u = (function (t) { const e = At(t); return O.reduce(((t, i) => t.concat(e.filter(((t) => t.phase === i)))), []); }((r = [].concat(n, a.options.modifiers), c = r.reduce(((t, e) => {
            const i = t[e.name]; return t[e.name] = i ? ({
              ...i, ...e, options: { ...i.options, ...e.options }, data: { ...i.data, ...e.data },
            }) : e, t;
          }), {}), Object.keys(c).map(((t) => c[t]))))); return a.orderedModifiers = u.filter(((t) => t.enabled)), a.orderedModifiers.forEach(((t) => {
            const e = t.name; const i = t.options; const n = void 0 === i ? {} : i; const s = t.effect; if (typeof s === 'function') {
              const o = s({
                state: a, name: e, instance: h, options: n,
              }); l.push(o || (() => {}));
            }
          })), h.update();
        },
        forceUpdate() {
          if (!c) {
            const t = a.elements; const e = t.reference; const i = t.popper; if (Ot(e, i)) {
              a.rects = { reference: Et(e, V(i), a.options.strategy === 'fixed'), popper: H(i) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(((t) => a.modifiersData[t.name] = { ...t.data })); for (let n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  const s = a.orderedModifiers[n]; const o = s.fn; const r = s.options; const l = void 0 === r ? {} : r; const d = s.name; typeof o === 'function' && (a = o({
                    state: a, options: l, name: d, instance: h,
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function () { return new Promise(((t) => { h.forceUpdate(), t(a); })); }, function () { return r || (r = new Promise(((t) => { Promise.resolve().then((() => { r = void 0, t(s()); })); }))), r; }),
        destroy() { d(), c = !0; },
      }; if (!Ot(t, e)) return h; function d() { l.forEach(((t) => t())), l = []; } return h.setOptions(i).then(((t) => { !c && i.onFirstUpdate && i.onFirstUpdate(t); })), h;
    };
  } var Lt = Ct(); var kt = Ct({ defaultModifiers: [et, yt, J, D, vt, mt, wt, Y, bt] }); var xt = Ct({ defaultModifiers: [et, yt, J, D] }); const St = 'transitionend'; const Dt = (t) => { let e = t.getAttribute('data-bs-target'); if (!e || e === '#') { let i = t.getAttribute('href'); if (!i || !i.includes('#') && !i.startsWith('.')) return null; i.includes('#') && !i.startsWith('#') && (i = `#${i.split('#')[1]}`), e = i && i !== '#' ? i.trim() : null; } return e; }; const Nt = (t) => { const e = Dt(t); return e && document.querySelector(e) ? e : null; }; const It = (t) => { const e = Dt(t); return e ? document.querySelector(e) : null; }; const Pt = (t) => { t.dispatchEvent(new Event(St)); }; const Mt = (t) => !(!t || typeof t !== 'object') && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType); const jt = (t) => (Mt(t) ? t.jquery ? t[0] : t : typeof t === 'string' && t.length > 0 ? document.querySelector(t) : null); const Ht = (t, e, i) => { Object.keys(i).forEach(((n) => { const s = i[n]; const o = e[n]; const r = o && Mt(o) ? 'element' : (a = o) == null ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase(); let a; if (!new RegExp(s).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`); })); }; const Bt = (t) => !(!Mt(t) || t.getClientRects().length === 0) && getComputedStyle(t).getPropertyValue('visibility') === 'visible'; const qt = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains('disabled') || (void 0 !== t.disabled ? t.disabled : t.hasAttribute('disabled') && t.getAttribute('disabled') !== 'false'); const Rt = (t) => { if (!document.documentElement.attachShadow) return null; if (typeof t.getRootNode === 'function') { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null; } return t instanceof ShadowRoot ? t : t.parentNode ? Rt(t.parentNode) : null; }; const Wt = () => {}; const $t = (t) => { t.offsetHeight; }; const zt = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute('data-bs-no-jquery') ? t : null; }; const Vt = []; const Ft = () => document.documentElement.dir === 'rtl'; const Ut = (t) => { let e; e = () => { const e = zt(); if (e) { const i = t.NAME; const n = e.fn[i]; e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface); } }, document.readyState === 'loading' ? (Vt.length || document.addEventListener('DOMContentLoaded', (() => { Vt.forEach(((t) => t())); })), Vt.push(e)) : e(); }; const Kt = (t) => { typeof t === 'function' && t(); }; const Xt = (t, e, i = !0) => { if (!i) return void Kt(t); const n = ((t) => { if (!t) return 0; let{ transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const n = Number.parseFloat(e); const s = Number.parseFloat(i); return n || s ? (e = e.split(',')[0], i = i.split(',')[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0; })(e) + 5; let s = !1; const o = ({ target: i }) => { i === e && (s = !0, e.removeEventListener(St, o), Kt(t)); }; e.addEventListener(St, o), setTimeout((() => { s || Pt(e); }), n); }; const Yt = (t, e, i, n) => { let s = t.indexOf(e); if (s === -1) return t[!i && n ? t.length - 1 : 0]; const o = t.length; return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]; }; const Qt = /[^.]*(?=\..*)\.|.*/; const Zt = /\..*/; const Gt = /::\d+$/; const Jt = {}; let te = 1; const ee = { mouseenter: 'mouseover', mouseleave: 'mouseout' }; const ie = /^(mouseenter|mouseleave)/i; const ne = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']); function se(t, e) { return e && `${e}::${te++}` || t.uidEvent || te++; } function oe(t) { const e = se(t); return t.uidEvent = e, Jt[e] = Jt[e] || {}, Jt[e]; } function re(t, e, i = null) { const n = Object.keys(t); for (let s = 0, o = n.length; s < o; s++) { const o = t[n[s]]; if (o.originalHandler === e && o.delegationSelector === i) return o; } return null; } function ae(t, e, i) { const n = typeof e === 'string'; const s = n ? i : e; let o = he(t); return ne.has(o) || (o = t), [n, s, o]; } function le(t, e, i, n, s) { if (typeof e !== 'string' || !t) return; if (i || (i = n, n = null), ie.test(e)) { const t = (t) => function (e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e); }; n ? n = t(n) : i = t(i); } const [o, r, a] = ae(e, i, n); const l = oe(t); const c = l[a] || (l[a] = {}); const h = re(c, r, o ? i : null); if (h) return void (h.oneOff = h.oneOff && s); const d = se(r, e.replace(Qt, '')); const u = o ? (function (t, e, i) { return function n(s) { const o = t.querySelectorAll(e); for (let{ target: r } = s; r && r !== this; r = r.parentNode) for (let a = o.length; a--;) if (o[a] === r) return s.delegateTarget = r, n.oneOff && de.off(t, s.type, e, i), i.apply(r, [s]); return null; }; }(t, i, n)) : (function (t, e) { return function i(n) { return n.delegateTarget = t, i.oneOff && de.off(t, n.type, e), e.apply(t, [n]); }; }(t, i)); u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o); } function ce(t, e, i, n, s) { const o = re(e[i], n, s); o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]); } function he(t) { return t = t.replace(Zt, ''), ee[t] || t; } const de = {
    on(t, e, i, n) { le(t, e, i, n, !1); }, one(t, e, i, n) { le(t, e, i, n, !0); }, off(t, e, i, n) { if (typeof e !== 'string' || !t) return; const [s, o, r] = ae(e, i, n); const a = r !== e; const l = oe(t); const c = e.startsWith('.'); if (void 0 !== o) { if (!l || !l[r]) return; return void ce(t, l, r, o, s ? i : null); }c && Object.keys(l).forEach(((i) => { !(function (t, e, i, n) { const s = e[i] || {}; Object.keys(s).forEach(((o) => { if (o.includes(n)) { const n = s[o]; ce(t, e, i, n.originalHandler, n.delegationSelector); } })); }(t, l, i, e.slice(1))); })); const h = l[r] || {}; Object.keys(h).forEach(((i) => { const n = i.replace(Gt, ''); if (!a || e.includes(n)) { const e = h[i]; ce(t, l, r, e.originalHandler, e.delegationSelector); } })); }, trigger(t, e, i) { if (typeof e !== 'string' || !t) return null; const n = zt(); const s = he(e); const o = e !== s; const r = ne.has(s); let a; let l = !0; let c = !0; let h = !1; let d = null; return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent('HTMLEvents'), d.initEvent(s, l, !0)) : d = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== i && Object.keys(i).forEach(((t) => { Object.defineProperty(d, t, { get: () => i[t] }); })), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d; },
  }; const ue = new Map(); const fe = { set(t, e, i) { ue.has(t) || ue.set(t, new Map()); const n = ue.get(t); n.has(e) || n.size === 0 ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`); }, get: (t, e) => ue.has(t) && ue.get(t).get(e) || null, remove(t, e) { if (!ue.has(t)) return; const i = ue.get(t); i.delete(e), i.size === 0 && ue.delete(t); } }; class pe {
    constructor(t) { (t = jt(t)) && (this._element = t, fe.set(this._element, this.constructor.DATA_KEY, this)); }

    dispose() { fe.remove(this._element, this.constructor.DATA_KEY), de.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(((t) => { this[t] = null; })); }

    _queueCallback(t, e, i = !0) { Xt(t, e, i); }

    static getInstance(t) { return fe.get(jt(t), this.DATA_KEY); }

    static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, typeof e === 'object' ? e : null); }

    static get VERSION() { return '5.1.3'; }

    static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!'); }

    static get DATA_KEY() { return `bs.${this.NAME}`; }

    static get EVENT_KEY() { return `.${this.DATA_KEY}`; }
  } const me = (t, e = 'hide') => { const i = `click.dismiss${t.EVENT_KEY}`; const n = t.NAME; de.on(document, i, `[data-bs-dismiss="${n}"]`, (function (i) { if (['A', 'AREA'].includes(this.tagName) && i.preventDefault(), qt(this)) return; const s = It(this) || this.closest(`.${n}`); t.getOrCreateInstance(s)[e](); })); }; class ge extends pe {
    static get NAME() { return 'alert'; }

    close() { if (de.trigger(this._element, 'close.bs.alert').defaultPrevented) return; this._element.classList.remove('show'); const t = this._element.classList.contains('fade'); this._queueCallback((() => this._destroyElement()), this._element, t); }

    _destroyElement() { this._element.remove(), de.trigger(this._element, 'closed.bs.alert'), this.dispose(); }

    static jQueryInterface(t) { return this.each((function () { const e = ge.getOrCreateInstance(this); if (typeof t === 'string') { if (void 0 === e[t] || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`); e[t](this); } })); }
  }me(ge, 'close'), Ut(ge); const _e = '[data-bs-toggle="button"]'; class be extends pe {
    static get NAME() { return 'button'; }

    toggle() { this._element.setAttribute('aria-pressed', this._element.classList.toggle('active')); }

    static jQueryInterface(t) { return this.each((function () { const e = be.getOrCreateInstance(this); t === 'toggle' && e[t](); })); }
  } function ve(t) { return t === 'true' || t !== 'false' && (t === Number(t).toString() ? Number(t) : t === '' || t === 'null' ? null : t); } function ye(t) { return t.replace(/[A-Z]/g, ((t) => `-${t.toLowerCase()}`)); }de.on(document, 'click.bs.button.data-api', _e, ((t) => { t.preventDefault(); const e = t.target.closest(_e); be.getOrCreateInstance(e).toggle(); })), Ut(be); const we = {
    setDataAttribute(t, e, i) { t.setAttribute(`data-bs-${ye(e)}`, i); }, removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${ye(e)}`); }, getDataAttributes(t) { if (!t) return {}; const e = {}; return Object.keys(t.dataset).filter(((t) => t.startsWith('bs'))).forEach(((i) => { let n = i.replace(/^bs/, ''); n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ve(t.dataset[i]); })), e; }, getDataAttribute: (t, e) => ve(t.getAttribute(`data-bs-${ye(e)}`)), offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset }; }, position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
  }; const Ee = {
    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter(((t) => t.matches(e))), parents(t, e) { const i = []; let n = t.parentNode; for (;n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== 3;)n.matches(e) && i.push(n), n = n.parentNode; return i; }, prev(t, e) { let i = t.previousElementSibling; for (;i;) { if (i.matches(e)) return [i]; i = i.previousElementSibling; } return []; }, next(t, e) { let i = t.nextElementSibling; for (;i;) { if (i.matches(e)) return [i]; i = i.nextElementSibling; } return []; }, focusableChildren(t) { const e = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(((t) => `${t}:not([tabindex^="-"])`)).join(', '); return this.find(e, t).filter(((t) => !qt(t) && Bt(t))); },
  }; const Ae = 'carousel'; const Te = {
    interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0,
  }; const Oe = {
    interval: '(number|boolean)', keyboard: 'boolean', slide: '(boolean|string)', pause: '(string|boolean)', wrap: 'boolean', touch: 'boolean',
  }; const Ce = 'next'; const Le = 'prev'; const ke = 'left'; const xe = 'right'; const Se = { ArrowLeft: xe, ArrowRight: ke }; const De = 'slid.bs.carousel'; const Ne = 'active'; const Ie = '.active.carousel-item'; class Pe extends pe {
    constructor(t, e) { super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Ee.findOne('.carousel-indicators', this._element), this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners(); }

    static get Default() { return Te; }

    static get NAME() { return Ae; }

    next() { this._slide(Ce); }

    nextWhenVisible() { !document.hidden && Bt(this._element) && this.next(); }

    prev() { this._slide(Le); }

    pause(t) { t || (this._isPaused = !0), Ee.findOne('.carousel-item-next, .carousel-item-prev', this._element) && (Pt(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null; }

    cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)); }

    to(t) { this._activeElement = Ee.findOne(Ie, this._element); const e = this._getItemIndex(this._activeElement); if (t > this._items.length - 1 || t < 0) return; if (this._isSliding) return void de.one(this._element, De, (() => this.to(t))); if (e === t) return this.pause(), void this.cycle(); const i = t > e ? Ce : Le; this._slide(i, this._items[t]); }

    _getConfig(t) { return t = { ...Te, ...we.getDataAttributes(this._element), ...typeof t === 'object' ? t : {} }, Ht(Ae, t, Oe), t; }

    _handleSwipe() { const t = Math.abs(this.touchDeltaX); if (t <= 40) return; const e = t / this.touchDeltaX; this.touchDeltaX = 0, e && this._slide(e > 0 ? xe : ke); }

    _addEventListeners() { this._config.keyboard && de.on(this._element, 'keydown.bs.carousel', ((t) => this._keydown(t))), this._config.pause === 'hover' && (de.on(this._element, 'mouseenter.bs.carousel', ((t) => this.pause(t))), de.on(this._element, 'mouseleave.bs.carousel', ((t) => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners(); }

    _addTouchEventListeners() { const t = (t) => this._pointerEvent && (t.pointerType === 'pen' || t.pointerType === 'touch'); const e = (e) => { t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX); }; const i = (t) => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX; }; const n = (e) => { t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === 'hover' && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(((t) => this.cycle(t)), 500 + this._config.interval)); }; Ee.find('.carousel-item img', this._element).forEach(((t) => { de.on(t, 'dragstart.bs.carousel', ((t) => t.preventDefault())); })), this._pointerEvent ? (de.on(this._element, 'pointerdown.bs.carousel', ((t) => e(t))), de.on(this._element, 'pointerup.bs.carousel', ((t) => n(t))), this._element.classList.add('pointer-event')) : (de.on(this._element, 'touchstart.bs.carousel', ((t) => e(t))), de.on(this._element, 'touchmove.bs.carousel', ((t) => i(t))), de.on(this._element, 'touchend.bs.carousel', ((t) => n(t)))); }

    _keydown(t) { if (/input|textarea/i.test(t.target.tagName)) return; const e = Se[t.key]; e && (t.preventDefault(), this._slide(e)); }

    _getItemIndex(t) { return this._items = t && t.parentNode ? Ee.find('.carousel-item', t.parentNode) : [], this._items.indexOf(t); }

    _getItemByOrder(t, e) { const i = t === Ce; return Yt(this._items, e, i, this._config.wrap); }

    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t); const n = this._getItemIndex(Ee.findOne(Ie, this._element)); return de.trigger(this._element, 'slide.bs.carousel', {
        relatedTarget: t, direction: e, from: n, to: i,
      });
    }

    _setActiveIndicatorElement(t) { if (this._indicatorsElement) { const e = Ee.findOne('.active', this._indicatorsElement); e.classList.remove(Ne), e.removeAttribute('aria-current'); const i = Ee.find('[data-bs-target]', this._indicatorsElement); for (let e = 0; e < i.length; e++) if (Number.parseInt(i[e].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(t)) { i[e].classList.add(Ne), i[e].setAttribute('aria-current', 'true'); break; } } }

    _updateInterval() { const t = this._activeElement || Ee.findOne(Ie, this._element); if (!t) return; const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10); e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval; }

    _slide(t, e) {
      const i = this._directionToOrder(t); const n = Ee.findOne(Ie, this._element); const s = this._getItemIndex(n); const o = e || this._getItemByOrder(i, n); const r = this._getItemIndex(o); const a = Boolean(this._interval); const l = i === Ce; const c = l ? 'carousel-item-start' : 'carousel-item-end'; const h = l ? 'carousel-item-next' : 'carousel-item-prev'; const d = this._orderToDirection(i); if (o && o.classList.contains(Ne)) return void (this._isSliding = !1); if (this._isSliding) return; if (this._triggerSlideEvent(o, d).defaultPrevented) return; if (!n || !o) return; this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o; const u = () => {
        de.trigger(this._element, De, {
          relatedTarget: o, direction: d, from: s, to: r,
        });
      }; if (this._element.classList.contains('slide')) { o.classList.add(h), $t(o), n.classList.add(c), o.classList.add(c); const t = () => { o.classList.remove(c, h), o.classList.add(Ne), n.classList.remove(Ne, h, c), this._isSliding = !1, setTimeout(u, 0); }; this._queueCallback(t, n, !0); } else n.classList.remove(Ne), o.classList.add(Ne), this._isSliding = !1, u(); a && this.cycle();
    }

    _directionToOrder(t) { return [xe, ke].includes(t) ? Ft() ? t === ke ? Le : Ce : t === ke ? Ce : Le : t; }

    _orderToDirection(t) { return [Ce, Le].includes(t) ? Ft() ? t === Le ? ke : xe : t === Le ? xe : ke : t; }

    static carouselInterface(t, e) { const i = Pe.getOrCreateInstance(t, e); let{ _config: n } = i; typeof e === 'object' && (n = { ...n, ...e }); const s = typeof e === 'string' ? e : n.slide; if (typeof e === 'number')i.to(e); else if (typeof s === 'string') { if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`); i[s](); } else n.interval && n.ride && (i.pause(), i.cycle()); }

    static jQueryInterface(t) { return this.each((function () { Pe.carouselInterface(this, t); })); }

    static dataApiClickHandler(t) { const e = It(this); if (!e || !e.classList.contains('carousel')) return; const i = { ...we.getDataAttributes(e), ...we.getDataAttributes(this) }; const n = this.getAttribute('data-bs-slide-to'); n && (i.interval = !1), Pe.carouselInterface(e, i), n && Pe.getInstance(e).to(n), t.preventDefault(); }
  }de.on(document, 'click.bs.carousel.data-api', '[data-bs-slide], [data-bs-slide-to]', Pe.dataApiClickHandler), de.on(window, 'load.bs.carousel.data-api', (() => { const t = Ee.find('[data-bs-ride="carousel"]'); for (let e = 0, i = t.length; e < i; e++)Pe.carouselInterface(t[e], Pe.getInstance(t[e])); })), Ut(Pe); const Me = 'collapse'; const je = { toggle: !0, parent: null }; const He = { toggle: 'boolean', parent: '(null|element)' }; const Be = 'show'; const qe = 'collapse'; const Re = 'collapsing'; const We = 'collapsed'; const $e = ':scope .collapse .collapse'; const ze = '[data-bs-toggle="collapse"]'; class Ve extends pe {
    constructor(t, e) { super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = []; const i = Ee.find(ze); for (let t = 0, e = i.length; t < e; t++) { const e = i[t]; const n = Nt(e); const s = Ee.find(n).filter(((t) => t === this._element)); n !== null && s.length && (this._selector = n, this._triggerArray.push(e)); } this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle(); }

    static get Default() { return je; }

    static get NAME() { return Me; }

    toggle() { this._isShown() ? this.hide() : this.show(); }

    show() { if (this._isTransitioning || this._isShown()) return; let t; let e = []; if (this._config.parent) { const t = Ee.find($e, this._config.parent); e = Ee.find('.collapse.show, .collapse.collapsing', this._config.parent).filter(((e) => !t.includes(e))); } const i = Ee.findOne(this._selector); if (e.length) { const n = e.find(((t) => i !== t)); if (t = n ? Ve.getInstance(n) : null, t && t._isTransitioning) return; } if (de.trigger(this._element, 'show.bs.collapse').defaultPrevented) return; e.forEach(((e) => { i !== e && Ve.getOrCreateInstance(e, { toggle: !1 }).hide(), t || fe.set(e, 'bs.collapse', null); })); const n = this._getDimension(); this._element.classList.remove(qe), this._element.classList.add(Re), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const s = `scroll${n[0].toUpperCase() + n.slice(1)}`; this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(Re), this._element.classList.add(qe, Be), this._element.style[n] = '', de.trigger(this._element, 'shown.bs.collapse'); }), this._element, !0), this._element.style[n] = `${this._element[s]}px`; }

    hide() { if (this._isTransitioning || !this._isShown()) return; if (de.trigger(this._element, 'hide.bs.collapse').defaultPrevented) return; const t = this._getDimension(); this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, $t(this._element), this._element.classList.add(Re), this._element.classList.remove(qe, Be); const e = this._triggerArray.length; for (let t = 0; t < e; t++) { const e = this._triggerArray[t]; const i = It(e); i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1); } this._isTransitioning = !0, this._element.style[t] = '', this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(Re), this._element.classList.add(qe), de.trigger(this._element, 'hidden.bs.collapse'); }), this._element, !0); }

    _isShown(t = this._element) { return t.classList.contains(Be); }

    _getConfig(t) { return (t = { ...je, ...we.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle), t.parent = jt(t.parent), Ht(Me, t, He), t; }

    _getDimension() { return this._element.classList.contains('collapse-horizontal') ? 'width' : 'height'; }

    _initializeChildren() { if (!this._config.parent) return; const t = Ee.find($e, this._config.parent); Ee.find(ze, this._config.parent).filter(((e) => !t.includes(e))).forEach(((t) => { const e = It(t); e && this._addAriaAndCollapsedClass([t], this._isShown(e)); })); }

    _addAriaAndCollapsedClass(t, e) { t.length && t.forEach(((t) => { e ? t.classList.remove(We) : t.classList.add(We), t.setAttribute('aria-expanded', e); })); }

    static jQueryInterface(t) { return this.each((function () { const e = {}; typeof t === 'string' && /show|hide/.test(t) && (e.toggle = !1); const i = Ve.getOrCreateInstance(this, e); if (typeof t === 'string') { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](); } })); }
  }de.on(document, 'click.bs.collapse.data-api', ze, (function (t) { (t.target.tagName === 'A' || t.delegateTarget && t.delegateTarget.tagName === 'A') && t.preventDefault(); const e = Nt(this); Ee.find(e).forEach(((t) => { Ve.getOrCreateInstance(t, { toggle: !1 }).toggle(); })); })), Ut(Ve); const Fe = 'dropdown'; const Ue = 'Escape'; const Ke = 'Space'; const Xe = 'ArrowUp'; const Ye = 'ArrowDown'; const Qe = new RegExp('ArrowUp|ArrowDown|Escape'); const Ze = 'click.bs.dropdown.data-api'; const Ge = 'keydown.bs.dropdown.data-api'; const Je = 'show'; const ti = '[data-bs-toggle="dropdown"]'; const ei = '.dropdown-menu'; const ii = Ft() ? 'top-end' : 'top-start'; const ni = Ft() ? 'top-start' : 'top-end'; const si = Ft() ? 'bottom-end' : 'bottom-start'; const oi = Ft() ? 'bottom-start' : 'bottom-end'; const ri = Ft() ? 'left-start' : 'right-start'; const ai = Ft() ? 'right-start' : 'left-start'; const li = {
    offset: [0, 2], boundary: 'clippingParents', reference: 'toggle', display: 'dynamic', popperConfig: null, autoClose: !0,
  }; const ci = {
    offset: '(array|string|function)', boundary: '(string|element)', reference: '(string|element|object)', display: 'string', popperConfig: '(null|object|function)', autoClose: '(boolean|string)',
  }; class hi extends pe {
    constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(); }

    static get Default() { return li; }

    static get DefaultType() { return ci; }

    static get NAME() { return Fe; }

    toggle() { return this._isShown() ? this.hide() : this.show(); }

    show() { if (qt(this._element) || this._isShown(this._menu)) return; const t = { relatedTarget: this._element }; if (de.trigger(this._element, 'show.bs.dropdown', t).defaultPrevented) return; const e = hi.getParentFromElement(this._element); this._inNavbar ? we.setDataAttribute(this._menu, 'popper', 'none') : this._createPopper(e), 'ontouchstart' in document.documentElement && !e.closest('.navbar-nav') && [].concat(...document.body.children).forEach(((t) => de.on(t, 'mouseover', Wt))), this._element.focus(), this._element.setAttribute('aria-expanded', !0), this._menu.classList.add(Je), this._element.classList.add(Je), de.trigger(this._element, 'shown.bs.dropdown', t); }

    hide() { if (qt(this._element) || !this._isShown(this._menu)) return; const t = { relatedTarget: this._element }; this._completeHide(t); }

    dispose() { this._popper && this._popper.destroy(), super.dispose(); }

    update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update(); }

    _completeHide(t) { de.trigger(this._element, 'hide.bs.dropdown', t).defaultPrevented || ('ontouchstart' in document.documentElement && [].concat(...document.body.children).forEach(((t) => de.off(t, 'mouseover', Wt))), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute('aria-expanded', 'false'), we.removeDataAttribute(this._menu, 'popper'), de.trigger(this._element, 'hidden.bs.dropdown', t)); }

    _getConfig(t) { if (t = { ...this.constructor.Default, ...we.getDataAttributes(this._element), ...t }, Ht(Fe, t, this.constructor.DefaultType), typeof t.reference === 'object' && !Mt(t.reference) && typeof t.reference.getBoundingClientRect !== 'function') throw new TypeError(`${Fe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t; }

    _createPopper(t) { if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let i = this._element; this._config.reference === 'parent' ? i = t : Mt(this._config.reference) ? i = jt(this._config.reference) : typeof this._config.reference === 'object' && (i = this._config.reference); const n = this._getPopperConfig(); const s = n.modifiers.find(((t) => t.name === 'applyStyles' && !1 === t.enabled)); this._popper = kt(i, this._menu, n), s && we.setDataAttribute(this._menu, 'popper', 'static'); }

    _isShown(t = this._element) { return t.classList.contains(Je); }

    _getMenuElement() { return Ee.next(this._element, ei)[0]; }

    _getPlacement() { const t = this._element.parentNode; if (t.classList.contains('dropend')) return ri; if (t.classList.contains('dropstart')) return ai; const e = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end'; return t.classList.contains('dropup') ? e ? ni : ii : e ? oi : si; }

    _detectNavbar() { return this._element.closest('.navbar') !== null; }

    _getOffset() { const { offset: t } = this._config; return typeof t === 'string' ? t.split(',').map(((t) => Number.parseInt(t, 10))) : typeof t === 'function' ? (e) => t(e, this._element) : t; }

    _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: 'preventOverflow', options: { boundary: this._config.boundary } }, { name: 'offset', options: { offset: this._getOffset() } }] }; return this._config.display === 'static' && (t.modifiers = [{ name: 'applyStyles', enabled: !1 }]), { ...t, ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(t) : this._config.popperConfig }; }

    _selectMenuItem({ key: t, target: e }) { const i = Ee.find('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)', this._menu).filter(Bt); i.length && Yt(i, e, t === Ye, !i.includes(e)).focus(); }

    static jQueryInterface(t) { return this.each((function () { const e = hi.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](); } })); }

    static clearMenus(t) { if (t && (t.button === 2 || t.type === 'keyup' && t.key !== 'Tab')) return; const e = Ee.find(ti); for (let i = 0, n = e.length; i < n; i++) { const n = hi.getInstance(e[i]); if (!n || !1 === n._config.autoClose) continue; if (!n._isShown()) continue; const s = { relatedTarget: n._element }; if (t) { const e = t.composedPath(); const i = e.includes(n._menu); if (e.includes(n._element) || n._config.autoClose === 'inside' && !i || n._config.autoClose === 'outside' && i) continue; if (n._menu.contains(t.target) && (t.type === 'keyup' && t.key === 'Tab' || /input|select|option|textarea|form/i.test(t.target.tagName))) continue; t.type === 'click' && (s.clickEvent = t); }n._completeHide(s); } }

    static getParentFromElement(t) { return It(t) || t.parentNode; }

    static dataApiKeydownHandler(t) { if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ue && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return; const e = this.classList.contains(Je); if (!e && t.key === Ue) return; if (t.preventDefault(), t.stopPropagation(), qt(this)) return; const i = this.matches(ti) ? this : Ee.prev(this, ti)[0]; const n = hi.getOrCreateInstance(i); if (t.key !== Ue) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void (e && t.key !== Ke || hi.clearMenus()); n.hide(); }
  }de.on(document, Ge, ti, hi.dataApiKeydownHandler), de.on(document, Ge, ei, hi.dataApiKeydownHandler), de.on(document, Ze, hi.clearMenus), de.on(document, 'keyup.bs.dropdown.data-api', hi.clearMenus), de.on(document, Ze, ti, (function (t) { t.preventDefault(), hi.getOrCreateInstance(this).toggle(); })), Ut(hi); const di = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'; const ui = '.sticky-top'; class fi {
    constructor() { this._element = document.body; }

    getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t); }

    hide() { const t = this.getWidth(); this._disableOverFlow(), this._setElementAttributes(this._element, 'paddingRight', ((e) => e + t)), this._setElementAttributes(di, 'paddingRight', ((e) => e + t)), this._setElementAttributes(ui, 'marginRight', ((e) => e - t)); }

    _disableOverFlow() { this._saveInitialAttribute(this._element, 'overflow'), this._element.style.overflow = 'hidden'; }

    _setElementAttributes(t, e, i) { const n = this.getWidth(); this._applyManipulationCallback(t, ((t) => { if (t !== this._element && window.innerWidth > t.clientWidth + n) return; this._saveInitialAttribute(t, e); const s = window.getComputedStyle(t)[e]; t.style[e] = `${i(Number.parseFloat(s))}px`; })); }

    reset() { this._resetElementAttributes(this._element, 'overflow'), this._resetElementAttributes(this._element, 'paddingRight'), this._resetElementAttributes(di, 'paddingRight'), this._resetElementAttributes(ui, 'marginRight'); }

    _saveInitialAttribute(t, e) { const i = t.style[e]; i && we.setDataAttribute(t, e, i); }

    _resetElementAttributes(t, e) { this._applyManipulationCallback(t, ((t) => { const i = we.getDataAttribute(t, e); void 0 === i ? t.style.removeProperty(e) : (we.removeDataAttribute(t, e), t.style[e] = i); })); }

    _applyManipulationCallback(t, e) { Mt(t) ? e(t) : Ee.find(t, this._element).forEach(e); }

    isOverflowing() { return this.getWidth() > 0; }
  } const pi = {
    className: 'modal-backdrop', isVisible: !0, isAnimated: !1, rootElement: 'body', clickCallback: null,
  }; const mi = {
    className: 'string', isVisible: 'boolean', isAnimated: 'boolean', rootElement: '(element|string)', clickCallback: '(function|null)',
  }; const gi = 'show'; const _i = 'mousedown.bs.backdrop'; class bi {
    constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null; }

    show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && $t(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation((() => { Kt(t); }))) : Kt(t); }

    hide(t) { this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation((() => { this.dispose(), Kt(t); }))) : Kt(t); }

    _getElement() { if (!this._element) { const t = document.createElement('div'); t.className = this._config.className, this._config.isAnimated && t.classList.add('fade'), this._element = t; } return this._element; }

    _getConfig(t) { return (t = { ...pi, ...typeof t === 'object' ? t : {} }).rootElement = jt(t.rootElement), Ht('backdrop', t, mi), t; }

    _append() { this._isAppended || (this._config.rootElement.append(this._getElement()), de.on(this._getElement(), _i, (() => { Kt(this._config.clickCallback); })), this._isAppended = !0); }

    dispose() { this._isAppended && (de.off(this._element, _i), this._element.remove(), this._isAppended = !1); }

    _emulateAnimation(t) { Xt(t, this._getElement(), this._config.isAnimated); }
  } const vi = { trapElement: null, autofocus: !0 }; const yi = { trapElement: 'element', autofocus: 'boolean' }; const wi = '.bs.focustrap'; const Ei = 'backward'; class Ai {
    constructor(t) { this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null; }

    activate() { const { trapElement: t, autofocus: e } = this._config; this._isActive || (e && t.focus(), de.off(document, wi), de.on(document, 'focusin.bs.focustrap', ((t) => this._handleFocusin(t))), de.on(document, 'keydown.tab.bs.focustrap', ((t) => this._handleKeydown(t))), this._isActive = !0); }

    deactivate() { this._isActive && (this._isActive = !1, de.off(document, wi)); }

    _handleFocusin(t) { const { target: e } = t; const { trapElement: i } = this._config; if (e === document || e === i || i.contains(e)) return; const n = Ee.focusableChildren(i); n.length === 0 ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus(); }

    _handleKeydown(t) { t.key === 'Tab' && (this._lastTabNavDirection = t.shiftKey ? Ei : 'forward'); }

    _getConfig(t) { return t = { ...vi, ...typeof t === 'object' ? t : {} }, Ht('focustrap', t, yi), t; }
  } const Ti = 'modal'; const Oi = 'Escape'; const Ci = { backdrop: !0, keyboard: !0, focus: !0 }; const Li = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean' }; const ki = 'hidden.bs.modal'; const xi = 'show.bs.modal'; const Si = 'resize.bs.modal'; const Di = 'click.dismiss.bs.modal'; const Ni = 'keydown.dismiss.bs.modal'; const Ii = 'mousedown.dismiss.bs.modal'; const Pi = 'modal-open'; const Mi = 'show'; const ji = 'modal-static'; class Hi extends pe {
    constructor(t, e) { super(t), this._config = this._getConfig(e), this._dialog = Ee.findOne('.modal-dialog', this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new fi(); }

    static get Default() { return Ci; }

    static get NAME() { return Ti; }

    toggle(t) { return this._isShown ? this.hide() : this.show(t); }

    show(t) { this._isShown || this._isTransitioning || de.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), de.on(this._dialog, Ii, (() => { de.one(this._element, 'mouseup.dismiss.bs.modal', ((t) => { t.target === this._element && (this._ignoreBackdropClick = !0); })); })), this._showBackdrop((() => this._showElement(t)))); }

    hide() { if (!this._isShown || this._isTransitioning) return; if (de.trigger(this._element, 'hide.bs.modal').defaultPrevented) return; this._isShown = !1; const t = this._isAnimated(); t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Mi), de.off(this._element, Di), de.off(this._dialog, Ii), this._queueCallback((() => this._hideModal()), this._element, t); }

    dispose() { [window, this._dialog].forEach(((t) => de.off(t, '.bs.modal'))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose(); }

    handleUpdate() { this._adjustDialog(); }

    _initializeBackDrop() { return new bi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }); }

    _initializeFocusTrap() { return new Ai({ trapElement: this._element }); }

    _getConfig(t) { return t = { ...Ci, ...we.getDataAttributes(this._element), ...typeof t === 'object' ? t : {} }, Ht(Ti, t, Li), t; }

    _showElement(t) { const e = this._isAnimated(); const i = Ee.findOne('.modal-body', this._dialog); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = 'block', this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), this._element.setAttribute('role', 'dialog'), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && $t(this._element), this._element.classList.add(Mi), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, de.trigger(this._element, 'shown.bs.modal', { relatedTarget: t }); }), this._dialog, e); }

    _setEscapeEvent() { this._isShown ? de.on(this._element, Ni, ((t) => { this._config.keyboard && t.key === Oi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Oi || this._triggerBackdropTransition(); })) : de.off(this._element, Ni); }

    _setResizeEvent() { this._isShown ? de.on(window, Si, (() => this._adjustDialog())) : de.off(window, Si); }

    _hideModal() { this._element.style.display = 'none', this._element.setAttribute('aria-hidden', !0), this._element.removeAttribute('aria-modal'), this._element.removeAttribute('role'), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), de.trigger(this._element, ki); })); }

    _showBackdrop(t) { de.on(this._element, Di, ((t) => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : this._config.backdrop === 'static' && this._triggerBackdropTransition()); })), this._backdrop.show(t); }

    _isAnimated() { return this._element.classList.contains('fade'); }

    _triggerBackdropTransition() { if (de.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented) return; const { classList: t, scrollHeight: e, style: i } = this._element; const n = e > document.documentElement.clientHeight; !n && i.overflowY === 'hidden' || t.contains(ji) || (n || (i.overflowY = 'hidden'), t.add(ji), this._queueCallback((() => { t.remove(ji), n || this._queueCallback((() => { i.overflowY = ''; }), this._dialog); }), this._dialog), this._element.focus()); }

    _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight; const e = this._scrollBar.getWidth(); const i = e > 0; (!i && t && !Ft() || i && !t && Ft()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !Ft() || !i && t && Ft()) && (this._element.style.paddingRight = `${e}px`); }

    _resetAdjustments() { this._element.style.paddingLeft = '', this._element.style.paddingRight = ''; }

    static jQueryInterface(t, e) { return this.each((function () { const i = Hi.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](e); } })); }
  }de.on(document, 'click.bs.modal.data-api', '[data-bs-toggle="modal"]', (function (t) { const e = It(this); ['A', 'AREA'].includes(this.tagName) && t.preventDefault(), de.one(e, xi, ((t) => { t.defaultPrevented || de.one(e, ki, (() => { Bt(this) && this.focus(); })); })); const i = Ee.findOne('.modal.show'); i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this); })), me(Hi), Ut(Hi); const Bi = 'offcanvas'; const qi = { backdrop: !0, keyboard: !0, scroll: !1 }; const Ri = { backdrop: 'boolean', keyboard: 'boolean', scroll: 'boolean' }; const Wi = 'show'; const $i = '.offcanvas.show'; const zi = 'hidden.bs.offcanvas'; class Vi extends pe {
    constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(); }

    static get NAME() { return Bi; }

    static get Default() { return qi; }

    toggle(t) { return this._isShown ? this.hide() : this.show(t); }

    show(t) { this._isShown || de.trigger(this._element, 'show.bs.offcanvas', { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = 'visible', this._backdrop.show(), this._config.scroll || (new fi()).hide(), this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), this._element.setAttribute('role', 'dialog'), this._element.classList.add(Wi), this._queueCallback((() => { this._config.scroll || this._focustrap.activate(), de.trigger(this._element, 'shown.bs.offcanvas', { relatedTarget: t }); }), this._element, !0)); }

    hide() { this._isShown && (de.trigger(this._element, 'hide.bs.offcanvas').defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Wi), this._backdrop.hide(), this._queueCallback((() => { this._element.setAttribute('aria-hidden', !0), this._element.removeAttribute('aria-modal'), this._element.removeAttribute('role'), this._element.style.visibility = 'hidden', this._config.scroll || (new fi()).reset(), de.trigger(this._element, zi); }), this._element, !0))); }

    dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose(); }

    _getConfig(t) { return t = { ...qi, ...we.getDataAttributes(this._element), ...typeof t === 'object' ? t : {} }, Ht(Bi, t, Ri), t; }

    _initializeBackDrop() {
      return new bi({
        className: 'offcanvas-backdrop', isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide(),
      });
    }

    _initializeFocusTrap() { return new Ai({ trapElement: this._element }); }

    _addEventListeners() { de.on(this._element, 'keydown.dismiss.bs.offcanvas', ((t) => { this._config.keyboard && t.key === 'Escape' && this.hide(); })); }

    static jQueryInterface(t) { return this.each((function () { const e = Vi.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === e[t] || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`); e[t](this); } })); }
  }de.on(document, 'click.bs.offcanvas.data-api', '[data-bs-toggle="offcanvas"]', (function (t) { const e = It(this); if (['A', 'AREA'].includes(this.tagName) && t.preventDefault(), qt(this)) return; de.one(e, zi, (() => { Bt(this) && this.focus(); })); const i = Ee.findOne($i); i && i !== e && Vi.getInstance(i).hide(), Vi.getOrCreateInstance(e).toggle(this); })), de.on(window, 'load.bs.offcanvas.data-api', (() => Ee.find($i).forEach(((t) => Vi.getOrCreateInstance(t).show())))), me(Vi), Ut(Vi); const Fi = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']); const Ui = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i; const Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i; const Xi = (t, e) => { const i = t.nodeName.toLowerCase(); if (e.includes(i)) return !Fi.has(i) || Boolean(Ui.test(t.nodeValue) || Ki.test(t.nodeValue)); const n = e.filter(((t) => t instanceof RegExp)); for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0; return !1; }; function Yi(t, e, i) { if (!t.length) return t; if (i && typeof i === 'function') return i(t); const n = (new window.DOMParser()).parseFromString(t, 'text/html'); const s = [].concat(...n.body.querySelectorAll('*')); for (let t = 0, i = s.length; t < i; t++) { const i = s[t]; const n = i.nodeName.toLowerCase(); if (!Object.keys(e).includes(n)) { i.remove(); continue; } const o = [].concat(...i.attributes); const r = [].concat(e['*'] || [], e[n] || []); o.forEach(((t) => { Xi(t, r) || i.removeAttribute(t.nodeName); })); } return n.body.innerHTML; } const Qi = 'tooltip'; const Zi = new Set(['sanitize', 'allowList', 'sanitizeFn']); const Gi = {
    animation: 'boolean', template: 'string', title: '(string|element|function)', trigger: 'string', delay: '(number|object)', html: 'boolean', selector: '(string|boolean)', placement: '(string|function)', offset: '(array|string|function)', container: '(string|element|boolean)', fallbackPlacements: 'array', boundary: '(string|element)', customClass: '(string|function)', sanitize: 'boolean', sanitizeFn: '(null|function)', allowList: 'object', popperConfig: '(null|object|function)',
  }; const Ji = {
    AUTO: 'auto', TOP: 'top', RIGHT: Ft() ? 'left' : 'right', BOTTOM: 'bottom', LEFT: Ft() ? 'right' : 'left',
  }; const tn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    selector: !1,
    placement: 'top',
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i], a: ['target', 'href', 'title', 'rel'], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ['src', 'srcset', 'alt', 'title', 'width', 'height'], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [],
    },
    popperConfig: null,
  }; const en = {
    HIDE: 'hide.bs.tooltip', HIDDEN: 'hidden.bs.tooltip', SHOW: 'show.bs.tooltip', SHOWN: 'shown.bs.tooltip', INSERTED: 'inserted.bs.tooltip', CLICK: 'click.bs.tooltip', FOCUSIN: 'focusin.bs.tooltip', FOCUSOUT: 'focusout.bs.tooltip', MOUSEENTER: 'mouseenter.bs.tooltip', MOUSELEAVE: 'mouseleave.bs.tooltip',
  }; const nn = 'fade'; const sn = 'show'; const on = 'show'; const rn = 'out'; const an = '.tooltip-inner'; const ln = '.modal'; const cn = 'hide.bs.modal'; const hn = 'hover'; const dn = 'focus'; class un extends pe {
    constructor(t, i) { if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = '', this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(i), this.tip = null, this._setListeners(); }

    static get Default() { return tn; }

    static get NAME() { return Qi; }

    static get Event() { return en; }

    static get DefaultType() { return Gi; }

    enable() { this._isEnabled = !0; }

    disable() { this._isEnabled = !1; }

    toggleEnabled() { this._isEnabled = !this._isEnabled; }

    toggle(t) { if (this._isEnabled) if (t) { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e); } else { if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this); this._enter(null, this); } }

    dispose() { clearTimeout(this._timeout), de.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose(); }

    show() { if (this._element.style.display === 'none') throw new Error('Please use show on visible elements'); if (!this.isWithContent() || !this._isEnabled) return; const t = de.trigger(this._element, this.constructor.Event.SHOW); const e = Rt(this._element); const i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element); if (t.defaultPrevented || !i) return; this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null); const n = this.getTipElement(); const s = ((t) => { do { t += Math.floor(1e6 * Math.random()); } while (document.getElementById(t)); return t; })(this.constructor.NAME); n.setAttribute('id', s), this._element.setAttribute('aria-describedby', s), this._config.animation && n.classList.add(nn); const o = typeof this._config.placement === 'function' ? this._config.placement.call(this, n, this._element) : this._config.placement; const r = this._getAttachment(o); this._addAttachmentClass(r); const { container: a } = this._config; fe.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), de.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = kt(this._element, n, this._getPopperConfig(r)), n.classList.add(sn); const l = this._resolvePossibleFunction(this._config.customClass); l && n.classList.add(...l.split(' ')), 'ontouchstart' in document.documentElement && [].concat(...document.body.children).forEach(((t) => { de.on(t, 'mouseover', Wt); })); const c = this.tip.classList.contains(nn); this._queueCallback((() => { const t = this._hoverState; this._hoverState = null, de.trigger(this._element, this.constructor.Event.SHOWN), t === rn && this._leave(null, this); }), this.tip, c); }

    hide() { if (!this._popper) return; const t = this.getTipElement(); if (de.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return; t.classList.remove(sn), 'ontouchstart' in document.documentElement && [].concat(...document.body.children).forEach(((t) => de.off(t, 'mouseover', Wt))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1; const e = this.tip.classList.contains(nn); this._queueCallback((() => { this._isWithActiveTrigger() || (this._hoverState !== on && t.remove(), this._cleanTipClass(), this._element.removeAttribute('aria-describedby'), de.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper()); }), this.tip, e), this._hoverState = ''; }

    update() { this._popper !== null && this._popper.update(); }

    isWithContent() { return Boolean(this.getTitle()); }

    getTipElement() { if (this.tip) return this.tip; const t = document.createElement('div'); t.innerHTML = this._config.template; const e = t.children[0]; return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip; }

    setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), an); }

    _sanitizeAndSetContent(t, e, i) { const n = Ee.findOne(i, t); e || !n ? this.setElementContent(n, e) : n.remove(); }

    setElementContent(t, e) { if (t !== null) return Mt(e) ? (e = jt(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = '', t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e); }

    getTitle() { const t = this._element.getAttribute('data-bs-original-title') || this._config.title; return this._resolvePossibleFunction(t); }

    updateAttachment(t) { return t === 'right' ? 'end' : t === 'left' ? 'start' : t; }

    _initializeOnDelegatedTarget(t, e) { return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()); }

    _getOffset() { const { offset: t } = this._config; return typeof t === 'string' ? t.split(',').map(((t) => Number.parseInt(t, 10))) : typeof t === 'function' ? (e) => t(e, this._element) : t; }

    _resolvePossibleFunction(t) { return typeof t === 'function' ? t.call(this._element) : t; }

    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [{ name: 'flip', options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: 'offset', options: { offset: this._getOffset() } }, { name: 'preventOverflow', options: { boundary: this._config.boundary } }, { name: 'arrow', options: { element: `.${this.constructor.NAME}-arrow` } }, {
          name: 'onChange', enabled: !0, phase: 'afterWrite', fn: (t) => this._handlePopperPlacementChange(t),
        }],
        onFirstUpdate: (t) => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t); },
      }; return { ...e, ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(e) : this._config.popperConfig };
    }

    _addAttachmentClass(t) { this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`); }

    _getAttachment(t) { return Ji[t.toUpperCase()]; }

    _setListeners() { this._config.trigger.split(' ').forEach(((t) => { if (t === 'click')de.on(this._element, this.constructor.Event.CLICK, this._config.selector, ((t) => this.toggle(t))); else if (t !== 'manual') { const e = t === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN; const i = t === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT; de.on(this._element, e, this._config.selector, ((t) => this._enter(t))), de.on(this._element, i, this._config.selector, ((t) => this._leave(t))); } })), this._hideModalHandler = () => { this._element && this.hide(); }, de.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: 'manual', selector: '' } : this._fixTitle(); }

    _fixTitle() { const t = this._element.getAttribute('title'); const e = typeof this._element.getAttribute('data-bs-original-title'); (t || e !== 'string') && (this._element.setAttribute('data-bs-original-title', t || ''), !t || this._element.getAttribute('aria-label') || this._element.textContent || this._element.setAttribute('aria-label', t), this._element.setAttribute('title', '')); }

    _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === 'focusin' ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => { e._hoverState === on && e.show(); }), e._config.delay.show) : e.show()); }

    _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === 'focusout' ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => { e._hoverState === rn && e.hide(); }), e._config.delay.hide) : e.hide()); }

    _isWithActiveTrigger() { for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1; }

    _getConfig(t) { const e = we.getDataAttributes(this._element); return Object.keys(e).forEach(((t) => { Zi.has(t) && delete e[t]; })), (t = { ...this.constructor.Default, ...e, ...typeof t === 'object' && t ? t : {} }).container = !1 === t.container ? document.body : jt(t.container), typeof t.delay === 'number' && (t.delay = { show: t.delay, hide: t.delay }), typeof t.title === 'number' && (t.title = t.title.toString()), typeof t.content === 'number' && (t.content = t.content.toString()), Ht(Qi, t, this.constructor.DefaultType), t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)), t; }

    _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t; }

    _cleanTipClass() { const t = this.getTipElement(); const e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g'); const i = t.getAttribute('class').match(e); i !== null && i.length > 0 && i.map(((t) => t.trim())).forEach(((e) => t.classList.remove(e))); }

    _getBasicClassPrefix() { return 'bs-tooltip'; }

    _handlePopperPlacementChange(t) { const { state: e } = t; e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement))); }

    _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null); }

    static jQueryInterface(t) { return this.each((function () { const e = un.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](); } })); }
  }Ut(un); const fn = {
    ...un.Default, placement: 'right', offset: [0, 8], trigger: 'click', content: '', template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  }; const pn = { ...un.DefaultType, content: '(string|element|function)' }; const mn = {
    HIDE: 'hide.bs.popover', HIDDEN: 'hidden.bs.popover', SHOW: 'show.bs.popover', SHOWN: 'shown.bs.popover', INSERTED: 'inserted.bs.popover', CLICK: 'click.bs.popover', FOCUSIN: 'focusin.bs.popover', FOCUSOUT: 'focusout.bs.popover', MOUSEENTER: 'mouseenter.bs.popover', MOUSELEAVE: 'mouseleave.bs.popover',
  }; class gn extends un {
    static get Default() { return fn; }

    static get NAME() { return 'popover'; }

    static get Event() { return mn; }

    static get DefaultType() { return pn; }

    isWithContent() { return this.getTitle() || this._getContent(); }

    setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), '.popover-header'), this._sanitizeAndSetContent(t, this._getContent(), '.popover-body'); }

    _getContent() { return this._resolvePossibleFunction(this._config.content); }

    _getBasicClassPrefix() { return 'bs-popover'; }

    static jQueryInterface(t) { return this.each((function () { const e = gn.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](); } })); }
  }Ut(gn); const _n = 'scrollspy'; const bn = { offset: 10, method: 'auto', target: '' }; const vn = { offset: 'number', method: 'string', target: '(string|element)' }; const yn = 'active'; const wn = '.nav-link, .list-group-item, .dropdown-item'; const En = 'position'; class An extends pe {
    constructor(t, e) { super(t), this._scrollElement = this._element.tagName === 'BODY' ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, de.on(this._scrollElement, 'scroll.bs.scrollspy', (() => this._process())), this.refresh(), this._process(); }

    static get Default() { return bn; }

    static get NAME() { return _n; }

    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? 'offset' : En; const e = this._config.method === 'auto' ? t : this._config.method; const i = e === En ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ee.find(wn, this._config.target).map(((t) => { const n = Nt(t); const s = n ? Ee.findOne(n) : null; if (s) { const t = s.getBoundingClientRect(); if (t.width || t.height) return [we[e](s).top + i, n]; } return null; })).filter(((t) => t)).sort(((t, e) => t[0] - e[0]))
        .forEach(((t) => { this._offsets.push(t[0]), this._targets.push(t[1]); }));
    }

    dispose() { de.off(this._scrollElement, '.bs.scrollspy'), super.dispose(); }

    _getConfig(t) { return (t = { ...bn, ...we.getDataAttributes(this._element), ...typeof t === 'object' && t ? t : {} }).target = jt(t.target) || document.documentElement, Ht(_n, t, vn), t; }

    _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop; }

    _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); }

    _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height; }

    _process() { const t = this._getScrollTop() + this._config.offset; const e = this._getScrollHeight(); const i = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= i) { const t = this._targets[this._targets.length - 1]; this._activeTarget !== t && this._activate(t); } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]); } }

    _activate(t) { this._activeTarget = t, this._clear(); const e = wn.split(',').map(((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)); const i = Ee.findOne(e.join(','), this._config.target); i.classList.add(yn), i.classList.contains('dropdown-item') ? Ee.findOne('.dropdown-toggle', i.closest('.dropdown')).classList.add(yn) : Ee.parents(i, '.nav, .list-group').forEach(((t) => { Ee.prev(t, '.nav-link, .list-group-item').forEach(((t) => t.classList.add(yn))), Ee.prev(t, '.nav-item').forEach(((t) => { Ee.children(t, '.nav-link').forEach(((t) => t.classList.add(yn))); })); })), de.trigger(this._scrollElement, 'activate.bs.scrollspy', { relatedTarget: t }); }

    _clear() { Ee.find(wn, this._config.target).filter(((t) => t.classList.contains(yn))).forEach(((t) => t.classList.remove(yn))); }

    static jQueryInterface(t) { return this.each((function () { const e = An.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](); } })); }
  }de.on(window, 'load.bs.scrollspy.data-api', (() => { Ee.find('[data-bs-spy="scroll"]').forEach(((t) => new An(t))); })), Ut(An); const Tn = 'active'; const On = 'fade'; const Cn = 'show'; const Ln = '.active'; const kn = ':scope > li > .active'; class xn extends pe {
    static get NAME() { return 'tab'; }

    show() { if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return; let t; const e = It(this._element); const i = this._element.closest('.nav, .list-group'); if (i) { const e = i.nodeName === 'UL' || i.nodeName === 'OL' ? kn : Ln; t = Ee.find(e, i), t = t[t.length - 1]; } const n = t ? de.trigger(t, 'hide.bs.tab', { relatedTarget: this._element }) : null; if (de.trigger(this._element, 'show.bs.tab', { relatedTarget: t }).defaultPrevented || n !== null && n.defaultPrevented) return; this._activate(this._element, i); const s = () => { de.trigger(t, 'hidden.bs.tab', { relatedTarget: this._element }), de.trigger(this._element, 'shown.bs.tab', { relatedTarget: t }); }; e ? this._activate(e, e.parentNode, s) : s(); }

    _activate(t, e, i) { const n = (!e || e.nodeName !== 'UL' && e.nodeName !== 'OL' ? Ee.children(e, Ln) : Ee.find(kn, e))[0]; const s = i && n && n.classList.contains(On); const o = () => this._transitionComplete(t, n, i); n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o(); }

    _transitionComplete(t, e, i) { if (e) { e.classList.remove(Tn); const t = Ee.findOne(':scope > .dropdown-menu .active', e.parentNode); t && t.classList.remove(Tn), e.getAttribute('role') === 'tab' && e.setAttribute('aria-selected', !1); }t.classList.add(Tn), t.getAttribute('role') === 'tab' && t.setAttribute('aria-selected', !0), $t(t), t.classList.contains(On) && t.classList.add(Cn); let n = t.parentNode; if (n && n.nodeName === 'LI' && (n = n.parentNode), n && n.classList.contains('dropdown-menu')) { const e = t.closest('.dropdown'); e && Ee.find('.dropdown-toggle', e).forEach(((t) => t.classList.add(Tn))), t.setAttribute('aria-expanded', !0); }i && i(); }

    static jQueryInterface(t) { return this.each((function () { const e = xn.getOrCreateInstance(this); if (typeof t === 'string') { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](); } })); }
  }de.on(document, 'click.bs.tab.data-api', '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) { ['A', 'AREA'].includes(this.tagName) && t.preventDefault(), qt(this) || xn.getOrCreateInstance(this).show(); })), Ut(xn); const Sn = 'toast'; const Dn = 'hide'; const Nn = 'show'; const In = 'showing'; const Pn = { animation: 'boolean', autohide: 'boolean', delay: 'number' }; const Mn = { animation: !0, autohide: !0, delay: 5e3 }; class jn extends pe {
    constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners(); }

    static get DefaultType() { return Pn; }

    static get Default() { return Mn; }

    static get NAME() { return Sn; }

    show() { de.trigger(this._element, 'show.bs.toast').defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add('fade'), this._element.classList.remove(Dn), $t(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback((() => { this._element.classList.remove(In), de.trigger(this._element, 'shown.bs.toast'), this._maybeScheduleHide(); }), this._element, this._config.animation)); }

    hide() { this._element.classList.contains(Nn) && (de.trigger(this._element, 'hide.bs.toast').defaultPrevented || (this._element.classList.add(In), this._queueCallback((() => { this._element.classList.add(Dn), this._element.classList.remove(In), this._element.classList.remove(Nn), de.trigger(this._element, 'hidden.bs.toast'); }), this._element, this._config.animation))); }

    dispose() { this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose(); }

    _getConfig(t) { return t = { ...Mn, ...we.getDataAttributes(this._element), ...typeof t === 'object' && t ? t : {} }, Ht(Sn, t, this.constructor.DefaultType), t; }

    _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide(); }), this._config.delay))); }

    _onInteraction(t, e) { switch (t.type) { case 'mouseover': case 'mouseout': this._hasMouseInteraction = e; break; case 'focusin': case 'focusout': this._hasKeyboardInteraction = e; } if (e) return void this._clearTimeout(); const i = t.relatedTarget; this._element === i || this._element.contains(i) || this._maybeScheduleHide(); }

    _setListeners() { de.on(this._element, 'mouseover.bs.toast', ((t) => this._onInteraction(t, !0))), de.on(this._element, 'mouseout.bs.toast', ((t) => this._onInteraction(t, !1))), de.on(this._element, 'focusin.bs.toast', ((t) => this._onInteraction(t, !0))), de.on(this._element, 'focusout.bs.toast', ((t) => this._onInteraction(t, !1))); }

    _clearTimeout() { clearTimeout(this._timeout), this._timeout = null; }

    static jQueryInterface(t) { return this.each((function () { const e = jn.getOrCreateInstance(this, t); if (typeof t === 'string') { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](this); } })); }
  }me(jn), Ut(jn); const Hn = function (t) { if (t.name && t.type) { const e = document.getElementById('main'); const i = document.createElement('div'); i.className = 'li'; const n = document.createElement('div'); n.className = 'card', n.style.width = '18rem', n.style.marginTop = '20px'; const s = document.createElement('div'); s.className = 'card-body'; const o = document.createElement('h5'); o.className = 'card-title', o.innerHTML = t.name; const r = document.createElement('p'); r.className = 'card-text', r.innerHTML = t.type; const a = document.createElement('div'); a.style.display = 'flex', a.style.justifyContent = 'space-between', a.style.flexDirection = 'row', a.style.alignItems = 'center'; const l = document.createElement('i'); l.className = 'fa fa-heart', l.style.cursor = 'pointer', l.addEventListener('click', ((e) => { !(function (t, e) { console.log('liked'); const i = { item_id: t }; fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/likes', { method: 'POST', body: JSON.stringify(i), headers: { 'Content-Type': 'application/json' } }).then((() => { const t = e.target; const i = parseInt(t.getAttribute('data-likes'), 10) + 1; t.setAttribute('data-likes', i), t.nextSibling.innerHTML = '('.concat(i, ')'); })); }(t.id, e)); })), l.setAttribute('data-id', t.id), l.setAttribute('data-likes', '0'); const c = document.createElement('button'); c.innerHTML = 'Comments', c.setAttribute('type', 'button'), c.setAttribute('class', 'btn btn-primary'), c.setAttribute('data-bs-toggle', 'modal'), c.setAttribute('data-bs-target', '#exampleModal'), c.addEventListener('click', (() => { let e; document.querySelector('#movie-comment-id').value = t.id, e = t.id, fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/comments?item_id='.concat(e)).then(((t) => t.json())).then(((t) => { if (void 0 === t.error) { document.querySelector('#comments-count').innerHTML = t.length; const e = document.querySelector('#comments'); e.innerHTML = '', t.forEach(((t) => { const i = document.createElement('li'); i.innerHTML = '<strong>'.concat(t.username, '</strong>, ').concat(t.creation_date, '<br/>').concat(t.comment), e.appendChild(i); })); } })); })); const h = document.createElement('span'); const d = document.createElement('span'); d.className = 'likes-count', d.innerHTML = '(0)', h.appendChild(l), h.appendChild(d), a.appendChild(h), a.appendChild(c), s.appendChild(o), s.appendChild(r), s.appendChild(a), n.appendChild(s), i.appendChild(n), e.appendChild(i); } }; function Bn(t, e) { for (let i = 0; i < e.length; i++) { const n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n); } }(new (function () { function t() { !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, t)), this.BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/', this.APP_ID = 'D8OVZsdBVSdILi60DTqq', this.MOVIES_API_URL = 'https://api.tvmaze.com/search/shows?q=girls'; } let e; let i; return e = t, (i = [{ key: 'fetchMovies', value() { fetch(this.MOVIES_API_URL).then(((t) => t.json())).then(((t) => { t.forEach(((t) => { Hn(t.show); })), fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/likes').then(((t) => t.json())).then(((t) => { t.forEach(((t) => { document.querySelectorAll('.likes-count').forEach(((e) => { parseInt(t.item_id, 10) === parseInt(e.previousSibling.getAttribute('data-id'), 10) && (e.innerHTML = '('.concat(t.likes, ')'), e.previousSibling.setAttribute('data-likes', t.likes)); })); })); })); })); } }]) && Bn(e.prototype, i), Object.defineProperty(e, 'prototype', { writable: !1 }), t; }())()).fetchMovies(), document.querySelector('#comment-btn').addEventListener('click', (() => { let t; let e; let i; const n = document.querySelector('#movie-comment-id').value; const s = document.querySelector('#comment').value; const o = document.querySelector('#username').value; i = { item_id: n, comment: t = s, username: e = o }, fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/comments', { method: 'POST', body: JSON.stringify(i), headers: { 'Content-Type': 'application/json' } }).then((() => { const i = document.createElement('li'); i.innerHTML = '<strong>'.concat(e, '</strong>, now<br/>').concat(t), document.querySelector('#comments').appendChild(i); const n = document.querySelector('#comments-count'); const s = parseInt(n.innerHTML, 10) + 1; n.innerHTML = s; })); }));
})();