(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        285: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => d
            });
            var a = r(5155);
            r(2115);
            var s = r(9708),
                n = r(2085),
                i = r(9434);
            let o = (0, n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function d(e) {
                let {
                    className: t,
                    variant: r,
                    size: n,
                    asChild: d = !1,
                    ...l
                } = e, c = d ? s.DX : "button";
                return (0, a.jsx)(c, {
                    "data-slot": "button",
                    className: (0, i.cn)(o({
                        variant: r,
                        size: n,
                        className: t
                    })),
                    ...l
                })
            }
        },
        347: () => {},
        1483: (e, t, r) => {
            "use strict";
            r.d(t, {
                ThemeProvider: () => n
            });
            var a = r(5155);
            r(2115);
            var s = r(1362);

            function n(e) {
                let {
                    children: t,
                    ...r
                } = e;
                return (0, a.jsx)(s.N, { ...r,
                    children: t
                })
            }
        },
        3166: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => y
            });
            var a = r(5155),
                s = r(285),
                n = r(9434),
                i = r(1788),
                o = r(4416),
                d = r(4783),
                l = r(6874),
                c = r.n(l),
                u = r(5695),
                f = r(2115),
                h = r(9717),
                m = r(3509),
                v = r(1362),
                x = r(2049);

            function g(e) {
                let { ...t
                } = e;
                return (0, a.jsx)(x.bL, {
                    "data-slot": "dropdown-menu",
                    ...t
                })
            }

            function b(e) {
                let { ...t
                } = e;
                return (0, a.jsx)(x.l9, {
                    "data-slot": "dropdown-menu-trigger",
                    ...t
                })
            }

            function p(e) {
                let {
                    className: t,
                    sideOffset: r = 4,
                    ...s
                } = e;
                return (0, a.jsx)(x.ZL, {
                    children: (0, a.jsx)(x.UC, {
                        "data-slot": "dropdown-menu-content",
                        sideOffset: r,
                        className: (0, n.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", t),
                        ...s
                    })
                })
            }

            function k(e) {
                let {
                    className: t,
                    inset: r,
                    variant: s = "default",
                    ...i
                } = e;
                return (0, a.jsx)(x.q7, {
                    "data-slot": "dropdown-menu-item",
                    "data-inset": r,
                    "data-variant": s,
                    className: (0, n.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
                    ...i
                })
            }

            function j() {
                let {
                    setTheme: e
                } = (0, v.D)();
                return (0, a.jsxs)(g, {
                    children: [(0, a.jsx)(b, {
                        asChild: !0,
                        children: (0, a.jsxs)(s.$, {
                            variant: "outline",
                            size: "icon",
                            children: [(0, a.jsx)(h.A, {
                                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            }), (0, a.jsx)(m.A, {
                                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Toggle theme"
                            })]
                        })
                    }), (0, a.jsxs)(p, {
                        align: "end",
                        children: [(0, a.jsx)(k, {
                            onClick: () => e("light"),
                            children: "Light"
                        }), (0, a.jsx)(k, {
                            onClick: () => e("dark"),
                            children: "Dark"
                        }), (0, a.jsx)(k, {
                            onClick: () => e("system"),
                            children: "System"
                        })]
                    })]
                })
            }
            let w = [{
                name: "Home",
                href: "/",
                isSection: !1
            }, {
                name: "Projects",
                href: "/#projects",
                isSection: !0
            }, {
                name: "Experience",
                href: "/#experience",
                isSection: !0
            }, {
                name: "Tools",
                href: "/#tools",
                isSection: !0
            }, {
                name: "Contact",
                href: "/#contact",
                isSection: !0
            }, {
                name: "Blog",
                href: "/blog",
                isSection: !1
            }];

            function y() {
                let [e, t] = (0, f.useState)(!1), r = (0, u.usePathname)(), l = window.location.hash, h = (e, r, a) => {
                    if (a && r.startsWith("/#")) {
                        let a = r.split("#")[1],
                            s = document.getElementById(a);
                        s && (e.preventDefault(), s.scrollIntoView({
                            behavior: "smooth"
                        }), t(!1))
                    } else t(!1)
                }, m = e => "/" === e ? "/" === r : e.startsWith("/#") ? l === e.slice(1) : r === e;
                return (0, a.jsxs)("header", {
                    className: " fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-md",
                    children: [(0, a.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 lg:px-0  py-3 flex items-center justify-between",
                        children: [(0, a.jsx)(c(), {
                            href: "/",
                            className: "text-2xl font-bold bg-gradient-to-r from-[#ff914d] to-orange-400 bg-clip-text text-transparent",
                            children: "Portfolio"
                        }), (0, a.jsxs)("nav", {
                            className: "hidden md:flex items-center gap-6",
                            children: [w.map(e => (0, a.jsx)(c(), {
                                href: e.href,
                                onClick: t => h(t, e.href, e.isSection),
                                className: (0, n.cn)("text-sm font-medium transition hover:text-[#ff914d] relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-[#ff914d] after:transition-all hover:after:w-full", m(e.href) ? "text-[#ff914d] after:w-full" : "text-black/80 dark:text-white/80"),
                                "aria-current": m(e.href) ? "page" : void 0,
                                children: e.name
                            }, e.name)), (0, a.jsxs)(s.$, {
                                variant: "outline",
                                children: ["Resume ", (0, a.jsx)(i.A, {})]
                            }), (0, a.jsx)(j, {})]
                        }), (0, a.jsxs)("div", {
                            className: "md:hidden flex items-center",
                            children: [(0, a.jsx)(j, {}), (0, a.jsx)(s.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => t(!e),
                                className: "ml-2",
                                children: e ? (0, a.jsx)(o.A, {}) : (0, a.jsx)(d.A, {})
                            })]
                        })]
                    }), e && (0, a.jsx)("div", {
                        className: "md:hidden px-4 py-4 bg-white/70 dark:bg-black/50 backdrop-blur-lg",
                        children: (0, a.jsx)("nav", {
                            className: "space-y-4",
                            children: w.map(e => (0, a.jsx)(c(), {
                                href: e.href,
                                onClick: t => h(t, e.href, e.isSection),
                                className: (0, n.cn)("block text-base font-medium transition hover:text-[#ff914d]", m(e.href) ? "text-[#ff914d]" : "text-black/80 dark:text-white/80"),
                                "aria-current": m(e.href) ? "page" : void 0,
                                children: e.name
                            }, e.name))
                        })
                    })]
                })
            }
        },
        4856: (e, t, r) => {
            Promise.resolve().then(r.t.bind(r, 4147, 23)), Promise.resolve().then(r.t.bind(r, 8489, 23)), Promise.resolve().then(r.t.bind(r, 347, 23)), Promise.resolve().then(r.bind(r, 3166)), Promise.resolve().then(r.bind(r, 1483))
        },
        9434: (e, t, r) => {
            "use strict";
            r.d(t, {
                cn: () => n
            });
            var a = r(2596),
                s = r(9688);

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, s.QP)((0, a.$)(t))
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [896, 503, 381, 441, 684, 358], () => t(4856)), _N_E = e.O()
    }
]);