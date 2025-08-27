"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [52], {
        13: (t, e, i) => {
            i.d(e, {
                B: () => r
            });
            let n = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                r = {};
            for (let t in n) r[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            }
        },
        105: (t, e, i) => {
            i.d(e, {
                k: () => n
            });
            let n = (t, e, i) => t + (e - t) * i
        },
        315: (t, e, i) => {
            i.d(e, {
                KN: () => s,
                gQ: () => u,
                px: () => a,
                uj: () => r,
                vh: () => o,
                vw: () => l
            });
            let n = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                r = n("deg"),
                s = n("%"),
                a = n("px"),
                o = n("vh"),
                l = n("vw"),
                u = { ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        401: (t, e, i) => {
            i.d(e, {
                W: () => o
            });
            var n = i(5590);
            let r = { ...n.ai,
                transform: Math.round
            };
            var s = i(315);
            let a = {
                    rotate: s.uj,
                    rotateX: s.uj,
                    rotateY: s.uj,
                    rotateZ: s.uj,
                    scale: n.hs,
                    scaleX: n.hs,
                    scaleY: n.hs,
                    scaleZ: n.hs,
                    skew: s.uj,
                    skewX: s.uj,
                    skewY: s.uj,
                    distance: s.px,
                    translateX: s.px,
                    translateY: s.px,
                    translateZ: s.px,
                    x: s.px,
                    y: s.px,
                    z: s.px,
                    perspective: s.px,
                    transformPerspective: s.px,
                    opacity: n.X4,
                    originX: s.gQ,
                    originY: s.gQ,
                    originZ: s.px
                },
                o = {
                    borderWidth: s.px,
                    borderTopWidth: s.px,
                    borderRightWidth: s.px,
                    borderBottomWidth: s.px,
                    borderLeftWidth: s.px,
                    borderRadius: s.px,
                    radius: s.px,
                    borderTopLeftRadius: s.px,
                    borderTopRightRadius: s.px,
                    borderBottomRightRadius: s.px,
                    borderBottomLeftRadius: s.px,
                    width: s.px,
                    maxWidth: s.px,
                    height: s.px,
                    maxHeight: s.px,
                    top: s.px,
                    right: s.px,
                    bottom: s.px,
                    left: s.px,
                    padding: s.px,
                    paddingTop: s.px,
                    paddingRight: s.px,
                    paddingBottom: s.px,
                    paddingLeft: s.px,
                    margin: s.px,
                    marginTop: s.px,
                    marginRight: s.px,
                    marginBottom: s.px,
                    marginLeft: s.px,
                    backgroundPositionX: s.px,
                    backgroundPositionY: s.px,
                    ...a,
                    zIndex: r,
                    fillOpacity: n.X4,
                    strokeOpacity: n.X4,
                    numOctaves: r
                }
        },
        488: (t, e, i) => {
            i.d(e, {
                A: () => n
            });
            let n = (0, i(9946).A)("facebook", [
                ["path", {
                    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                    key: "1jg4f8"
                }]
            ])
        },
        646: (t, e, i) => {
            i.d(e, {
                s: () => y
            });
            var n = i(8840),
                r = i(2189),
                s = i(1324),
                a = i(6182);
            let o = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => a.Gt.update(e, !0),
                    stop: () => (0, a.WG)(e),
                    now: () => a.uv.isProcessing ? a.uv.timestamp : n.k.now()
                }
            };
            var l = i(6201),
                u = i(6584),
                h = i(7393),
                d = i(5671),
                c = i(6569),
                p = i(5340),
                m = i(9792),
                f = i(5538),
                g = i(8167);
            let v = t => t / 100;
            class y extends p.q {
                constructor(t) {
                    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                        let {
                            motionValue: t
                        } = this.options;
                        if (t && t.updatedAt !== n.k.now() && this.tick(n.k.now()), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: e
                        } = this.options;
                        e && e()
                    }, r.q.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
                }
                initAnimation() {
                    let {
                        options: t
                    } = this;
                    (0, c.E)(t);
                    let {
                        type: e = u.i,
                        repeat: i = 0,
                        repeatDelay: n = 0,
                        repeatType: r,
                        velocity: a = 0
                    } = t, {
                        keyframes: o
                    } = t, l = e || u.i;
                    l !== u.i && "number" != typeof o[0] && (this.mixKeyframes = (0, m.F)(v, (0, s.j)(o[0], o[1])), o = [0, 100]);
                    let d = l({ ...t,
                        keyframes: o
                    });
                    "mirror" === r && (this.mirroredGenerator = l({ ...t,
                        keyframes: [...o].reverse(),
                        velocity: -a
                    })), null === d.calculatedDuration && (d.calculatedDuration = (0, h.t)(d));
                    let {
                        calculatedDuration: p
                    } = d;
                    this.calculatedDuration = p, this.resolvedDuration = p + n, this.totalDuration = this.resolvedDuration * (i + 1) - n, this.generator = d
                }
                updateTime(t) {
                    let e = Math.round(t - this.startTime) * this.playbackSpeed;
                    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
                }
                tick(t, e = !1) {
                    let {
                        generator: i,
                        totalDuration: n,
                        mixKeyframes: r,
                        mirroredGenerator: s,
                        resolvedDuration: a,
                        calculatedDuration: o
                    } = this;
                    if (null === this.startTime) return i.next(0);
                    let {
                        delay: u = 0,
                        keyframes: h,
                        repeat: c,
                        repeatType: p,
                        repeatDelay: m,
                        type: f,
                        onUpdate: v,
                        finalKeyframe: y
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
                    let x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
                        w = this.playbackSpeed >= 0 ? x < 0 : x > n;
                    this.currentTime = Math.max(x, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
                    let T = this.currentTime,
                        b = i;
                    if (c) {
                        let t = Math.min(this.currentTime, n) / a,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i, m && (i -= m / a)) : "mirror" === p && (b = s)), T = (0, g.q)(0, 1, i) * a
                    }
                    let S = w ? {
                        done: !1,
                        value: h[0]
                    } : b.next(T);
                    r && (S.value = r(S.value));
                    let {
                        done: A
                    } = S;
                    w || null === o || (A = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
                    let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && A);
                    return P && f !== l.B && (S.value = (0, d.X)(h, this.options, y, this.speed)), v && v(S.value), P && this.finish(), S
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
                get duration() {
                    return (0, f.X)(this.calculatedDuration)
                }
                get time() {
                    return (0, f.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, f.f)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    this.updateTime(n.k.now());
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, f.X)(this.currentTime))
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        driver: t = o,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = i ? ? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    this.state = "paused", this.updateTime(n.k.now()), this.holdTime = this.currentTime
                }
                complete() {
                    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown()
                }
                teardown() {
                    this.notifyFinished(), this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, r.q.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                attachTimeline(t) {
                    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), t.observe(this)
                }
            }
        },
        793: (t, e, i) => {
            i.d(e, {
                K: () => n
            });

            function n(t, e, i) {
                if (t instanceof EventTarget) return [t];
                if ("string" == typeof t) {
                    let n = document;
                    e && (n = e.current);
                    let r = i ? .[t] ? ? n.querySelectorAll(t);
                    return r ? Array.from(r) : []
                }
                return Array.from(t)
            }
        },
        877: (t, e, i) => {
            i.d(e, {
                o: () => f
            });
            var n = i(1986),
                r = i(7393),
                s = i(1835),
                a = i(5396);
            let o = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };
            var l = i(4449),
                u = i(5538),
                h = i(8167);

            function d(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let c = ["duration", "bounce"],
                p = ["stiffness", "damping", "mass"];

            function m(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function f(t = o.visualDuration, e = o.bounce) {
                let i, s = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: g,
                        restDelta: v
                    } = s,
                    y = s.keyframes[0],
                    x = s.keyframes[s.keyframes.length - 1],
                    w = {
                        done: !1,
                        value: y
                    },
                    {
                        stiffness: T,
                        damping: b,
                        mass: S,
                        duration: A,
                        velocity: P,
                        isResolvedFromDuration: E
                    } = function(t) {
                        let e = {
                            velocity: o.velocity,
                            stiffness: o.stiffness,
                            damping: o.damping,
                            mass: o.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!m(t, p) && m(t, c))
                            if (t.visualDuration) {
                                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                                    n = i * i,
                                    r = 2 * (0, h.q)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                                e = { ...e,
                                    mass: o.mass,
                                    stiffness: n,
                                    damping: r
                                }
                            } else {
                                let i = function({
                                    duration: t = o.duration,
                                    bounce: e = o.bounce,
                                    velocity: i = o.velocity,
                                    mass: n = o.mass
                                }) {
                                    let r, s;
                                    (0, l.$)(t <= (0, u.f)(o.maxDuration), "Spring duration must be 10 seconds or less");
                                    let a = 1 - e;
                                    a = (0, h.q)(o.minDamping, o.maxDamping, a), t = (0, h.q)(o.minDuration, o.maxDuration, (0, u.X)(t)), a < 1 ? (r = e => {
                                        let n = e * a,
                                            r = n * t;
                                        return .001 - (n - i) / d(e, a) * Math.exp(-r)
                                    }, s = e => {
                                        let n = e * a * t,
                                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                            o = Math.exp(-n),
                                            l = d(Math.pow(e, 2), a);
                                        return (n * i + i - s) * o * (-r(e) + .001 > 0 ? -1 : 1) / l
                                    }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                                    let c = function(t, e, i) {
                                        let n = i;
                                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                        return n
                                    }(r, s, 5 / t);
                                    if (t = (0, u.f)(t), isNaN(c)) return {
                                        stiffness: o.stiffness,
                                        damping: o.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(c, 2) * n;
                                        return {
                                            stiffness: e,
                                            damping: 2 * a * Math.sqrt(n * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...i,
                                    mass: o.mass
                                }).isResolvedFromDuration = !0
                            }
                        return e
                    }({ ...s,
                        velocity: -(0, u.X)(s.velocity || 0)
                    }),
                    M = P || 0,
                    V = b / (2 * Math.sqrt(T * S)),
                    k = x - y,
                    C = (0, u.X)(Math.sqrt(T / S)),
                    D = 5 > Math.abs(k);
                if (g || (g = D ? o.restSpeed.granular : o.restSpeed.default), v || (v = D ? o.restDelta.granular : o.restDelta.default), V < 1) {
                    let t = d(C, V);
                    i = e => x - Math.exp(-V * C * e) * ((M + V * C * k) / t * Math.sin(t * e) + k * Math.cos(t * e))
                } else if (1 === V) i = t => x - Math.exp(-C * t) * (k + (M + C * k) * t);
                else {
                    let t = C * Math.sqrt(V * V - 1);
                    i = e => {
                        let i = Math.exp(-V * C * e),
                            n = Math.min(t * e, 300);
                        return x - i * ((M + V * C * k) * Math.sinh(n) + t * k * Math.cosh(n)) / t
                    }
                }
                let R = {
                    calculatedDuration: E && A || null,
                    next: t => {
                        let e = i(t);
                        if (E) w.done = t >= A;
                        else {
                            let n = 0 === t ? M : 0;
                            V < 1 && (n = 0 === t ? (0, u.f)(M) : (0, a.Y)(i, t, e));
                            let r = Math.abs(x - e) <= v;
                            w.done = Math.abs(n) <= g && r
                        }
                        return w.value = w.done ? x : e, w
                    },
                    toString: () => {
                        let t = Math.min((0, r.t)(R), r.Y),
                            e = (0, n.K)(e => R.next(t * e).value, t, 30);
                        return t + "ms " + e
                    },
                    toTransition: () => {}
                };
                return R
            }
            f.applyToOptions = t => {
                let e = (0, s.X)(t, 100, f);
                return t.ease = e.ease, t.duration = (0, u.f)(e.duration), t.type = "keyframes", t
            }
        },
        1018: (t, e, i) => {
            i.d(e, {
                $: () => s,
                q: () => a
            });
            var n = i(8459);
            let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                s = (t, e) => i => !!("string" == typeof i && r.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                a = (t, e, i) => r => {
                    if ("string" != typeof r) return r;
                    let [s, a, o, l] = r.match(n.S);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(a),
                        [i]: parseFloat(o),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        1116: (t, e, i) => {
            i.d(e, {
                l: () => n
            });
            let n = t => t
        },
        1216: (t, e, i) => {
            i.d(e, {
                P: () => iT
            });
            var n, r, s = i(1403),
                a = i(6390),
                o = i(3801);

            function l(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var u = i(1398),
                h = i(9013);
            let d = h._.length;
            var c = i(4920);
            let p = [...h.U].reverse(),
                m = h.U.length;

            function f(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function g() {
                return {
                    animate: f(!0),
                    whileInView: f(),
                    whileHover: f(),
                    whileTap: f(),
                    whileDrag: f(),
                    whileFocus: f(),
                    exit: f()
                }
            }
            class v {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class y extends v {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (0, a._)(t, e, i))),
                            i = g(),
                            n = !0,
                            r = e => (i, n) => {
                                let r = (0, c.K)(t, n, "exit" === e ? t.presenceContext ? .custom : void 0);
                                if (r) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = r;
                                    i = { ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function f(a) {
                            let {
                                props: f
                            } = t, g = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < d; t++) {
                                    let n = h._[t],
                                        r = e.props[n];
                                    ((0, u.w)(r) || !1 === r) && (i[n] = r)
                                }
                                return i
                            }(t.parent) || {}, v = [], y = new Set, x = {}, w = 1 / 0;
                            for (let e = 0; e < m; e++) {
                                var T, b;
                                let h = p[e],
                                    d = i[h],
                                    c = void 0 !== f[h] ? f[h] : g[h],
                                    m = (0, u.w)(c),
                                    S = h === a ? d.isActive : null;
                                !1 === S && (w = e);
                                let A = c === g[h] && c !== f[h] && m;
                                if (A && n && t.manuallyAnimateOnMount && (A = !1), d.protectedKeys = { ...x
                                    }, !d.isActive && null === S || !c && !d.prevProp || (0, s.N)(c) || "boolean" == typeof c) continue;
                                let P = (T = d.prevProp, "string" == typeof(b = c) ? b !== T : !!Array.isArray(b) && !l(b, T)),
                                    E = P || h === a && d.isActive && !A && m || e > w && m,
                                    M = !1,
                                    V = Array.isArray(c) ? c : [c],
                                    k = V.reduce(r(h), {});
                                !1 === S && (k = {});
                                let {
                                    prevResolvedValues: C = {}
                                } = d, D = { ...C,
                                    ...k
                                }, R = e => {
                                    E = !0, y.has(e) && (M = !0, y.delete(e)), d.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in D) {
                                    let e = k[t],
                                        i = C[t];
                                    if (x.hasOwnProperty(t)) continue;
                                    let n = !1;
                                    ((0, o.p)(e) && (0, o.p)(i) ? l(e, i) : e === i) ? void 0 !== e && y.has(t) ? R(t) : d.protectedKeys[t] = !0: null != e ? R(t) : y.add(t)
                                }
                                d.prevProp = c, d.prevResolvedValues = k, d.isActive && (x = { ...x,
                                    ...k
                                }), n && t.blockInitialAnimation && (E = !1);
                                let L = !(A && P) || M;
                                E && L && v.push(...V.map(t => ({
                                    animation: t,
                                    options: {
                                        type: h
                                    }
                                })))
                            }
                            if (y.size) {
                                let e = {};
                                if ("boolean" != typeof f.initial) {
                                    let i = (0, c.K)(t, Array.isArray(f.initial) ? f.initial[0] : f.initial);
                                    i && i.transition && (e.transition = i.transition)
                                }
                                y.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        r = t.getValue(i);
                                    r && (r.liveStyle = !0), e[i] = n ? ? null
                                }), v.push({
                                    animation: e
                                })
                            }
                            let S = !!v.length;
                            return n && (!1 === f.initial || f.initial === f.animate) && !t.manuallyAnimateOnMount && (S = !1), n = !1, S ? e(v) : Promise.resolve()
                        }
                        return {
                            animateChanges: f,
                            setActive: function(e, n) {
                                if (i[e].isActive === n) return Promise.resolve();
                                t.variantChildren ? .forEach(t => t.animationState ? .setActive(e, n)), i[e].isActive = n;
                                let r = f(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return r
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = g(), n = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    (0, s.N)(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls ? .()
                }
            }
            let x = 0;
            class w extends v {
                constructor() {
                    super(...arguments), this.id = x++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => {
                        e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var T = i(2158);

            function b(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let S = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function A(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let P = t => e => S(e) && t(e, A(e));

            function E(t, e, i, n) {
                return b(t, e, P(i), n)
            }
            var M = i(2937),
                V = i(105);

            function k(t) {
                return t.max - t.min
            }

            function C(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, V.k)(e.min, e.max, t.origin), t.scale = k(i) / k(e), t.translate = (0, V.k)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function D(t, e, i, n) {
                C(t.x, e.x, i.x, n ? n.originX : void 0), C(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function R(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + k(e)
            }

            function L(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + k(e)
            }

            function j(t, e, i) {
                L(t.x, e.x, i.x), L(t.y, e.y, i.y)
            }
            var B = i(5915);

            function F(t) {
                return [t("x"), t("y")]
            }
            var O = i(9876);
            let W = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;

            function U(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            var I = i(9932);
            let N = (t, e) => Math.abs(t - e);
            var $ = i(6182),
                G = i(9792),
                q = i(5538);
            class H {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = K(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    return Math.sqrt(N(t.x, e.x) ** 2 + N(t.y, e.y) ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: r
                            } = $.uv;
                            this.history.push({ ...n,
                                timestamp: r
                            });
                            let {
                                onStart: s,
                                onMove: a
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = X(e, this.transformPagePoint), $.Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = K("pointercancel" === t.type ? this.lastMoveEventInfo : X(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !S(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = X(A(t), this.transformPagePoint),
                        {
                            point: a
                        } = s,
                        {
                            timestamp: o
                        } = $.uv;
                    this.history = [{ ...a,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, K(s, this.history)), this.removeListeners = (0, G.F)(E(this.contextWindow, "pointermove", this.handlePointerMove), E(this.contextWindow, "pointerup", this.handlePointerUp), E(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, $.WG)(this.updatePoint)
                }
            }

            function X(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function z(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function K({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: z(t, Y(e)),
                    offset: z(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = Y(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > (0, q.f)(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, q.X)(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, .1)
                }
            }

            function Y(t) {
                return t[t.length - 1]
            }
            var Q = i(8865),
                _ = i(8167);

            function Z(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function J(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function tt(t, e, i) {
                return {
                    min: te(t, e),
                    max: te(t, i)
                }
            }

            function te(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            var ti = i(4449);
            let tn = {
                x: !1,
                y: !1
            };
            var tr = i(315);
            let ts = new WeakMap;
            class ta {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, B.ge)(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new H(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(A(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                                    if ("x" === t || "y" === t)
                                        if (tn[t]) return null;
                                        else return tn[t] = !0, () => {
                                            tn[t] = !1
                                        };
                                    return tn.x || tn.y ? null : (tn.x = tn.y = !0, () => {
                                        tn.x = tn.y = !1
                                    })
                                }(i), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), F(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tr.KN.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        n && (e = k(n) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && $.Gt.postRender(() => r(t, e)), (0, I.g)(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: a
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(a), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => F(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation ? .play())
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: W(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && $.Gt.postRender(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !to(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, V.k)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, V.k)(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, n = this.constraints;
                    t && U(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: Z(t.x, i, r),
                            y: Z(t.y, e, n)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: tt(t, "left", "right"),
                            y: tt(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && F(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !U(e)) return !1;
                    let n = e.current;
                    (0, ti.V)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = (0, O.L)(n, r.root, this.visualElement.getTransformPagePoint()),
                        a = (t = r.layout.layoutBox, {
                            x: J(t.x, s.x),
                            y: J(t.y, s.y)
                        });
                    if (i) {
                        let t = i((0, M.pA)(a));
                        this.hasMutatedConstraints = !!t, t && (a = (0, M.FY)(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: a
                    } = this.getProps(), o = this.constraints || {};
                    return Promise.all(F(a => {
                        if (!to(a, e, this.currentDirection)) return;
                        let l = o && o[a] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[a] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(a, u)
                    })).then(a)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return (0, I.g)(this.visualElement, t), i.start((0, T.f)(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    F(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    F(t => this.getAxisMotionValue(t).animation ? .pause())
                }
                getAnimationState(t) {
                    return this.getAxisMotionValue(t).animation ? .state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    F(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!to(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - (0, V.k)(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!U(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    F(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = k(t),
                                    r = k(e);
                                return r > n ? i = (0, Q.q)(e.min, e.max - n, t.min) : n > r && (i = (0, Q.q)(t.min, t.max - r, e.min)), (0, _.q)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), F(e => {
                        if (!to(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set((0, V.k)(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    ts.set(this.visualElement, this);
                    let t = E(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            U(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), $.Gt.read(e);
                    let r = b(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (F(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: a = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: a
                    }
                }
            }

            function to(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            var tl = i(1116);
            class tu extends v {
                constructor(t) {
                    super(t), this.removeGroupControls = tl.l, this.removeListeners = tl.l, this.controls = new ta(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tl.l
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let th = t => (e, i) => {
                t && $.Gt.postRender(() => t(e, i))
            };
            class td extends v {
                constructor() {
                    super(...arguments), this.removePointerDownListener = tl.l
                }
                onPointerDown(t) {
                    this.session = new H(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: W(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: th(t),
                        onStart: th(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && $.Gt.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = E(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var tc = i(5155),
                tp = i(2115);
            let tm = (0, tp.createContext)(null),
                tf = (0, tp.createContext)({}),
                tg = (0, tp.createContext)({}),
                tv = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function ty(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let tx = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t)
                        if (!tr.px.test(t)) return t;
                        else t = parseFloat(t);
                    let i = ty(t, e.target.x),
                        n = ty(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            var tw = i(5233),
                tT = i(1940);
            let {
                schedule: tb
            } = (0, i(6911).I)(queueMicrotask, !1);
            class tS extends tp.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    (0, tT.$)(tP), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), tv.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e || t.isPresent !== r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? s.promote() : s.relegate() || $.Gt.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), tb.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function tA(t) {
                let [e, i] = function(t = !0) {
                    let e = (0, tp.useContext)(tm);
                    if (null === e) return [!0, null];
                    let {
                        isPresent: i,
                        onExitComplete: n,
                        register: r
                    } = e, s = (0, tp.useId)();
                    (0, tp.useEffect)(() => {
                        if (t) return r(s)
                    }, [t]);
                    let a = (0, tp.useCallback)(() => t && n && n(s), [s, n, t]);
                    return !i && n ? [!1, a] : [!0]
                }(), n = (0, tp.useContext)(tf);
                return (0, tc.jsx)(tS, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, tp.useContext)(tg),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let tP = {
                borderRadius: { ...tx,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: tx,
                borderTopRightRadius: tx,
                borderBottomLeftRadius: tx,
                borderBottomRightRadius: tx,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let n = tw.f.parse(t);
                        if (n.length > 5) return t;
                        let r = tw.f.createTransformer(t),
                            s = +("number" != typeof n[0]),
                            a = i.x.scale * e.x,
                            o = i.y.scale * e.y;
                        n[0 + s] /= a, n[1 + s] /= o;
                        let l = (0, V.k)(a, o, .5);
                        return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                    }
                }
            };
            var tE = i(2685),
                tM = i(2819),
                tV = i(3798);
            let tk = (t, e) => t.depth - e.depth;
            var tC = i(5649);
            class tD {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, tC.Kq)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, tC.Ai)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(tk), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var tR = i(8840),
                tL = i(5057);

            function tj(t) {
                return (0, tL.S)(t) ? t.get() : t
            }
            var tB = i(1673);
            let tF = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tO = tF.length,
                tW = t => "string" == typeof t ? parseFloat(t) : t,
                tU = t => "number" == typeof t || tr.px.test(t);

            function tI(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tN = tG(0, .5, tB.yT),
                t$ = tG(.5, .95, tl.l);

            function tG(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i((0, Q.q)(t, e, n))
            }

            function tq(t, e) {
                t.min = e.min, t.max = e.max
            }

            function tH(t, e) {
                tq(t.x, e.x), tq(t.y, e.y)
            }

            function tX(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }
            var tz = i(5960);

            function tK(t, e, i, n, r) {
                return t -= e, t = (0, tz.hq)(t, 1 / i, n), void 0 !== r && (t = (0, tz.hq)(t, 1 / r, n)), t
            }

            function tY(t, e, [i, n, r], s, a) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, a = t) {
                    if (tr.KN.test(e) && (e = parseFloat(e), e = (0, V.k)(a.min, a.max, e / 100) - a.min), "number" != typeof e) return;
                    let o = (0, V.k)(s.min, s.max, n);
                    t === s && (o -= e), t.min = tK(t.min, e, i, o, r), t.max = tK(t.max, e, i, o, r)
                }(t, e[i], e[n], e[r], e.scale, s, a)
            }
            let tQ = ["x", "scaleX", "originX"],
                t_ = ["y", "scaleY", "originY"];

            function tZ(t, e, i, n) {
                tY(t.x, e, tQ, i ? i.x : void 0, n ? n.x : void 0), tY(t.y, e, t_, i ? i.y : void 0, n ? n.y : void 0)
            }

            function tJ(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function t0(t) {
                return tJ(t.x) && tJ(t.y)
            }

            function t1(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function t5(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function t9(t, e) {
                return t5(t.x, e.x) && t5(t.y, e.y)
            }

            function t2(t) {
                return k(t.x) / k(t.y)
            }

            function t3(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class t4 {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, tC.Kq)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, tC.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e, i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            var t6 = i(5855),
                t8 = i(8579),
                t7 = i(1309),
                et = i(9922),
                ee = i(2189);
            let ei = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                en = ["", "X", "Y", "Z"],
                er = {
                    visibility: "hidden"
                },
                es = 0;

            function ea(t, e, i, n) {
                let {
                    latestValues: r
                } = e;
                r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function eo({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = e ? .()) {
                        this.id = es++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, t8.Q.value && (ei.nodes = ei.calculatedTargetDeltas = ei.calculatedProjections = 0), this.nodes.forEach(eh), this.nodes.forEach(ev), this.nodes.forEach(ey), this.nodes.forEach(ed), t8.Q.addProjectionMetrics && t8.Q.addProjectionMetrics(ei)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new tD)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new t7.v), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = (0, tV.x)(e), this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i, n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = tR.k.now(),
                                        n = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - i;
                                            s >= 250 && ((0, $.WG)(n), t(s - e))
                                        };
                                    return $.Gt.setup(n, !0), () => (0, $.WG)(n)
                                }(n, 250), tv.hasAnimatedSinceResize && (tv.hasAnimatedSinceResize = !1, this.nodes.forEach(eg))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeLayoutChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || eA,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: o
                                } = s.getProps(),
                                l = !this.targetLayout || !t9(this.targetLayout, n),
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, et.r)(r, "layout"),
                                    onPlay: a,
                                    onComplete: o
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || eg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, $.WG)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ex), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let n = (0, tM.P)(i);
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", $.Gt, !(t || i))
                                }
                                let {
                                    parent: r
                                } = e;
                                r && !r.hasCheckedOptimisedAppear && t(r)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ep);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(em), this.isUpdating = !1, this.nodes.forEach(ef), this.nodes.forEach(el), this.nodes.forEach(eu), this.clearAllSnapshots();
                        let t = tR.k.now();
                        $.uv.delta = (0, _.q)(0, 1e3 / 60, t - $.uv.timestamp), $.uv.timestamp = t, $.uv.isProcessing = !0, $.PP.update.process($.uv), $.PP.preRender.process($.uv), $.PP.render.process($.uv), $.uv.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, tb.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(ec), this.sharedNodes.forEach(ew)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, $.Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        $.Gt.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || k(this.snapshot.measuredBox.x) || k(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, B.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !t0(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || (0, t6.HD)(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), eM((e = n).x), eM(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return (0, B.ge)();
                        let e = t.measureViewportBox();
                        if (!(this.scroll ? .wasRoot || this.path.some(ek))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && ((0, tz.Ql)(e.x, t.offset.x), (0, tz.Ql)(e.y, t.offset.y))
                        }
                        return e
                    }
                    removeElementScroll(t) {
                        let e = (0, B.ge)();
                        if (tH(e, t), this.scroll ? .wasRoot) return e;
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            n !== this.root && r && s.layoutScroll && (r.wasRoot && tH(e, t), (0, tz.Ql)(e.x, r.offset.x), (0, tz.Ql)(e.y, r.offset.y))
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = (0, B.ge)();
                        tH(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && (0, tz.Ww)(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), (0, t6.HD)(n.latestValues) && (0, tz.Ww)(i, n.latestValues)
                        }
                        return (0, t6.HD)(this.latestValues) && (0, tz.Ww)(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = (0, B.ge)();
                        tH(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !(0, t6.HD)(i.latestValues)) continue;
                            (0, t6.vk)(i.latestValues) && i.updateSnapshot();
                            let n = (0, B.ge)();
                            tH(n, i.measurePageBox()), tZ(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return (0, t6.HD)(this.latestValues) && tZ(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        let e = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                        let i = !!this.resumingFrom || this !== e;
                        if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: n,
                            layoutId: r
                        } = this.options;
                        if (this.layout && (n || r)) {
                            if (this.resolvedRelativeTargetAt = $.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, B.ge)(), this.relativeTargetOrigin = (0, B.ge)(), j(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tH(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (this.target || (this.target = (0, B.ge)(), this.targetWithTransforms = (0, B.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                                    var s, a, o;
                                    this.forceRelativeParentToResolveTarget(), s = this.target, a = this.relativeTarget, o = this.relativeParent.target, R(s.x, a.x, o.x), R(s.y, a.y, o.y)
                                } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tH(this.target, this.layout.layoutBox), (0, tz.o4)(this.target, this.targetDelta)) : tH(this.target, this.layout.layoutBox);
                                if (this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, B.ge)(), this.relativeTargetOrigin = (0, B.ge)(), j(this.relativeTargetOrigin, this.target, t.target), tH(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                t8.Q.value && ei.calculatedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || (0, t6.vk)(this.parent.latestValues) || (0, t6.vF)(this.parent.latestValues)))
                            if (this.parent.isProjecting()) return this.parent;
                            else return this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        let t = this.getLead(),
                            e = !!this.resumingFrom || this !== t,
                            i = !0;
                        if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === $.uv.timestamp && (i = !1), i) return;
                        let {
                            layout: n,
                            layoutId: r
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || r)) return;
                        tH(this.layoutCorrected, this.layout.layoutBox);
                        let s = this.treeScale.x,
                            a = this.treeScale.y;
                        (0, tz.OU)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, B.ge)());
                        let {
                            target: o
                        } = t;
                        if (!o) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (tX(this.prevProjectionDelta.x, this.projectionDelta.x), tX(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), D(this.projectionDelta, this.layoutCorrected, o, this.latestValues), this.treeScale.x === s && this.treeScale.y === a && t3(this.projectionDelta.x, this.prevProjectionDelta.x) && t3(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", o)), t8.Q.value && ei.calculatedProjections++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.visualElement ? .scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = (0, B.xU)(), this.projectionDelta = (0, B.xU)(), this.projectionDeltaWithTransform = (0, B.xU)()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i, n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            a = (0, B.xU)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let o = (0, B.ge)(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(eS));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (eT(a.x, t.x, n), eT(a.y, t.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, c, p, m, f, g;
                                j(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, f = o, g = n, eb(p.x, m.x, f.x, g), eb(p.y, m.y, f.y, g), i && (u = this.relativeTarget, c = i, t1(u.x, c.x) && t1(u.y, c.y)) && (this.isProjectionDirty = !1), i || (i = (0, B.ge)()), tH(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = (0, V.k)(0, i.opacity ? ? 1, tN(n)), t.opacityExit = (0, V.k)(e.opacity ? ? 1, 0, t$(n))) : s && (t.opacity = (0, V.k)(e.opacity ? ? 1, i.opacity ? ? 1, n));
                                for (let r = 0; r < tO; r++) {
                                    let s = `border${tF[r]}Radius`,
                                        a = tI(e, s),
                                        o = tI(i, s);
                                    (void 0 !== a || void 0 !== o) && (a || (a = 0), o || (o = 0), 0 === a || 0 === o || tU(a) === tU(o) ? (t[s] = Math.max((0, V.k)(tW(a), tW(o), n), 0), (tr.KN.test(o) || tr.KN.test(a)) && (t[s] += "%")) : t[s] = o)
                                }(e.rotate || i.rotate) && (t.rotate = (0, V.k)(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, $.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = $.Gt.update(() => {
                            tv.hasAnimatedSinceResize = !0, ee.q.layout++, this.currentAnimation = (0, tE.z)(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onStop: () => {
                                    ee.q.layout--
                                },
                                onComplete: () => {
                                    ee.q.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && eV(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || (0, B.ge)();
                                let e = k(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = k(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            tH(e, i), (0, tz.Ww)(e, r), D(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new t4), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        let {
                            layoutId: t
                        } = this.options;
                        return t && this.getStack() ? .lead || this
                    }
                    getPrevLead() {
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? this.getStack() ? .prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let n = {};
                        i.z && ea("z", t, n, this.animationValues);
                        for (let e = 0; e < en.length; e++) ea(`rotate${en[e]}`, t, n, this.animationValues), ea(`skew${en[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return er;
                        let e = {
                                visibility: ""
                            },
                            i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, e.opacity = "", e.pointerEvents = tj(t ? .pointerEvents) || "", e.transform = i ? i(this.latestValues, "") : "none", e;
                        let n = this.getLead();
                        if (!this.projectionDelta || !this.layout || !n.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tj(t ? .pointerEvents) || ""), this.hasProjected && !(0, t6.HD)(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
                        }
                        let r = n.animationValues || n.latestValues;
                        this.applyTransformsToTarget(), e.transform = function(t, e, i) {
                            let n = "",
                                r = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                a = i ? .z || 0;
                            if ((r || s || a) && (n = `translate3d(${r}px, ${s}px, ${a}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: r,
                                    rotateY: s,
                                    skewX: a,
                                    skewY: o
                                } = i;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), a && (n += `skewX(${a}deg) `), o && (n += `skewY(${o}deg) `)
                            }
                            let o = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== o || 1 !== l) && (n += `scale(${o}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, r), i && (e.transform = i(r, e.transform));
                        let {
                            x: s,
                            y: a
                        } = this.projectionDelta;
                        for (let t in e.transformOrigin = `${100*s.origin}% ${100*a.origin}% 0`, n.animationValues ? e.opacity = n === this ? r.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : e.opacity = n === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0, tT.H) {
                            if (void 0 === r[t]) continue;
                            let {
                                correct: i,
                                applyTo: s,
                                isCSSVariable: a
                            } = tT.H[t], o = "none" === e.transform ? r[t] : i(r[t], n);
                            if (s) {
                                let t = s.length;
                                for (let i = 0; i < t; i++) e[s[i]] = o
                            } else a ? this.options.visualElement.renderState.vars[t] = o : e[t] = o
                        }
                        return this.options.layoutId && (e.pointerEvents = n === this ? tj(t ? .pointerEvents) || "" : "none"), e
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => t.currentAnimation ? .stop()), this.root.nodes.forEach(ep), this.root.sharedNodes.clear()
                    }
                }
            }

            function el(t) {
                t.updateLayout()
            }

            function eu(t) {
                let e = t.resumeFrom ? .snapshot || t.snapshot;
                if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: i,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = e.source !== t.layout.source;
                    "size" === r ? F(t => {
                        let n = s ? e.measuredBox[t] : e.layoutBox[t],
                            r = k(n);
                        n.min = i[t].min, n.max = n.min + r
                    }) : eV(r, e.layoutBox, i) && F(n => {
                        let r = s ? e.measuredBox[n] : e.layoutBox[n],
                            a = k(i[n]);
                        r.max = r.min + a, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + a)
                    });
                    let a = (0, B.xU)();
                    D(a, i, e.layoutBox);
                    let o = (0, B.xU)();
                    s ? D(o, t.applyTransform(n, !0), e.measuredBox) : D(o, i, e.layoutBox);
                    let l = !t0(a),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let a = (0, B.ge)();
                                j(a, e.layoutBox, r.layoutBox);
                                let o = (0, B.ge)();
                                j(o, i, s.layoutBox), t9(a, o) || (u = !0), n.options.layoutRoot && (t.relativeTarget = o, t.relativeTargetOrigin = a, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: i,
                        snapshot: e,
                        delta: o,
                        layoutDelta: a,
                        hasLayoutChanged: l,
                        hasRelativeLayoutChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function eh(t) {
                t8.Q.value && ei.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function ed(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function ec(t) {
                t.clearSnapshot()
            }

            function ep(t) {
                t.clearMeasurements()
            }

            function em(t) {
                t.isLayoutDirty = !1
            }

            function ef(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function eg(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function ev(t) {
                t.resolveTargetDelta()
            }

            function ey(t) {
                t.calcProjection()
            }

            function ex(t) {
                t.resetSkewAndRotation()
            }

            function ew(t) {
                t.removeLeadSnapshot()
            }

            function eT(t, e, i) {
                t.translate = (0, V.k)(e.translate, 0, i), t.scale = (0, V.k)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function eb(t, e, i, n) {
                t.min = (0, V.k)(e.min, i.min, n), t.max = (0, V.k)(e.max, i.max, n)
            }

            function eS(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let eA = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                eP = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                eE = eP("applewebkit/") && !eP("chrome/") ? Math.round : tl.l;

            function eM(t) {
                t.min = eE(t.min), t.max = eE(t.max)
            }

            function eV(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(t2(e) - t2(i)))
            }

            function ek(t) {
                return t !== t.root && t.scroll ? .wasRoot
            }
            let eC = eo({
                    attachResizeListener: (t, e) => b(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                eD = {
                    current: void 0
                },
                eR = eo({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!eD.current) {
                            let t = new eC({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), eD.current = t
                        }
                        return eD.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var eL = i(793);

            function ej(t, e) {
                let i = (0, eL.K)(t),
                    n = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: n.signal
                }, () => n.abort()]
            }

            function eB(t) {
                return !("touch" === t.pointerType || tn.x || tn.y)
            }

            function eF(t, e, i) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let r = n["onHover" + i];
                r && $.Gt.postRender(() => r(e, A(e)))
            }
            class eO extends v {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [n, r, s] = ej(t, i), a = t => {
                            if (!eB(t)) return;
                            let {
                                target: i
                            } = t, n = e(i, t);
                            if ("function" != typeof n || !i) return;
                            let s = t => {
                                eB(t) && (n(t), i.removeEventListener("pointerleave", s))
                            };
                            i.addEventListener("pointerleave", s, r)
                        };
                        return n.forEach(t => {
                            t.addEventListener("pointerenter", a, r)
                        }), s
                    }(t, (t, e) => (eF(this.node, e, "Start"), t => eF(this.node, t, "End"))))
                }
                unmount() {}
            }
            class eW extends v {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, G.F)(b(this.node.current, "focus", () => this.onFocus()), b(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let eU = (t, e) => !!e && (t === e || eU(t, e.parentElement)),
                eI = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                eN = new WeakSet;

            function e$(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function eG(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let eq = (t, e) => {
                let i = t.currentTarget;
                if (!i) return;
                let n = e$(() => {
                    if (eN.has(i)) return;
                    eG(i, "down");
                    let t = e$(() => {
                        eG(i, "up")
                    });
                    i.addEventListener("keyup", t, e), i.addEventListener("blur", () => eG(i, "cancel"), e)
                });
                i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
            };

            function eH(t) {
                return S(t) && !(tn.x || tn.y)
            }

            function eX(t, e, i) {
                let {
                    props: n
                } = t;
                if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let r = n["onTap" + ("End" === i ? "" : i)];
                r && $.Gt.postRender(() => r(e, A(e)))
            }
            class ez extends v {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [n, r, s] = ej(t, i), a = t => {
                            let n = t.currentTarget;
                            if (!eH(t) || eN.has(n)) return;
                            eN.add(n);
                            let s = e(n, t),
                                a = (t, e) => {
                                    window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", l), eH(t) && eN.has(n) && (eN.delete(n), "function" == typeof s && s(t, {
                                        success: e
                                    }))
                                },
                                o = t => {
                                    a(t, n === window || n === document || i.useGlobalTarget || eU(n, t.target))
                                },
                                l = t => {
                                    a(t, !1)
                                };
                            window.addEventListener("pointerup", o, r), window.addEventListener("pointercancel", l, r)
                        };
                        return n.forEach(t => {
                            ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", a, r), t instanceof HTMLElement) && (t.addEventListener("focus", t => eq(t, r)), eI.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                        }), s
                    }(t, (t, e) => (eX(this.node, e, "Start"), (t, {
                        success: e
                    }) => eX(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let eK = new WeakMap,
                eY = new WeakMap,
                eQ = t => {
                    let e = eK.get(t.target);
                    e && e(t)
                },
                e_ = t => {
                    t.forEach(eQ)
                },
                eZ = {
                    some: 0,
                    all: 1
                };
            class eJ extends v {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : eZ[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            eY.has(i) || eY.set(i, {});
                            let n = eY.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(e_, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return eK.set(t, i), n.observe(t), () => {
                            eK.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let e0 = (0, tp.createContext)({
                strict: !1
            });
            var e1 = i(7471);
            let e5 = (0, tp.createContext)({});
            var e9 = i(9908);

            function e2(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var e3 = i(2801),
                e4 = i(13);
            let e6 = Symbol.for("motionComponentSymbol");
            var e8 = i(3129),
                e7 = i(9025),
                it = i(2983),
                ie = i(1795);
            let ii = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function ir(t, e, i) {
                for (let n in e)(0, tL.S)(e[n]) || (0, it.z)(n, i) || (t[n] = e[n])
            }
            let is = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function ia(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || is.has(t)
            }
            let io = t => !ia(t);
            try {
                ! function(t) {
                    t && (io = e => e.startsWith("on") ? !ia(e) : t(e))
                }(require("@emotion/is-prop-valid").default)
            } catch {}
            let il = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function iu(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (il.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            var ih = i(4246);
            let id = () => ({ ...ii(),
                attrs: {}
            });
            var ic = i(4992),
                ip = i(1580),
                im = i(6168);
            let ig = t => (e, i) => {
                    let n = (0, tp.useContext)(e5),
                        r = (0, tp.useContext)(tm),
                        a = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e
                        }, i, n, r) {
                            return {
                                latestValues: function(t, e, i, n) {
                                    let r = {},
                                        a = n(t, {});
                                    for (let t in a) r[t] = tj(a[t]);
                                    let {
                                        initial: o,
                                        animate: l
                                    } = t, u = (0, e9.e)(t), h = (0, e9.O)(t);
                                    e && h && !u && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === l && (l = e.animate));
                                    let d = !!i && !1 === i.initial,
                                        c = (d = d || !1 === o) ? l : o;
                                    if (c && "boolean" != typeof c && !(0, s.N)(c)) {
                                        let e = Array.isArray(c) ? c : [c];
                                        for (let i = 0; i < e.length; i++) {
                                            let n = (0, ip.a)(t, e[i]);
                                            if (n) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...i
                                                } = n;
                                                for (let t in i) {
                                                    let e = i[t];
                                                    if (Array.isArray(e)) {
                                                        let t = d ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (r[t] = e)
                                                }
                                                for (let e in t) r[e] = t[e]
                                            }
                                        }
                                    }
                                    return r
                                }(i, n, r, t),
                                renderState: e()
                            }
                        })(t, e, n, r);
                    return i ? a() : (0, im.M)(a)
                },
                iv = {
                    useVisualState: ig({
                        scrapeMotionValuesFromProps: i(9959).x,
                        createRenderState: ii
                    })
                },
                iy = {
                    useVisualState: ig({
                        scrapeMotionValuesFromProps: i(5424).x,
                        createRenderState: id
                    })
                };
            var ix = i(9066),
                iw = i(4002);
            let iT = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((n = {
                animation: {
                    Feature: y
                },
                exit: {
                    Feature: w
                },
                inView: {
                    Feature: eJ
                },
                tap: {
                    Feature: ez
                },
                focus: {
                    Feature: eW
                },
                hover: {
                    Feature: eO
                },
                pan: {
                    Feature: td
                },
                drag: {
                    Feature: tu,
                    ProjectionNode: eR,
                    MeasureLayout: tA
                },
                layout: {
                    ProjectionNode: eR,
                    MeasureLayout: tA
                }
            }, r = (t, e) => iu(t) ? new iw.l(e) : new ix.M(e, {
                allowProjection: t !== tp.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    var e, i;
                    let {
                        preloadedFeatures: n,
                        createVisualElement: r,
                        useRender: s,
                        useVisualState: a,
                        Component: o
                    } = t;

                    function l(t, e) {
                        var i, n, l;
                        let h, d = { ...(0, tp.useContext)(e1.Q),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, tp.useContext)(tf).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: c
                            } = d,
                            p = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if ((0, e9.e)(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || (0, u.w)(e) ? e : void 0,
                                            animate: (0, u.w)(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, tp.useContext)(e5));
                                return (0, tp.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [e2(e), e2(i)])
                            }(t),
                            m = a(t, c);
                        if (!c && e3.B) {
                            n = 0, l = 0, (0, tp.useContext)(e0).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = e4.B;
                                if (!e && !i) return {};
                                let n = { ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(d);
                            h = t.MeasureLayout, p.visualElement = function(t, e, i, n, r) {
                                let {
                                    visualElement: s
                                } = (0, tp.useContext)(e5), a = (0, tp.useContext)(e0), o = (0, tp.useContext)(tm), l = (0, tp.useContext)(e1.Q).reducedMotion, u = (0, tp.useRef)(null);
                                n = n || a.renderer, !u.current && n && (u.current = n(t, {
                                    visualState: e,
                                    parent: s,
                                    props: i,
                                    presenceContext: o,
                                    blockInitialAnimation: !!o && !1 === o.initial,
                                    reducedMotionConfig: l
                                }));
                                let h = u.current,
                                    d = (0, tp.useContext)(tg);
                                h && !h.projection && r && ("html" === h.type || "svg" === h.type) && function(t, e, i, n) {
                                    let {
                                        layoutId: r,
                                        layout: s,
                                        drag: a,
                                        dragConstraints: o,
                                        layoutScroll: l,
                                        layoutRoot: u,
                                        layoutCrossfade: h
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: r,
                                        layout: s,
                                        alwaysMeasureLayout: !!a || o && U(o),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: n,
                                        crossfade: h,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(u.current, i, r, d);
                                let c = (0, tp.useRef)(!1);
                                (0, tp.useInsertionEffect)(() => {
                                    h && c.current && h.update(i, o)
                                });
                                let p = i[e8.n],
                                    m = (0, tp.useRef)(!!p && !window.MotionHandoffIsComplete ? .(p) && window.MotionHasOptimisedAnimation ? .(p));
                                return (0, e7.E)(() => {
                                    h && (c.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), tb.render(h.render), m.current && h.animationState && h.animationState.animateChanges())
                                }), (0, tp.useEffect)(() => {
                                    h && (!m.current && h.animationState && h.animationState.animateChanges(), m.current && (queueMicrotask(() => {
                                        window.MotionHandoffMarkAsComplete ? .(p)
                                    }), m.current = !1))
                                }), h
                            }(o, m, d, r, t.ProjectionNode)
                        }
                        return (0, tc.jsxs)(e5.Provider, {
                            value: p,
                            children: [h && p.visualElement ? (0, tc.jsx)(h, {
                                visualElement: p.visualElement,
                                ...d
                            }) : null, s(o, t, (i = p.visualElement, (0, tp.useCallback)(t => {
                                t && m.onMount && m.onMount(t), i && (t ? i.mount(t) : i.unmount()), e && ("function" == typeof e ? e(t) : U(e) && (e.current = t))
                            }, [i])), m, c, p.visualElement)]
                        })
                    }
                    n && function(t) {
                        for (let e in t) e4.B[e] = { ...e4.B[e],
                            ...t[e]
                        }
                    }(n), l.displayName = "motion.".concat("string" == typeof o ? o : "create(".concat(null != (i = null != (e = o.displayName) ? e : o.name) ? i : "", ")"));
                    let h = (0, tp.forwardRef)(l);
                    return h[e6] = o, h
                }({ ...iu(t) ? iy : iv,
                    preloadedFeatures: n,
                    useRender: function(t = !1) {
                        return (e, i, n, {
                            latestValues: r
                        }, s) => {
                            let a = (iu(e) ? function(t, e, i, n) {
                                    let r = (0, tp.useMemo)(() => {
                                        let i = id();
                                        return (0, ih.B)(i, e, (0, ic.n)(n), t.transformTemplate), { ...i.attrs,
                                            style: { ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        ir(e, t.style, t), r.style = { ...e,
                                            ...r.style
                                        }
                                    }
                                    return r
                                } : function(t, e) {
                                    let i = {},
                                        n = function(t, e) {
                                            let i = t.style || {},
                                                n = {};
                                            return ir(n, i, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, tp.useMemo)(() => {
                                                    let i = ii();
                                                    return (0, ie.O)(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                                })(i, r, s, e),
                                o = function(t, e, i) {
                                    let n = {};
                                    for (let r in t)("values" !== r || "object" != typeof t.values) && (io(r) || !0 === i && ia(r) || !e && !ia(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                    return n
                                }(i, "string" == typeof e, t),
                                l = e !== tp.Fragment ? { ...o,
                                    ...a,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = i,
                                h = (0, tp.useMemo)(() => (0, tL.S)(u) ? u.get() : u, [u]);
                            return (0, tp.createElement)(e, { ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: r,
                    Component: t
                })
            }))
        },
        1309: (t, e, i) => {
            i.d(e, {
                v: () => r
            });
            var n = i(5649);
            class r {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, n.Kq)(this.subscriptions, t), () => (0, n.Ai)(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n)
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        1324: (t, e, i) => {
            i.d(e, {
                j: () => P
            });
            var n = i(5255),
                r = i(2901),
                s = i(5233),
                a = i(8326),
                o = i(7183);

            function l(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var u = i(7379);

            function h(t, e) {
                return i => i > 0 ? e : t
            }
            var d = i(105),
                c = i(4449);
            let p = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                m = [a.u, u.B, o.V],
                f = t => m.find(e => e.test(t));

            function g(t) {
                let e = f(t);
                if ((0, c.$)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === o.V && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        a = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            o = 2 * i - n;
                        r = l(o, n, t + 1 / 3), s = l(o, n, t), a = l(o, n, t - 1 / 3)
                    } else r = s = a = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * a),
                        alpha: n
                    }
                }(i)), i
            }
            let v = (t, e) => {
                    let i = g(t),
                        n = g(e);
                    if (!i || !n) return h(t, e);
                    let r = { ...i
                    };
                    return t => (r.red = p(i.red, n.red, t), r.green = p(i.green, n.green, t), r.blue = p(i.blue, n.blue, t), r.alpha = (0, d.k)(i.alpha, n.alpha, t), u.B.transform(r))
                },
                y = new Set(["none", "hidden"]);
            var x = i(9792);

            function w(t, e) {
                return i => (0, d.k)(t, e, i)
            }

            function T(t) {
                return "number" == typeof t ? w : "string" == typeof t ? (0, n.p)(t) ? h : r.y.test(t) ? v : A : Array.isArray(t) ? b : "object" == typeof t ? r.y.test(t) ? v : S : h
            }

            function b(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => T(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function S(t, e) {
                let i = { ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = T(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let A = (t, e) => {
                let i = s.f.createTransformer(e),
                    n = (0, s.V)(t),
                    r = (0, s.V)(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? y.has(t) && !r.values.length || y.has(e) && !n.values.length ? function(t, e) {
                    return y.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
                }(t, e) : (0, x.F)(b(function(t, e) {
                    let i = [],
                        n = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let r = 0; r < e.values.length; r++) {
                        let s = e.types[r],
                            a = t.indexes[s][n[s]],
                            o = t.values[a] ? ? 0;
                        i[r] = o, n[s]++
                    }
                    return i
                }(n, r), r.values), i) : ((0, c.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), h(t, e))
            };

            function P(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, d.k)(t, e, i) : T(t)(t, e)
            }
        },
        1398: (t, e, i) => {
            i.d(e, {
                w: () => n
            });

            function n(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        1403: (t, e, i) => {
            i.d(e, {
                N: () => n
            });

            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
        },
        1580: (t, e, i) => {
            function n(t) {
                let e = [{}, {}];
                return t ? .values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function r(t, e, i, r) {
                if ("function" == typeof e) {
                    let [s, a] = n(r);
                    e = e(void 0 !== i ? i : t.custom, s, a)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [s, a] = n(r);
                    e = e(void 0 !== i ? i : t.custom, s, a)
                }
                return e
            }
            i.d(e, {
                a: () => r
            })
        },
        1659: (t, e, i) => {
            i.d(e, {
                h: () => c,
                q: () => d
            });
            var n = i(5521),
                r = i(6182);
            let s = new Set,
                a = !1,
                o = !1,
                l = !1;

            function u() {
                if (o) {
                    let t = Array.from(s).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = (0, n.W9)(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            t.getValue(e) ? .set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                o = !1, a = !1, s.forEach(t => t.complete(l)), s.clear()
            }

            function h() {
                s.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (o = !0)
                })
            }

            function d() {
                l = !0, h(), u(), l = !1
            }
            class c {
                constructor(t, e, i, n, r, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (s.add(this), a || (a = !0, r.Gt.read(h), r.Gt.resolveKeyframes(u))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    if (null === t[0]) {
                        let r = n ? .get(),
                            s = t[t.length - 1];
                        if (void 0 !== r) t[0] = r;
                        else if (i && e) {
                            let n = i.readValue(e, s);
                            null != n && (t[0] = n)
                        }
                        void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                    }
                    for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete(t = !1) {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), s.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, s.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
        },
        1673: (t, e, i) => {
            i.d(e, {
                po: () => s,
                tn: () => o,
                yT: () => a
            });
            var n = i(4916),
                r = i(2423);
            let s = t => 1 - Math.sin(Math.acos(t)),
                a = (0, r.G)(s),
                o = (0, n.V)(s)
        },
        1687: (t, e, i) => {
            i.d(e, {
                I: () => n
            });
            let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        1724: (t, e, i) => {
            i.d(e, {
                l: () => a
            });
            var n = i(6168),
                r = i(2115),
                s = i(9165);

            function a() {
                var t;
                let e = (0, n.M)(() => ({
                        current: null,
                        animations: []
                    })),
                    i = (0, n.M)(() => (0, s.W)(e));
                return t = () => {
                    e.animations.forEach(t => t.stop())
                }, (0, r.useEffect)(() => () => t(), []), [e, i]
            }
        },
        1765: (t, e, i) => {
            i.d(e, {
                Sz: () => a,
                ZZ: () => l,
                dg: () => o
            });
            var n = i(7470),
                r = i(4916),
                s = i(2423);
            let a = (0, n.A)(.33, 1.53, .69, .99),
                o = (0, s.G)(a),
                l = (0, r.V)(o)
        },
        1795: (t, e, i) => {
            i.d(e, {
                O: () => u
            });
            var n = i(9207);
            let r = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var s = i(401);
            let a = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                o = n.U.length;
            var l = i(5255);

            function u(t, e, i) {
                let {
                    style: u,
                    vars: h,
                    transformOrigin: d
                } = t, c = !1, p = !1;
                for (let t in e) {
                    let i = e[t];
                    if (n.f.has(t)) {
                        c = !0;
                        continue
                    }
                    if ((0, l.j)(t)) {
                        h[t] = i;
                        continue
                    } {
                        let e = r(i, s.W[t]);
                        t.startsWith("origin") ? (p = !0, d[t] = e) : u[t] = e
                    }
                }
                if (!e.transform && (c || i ? u.transform = function(t, e, i) {
                        let l = "",
                            u = !0;
                        for (let h = 0; h < o; h++) {
                            let o = n.U[h],
                                d = t[o];
                            if (void 0 === d) continue;
                            let c = !0;
                            if (!(c = "number" == typeof d ? d === +!!o.startsWith("scale") : 0 === parseFloat(d)) || i) {
                                let t = r(d, s.W[o]);
                                if (!c) {
                                    u = !1;
                                    let e = a[o] || o;
                                    l += `${e}(${t}) `
                                }
                                i && (e[o] = t)
                            }
                        }
                        return l = l.trim(), i ? l = i(e, u ? "" : l) : u && (l = "none"), l
                    }(e, t.transform, i) : u.transform && (u.transform = "none")), p) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = d;
                    u.transformOrigin = `${t} ${e} ${i}`
                }
            }
        },
        1835: (t, e, i) => {
            i.d(e, {
                X: () => s
            });
            var n = i(7393),
                r = i(5538);

            function s(t, e = 100, i) {
                let a = i({ ...t,
                        keyframes: [0, e]
                    }),
                    o = Math.min((0, n.t)(a), n.Y);
                return {
                    type: "keyframes",
                    ease: t => a.next(o * t).value / e,
                    duration: (0, r.X)(o)
                }
            }
        },
        1940: (t, e, i) => {
            i.d(e, {
                $: () => s,
                H: () => r
            });
            var n = i(5255);
            let r = {};

            function s(t) {
                for (let e in t) r[e] = t[e], (0, n.j)(e) && (r[e].isCSSVariable = !0)
            }
        },
        1986: (t, e, i) => {
            i.d(e, {
                K: () => n
            });
            let n = (t, e, i = 10) => {
                let n = "",
                    r = Math.max(Math.round(e / i), 2);
                for (let e = 0; e < r; e++) n += t(e / (r - 1)) + ", ";
                return `linear(${n.substring(0,n.length-2)})`
            }
        },
        2098: (t, e, i) => {
            i.d(e, {
                W: () => n
            });
            let n = {}
        },
        2158: (t, e, i) => {
            i.d(e, {
                f: () => H
            });
            let n = t => null !== t;
            var r = i(9207);
            let s = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                a = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                o = {
                    type: "keyframes",
                    duration: .8
                },
                l = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                u = (t, {
                    keyframes: e
                }) => e.length > 2 ? o : r.f.has(t) ? t.startsWith("scale") ? a(e[1]) : s : l;
            var h = i(9922),
                d = i(5538),
                c = i(2098),
                p = i(6182),
                m = i(8840),
                f = i(646),
                g = i(5671),
                v = i(1659);
            let y = t => t.startsWith("--");
            var x = i(6299),
                w = i(5340),
                T = i(2189),
                b = i(8579);
            let S = {};
            var A = i(7482);
            let P = function(t, e) {
                let i = (0, A.p)(t);
                return () => S[e] ? ? i()
            }(() => {
                try {
                    document.createElement("div").animate({
                        opacity: 0
                    }, {
                        easing: "linear(0, 1)"
                    })
                } catch (t) {
                    return !1
                }
                return !0
            }, "linearEasing");
            var E = i(1986);
            let M = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                V = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: M([0, .65, .55, 1]),
                    circOut: M([.55, 0, 1, .45]),
                    backIn: M([.31, .01, .66, -.59]),
                    backOut: M([.33, 1.53, .69, .99])
                };
            var k = i(9388),
                C = i(6917),
                D = i(4449),
                R = i(1116);
            class L extends w.q {
                constructor(t) {
                    if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
                    let {
                        element: e,
                        name: i,
                        keyframes: n,
                        pseudoElement: r,
                        allowFlatten: s = !1,
                        finalKeyframe: a,
                        onComplete: o
                    } = t;
                    this.isPseudoElement = !!r, this.allowFlatten = s, this.options = t, (0, D.V)("string" != typeof t.type, 'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?');
                    let l = function({
                        type: t,
                        ...e
                    }) {
                        return (0, C.W)(t) && P() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
                    }(t);
                    this.animation = function(t, e, i, {
                        delay: n = 0,
                        duration: r = 300,
                        repeat: s = 0,
                        repeatType: a = "loop",
                        ease: o = "easeOut",
                        times: l
                    } = {}, u) {
                        let h = {
                            [e]: i
                        };
                        l && (h.offset = l);
                        let d = function t(e, i) {
                            if (e) return "function" == typeof e ? P() ? (0, E.K)(e, i) : "ease-out" : (0, k.D)(e) ? M(e) : Array.isArray(e) ? e.map(e => t(e, i) || V.easeOut) : V[e]
                        }(o, r);
                        Array.isArray(d) && (h.easing = d), b.Q.value && T.q.waapi++;
                        let c = {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(d) ? "linear" : d,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        };
                        u && (c.pseudoElement = u);
                        let p = t.animate(h, c);
                        return b.Q.value && p.finished.finally(() => {
                            T.q.waapi--
                        }), p
                    }(e, i, n, l, r), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                        if (this.finishedTime = this.time, !r) {
                            let t = (0, g.X)(n, this.options, a, this.speed);
                            this.updateMotionValue ? this.updateMotionValue(t) : function(t, e, i) {
                                y(e) ? t.style.setProperty(e, i) : t.style[e] = i
                            }(e, i, t), this.animation.cancel()
                        }
                        o ? .(), this.notifyFinished()
                    }, this.animation.oncancel = () => this.notifyFinished()
                }
                play() {
                    this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.finish ? .()
                }
                cancel() {
                    try {
                        this.animation.cancel()
                    } catch (t) {}
                }
                stop() {
                    if (this.isStopped) return;
                    this.isStopped = !0;
                    let {
                        state: t
                    } = this;
                    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
                }
                commitStyles() {
                    this.isPseudoElement || this.animation.commitStyles ? .()
                }
                get duration() {
                    let t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
                    return (0, d.X)(Number(t))
                }
                get time() {
                    return (0, d.X)(Number(this.animation.currentTime) || 0)
                }
                set time(t) {
                    this.finishedTime = null, this.animation.currentTime = (0, d.f)(t)
                }
                get speed() {
                    return this.animation.playbackRate
                }
                set speed(t) {
                    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
                }
                get state() {
                    return null !== this.finishedTime ? "finished" : this.animation.playState
                }
                get startTime() {
                    return Number(this.animation.startTime)
                }
                set startTime(t) {
                    this.animation.startTime = t
                }
                attachTimeline({
                    timeline: t,
                    observe: e
                }) {
                    return (this.allowFlatten && this.animation.effect ? .updateTiming({
                        easing: "linear"
                    }), this.animation.onfinish = null, t && (0, x.J)()) ? (this.animation.timeline = t, R.l) : e(this)
                }
            }
            var j = i(6569),
                B = i(4344),
                F = i(1765),
                O = i(1673);
            let W = {
                anticipate: B.b,
                backInOut: F.ZZ,
                circInOut: O.tn
            };
            class U extends L {
                constructor(t) {
                    ! function(t) {
                        "string" == typeof t.ease && t.ease in W && (t.ease = W[t.ease])
                    }(t), (0, j.E)(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
                }
                updateMotionValue(t) {
                    let {
                        motionValue: e,
                        onUpdate: i,
                        onComplete: n,
                        element: r,
                        ...s
                    } = this.options;
                    if (!e) return;
                    if (void 0 !== t) return void e.set(t);
                    let a = new f.s({ ...s,
                            autoplay: !1
                        }),
                        o = (0, d.f)(this.finishedTime ? ? this.time);
                    e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10), a.stop()
                }
            }
            var I = i(5233);
            let N = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (I.f.test(t) || "0" === t) && !t.startsWith("url(")),
                $ = new Set(["opacity", "clipPath", "filter", "transform"]),
                G = (0, A.p)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
            class q extends w.q {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    keyframes: a,
                    name: o,
                    motionValue: l,
                    element: u,
                    ...h
                }) {
                    super(), this.stop = () => {
                        this._animation ? (this._animation.stop(), this.stopTimeline ? .()) : this.keyframeResolver ? .cancel()
                    }, this.createdAt = m.k.now();
                    let d = {
                            autoplay: t,
                            delay: e,
                            type: i,
                            repeat: n,
                            repeatDelay: r,
                            repeatType: s,
                            name: o,
                            motionValue: l,
                            element: u,
                            ...h
                        },
                        c = u ? .KeyframeResolver || v.h;
                    this.keyframeResolver = new c(a, (t, e, i) => this.onKeyframesResolved(t, e, d, !i), o, l, u), this.keyframeResolver ? .scheduleResolve()
                }
                onKeyframesResolved(t, e, i, n) {
                    this.keyframeResolver = void 0;
                    let {
                        name: r,
                        type: s,
                        velocity: a,
                        delay: o,
                        isHandoff: l,
                        onUpdate: u
                    } = i;
                    this.resolvedAt = m.k.now(), ! function(t, e, i, n) {
                        let r = t[0];
                        if (null === r) return !1;
                        if ("display" === e || "visibility" === e) return !0;
                        let s = t[t.length - 1],
                            a = N(r, e),
                            o = N(s, e);
                        return (0, D.$)(a === o, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`), !!a && !!o && (function(t) {
                            let e = t[0];
                            if (1 === t.length) return !0;
                            for (let i = 0; i < t.length; i++)
                                if (t[i] !== e) return !0
                        }(t) || ("spring" === i || (0, C.W)(i)) && n)
                    }(t, r, s, a) && ((c.W.instantAnimations || !o) && u ? .((0, g.X)(t, i, e)), t[0] = t[t.length - 1], i.duration = 0, i.repeat = 0);
                    let h = {
                            startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                            finalKeyframe: e,
                            ...i,
                            keyframes: t
                        },
                        d = !l && function(t) {
                            let {
                                motionValue: e,
                                name: i,
                                repeatDelay: n,
                                repeatType: r,
                                damping: s,
                                type: a
                            } = t;
                            if (!e || !e.owner || !(e.owner.current instanceof HTMLElement)) return !1;
                            let {
                                onUpdate: o,
                                transformTemplate: l
                            } = e.owner.getProps();
                            return G() && i && $.has(i) && ("transform" !== i || !l) && !o && !n && "mirror" !== r && 0 !== s && "inertia" !== a
                        }(h) ? new U({ ...h,
                            element: h.motionValue.owner.current
                        }) : new f.s(h);
                    d.finished.then(() => this.notifyFinished()).catch(R.l), this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d
                }
                get finished() {
                    return this._animation ? this.animation.finished : this._finished
                }
                then(t, e) {
                    return this.finished.finally(t).then(() => {})
                }
                get animation() {
                    return this._animation || (0, v.q)(), this._animation
                }
                get duration() {
                    return this.animation.duration
                }
                get time() {
                    return this.animation.time
                }
                set time(t) {
                    this.animation.time = t
                }
                get speed() {
                    return this.animation.speed
                }
                get state() {
                    return this.animation.state
                }
                set speed(t) {
                    this.animation.speed = t
                }
                get startTime() {
                    return this.animation.startTime
                }
                attachTimeline(t) {
                    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
                }
                play() {
                    this.animation.play()
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.complete()
                }
                cancel() {
                    this.animation.cancel()
                }
            }
            let H = (t, e, i, r = {}, s, a) => o => {
                let l = (0, h.r)(r, t) || {},
                    m = l.delay || r.delay || 0,
                    {
                        elapsed: f = 0
                    } = r;
                f -= (0, d.f)(m);
                let g = {
                    keyframes: Array.isArray(i) ? i : [null, i],
                    ease: "easeOut",
                    velocity: e.getVelocity(),
                    ...l,
                    delay: -f,
                    onUpdate: t => {
                        e.set(t), l.onUpdate && l.onUpdate(t)
                    },
                    onComplete: () => {
                        o(), l.onComplete && l.onComplete()
                    },
                    name: t,
                    motionValue: e,
                    element: a ? void 0 : s
                };
                ! function({
                    when: t,
                    delay: e,
                    delayChildren: i,
                    staggerChildren: n,
                    staggerDirection: r,
                    repeat: s,
                    repeatType: a,
                    repeatDelay: o,
                    from: l,
                    elapsed: u,
                    ...h
                }) {
                    return !!Object.keys(h).length
                }(l) && Object.assign(g, u(t, g)), g.duration && (g.duration = (0, d.f)(g.duration)), g.repeatDelay && (g.repeatDelay = (0, d.f)(g.repeatDelay)), void 0 !== g.from && (g.keyframes[0] = g.from);
                let v = !1;
                if (!1 !== g.type && (0 !== g.duration || g.repeatDelay) || (g.duration = 0, 0 === g.delay && (v = !0)), (c.W.instantAnimations || c.W.skipAnimations) && (v = !0, g.duration = 0, g.delay = 0), g.allowFlatten = !l.type && !l.ease, v && !a && void 0 !== e.get()) {
                    let t = function(t, {
                        repeat: e,
                        repeatType: i = "loop"
                    }, r) {
                        let s = t.filter(n),
                            a = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                        return s[a]
                    }(g.keyframes, l);
                    if (void 0 !== t) return void p.Gt.update(() => {
                        g.onUpdate(t), g.onComplete()
                    })
                }
                return new q(g)
            }
        },
        2189: (t, e, i) => {
            i.d(e, {
                q: () => n
            });
            let n = {
                layout: 0,
                mainThread: 0,
                waapi: 0
            }
        },
        2386: (t, e, i) => {
            i.d(e, {
                C: () => n
            });
            let n = new WeakMap
        },
        2423: (t, e, i) => {
            i.d(e, {
                G: () => n
            });
            let n = t => e => 1 - t(1 - e)
        },
        2531: (t, e, i) => {
            i.d(e, {
                I: () => c,
                r: () => d
            });
            let n = t => 180 * t / Math.PI,
                r = t => a(n(Math.atan2(t[1], t[0]))),
                s = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
                    rotate: r,
                    rotateZ: r,
                    skewX: t => n(Math.atan(t[1])),
                    skewY: t => n(Math.atan(t[2])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
                },
                a = t => ((t %= 360) < 0 && (t += 360), t),
                o = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                l = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
                u = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: o,
                    scaleY: l,
                    scale: t => (o(t) + l(t)) / 2,
                    rotateX: t => a(n(Math.atan2(t[6], t[5]))),
                    rotateY: t => a(n(Math.atan2(-t[2], t[0]))),
                    rotateZ: r,
                    rotate: r,
                    skewX: t => n(Math.atan(t[4])),
                    skewY: t => n(Math.atan(t[1])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
                };

            function h(t) {
                return +!!t.includes("scale")
            }

            function d(t, e) {
                let i, n;
                if (!t || "none" === t) return h(e);
                let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
                if (r) i = u, n = r;
                else {
                    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                    i = s, n = e
                }
                if (!n) return h(e);
                let a = i[e],
                    o = n[1].split(",").map(p);
                return "function" == typeof a ? a(o) : o[a]
            }
            let c = (t, e) => {
                let {
                    transform: i = "none"
                } = getComputedStyle(t);
                return d(i, e)
            };

            function p(t) {
                return parseFloat(t.trim())
            }
        },
        2685: (t, e, i) => {
            i.d(e, {
                z: () => a
            });
            var n = i(5057),
                r = i(2158),
                s = i(9967);

            function a(t, e, i) {
                let a = (0, n.S)(t) ? t : (0, s.OQ)(t);
                return a.start((0, r.f)("", a, e, i)), a.animation
            }
        },
        2801: (t, e, i) => {
            i.d(e, {
                B: () => n
            });
            let n = "undefined" != typeof window
        },
        2819: (t, e, i) => {
            i.d(e, {
                P: () => r
            });
            var n = i(3129);

            function r(t) {
                return t.props[n.n]
            }
        },
        2894: (t, e, i) => {
            i.d(e, {
                A: () => n
            });
            let n = (0, i(9946).A)("linkedin", [
                ["path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                    key: "c2jq9f"
                }],
                ["rect", {
                    width: "4",
                    height: "12",
                    x: "2",
                    y: "9",
                    key: "mk3on5"
                }],
                ["circle", {
                    cx: "4",
                    cy: "4",
                    r: "2",
                    key: "bt5ra8"
                }]
            ])
        },
        2901: (t, e, i) => {
            i.d(e, {
                y: () => a
            });
            var n = i(8326),
                r = i(7183),
                s = i(7379);
            let a = {
                test: t => s.B.test(t) || n.u.test(t) || r.V.test(t),
                parse: t => s.B.test(t) ? s.B.parse(t) : r.V.test(t) ? r.V.parse(t) : n.u.parse(t),
                transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.B.transform(t) : r.V.transform(t)
            }
        },
        2937: (t, e, i) => {
            function n({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function r({
                x: t,
                y: e
            }) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }

            function s(t, e) {
                if (!e) return t;
                let i = e({
                        x: t.left,
                        y: t.top
                    }),
                    n = e({
                        x: t.right,
                        y: t.bottom
                    });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }
            i.d(e, {
                FY: () => n,
                bS: () => s,
                pA: () => r
            })
        },
        2942: (t, e, i) => {
            i.d(e, {
                d: () => o
            });
            var n = i(2115),
                r = i(7471),
                s = i(6168),
                a = i(9967);

            function o(t) {
                let e = (0, s.M)(() => (0, a.OQ)(t)),
                    {
                        isStatic: i
                    } = (0, n.useContext)(r.Q);
                if (i) {
                    let [, i] = (0, n.useState)(t);
                    (0, n.useEffect)(() => e.on("change", i), [])
                }
                return e
            }
        },
        2983: (t, e, i) => {
            i.d(e, {
                z: () => s
            });
            var n = i(1940),
                r = i(9207);

            function s(t, {
                layout: e,
                layoutId: i
            }) {
                return r.f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!n.H[t] || "opacity" === t)
            }
        },
        3129: (t, e, i) => {
            i.d(e, {
                n: () => n
            });
            let n = "data-" + (0, i(1687).I)("framerAppearId")
        },
        3494: (t, e, i) => {
            i.d(e, {
                y: () => r
            });
            var n = i(6474);

            function r(t = .1, {
                startDelay: e = 0,
                from: i = 0,
                ease: s
            } = {}) {
                return (r, a) => {
                    let o = t * Math.abs(("number" == typeof i ? i : function(t, e) {
                        if ("first" === t) return 0; {
                            let i = e - 1;
                            return "last" === t ? i : i / 2
                        }
                    }(i, a)) - r);
                    if (s) {
                        let e = a * t;
                        o = (0, n.K)(s)(o / e) * e
                    }
                    return e + o
                }
            }
        },
        3551: (t, e, i) => {
            i.d(e, {
                $: () => h
            });
            var n = i(6787),
                r = i(9932),
                s = i(2819),
                a = i(2158),
                o = i(9922),
                l = i(6182),
                u = i(4762);

            function h(t, e, {
                delay: i = 0,
                transitionOverride: d,
                type: c
            } = {}) {
                let {
                    transition: p = t.getDefaultTransition(),
                    transitionEnd: m,
                    ...f
                } = e;
                d && (p = d);
                let g = [],
                    v = c && t.animationState && t.animationState.getState()[c];
                for (let e in f) {
                    let n = t.getValue(e, t.latestValues[e] ? ? null),
                        h = f[e];
                    if (void 0 === h || v && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(v, e)) continue;
                    let d = {
                            delay: i,
                            ...(0, o.r)(p || {}, e)
                        },
                        c = n.get();
                    if (void 0 !== c && !n.isAnimating && !Array.isArray(h) && h === c && !d.velocity) continue;
                    let m = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = (0, s.P)(t);
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, l.Gt);
                            null !== t && (d.startTime = t, m = !0)
                        }
                    }(0, r.g)(t, e), n.start((0, a.f)(e, n, h, t.shouldReduceMotion && u.$.has(e) ? {
                        type: !1
                    } : d, t, m));
                    let y = n.animation;
                    y && g.push(y)
                }
                return m && Promise.all(g).then(() => {
                    l.Gt.update(() => {
                        m && (0, n.U)(t, m)
                    })
                }), g
            }
        },
        3798: (t, e, i) => {
            i.d(e, {
                x: () => n
            });

            function n(t) {
                return t instanceof SVGElement && "svg" !== t.tagName
            }
        },
        3801: (t, e, i) => {
            i.d(e, {
                p: () => n
            });
            let n = t => Array.isArray(t)
        },
        3943: (t, e, i) => {
            i.d(e, {
                z: () => c
            });
            var n = i(2115),
                r = i(7471),
                s = i(6168),
                a = i(9025),
                o = i(2942),
                l = i(5057),
                u = i(1116),
                h = i(6182),
                d = i(646);

            function c(t, e = {}) {
                let {
                    isStatic: i
                } = (0, n.useContext)(r.Q), m = (0, n.useRef)(null), f = (0, s.M)(() => (0, l.S)(t) ? t.get() : t), g = (0, s.M)(() => "string" == typeof f ? f.replace(/[\d.-]/g, "") : void 0), v = (0, o.d)(f), y = (0, n.useRef)(f), x = (0, n.useRef)(u.l), w = () => {
                    T(), m.current = new d.s({
                        keyframes: [p(v.get()), p(y.current)],
                        velocity: v.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...e,
                        onUpdate: x.current
                    })
                }, T = () => {
                    m.current && m.current.stop()
                };
                return (0, n.useInsertionEffect)(() => v.attach((t, e) => i ? e(t) : (y.current = t, x.current = t => {
                    var i, n;
                    return e((i = t, (n = g) ? i + n : i))
                }, h.Gt.postRender(w), v.get()), T), [JSON.stringify(e)]), (0, a.E)(() => {
                    if ((0, l.S)(t)) return t.on("change", t => {
                        var e, i;
                        return v.set((e = t, (i = g) ? e + i : e))
                    })
                }, [v, g]), v
            }

            function p(t) {
                return "number" == typeof t ? t : parseFloat(t)
            }
        },
        4002: (t, e, i) => {
            i.d(e, {
                l: () => p
            });
            var n = i(5915),
                r = i(8334),
                s = i(1687),
                a = i(4246);
            let o = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
            var l = i(4992),
                u = i(7717),
                h = i(5424),
                d = i(9207),
                c = i(9371);
            class p extends r.b {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = n.ge
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (d.f.has(e)) {
                        let t = (0, c.D)(e);
                        return t && t.default || 0
                    }
                    return e = o.has(e) ? e : (0, s.I)(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return (0, h.x)(t, e, i)
                }
                build(t, e, i) {
                    (0, a.B)(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    for (let i in (0, u.e)(t, e, void 0, n), e.attrs) t.setAttribute(o.has(i) ? i : (0, s.I)(i), e.attrs[i])
                }
                mount(t) {
                    this.isSVGTag = (0, l.n)(t.tagName), super.mount(t)
                }
            }
        },
        4197: (t, e, i) => {
            i.d(e, {
                w: () => n
            });
            let n = t => e => e.test(t)
        },
        4246: (t, e, i) => {
            i.d(e, {
                B: () => o
            });
            var n = i(1795),
                r = i(315);
            let s = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                a = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function o(t, {
                attrX: e,
                attrY: i,
                attrScale: o,
                pathLength: l,
                pathSpacing: u = 1,
                pathOffset: h = 0,
                ...d
            }, c, p) {
                if ((0, n.O)(t, d, p), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: m,
                    style: f
                } = t;
                m.transform && (f.transform = m.transform, delete m.transform), (f.transform || m.transformOrigin) && (f.transformOrigin = m.transformOrigin ? ? "50% 50%", delete m.transformOrigin), f.transform && (f.transformBox = "fill-box", delete m.transformBox), void 0 !== e && (m.x = e), void 0 !== i && (m.y = i), void 0 !== o && (m.scale = o), void 0 !== l && function(t, e, i = 1, n = 0, o = !0) {
                    t.pathLength = 1;
                    let l = o ? s : a;
                    t[l.offset] = r.px.transform(-n);
                    let u = r.px.transform(e),
                        h = r.px.transform(i);
                    t[l.array] = `${u} ${h}`
                }(m, l, u, h, !1)
            }
        },
        4297: (t, e, i) => {
            i.d(e, {
                G: () => h
            });
            var n = i(6168),
                r = i(9025),
                s = i(2942),
                a = i(6182);

            function o(t, e) {
                let i = (0, s.d)(e()),
                    n = () => i.set(e());
                return n(), (0, r.E)(() => {
                    let e = () => a.Gt.preRender(n, !1, !0),
                        i = t.map(t => t.on("change", e));
                    return () => {
                        i.forEach(t => t()), (0, a.WG)(n)
                    }
                }), i
            }
            var l = i(9967),
                u = i(8154);

            function h(t, e, i, n) {
                if ("function" == typeof t) {
                    l.bt.current = [], t();
                    let e = o(l.bt.current, t);
                    return l.bt.current = void 0, e
                }
                let r = "function" == typeof e ? e : function(...t) {
                    let e = !Array.isArray(t[0]),
                        i = e ? 0 : -1,
                        n = t[0 + i],
                        r = t[1 + i],
                        s = t[2 + i],
                        a = t[3 + i],
                        o = (0, u.G)(r, s, a);
                    return e ? o(n) : o
                }(e, i, n);
                return Array.isArray(t) ? d(t, r) : d([t], ([t]) => r(t))
            }

            function d(t, e) {
                let i = (0, n.M)(() => []);
                return o(t, () => {
                    i.length = 0;
                    let n = t.length;
                    for (let e = 0; e < n; e++) i[e] = t[e].get();
                    return e(i)
                })
            }
        },
        4344: (t, e, i) => {
            i.d(e, {
                b: () => r
            });
            var n = i(1765);
            let r = t => (t *= 2) < 1 ? .5 * (0, n.dg)(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        4416: (t, e, i) => {
            i.d(e, {
                A: () => n
            });
            let n = (0, i(9946).A)("x", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        4449: (t, e, i) => {
            i.d(e, {
                $: () => n,
                V: () => r
            });
            let n = () => {},
                r = () => {}
        },
        4530: (t, e, i) => {
            i.d(e, {
                f: () => n
            });

            function n(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        4762: (t, e, i) => {
            i.d(e, {
                $: () => n
            });
            let n = new Set(["width", "height", "top", "left", "right", "bottom", ...i(9207).U])
        },
        4916: (t, e, i) => {
            i.d(e, {
                V: () => n
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        4920: (t, e, i) => {
            i.d(e, {
                K: () => r
            });
            var n = i(1580);

            function r(t, e, i) {
                let r = t.getProps();
                return (0, n.a)(r, e, void 0 !== i ? i : r.custom, t)
            }
        },
        4992: (t, e, i) => {
            i.d(e, {
                n: () => n
            });
            let n = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        5057: (t, e, i) => {
            i.d(e, {
                S: () => n
            });
            let n = t => !!(t && t.getVelocity)
        },
        5233: (t, e, i) => {
            i.d(e, {
                V: () => h,
                f: () => m
            });
            var n = i(2901);
            let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var s = i(8459),
                a = i(9942);
            let o = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function h(t) {
                let e = t.toString(),
                    i = [],
                    r = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [],
                    a = 0,
                    h = e.replace(u, t => (n.y.test(t) ? (r.color.push(a), s.push(l), i.push(n.y.parse(t))) : t.startsWith("var(") ? (r.var.push(a), s.push("var"), i.push(t)) : (r.number.push(a), s.push(o), i.push(parseFloat(t))), ++a, "${}")).split("${}");
                return {
                    values: i,
                    split: h,
                    indexes: r,
                    types: s
                }
            }

            function d(t) {
                return h(t).values
            }

            function c(t) {
                let {
                    split: e,
                    types: i
                } = h(t), r = e.length;
                return t => {
                    let s = "";
                    for (let u = 0; u < r; u++)
                        if (s += e[u], void 0 !== t[u]) {
                            let e = i[u];
                            e === o ? s += (0, a.a)(t[u]) : e === l ? s += n.y.transform(t[u]) : s += t[u]
                        }
                    return s
                }
            }
            let p = t => "number" == typeof t ? 0 : t,
                m = {
                    test: function(t) {
                        return isNaN(t) && "string" == typeof t && (t.match(s.S) ? .length || 0) + (t.match(r) ? .length || 0) > 0
                    },
                    parse: d,
                    createTransformer: c,
                    getAnimatableNone: function(t) {
                        let e = d(t);
                        return c(t)(e.map(p))
                    }
                }
        },
        5255: (t, e, i) => {
            i.d(e, {
                j: () => r,
                p: () => a
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                r = n("--"),
                s = n("var(--"),
                a = t => !!s(t) && o.test(t.split("/*")[0].trim()),
                o = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        5333: (t, e, i) => {
            i.d(e, {
                V: () => a
            });
            var n = i(2115),
                r = i(2942),
                s = i(6182);

            function a(t) {
                var e, i;
                let a = (0, r.d)(t.getVelocity()),
                    o = () => {
                        let e = t.getVelocity();
                        a.set(e), e && s.Gt.update(o)
                    };
                return e = "change", i = () => {
                    s.Gt.update(o, !1, !0)
                }, (0, n.useInsertionEffect)(() => t.on(e, i), [t, e, i]), a
            }
        },
        5340: (t, e, i) => {
            i.d(e, {
                q: () => n
            });
            class n {
                constructor() {
                    this.count = 0, this.updateFinished()
                }
                get finished() {
                    return this._finished
                }
                updateFinished() {
                    this.count++, this._finished = new Promise(t => {
                        this.resolve = t
                    })
                }
                notifyFinished() {
                    this.resolve()
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
            }
        },
        5360: (t, e, i) => {
            let n, r;
            i.d(e, {
                L: () => N
            });
            var s = i(2115),
                a = i(793);
            let o = new WeakMap;

            function l({
                target: t,
                contentRect: e,
                borderBoxSize: i
            }) {
                o.get(t) ? .forEach(n => {
                    n({
                        target: t,
                        contentSize: e,
                        get size() {
                            if (i) {
                                let {
                                    inlineSize: t,
                                    blockSize: e
                                } = i[0];
                                return {
                                    width: t,
                                    height: e
                                }
                            }
                            if (t instanceof SVGElement && "getBBox" in t) return t.getBBox();
                            return {
                                width: t.offsetWidth,
                                height: t.offsetHeight
                            }
                        }
                    })
                })
            }

            function u(t) {
                t.forEach(l)
            }
            let h = new Set;
            var d = i(8865),
                c = i(4530);
            let p = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                m = () => ({
                    time: 0,
                    x: p(),
                    y: p()
                }),
                f = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function g(t, e, i, n) {
                let r = i[e],
                    {
                        length: s,
                        position: a
                    } = f[e],
                    o = r.current,
                    l = i.time;
                r.current = t[`scroll${a}`], r.scrollLength = t[`scroll${s}`] - t[`client${s}`], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = (0, d.q)(0, r.scrollLength, r.current);
                let u = n - l;
                r.velocity = u > 50 ? 0 : (0, c.f)(r.current - o, u)
            }
            let v = {
                start: 0,
                center: .5,
                end: 1
            };

            function y(t, e, i = 0) {
                let n = 0;
                if (t in v && (t = v[t]), "string" == typeof t) {
                    let e = parseFloat(t);
                    t.endsWith("px") ? n = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? n = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? n = e / 100 * document.documentElement.clientHeight : t = e
                }
                return "number" == typeof t && (n = e * t), i + n
            }
            let x = [0, 0],
                w = {
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                };
            var T = i(8154),
                b = i(6402),
                S = i(8167);
            let A = {
                x: 0,
                y: 0
            };
            var P = i(6182);
            let E = new WeakMap,
                M = new WeakMap,
                V = new WeakMap,
                k = t => t === document.documentElement ? window : t;

            function C(t, {
                container: e = document.documentElement,
                ...i
            } = {}) {
                let s = V.get(e);
                s || (s = new Set, V.set(e, s));
                let l = function(t, e, i, n = {}) {
                    return {
                        measure: () => (function(t, e = t, i) {
                            if (i.x.targetOffset = 0, i.y.targetOffset = 0, e !== t) {
                                let n = e;
                                for (; n && n !== t;) i.x.targetOffset += n.offsetLeft, i.y.targetOffset += n.offsetTop, n = n.offsetParent
                            }
                            i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, i.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, i.x.containerLength = t.clientWidth, i.y.containerLength = t.clientHeight
                        })(t, n.target, i),
                        update: e => {
                            g(t, "x", i, e), g(t, "y", i, e), i.time = e, (n.offset || n.target) && function(t, e, i) {
                                let {
                                    offset: n = w.All
                                } = i, {
                                    target: r = t,
                                    axis: s = "y"
                                } = i, a = "y" === s ? "height" : "width", o = r !== t ? function(t, e) {
                                    let i = {
                                            x: 0,
                                            y: 0
                                        },
                                        n = t;
                                    for (; n && n !== e;)
                                        if (n instanceof HTMLElement) i.x += n.offsetLeft, i.y += n.offsetTop, n = n.offsetParent;
                                        else if ("svg" === n.tagName) {
                                        let t = n.getBoundingClientRect(),
                                            e = (n = n.parentElement).getBoundingClientRect();
                                        i.x += t.left - e.left, i.y += t.top - e.top
                                    } else if (n instanceof SVGGraphicsElement) {
                                        let {
                                            x: t,
                                            y: e
                                        } = n.getBBox();
                                        i.x += t, i.y += e;
                                        let r = null,
                                            s = n.parentNode;
                                        for (; !r;) "svg" === s.tagName && (r = s), s = n.parentNode;
                                        n = r
                                    } else break;
                                    return i
                                }(r, t) : A, l = r === t ? {
                                    width: t.scrollWidth,
                                    height: t.scrollHeight
                                } : "getBBox" in r && "svg" !== r.tagName ? r.getBBox() : {
                                    width: r.clientWidth,
                                    height: r.clientHeight
                                }, u = {
                                    width: t.clientWidth,
                                    height: t.clientHeight
                                };
                                e[s].offset.length = 0;
                                let h = !e[s].interpolate,
                                    d = n.length;
                                for (let t = 0; t < d; t++) {
                                    let i = function(t, e, i, n) {
                                        let r = Array.isArray(t) ? t : x,
                                            s = 0,
                                            a = 0;
                                        return "number" == typeof t ? r = [t, t] : "string" == typeof t && (r = (t = t.trim()).includes(" ") ? t.split(" ") : [t, v[t] ? t : "0"]), (s = y(r[0], i, n)) - y(r[1], e)
                                    }(n[t], u[a], l[a], o[s]);
                                    h || i === e[s].interpolatorOffsets[t] || (h = !0), e[s].offset[t] = i
                                }
                                h && (e[s].interpolate = (0, T.G)(e[s].offset, (0, b.Z)(n), {
                                    clamp: !1
                                }), e[s].interpolatorOffsets = [...e[s].offset]), e[s].progress = (0, S.q)(0, 1, e[s].interpolate(e[s].current))
                            }(t, i, n)
                        },
                        notify: () => e(i)
                    }
                }(e, t, m(), i);
                if (s.add(l), !E.has(e)) {
                    let t = () => {
                            for (let t of s) t.measure()
                        },
                        i = () => {
                            for (let t of s) t.update(P.uv.timestamp)
                        },
                        l = () => {
                            for (let t of s) t.notify()
                        },
                        d = () => {
                            P.Gt.read(t, !1, !0), P.Gt.read(i, !1, !0), P.Gt.preUpdate(l, !1, !0)
                        };
                    E.set(e, d);
                    let c = k(e);
                    window.addEventListener("resize", d, {
                        passive: !0
                    }), e !== document.documentElement && M.set(e, "function" == typeof e ? (h.add(e), r || (r = () => {
                        let t = {
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            e = {
                                target: window,
                                size: t,
                                contentSize: t
                            };
                        h.forEach(t => t(e))
                    }, window.addEventListener("resize", r)), () => {
                        h.delete(e), !h.size && r && (r = void 0)
                    }) : function(t, e) {
                        n || "undefined" != typeof ResizeObserver && (n = new ResizeObserver(u));
                        let i = (0, a.K)(t);
                        return i.forEach(t => {
                            let i = o.get(t);
                            i || (i = new Set, o.set(t, i)), i.add(e), n ? .observe(t)
                        }), () => {
                            i.forEach(t => {
                                let i = o.get(t);
                                i ? .delete(e), i ? .size || n ? .unobserve(t)
                            })
                        }
                    }(e, d)), c.addEventListener("scroll", d, {
                        passive: !0
                    })
                }
                let d = E.get(e);
                return P.Gt.read(d, !1, !0), () => {
                    (0, P.WG)(d);
                    let t = V.get(e);
                    if (!t || (t.delete(l), t.size)) return;
                    let i = E.get(e);
                    E.delete(e), i && (k(e).removeEventListener("scroll", i), M.get(e) ? .(), window.removeEventListener("resize", i))
                }
            }
            var D = i(6299);
            let R = new Map;

            function L({
                source: t,
                container: e,
                ...i
            }) {
                let {
                    axis: n
                } = i;
                t && (e = t);
                let r = R.get(e) ? ? new Map;
                R.set(e, r);
                let s = i.target ? ? "self",
                    a = r.get(s) ? ? {},
                    o = n + (i.offset ? ? []).join(",");
                return a[o] || (a[o] = !i.target && (0, D.J)() ? new ScrollTimeline({
                    source: e,
                    axis: n
                }) : function(t) {
                    let e = {
                            value: 0
                        },
                        i = C(i => {
                            e.value = 100 * i[t.axis].progress
                        }, t);
                    return {
                        currentTime: e,
                        cancel: i
                    }
                }({
                    container: e,
                    ...i
                })), a[o]
            }

            function j(t, e) {
                let i, n = () => {
                    let {
                        currentTime: n
                    } = e, r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), i = r
                };
                return P.Gt.preUpdate(n, !0), () => (0, P.WG)(n)
            }
            var B = i(6168),
                F = i(9025),
                O = i(4449),
                W = i(9967);

            function U(t, e) {
                (0, O.$)(!!(!e || e.current), `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
            }
            let I = () => ({
                scrollX: (0, W.OQ)(0),
                scrollY: (0, W.OQ)(0),
                scrollXProgress: (0, W.OQ)(0),
                scrollYProgress: (0, W.OQ)(0)
            });

            function N({
                container: t,
                target: e,
                layoutEffect: i = !0,
                ...n
            } = {}) {
                let r = (0, B.M)(I);
                return (i ? F.E : s.useEffect)(() => (U("target", e), U("container", t), function(t, {
                    axis: e = "y",
                    container: i = document.documentElement,
                    ...n
                } = {}) {
                    var r, s;
                    i === document.documentElement && ("y" === e && i.scrollHeight === i.clientHeight || "x" === e && i.scrollWidth === i.clientWidth) && (i = document.body);
                    let a = {
                        axis: e,
                        container: i,
                        ...n
                    };
                    return "function" == typeof t ? (r = t, s = a, 2 === r.length ? C(t => {
                        r(t[s.axis].progress, t)
                    }, s) : j(r, L(s))) : function(t, e) {
                        let i = L(e);
                        return t.attachTimeline({
                            timeline: e.target ? void 0 : i,
                            observe: t => (t.pause(), j(e => {
                                t.time = t.duration * e
                            }, i))
                        })
                    }(t, a)
                }((t, {
                    x: e,
                    y: i
                }) => {
                    r.scrollX.set(e.current), r.scrollXProgress.set(e.progress), r.scrollY.set(i.current), r.scrollYProgress.set(i.progress)
                }, { ...n,
                    container: t ? .current || void 0,
                    target: e ? .current || void 0
                })), [t, e, JSON.stringify(n.offset)]), r
            }
        },
        5396: (t, e, i) => {
            i.d(e, {
                Y: () => r
            });
            var n = i(4530);

            function r(t, e, i) {
                let r = Math.max(e - 5, 0);
                return (0, n.f)(i - t(r), e - r)
            }
        },
        5424: (t, e, i) => {
            i.d(e, {
                x: () => a
            });
            var n = i(5057),
                r = i(9959),
                s = i(9207);

            function a(t, e, i) {
                let a = (0, r.x)(t, e, i);
                for (let i in t)((0, n.S)(t[i]) || (0, n.S)(e[i])) && (a[-1 !== s.U.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return a
            }
        },
        5521: (t, e, i) => {
            i.d(e, {
                E4: () => o,
                Hr: () => d,
                W9: () => h
            });
            var n = i(2531),
                r = i(9207),
                s = i(5590),
                a = i(315);
            let o = t => t === s.ai || t === a.px,
                l = new Set(["x", "y", "z"]),
                u = r.U.filter(t => !l.has(t));

            function h(t) {
                let e = [];
                return u.forEach(i => {
                    let n = t.getValue(i);
                    void 0 !== n && (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")))
                }), e
            }
            let d = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: (t, {
                    transform: e
                }) => (0, n.r)(e, "x"),
                y: (t, {
                    transform: e
                }) => (0, n.r)(e, "y")
            };
            d.translateX = d.x, d.translateY = d.y
        },
        5538: (t, e, i) => {
            i.d(e, {
                X: () => r,
                f: () => n
            });
            let n = t => 1e3 * t,
                r = t => t / 1e3
        },
        5590: (t, e, i) => {
            i.d(e, {
                X4: () => s,
                ai: () => r,
                hs: () => a
            });
            var n = i(8167);
            let r = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...r,
                    transform: t => (0, n.q)(0, 1, t)
                },
                a = { ...r,
                    default: 1
                }
        },
        5649: (t, e, i) => {
            function n(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            i.d(e, {
                Ai: () => r,
                Kq: () => n
            })
        },
        5671: (t, e, i) => {
            i.d(e, {
                X: () => r
            });
            let n = t => null !== t;

            function r(t, {
                repeat: e,
                repeatType: i = "loop"
            }, s, a = 1) {
                let o = t.filter(n),
                    l = a < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : o.length - 1;
                return l && void 0 !== s ? s : o[l]
            }
        },
        5680: (t, e, i) => {
            i.d(e, {
                p: () => l
            });
            var n = i(5233),
                r = i(8459);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function a(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(r.S) || [];
                if (!n) return t;
                let a = i.replace(n, ""),
                    o = +!!s.has(e);
                return n !== i && (o *= 100), e + "(" + o + a + ")"
            }
            let o = /\b([a-z-]*)\(.*?\)/gu,
                l = { ...n.f,
                    getAnimatableNone: t => {
                        let e = t.match(o);
                        return e ? e.map(a).join(" ") : t
                    }
                }
        },
        5699: (t, e, i) => {
            i.d(e, {
                E: () => h
            });
            var n = i(6787),
                r = i(6390),
                s = i(4449);

            function a(t, e) {
                [...e].reverse().forEach(i => {
                    let r = t.getVariant(i);
                    r && (0, n.U)(t, r), t.variantChildren && t.variantChildren.forEach(t => {
                        a(t, e)
                    })
                })
            }

            function o() {
                let t = !1,
                    e = new Set,
                    i = {
                        subscribe: t => (e.add(t), () => void e.delete(t)),
                        start(i, n) {
                            (0, s.V)(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let a = [];
                            return e.forEach(t => {
                                a.push((0, r._)(t, i, {
                                    transitionOverride: n
                                }))
                            }), Promise.all(a)
                        },
                        set: i => ((0, s.V)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
                            var e, r;
                            e = t, Array.isArray(r = i) ? a(e, r) : "string" == typeof r ? a(e, [r]) : (0, n.U)(e, r)
                        })),
                        stop() {
                            e.forEach(t => {
                                t.values.forEach(t => t.stop())
                            })
                        },
                        mount: () => (t = !0, () => {
                            t = !1, i.stop()
                        })
                    };
                return i
            }
            var l = i(6168),
                u = i(9025);

            function h() {
                let t = (0, l.M)(o);
                return (0, u.E)(t.mount, []), t
            }
        },
        5854: (t, e, i) => {
            i.d(e, {
                a6: () => r,
                am: () => a,
                vT: () => s
            });
            var n = i(7470);
            let r = (0, n.A)(.42, 0, 1, 1),
                s = (0, n.A)(0, 0, .58, 1),
                a = (0, n.A)(.42, 0, .58, 1)
        },
        5855: (t, e, i) => {
            function n(t) {
                return void 0 === t || 1 === t
            }

            function r({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !n(t) || !n(e) || !n(i)
            }

            function s(t) {
                return r(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function a(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }
            i.d(e, {
                HD: () => s,
                vF: () => a,
                vk: () => r
            })
        },
        5915: (t, e, i) => {
            i.d(e, {
                ge: () => a,
                xU: () => r
            });
            let n = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                r = () => ({
                    x: n(),
                    y: n()
                }),
                s = () => ({
                    min: 0,
                    max: 0
                }),
                a = () => ({
                    x: s(),
                    y: s()
                })
        },
        5960: (t, e, i) => {
            i.d(e, {
                OU: () => u,
                Ql: () => h,
                Ww: () => c,
                hq: () => s,
                o4: () => l
            });
            var n = i(5855),
                r = i(105);

            function s(t, e, i) {
                return i + e * (t - i)
            }

            function a(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function o(t, e = 0, i = 1, n, r) {
                t.min = a(t.min, e, i, n, r), t.max = a(t.max, e, i, n, r)
            }

            function l(t, {
                x: e,
                y: i
            }) {
                o(t.x, e.translate, e.scale, e.originPoint), o(t.y, i.translate, i.scale, i.originPoint)
            }

            function u(t, e, i, r = !1) {
                let s, a, o = i.length;
                if (o) {
                    e.x = e.y = 1;
                    for (let u = 0; u < o; u++) {
                        a = (s = i[u]).projectionDelta;
                        let {
                            visualElement: o
                        } = s.options;
                        (!o || !o.props.style || "contents" !== o.props.style.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && c(t, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y
                        }), a && (e.x *= a.x.scale, e.y *= a.y.scale, l(t, a)), r && (0, n.HD)(s.latestValues) && c(t, s.latestValues))
                    }
                    e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                }
            }

            function h(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function d(t, e, i, n, s = .5) {
                let a = (0, r.k)(t.min, t.max, s);
                o(t, e, i, a, n)
            }

            function c(t, e) {
                d(t.x, e.x, e.scaleX, e.scale, e.originX), d(t.y, e.y, e.scaleY, e.scale, e.originY)
            }
        },
        6168: (t, e, i) => {
            i.d(e, {
                M: () => r
            });
            var n = i(2115);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        6182: (t, e, i) => {
            i.d(e, {
                Gt: () => s,
                PP: () => l,
                WG: () => a,
                uv: () => o
            });
            var n = i(6911),
                r = i(1116);
            let {
                schedule: s,
                cancel: a,
                state: o,
                steps: l
            } = (0, n.I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.l, !0)
        },
        6201: (t, e, i) => {
            i.d(e, {
                B: () => s
            });
            var n = i(877),
                r = i(5396);

            function s({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: s = 325,
                bounceDamping: a = 10,
                bounceStiffness: o = 500,
                modifyTarget: l,
                min: u,
                max: h,
                restDelta: d = .5,
                restSpeed: c
            }) {
                let p, m, f = t[0],
                    g = {
                        done: !1,
                        value: f
                    },
                    v = t => void 0 !== u && t < u || void 0 !== h && t > h,
                    y = t => void 0 === u ? h : void 0 === h || Math.abs(u - t) < Math.abs(h - t) ? u : h,
                    x = i * e,
                    w = f + x,
                    T = void 0 === l ? w : l(w);
                T !== w && (x = T - f);
                let b = t => -x * Math.exp(-t / s),
                    S = t => T + b(t),
                    A = t => {
                        let e = b(t),
                            i = S(t);
                        g.done = Math.abs(e) <= d, g.value = g.done ? T : i
                    },
                    P = t => {
                        v(g.value) && (p = t, m = (0, n.o)({
                            keyframes: [g.value, y(g.value)],
                            velocity: (0, r.Y)(S, t, g.value),
                            damping: a,
                            stiffness: o,
                            restDelta: d,
                            restSpeed: c
                        }))
                    };
                return P(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (m || void 0 !== p || (e = !0, A(t), P(t)), void 0 !== p && t >= p) ? m.next(t - p) : (e || A(t), g)
                    }
                }
            }
        },
        6299: (t, e, i) => {
            i.d(e, {
                J: () => n
            });
            let n = (0, i(7482).p)(() => void 0 !== window.ScrollTimeline)
        },
        6384: (t, e, i) => {
            i.d(e, {
                J: () => a
            });
            var n = i(5233),
                r = i(5680),
                s = i(9371);

            function a(t, e) {
                let i = (0, s.D)(t);
                return i !== r.p && (i = n.f), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
        },
        6390: (t, e, i) => {
            i.d(e, {
                _: () => o
            });
            var n = i(4920),
                r = i(3551);

            function s(t, e, i = {}) {
                let o = (0, n.K)(t, e, "exit" === i.type ? t.presenceContext ? .custom : void 0),
                    {
                        transition: l = t.getDefaultTransition() || {}
                    } = o || {};
                i.transitionOverride && (l = i.transitionOverride);
                let u = o ? () => Promise.all((0, r.$)(t, o, i)) : () => Promise.resolve(),
                    h = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: u
                        } = l;
                        return function(t, e, i = 0, n = 0, r = 1, o) {
                            let l = [],
                                u = (t.variantChildren.size - 1) * n,
                                h = 1 === r ? (t = 0) => t * n : (t = 0) => u - t * n;
                            return Array.from(t.variantChildren).sort(a).forEach((t, n) => {
                                t.notify("AnimationStart", e), l.push(s(t, e, { ...o,
                                    delay: i + h(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(l)
                        }(t, e, r + n, o, u, i)
                    } : () => Promise.resolve(),
                    {
                        when: d
                    } = l;
                if (!d) return Promise.all([u(), h(i.delay)]); {
                    let [t, e] = "beforeChildren" === d ? [u, h] : [h, u];
                    return t().then(() => e())
                }
            }

            function a(t, e) {
                return t.sortNodePosition(e)
            }

            function o(t, e, i = {}) {
                let a;
                if (t.notify("AnimationStart", e), Array.isArray(e)) a = Promise.all(e.map(e => s(t, e, i)));
                else if ("string" == typeof e) a = s(t, e, i);
                else {
                    let s = "function" == typeof e ? (0, n.K)(t, e, i.custom) : e;
                    a = Promise.all((0, r.$)(t, s, i))
                }
                return a.then(() => {
                    t.notify("AnimationComplete", e)
                })
            }
        },
        6402: (t, e, i) => {
            i.d(e, {
                Z: () => r
            });
            var n = i(7234);

            function r(t) {
                let e = [0];
                return (0, n.f)(e, t.length - 1), e
            }
        },
        6474: (t, e, i) => {
            i.d(e, {
                K: () => p
            });
            var n = i(4449),
                r = i(1116),
                s = i(4344),
                a = i(1765),
                o = i(1673),
                l = i(7470),
                u = i(5854),
                h = i(9388);
            let d = {
                    linear: r.l,
                    easeIn: u.a6,
                    easeInOut: u.am,
                    easeOut: u.vT,
                    circIn: o.po,
                    circInOut: o.tn,
                    circOut: o.yT,
                    backIn: a.dg,
                    backInOut: a.ZZ,
                    backOut: a.Sz,
                    anticipate: s.b
                },
                c = t => "string" == typeof t,
                p = t => {
                    if ((0, h.D)(t)) {
                        (0, n.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, r, s] = t;
                        return (0, l.A)(e, i, r, s)
                    }
                    return c(t) ? ((0, n.V)(void 0 !== d[t], `Invalid easing type '${t}'`), d[t]) : t
                }
        },
        6569: (t, e, i) => {
            i.d(e, {
                E: () => o
            });
            var n = i(6201),
                r = i(6584),
                s = i(877);
            let a = {
                decay: n.B,
                inertia: n.B,
                tween: r.i,
                keyframes: r.i,
                spring: s.o
            };

            function o(t) {
                "string" == typeof t.type && (t.type = a[t.type])
            }
        },
        6584: (t, e, i) => {
            i.d(e, {
                i: () => l
            });
            var n = i(8154),
                r = i(6402),
                s = i(5854),
                a = i(9366),
                o = i(6474);

            function l({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: l = "easeInOut"
            }) {
                var u;
                let h = (0, a.h)(l) ? l.map(o.K) : (0, o.K)(l),
                    d = {
                        done: !1,
                        value: e[0]
                    },
                    c = (u = i && i.length === e.length ? i : (0, r.Z)(e), u.map(e => e * t)),
                    p = (0, n.G)(c, e, {
                        ease: Array.isArray(h) ? h : e.map(() => h || s.am).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (d.value = p(e), d.done = e >= t, d)
                }
            }
        },
        6787: (t, e, i) => {
            i.d(e, {
                U: () => a
            });
            var n = i(3801),
                r = i(4920),
                s = i(9967);

            function a(t, e) {
                let {
                    transitionEnd: i = {},
                    transition: a = {},
                    ...o
                } = (0, r.K)(t, e) || {};
                for (let e in o = { ...o,
                        ...i
                    }) {
                    var l;
                    let i = (l = o[e], (0, n.p)(l) ? l[l.length - 1] || 0 : l);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, s.OQ)(i))
                }
            }
        },
        6911: (t, e, i) => {
            i.d(e, {
                I: () => a
            });
            let n = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
            var r = i(8579),
                s = i(2098);

            function a(t, e) {
                let i = !1,
                    a = !0,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = () => i = !0,
                    u = n.reduce((t, i) => (t[i] = function(t, e) {
                        let i = new Set,
                            n = new Set,
                            s = !1,
                            a = !1,
                            o = new WeakSet,
                            l = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            u = 0;

                        function h(e) {
                            o.has(e) && (d.schedule(e), t()), u++, e(l)
                        }
                        let d = {
                            schedule: (t, e = !1, r = !1) => {
                                let a = r && s ? i : n;
                                return e && o.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                n.delete(t), o.delete(t)
                            },
                            process: t => {
                                if (l = t, s) {
                                    a = !0;
                                    return
                                }
                                s = !0, [i, n] = [n, i], i.forEach(h), e && r.Q.value && r.Q.value.frameloop[e].push(u), u = 0, i.clear(), s = !1, a && (a = !1, d.process(t))
                            }
                        };
                        return d
                    }(l, e ? i : void 0), t), {}),
                    {
                        setup: h,
                        read: d,
                        resolveKeyframes: c,
                        preUpdate: p,
                        update: m,
                        preRender: f,
                        render: g,
                        postRender: v
                    } = u,
                    y = () => {
                        let n = s.W.useManualTiming ? o.timestamp : performance.now();
                        i = !1, s.W.useManualTiming || (o.delta = a ? 1e3 / 60 : Math.max(Math.min(n - o.timestamp, 40), 1)), o.timestamp = n, o.isProcessing = !0, h.process(o), d.process(o), c.process(o), p.process(o), m.process(o), f.process(o), g.process(o), v.process(o), o.isProcessing = !1, i && e && (a = !1, t(y))
                    },
                    x = () => {
                        i = !0, a = !0, o.isProcessing || t(y)
                    };
                return {
                    schedule: n.reduce((t, e) => {
                        let n = u[e];
                        return t[e] = (t, e = !1, r = !1) => (i || x(), n.schedule(t, e, r)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < n.length; e++) u[n[e]].cancel(t)
                    },
                    state: o,
                    steps: u
                }
            }
        },
        6917: (t, e, i) => {
            i.d(e, {
                W: () => n
            });

            function n(t) {
                return "function" == typeof t && "applyToOptions" in t
            }
        },
        7183: (t, e, i) => {
            i.d(e, {
                V: () => o
            });
            var n = i(5590),
                r = i(315),
                s = i(9942),
                a = i(1018);
            let o = {
                test: (0, a.$)("hsl", "hue"),
                parse: (0, a.q)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: a = 1
                }) => "hsla(" + Math.round(t) + ", " + r.KN.transform((0, s.a)(e)) + ", " + r.KN.transform((0, s.a)(i)) + ", " + (0, s.a)(n.X4.transform(a)) + ")"
            }
        },
        7234: (t, e, i) => {
            i.d(e, {
                f: () => s
            });
            var n = i(105),
                r = i(8865);

            function s(t, e) {
                let i = t[t.length - 1];
                for (let s = 1; s <= e; s++) {
                    let a = (0, r.q)(0, e, s);
                    t.push((0, n.k)(i, 1, a))
                }
            }
        },
        7379: (t, e, i) => {
            i.d(e, {
                B: () => u
            });
            var n = i(5590),
                r = i(9942),
                s = i(1018),
                a = i(8167);
            let o = t => (0, a.q)(0, 255, t),
                l = { ...n.ai,
                    transform: t => Math.round(o(t))
                },
                u = {
                    test: (0, s.$)("rgb", "red"),
                    parse: (0, s.q)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: s = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0, r.a)(n.X4.transform(s)) + ")"
                }
        },
        7393: (t, e, i) => {
            i.d(e, {
                Y: () => n,
                t: () => r
            });
            let n = 2e4;

            function r(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < n;) e += 50, i = t.next(e);
                return e >= n ? 1 / 0 : e
            }
        },
        7470: (t, e, i) => {
            i.d(e, {
                A: () => s
            });
            var n = i(1116);
            let r = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function s(t, e, i, s) {
                if (t === e && i === s) return n.l;
                let a = e => (function(t, e, i, n, s) {
                    let a, o, l = 0;
                    do(a = r(o = e + (i - e) / 2, n, s) - t) > 0 ? i = o : e = o; while (Math.abs(a) > 1e-7 && ++l < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : r(a(t), e, s)
            }
        },
        7471: (t, e, i) => {
            i.d(e, {
                Q: () => n
            });
            let n = (0, i(2115).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        7482: (t, e, i) => {
            i.d(e, {
                p: () => n
            });

            function n(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
        },
        7717: (t, e, i) => {
            i.d(e, {
                e: () => n
            });

            function n(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
        },
        7775: (t, e, i) => {
            i.d(e, {
                i: () => n
            });
            let n = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
        },
        8154: (t, e, i) => {
            i.d(e, {
                G: () => h
            });
            var n = i(1324),
                r = i(4449),
                s = i(8167),
                a = i(2098),
                o = i(1116),
                l = i(9792),
                u = i(8865);

            function h(t, e, {
                clamp: i = !0,
                ease: d,
                mixer: c
            } = {}) {
                let p = t.length;
                if ((0, r.V)(p === e.length, "Both input and output ranges must be the same length"), 1 === p) return () => e[0];
                if (2 === p && e[0] === e[1]) return () => e[1];
                let m = t[0] === t[1];
                t[0] > t[p - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let f = function(t, e, i) {
                        let r = [],
                            s = i || a.W.mix || n.j,
                            u = t.length - 1;
                        for (let i = 0; i < u; i++) {
                            let n = s(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || o.l : e;
                                n = (0, l.F)(t, n)
                            }
                            r.push(n)
                        }
                        return r
                    }(e, d, c),
                    g = f.length,
                    v = i => {
                        if (m && i < t[0]) return e[0];
                        let n = 0;
                        if (g > 1)
                            for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                        let r = (0, u.q)(t[n], t[n + 1], i);
                        return f[n](r)
                    };
                return i ? e => v((0, s.q)(t[0], t[p - 1], e)) : v
            }
        },
        8167: (t, e, i) => {
            i.d(e, {
                q: () => n
            });
            let n = (t, e, i) => i > e ? e : i < t ? t : i
        },
        8326: (t, e, i) => {
            i.d(e, {
                u: () => r
            });
            var n = i(7379);
            let r = {
                test: (0, i(1018).$)("#"),
                parse: function(t) {
                    let e = "",
                        i = "",
                        n = "",
                        r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(n, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                },
                transform: n.B.transform
            }
        },
        8334: (t, e, i) => {
            i.d(e, {
                b: () => y
            });
            var n = i(5057),
                r = i(8846),
                s = i(4762),
                a = i(9210),
                o = i(5255),
                l = i(4449),
                u = i(7775);
            let h = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var d = i(1659),
                c = i(9579),
                p = i(5233),
                m = i(6384);
            let f = new Set(["auto", "none", "0"]);
            var g = i(5521);
            class v extends d.h {
                constructor(t, e, i, n, r) {
                    super(t, e, i, n, r, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && (n = n.trim(), (0, o.p)(n))) {
                            let r = function t(e, i, n = 1) {
                                (0, l.V)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [r, s] = function(t) {
                                    let e = h.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, r] = e;
                                    return [`--${i??n}`, r]
                                }(e);
                                if (!r) return;
                                let a = window.getComputedStyle(i).getPropertyValue(r);
                                if (a) {
                                    let t = a.trim();
                                    return (0, u.i)(t) ? parseFloat(t) : t
                                }
                                return (0, o.p)(s) ? t(s, i, n + 1) : s
                            }(n, e.current);
                            void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !s.$.has(i) || 2 !== t.length) return;
                    let [n, r] = t, d = (0, a.n)(n), c = (0, a.n)(r);
                    if (d !== c)
                        if ((0, g.E4)(d) && (0, g.E4)(c))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        (null === t[e] || ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || (0, c.$)(n))) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, r = 0;
                        for (; r < t.length && !n;) {
                            let e = t[r];
                            "string" == typeof e && !f.has(e) && (0, p.V)(e).values.length && (n = t[r]), r++
                        }
                        if (n && i)
                            for (let r of e) t[r] = (0, m.J)(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = g.Hr[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    let {
                        element: t,
                        name: e,
                        unresolvedKeyframes: i
                    } = this;
                    if (!t || !t.current) return;
                    let n = t.getValue(e);
                    n && n.jump(this.measuredOrigin, !1);
                    let r = i.length - 1,
                        s = i[r];
                    i[r] = g.Hr[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms ? .length && this.removedTransforms.forEach(([e, i]) => {
                        t.getValue(e).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }
            class y extends r.B {
                constructor() {
                    super(...arguments), this.KeyframeResolver = v
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, n.S)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
        },
        8459: (t, e, i) => {
            i.d(e, {
                S: () => n
            });
            let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        8579: (t, e, i) => {
            i.d(e, {
                Q: () => n
            });
            let n = {
                value: null,
                addProjectionMetrics: null
            }
        },
        8840: (t, e, i) => {
            let n;
            i.d(e, {
                k: () => o
            });
            var r = i(6182),
                s = i(2098);

            function a() {
                n = void 0
            }
            let o = {
                now: () => (void 0 === n && o.set(r.uv.isProcessing || s.W.useManualTiming ? r.uv.timestamp : performance.now()), n),
                set: t => {
                    n = t, queueMicrotask(a)
                }
            }
        },
        8846: (t, e, i) => {
            i.d(e, {
                B: () => V
            });
            var n = i(13),
                r = i(5915),
                s = i(2801);
            let a = {
                    current: null
                },
                o = {
                    current: !1
                };
            var l = i(5057),
                u = i(2386),
                h = i(9908),
                d = i(9967),
                c = i(1580),
                p = i(1659),
                m = i(8840),
                f = i(6182),
                g = i(9207),
                v = i(7775),
                y = i(9579),
                x = i(2901),
                w = i(5233),
                T = i(9210),
                b = i(4197);
            let S = [...T.T, x.y, w.f],
                A = t => S.find((0, b.w)(t));
            var P = i(6384),
                E = i(1309);
            let M = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class V {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    blockInitialAnimation: r,
                    visualState: s
                }, a = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = p.h, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = m.k.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, f.Gt.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: o,
                        renderState: u
                    } = s;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = (0, h.e)(e), this.isVariantNode = (0, h.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: d,
                        ...c
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in c) {
                        let e = c[t];
                        void 0 !== o[t] && (0, l.S)(e) && e.set(o[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, u.C.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), o.current || function() {
                        if (o.current = !0, s.B)
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => a.current = t.matches;
                                t.addListener(e), e()
                            } else a.current = !1
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || a.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in this.projection && this.projection.unmount(), this.projection = void 0, (0, f.WG)(this.notifyUpdate), (0, f.WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = g.f.has(t);
                    n && this.onBindTransform && this.onBindTransform();
                    let r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && f.Gt.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        r(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in n.B) {
                        let e = n.B[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: r
                        } = e;
                        if (!this.features[t] && r && i(this.props) && (this.features[t] = new r(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, r.ge)()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < M.length; e++) {
                        let i = M[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let r = e[n],
                                s = i[n];
                            if ((0, l.S)(r)) t.addValue(n, r);
                            else if ((0, l.S)(s)) t.addValue(n, (0, d.OQ)(r, {
                                owner: t
                            }));
                            else if (s !== r)
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, (0, d.OQ)(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, d.OQ)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != i && ("string" == typeof i && ((0, v.i)(i) || (0, y.$)(i)) ? i = parseFloat(i) : !A(i) && w.f.test(e) && (i = (0, P.J)(t, e)), this.setBaseTarget(t, (0, l.S)(i) ? i.get() : i)), (0, l.S)(i) ? i.get() : i
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    let e, {
                        initial: i
                    } = this.props;
                    if ("string" == typeof i || "object" == typeof i) {
                        let n = (0, c.a)(this.props, i, this.presenceContext ? .custom);
                        n && (e = n[t])
                    }
                    if (i && void 0 !== e) return e;
                    let n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || (0, l.S)(n) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : n
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new E.v), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
        },
        8865: (t, e, i) => {
            i.d(e, {
                q: () => n
            });
            let n = (t, e, i) => {
                let n = e - t;
                return 0 === n ? 1 : (i - t) / n
            }
        },
        9013: (t, e, i) => {
            i.d(e, {
                U: () => n,
                _: () => r
            });
            let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                r = ["initial", ...n]
        },
        9025: (t, e, i) => {
            i.d(e, {
                E: () => r
            });
            var n = i(2115);
            let r = i(2801).B ? n.useLayoutEffect : n.useEffect
        },
        9066: (t, e, i) => {
            i.d(e, {
                M: () => d
            });
            var n = i(9876),
                r = i(8334),
                s = i(1795),
                a = i(7717),
                o = i(9959),
                l = i(9207),
                u = i(2531),
                h = i(5255);
            class d extends r.b {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = a.e
                }
                readValueFromInstance(t, e) {
                    if (l.f.has(e)) return (0, u.I)(t, e); {
                        let i = window.getComputedStyle(t),
                            n = ((0, h.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return (0, n.m)(t, e)
                }
                build(t, e, i) {
                    (0, s.O)(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return (0, o.x)(t, e, i)
                }
            }
        },
        9099: (t, e, i) => {
            i.d(e, {
                A: () => n
            });
            let n = (0, i(9946).A)("github", [
                ["path", {
                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
                    key: "tonef"
                }],
                ["path", {
                    d: "M9 18c-4.51 2-5-2-7-2",
                    key: "9comsn"
                }]
            ])
        },
        9165: (t, e, i) => {
            i.d(e, {
                i: () => N,
                W: () => I
            });
            var n = i(5057);

            function r(t) {
                return "object" == typeof t && !Array.isArray(t)
            }
            var s = i(793);

            function a(t, e, i, n) {
                return "string" == typeof t && r(e) ? (0, s.K)(t, i, n) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t]
            }

            function o(t, e, i, n) {
                return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? i : n.get(e) ? ? t
            }
            var l = i(105);
            let u = (t, e, i) => {
                let n = e - t;
                return ((i - t) % n + n) % n + t
            };
            var h = i(9366);

            function d(t, e) {
                return (0, h.h)(t) ? t[u(0, t.length, e)] : t
            }
            var c = i(5649);

            function p(t, e) {
                return t.at !== e.at ? t.at - e.at : null === t.value ? 1 : null === e.value ? -1 : 0
            }
            var m = i(6402),
                f = i(6917),
                g = i(1835),
                v = i(7234),
                y = i(4449),
                x = i(8865),
                w = i(5538);

            function T(t, e) {
                return e.has(t) || e.set(t, {}), e.get(t)
            }

            function b(t, e) {
                return e[t] || (e[t] = []), e[t]
            }
            let S = t => "number" == typeof t,
                A = t => t.every(S);
            var P = i(2386),
                E = i(3551),
                M = i(3798),
                V = i(9066),
                k = i(5915),
                C = i(8846);
            class D extends C.B {
                constructor() {
                    super(...arguments), this.type = "object"
                }
                readValueFromInstance(t, e) {
                    if (e in t) {
                        let i = t[e];
                        if ("string" == typeof i || "number" == typeof i) return i
                    }
                }
                getBaseTargetFromProps() {}
                removeValueFromRenderState(t, e) {
                    delete e.output[t]
                }
                measureInstanceViewportBox() {
                    return (0, k.ge)()
                }
                build(t, e) {
                    Object.assign(t.output, e)
                }
                renderInstance(t, {
                    output: e
                }) {
                    Object.assign(t, e)
                }
                sortInstanceNodePosition() {
                    return 0
                }
            }
            var R = i(4002);

            function L(t) {
                let e = {
                        presenceContext: null,
                        props: {},
                        visualState: {
                            renderState: {
                                transform: {},
                                transformOrigin: {},
                                style: {},
                                vars: {},
                                attrs: {}
                            },
                            latestValues: {}
                        }
                    },
                    i = (0, M.x)(t) ? new R.l(e) : new V.M(e);
                i.mount(t), P.C.set(t, i)
            }

            function j(t) {
                let e = new D({
                    presenceContext: null,
                    props: {},
                    visualState: {
                        renderState: {
                            output: {}
                        },
                        latestValues: {}
                    }
                });
                e.mount(t), P.C.set(t, e)
            }
            var B = i(2685);

            function F(t, e, i, s) {
                let o = [];
                if ((0, n.S)(t) || "number" == typeof t || "string" == typeof t && !r(e)) o.push((0, B.z)(t, r(e) && e.default || e, i && i.default || i));
                else {
                    let n = a(t, e, s),
                        r = n.length;
                    (0, y.V)(!!r, "No valid elements provided.");
                    for (let t = 0; t < r; t++) {
                        let s = n[t],
                            a = s instanceof Element ? L : j;
                        P.C.has(s) || a(s);
                        let l = P.C.get(s),
                            u = { ...i
                            };
                        "delay" in u && "function" == typeof u.delay && (u.delay = u.delay(t, r)), o.push(...(0, E.$)(l, { ...e,
                            transition: u
                        }, {}))
                    }
                }
                return o
            }
            var O = i(877);
            class W {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                get finished() {
                    return Promise.all(this.animations.map(t => t.finished))
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t) {
                    let e = this.animations.map(e => e.attachTimeline(t));
                    return () => {
                        e.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get state() {
                    return this.getAll("state")
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            class U extends W {
                then(t, e) {
                    return this.finished.finally(t).then(() => {})
                }
            }

            function I(t) {
                return function(e, i, r) {
                    let s = [],
                        u = new U(s = Array.isArray(e) && e.some(Array.isArray) ? function(t, e, i) {
                            let r = [];
                            return (function(t, {
                                defaultTransition: e = {},
                                ...i
                            } = {}, r, s) {
                                let u = e.duration || .3,
                                    h = new Map,
                                    S = new Map,
                                    P = {},
                                    E = new Map,
                                    M = 0,
                                    V = 0,
                                    k = 0;
                                for (let i = 0; i < t.length; i++) {
                                    let h = t[i];
                                    if ("string" == typeof h) {
                                        E.set(h, V);
                                        continue
                                    }
                                    if (!Array.isArray(h)) {
                                        E.set(h.name, o(V, h.at, M, E));
                                        continue
                                    }
                                    let [p, x, R = {}] = h;
                                    void 0 !== R.at && (V = o(V, R.at, M, E));
                                    let L = 0,
                                        j = (t, i, n, r = 0, a = 0) => {
                                            var o;
                                            let h = Array.isArray(o = t) ? o : [o],
                                                {
                                                    delay: p = 0,
                                                    times: x = (0, m.Z)(h),
                                                    type: T = "keyframes",
                                                    repeat: b,
                                                    repeatType: S,
                                                    repeatDelay: P = 0,
                                                    ...E
                                                } = i,
                                                {
                                                    ease: M = e.ease || "easeOut",
                                                    duration: C
                                                } = i,
                                                D = "function" == typeof p ? p(r, a) : p,
                                                R = h.length,
                                                j = (0, f.W)(T) ? T : s ? .[T];
                                            if (R <= 2 && j) {
                                                let t = 100;
                                                2 === R && A(h) && (t = Math.abs(h[1] - h[0]));
                                                let e = { ...E
                                                };
                                                void 0 !== C && (e.duration = (0, w.f)(C));
                                                let i = (0, g.X)(e, t, j);
                                                M = i.ease, C = i.duration
                                            }
                                            C ? ? (C = u);
                                            let B = V + D;
                                            1 === x.length && 0 === x[0] && (x[1] = 1);
                                            let F = x.length - h.length;
                                            if (F > 0 && (0, v.f)(x, F), 1 === h.length && h.unshift(null), b) {
                                                (0, y.V)(b < 20, "Repeat count too high, must be less than 20");
                                                C *= b + 1;
                                                let t = [...h],
                                                    e = [...x],
                                                    i = [...M = Array.isArray(M) ? [...M] : [M]];
                                                for (let n = 0; n < b; n++) {
                                                    h.push(...t);
                                                    for (let r = 0; r < t.length; r++) x.push(e[r] + (n + 1)), M.push(0 === r ? "linear" : d(i, r - 1))
                                                }
                                                for (let t = 0; t < x.length; t++) x[t] = x[t] / (b + 1)
                                            }
                                            let O = B + C;
                                            ! function(t, e, i, n, r, s) {
                                                for (let e = 0; e < t.length; e++) {
                                                    let i = t[e];
                                                    i.at > r && i.at < s && ((0, c.Ai)(t, i), e--)
                                                }
                                                for (let a = 0; a < e.length; a++) t.push({
                                                    value: e[a],
                                                    at: (0, l.k)(r, s, n[a]),
                                                    easing: d(i, a)
                                                })
                                            }(n, h, M, x, B, O), L = Math.max(D + C, L), k = Math.max(O, k)
                                        };
                                    if ((0, n.S)(p)) j(x, R, b("default", T(p, S)));
                                    else {
                                        let t = a(p, x, r, P),
                                            e = t.length;
                                        for (let i = 0; i < e; i++) {
                                            let n = T(t[i], S);
                                            for (let t in x) {
                                                var C, D;
                                                j(x[t], (C = R, D = t, C && C[D] ? { ...C,
                                                    ...C[D]
                                                } : { ...C
                                                }), b(t, n), i, e)
                                            }
                                        }
                                    }
                                    M = V, V += L
                                }
                                return S.forEach((t, n) => {
                                    for (let r in t) {
                                        let s = t[r];
                                        s.sort(p);
                                        let a = [],
                                            o = [],
                                            l = [];
                                        for (let t = 0; t < s.length; t++) {
                                            let {
                                                at: e,
                                                value: i,
                                                easing: n
                                            } = s[t];
                                            a.push(i), o.push((0, x.q)(0, k, e)), l.push(n || "easeOut")
                                        }
                                        0 !== o[0] && (o.unshift(0), a.unshift(a[0]), l.unshift("easeInOut")), 1 !== o[o.length - 1] && (o.push(1), a.push(null)), h.has(n) || h.set(n, {
                                            keyframes: {},
                                            transition: {}
                                        });
                                        let u = h.get(n);
                                        u.keyframes[r] = a, u.transition[r] = { ...e,
                                            duration: k,
                                            ease: l,
                                            times: o,
                                            ...i
                                        }
                                    }
                                }), h
                            })(t, e, i, {
                                spring: O.o
                            }).forEach(({
                                keyframes: t,
                                transition: e
                            }, i) => {
                                r.push(...F(i, t, e))
                            }), r
                        }(e, i, t) : F(e, i, r, t));
                    return t && t.animations.push(u), u
                }
            }
            let N = I()
        },
        9207: (t, e, i) => {
            i.d(e, {
                U: () => n,
                f: () => r
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                r = new Set(n)
        },
        9210: (t, e, i) => {
            i.d(e, {
                T: () => a,
                n: () => o
            });
            var n = i(5590),
                r = i(315),
                s = i(4197);
            let a = [n.ai, r.px, r.KN, r.uj, r.vw, r.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                o = t => a.find((0, s.w)(t))
        },
        9366: (t, e, i) => {
            i.d(e, {
                h: () => n
            });
            let n = t => Array.isArray(t) && "number" != typeof t[0]
        },
        9371: (t, e, i) => {
            i.d(e, {
                D: () => a
            });
            var n = i(2901),
                r = i(5680);
            let s = { ...i(401).W,
                    color: n.y,
                    backgroundColor: n.y,
                    outlineColor: n.y,
                    fill: n.y,
                    stroke: n.y,
                    borderColor: n.y,
                    borderTopColor: n.y,
                    borderRightColor: n.y,
                    borderBottomColor: n.y,
                    borderLeftColor: n.y,
                    filter: r.p,
                    WebkitFilter: r.p
                },
                a = t => s[t]
        },
        9388: (t, e, i) => {
            i.d(e, {
                D: () => n
            });
            let n = t => Array.isArray(t) && "number" == typeof t[0]
        },
        9579: (t, e, i) => {
            i.d(e, {
                $: () => n
            });
            let n = t => /^0[^.\s]+$/u.test(t)
        },
        9792: (t, e, i) => {
            i.d(e, {
                F: () => r
            });
            let n = (t, e) => i => e(t(i)),
                r = (...t) => t.reduce(n)
        },
        9876: (t, e, i) => {
            i.d(e, {
                L: () => a,
                m: () => s
            });
            var n = i(2937),
                r = i(5960);

            function s(t, e) {
                return (0, n.FY)((0, n.bS)(t.getBoundingClientRect(), e))
            }

            function a(t, e, i) {
                let n = s(t, i),
                    {
                        scroll: a
                    } = e;
                return a && ((0, r.Ql)(n.x, a.offset.x), (0, r.Ql)(n.y, a.offset.y)), n
            }
        },
        9908: (t, e, i) => {
            i.d(e, {
                O: () => o,
                e: () => a
            });
            var n = i(1403),
                r = i(1398),
                s = i(9013);

            function a(t) {
                return (0, n.N)(t.animate) || s._.some(e => (0, r.w)(t[e]))
            }

            function o(t) {
                return !!(a(t) || t.variants)
            }
        },
        9922: (t, e, i) => {
            i.d(e, {
                r: () => n
            });

            function n(t, e) {
                return t ? .[e] ? ? t ? .default ? ? t
            }
        },
        9932: (t, e, i) => {
            i.d(e, {
                g: () => s
            });
            var n = i(5057),
                r = i(2098);

            function s(t, e) {
                let i = t.getValue("willChange");
                if ((0, n.S)(i) && i.add) return i.add(e);
                if (!i && r.W.WillChange) {
                    let i = new r.W.WillChange("auto");
                    t.addValue("willChange", i), i.add(e)
                }
            }
        },
        9942: (t, e, i) => {
            i.d(e, {
                a: () => n
            });
            let n = t => Math.round(1e5 * t) / 1e5
        },
        9946: (t, e, i) => {
            i.d(e, {
                A: () => d
            });
            var n = i(2115);
            let r = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                s = t => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, e, i) => i ? i.toUpperCase() : e.toLowerCase()),
                a = t => {
                    let e = s(t);
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                o = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return e.filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e).join(" ").trim()
                },
                l = t => {
                    for (let e in t)
                        if (e.startsWith("aria-") || "role" === e || "title" === e) return !0
                };
            var u = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let h = (0, n.forwardRef)((t, e) => {
                    let {
                        color: i = "currentColor",
                        size: r = 24,
                        strokeWidth: s = 2,
                        absoluteStrokeWidth: a,
                        className: h = "",
                        children: d,
                        iconNode: c,
                        ...p
                    } = t;
                    return (0, n.createElement)("svg", {
                        ref: e,
                        ...u,
                        width: r,
                        height: r,
                        stroke: i,
                        strokeWidth: a ? 24 * Number(s) / Number(r) : s,
                        className: o("lucide", h),
                        ...!d && !l(p) && {
                            "aria-hidden": "true"
                        },
                        ...p
                    }, [...c.map(t => {
                        let [e, i] = t;
                        return (0, n.createElement)(e, i)
                    }), ...Array.isArray(d) ? d : [d]])
                }),
                d = (t, e) => {
                    let i = (0, n.forwardRef)((i, s) => {
                        let {
                            className: l,
                            ...u
                        } = i;
                        return (0, n.createElement)(h, {
                            ref: s,
                            iconNode: e,
                            className: o("lucide-".concat(r(a(t))), "lucide-".concat(t), l),
                            ...u
                        })
                    });
                    return i.displayName = a(t), i
                }
        },
        9959: (t, e, i) => {
            i.d(e, {
                x: () => s
            });
            var n = i(2983),
                r = i(5057);

            function s(t, e, i) {
                let {
                    style: s
                } = t, a = {};
                for (let o in s)((0, r.S)(s[o]) || e.style && (0, r.S)(e.style[o]) || (0, n.z)(o, t) || i ? .getValue(o) ? .liveStyle !== void 0) && (a[o] = s[o]);
                return a
            }
        },
        9967: (t, e, i) => {
            i.d(e, {
                OQ: () => h,
                bt: () => l
            });
            var n = i(8840),
                r = i(6182),
                s = i(1309),
                a = i(4530);
            let o = t => !isNaN(parseFloat(t)),
                l = {
                    current: void 0
                };
            class u {
                constructor(t, e = {}) {
                    this.version = "__VERSION__", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = n.k.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change ? .notify(this.current), e && this.events.renderRequest ? .notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = n.k.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = o(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new s.v);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), r.Gt.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = n.k.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, a.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function h(t, e) {
                return new u(t, e)
            }
        }
    }
]);