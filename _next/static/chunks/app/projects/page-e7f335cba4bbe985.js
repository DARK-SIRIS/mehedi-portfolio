(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [893], {
        285: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => l
            });
            var r = a(5155);
            a(2115);
            var s = a(9708),
                i = a(2085),
                o = a(9434);
            let n = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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

            function l(e) {
                let {
                    className: t,
                    variant: a,
                    size: i,
                    asChild: l = !1,
                    ...d
                } = e, c = l ? s.DX : "button";
                return (0, r.jsx)(c, {
                    "data-slot": "button",
                    className: (0, o.cn)(n({
                        variant: a,
                        size: i,
                        className: t
                    })),
                    ...d
                })
            }
        },
        1569: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useRouter", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = a(2115),
                s = a(901);

            function i() {
                return (0, r.useContext)(s.RouterContext)
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2243: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => h
            });
            var r = a(5155),
                s = a(2115),
                i = a(285),
                o = a(6695),
                n = a(6766),
                l = a(6874),
                d = a.n(l),
                c = a(8932);
            let u = [{
                    id: 1,
                    title: "E-Commerce Platform",
                    description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
                    tags: ["Next.js", "TypeScript", "Tailwind"],
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                    link: "/projects/e-commerce",
                    category: "Web App"
                }, {
                    id: 2,
                    title: "Portfolio Website",
                    description: "A responsive portfolio website with dark/light theme toggle.",
                    tags: ["React", "Framer Motion", "Tailwind"],
                    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
                    link: "/projects/portfolio",
                    category: "Website"
                }, {
                    id: 3,
                    title: "Blog Platform",
                    description: "A minimal blog platform with markdown support.",
                    tags: ["Next.js", "MDX", "Tailwind"],
                    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                    link: "/projects/blog-platform",
                    category: "Web App"
                }, {
                    id: 4,
                    title: "Weather App",
                    description: "A beautiful weather application with interactive maps.",
                    tags: ["React", "API", "Tailwind"],
                    image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368",
                    link: "/projects/weather-app",
                    category: "Web App"
                }, {
                    id: 5,
                    title: "Task Manager",
                    description: "A productivity app for managing daily tasks and projects.",
                    tags: ["Next.js", "TypeScript", "Firebase"],
                    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
                    link: "/projects/task-manager",
                    category: "Web App"
                }, {
                    id: 6,
                    title: "Restaurant Website",
                    description: "A responsive website for a local restaurant with online ordering.",
                    tags: ["React", "Styled Components", "Node.js"],
                    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    link: "/projects/restaurant-website",
                    category: "Website"
                }],
                p = ["All", "Web App", "Website", "Mobile"],
                h = () => {
                    let [e, t] = (0, s.useState)("All"), a = "All" === e ? u : u.filter(t => t.category === e);
                    return (0, r.jsx)(c.A, {
                        children: (0, r.jsxs)("div", {
                            className: "max-w-7xl mx-auto  py-12",
                            children: [(0, r.jsx)("h1", {
                                className: "text-4xl font-bold mb-8",
                                children: "Projects"
                            }), (0, r.jsx)("div", {
                                className: "flex flex-wrap gap-2 mb-8",
                                children: p.map(a => (0, r.jsx)(i.$, {
                                    variant: e === a ? "default" : "outline",
                                    onClick: () => t(a),
                                    children: a
                                }, a))
                            }), (0, r.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: a.map(e => (0, r.jsxs)(o.Zp, {
                                    className: "overflow-hidden hover:shadow-md transition-shadow",
                                    children: [(0, r.jsx)("div", {
                                        className: "aspect-video relative overflow-hidden",
                                        children: (0, r.jsx)(n.default, {
                                            src: e.image,
                                            alt: e.title,
                                            className: "object-cover w-full h-full transition-transform duration-500 hover:scale-105",
                                            width: 500,
                                            height: 300
                                        })
                                    }), (0, r.jsxs)(o.aR, {
                                        children: [(0, r.jsx)(o.ZB, {
                                            children: e.title
                                        }), (0, r.jsx)(o.BT, {
                                            children: e.description
                                        })]
                                    }), (0, r.jsx)(o.Wu, {
                                        children: (0, r.jsx)("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: e.tags.map(e => (0, r.jsx)("span", {
                                                className: "text-xs px-2 py-1 bg-muted rounded-md",
                                                children: e
                                            }, e))
                                        })
                                    }), (0, r.jsx)(o.wL, {
                                        children: (0, r.jsx)(i.$, {
                                            variant: "outline",
                                            asChild: !0,
                                            className: "w-full",
                                            children: (0, r.jsx)(d(), {
                                                href: e.link,
                                                children: "View Project"
                                            })
                                        })
                                    })]
                                }, e.id))
                            })]
                        })
                    })
                }
        },
        2411: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 2243))
        },
        5583: (e, t, a) => {
            e.exports = a(1569)
        },
        6695: (e, t, a) => {
            "use strict";
            a.d(t, {
                BT: () => l,
                Wu: () => d,
                ZB: () => n,
                Zp: () => i,
                aR: () => o,
                wL: () => c
            });
            var r = a(5155);
            a(2115);
            var s = a(9434);

            function i(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card",
                    className: (0, s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t),
                    ...a
                })
            }

            function o(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-header",
                    className: (0, s.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t),
                    ...a
                })
            }

            function n(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-title",
                    className: (0, s.cn)("leading-none font-semibold", t),
                    ...a
                })
            }

            function l(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-description",
                    className: (0, s.cn)("text-muted-foreground text-sm", t),
                    ...a
                })
            }

            function d(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-content",
                    className: (0, s.cn)("px-6", t),
                    ...a
                })
            }

            function c(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    "data-slot": "card-footer",
                    className: (0, s.cn)("flex items-center px-6 [.border-t]:pt-6", t),
                    ...a
                })
            }
        },
        8932: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var r = a(5155),
                s = a(2115),
                i = a(5583);

            function o(e) {
                let {
                    children: t
                } = e, a = (0, i.useRouter)();
                return (0, s.useEffect)(() => {
                    let e = () => {
                        if (a && a.asPath.includes("#")) {
                            let e = a.asPath.split("#")[1],
                                t = document.getElementById(e);
                            t && setTimeout(() => {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 100)
                        } else a && "/" === a.pathname && window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    };
                    return e(), null == a || a.events.on("routeChangeComplete", e), () => {
                        null == a || a.events.off("routeChangeComplete", e)
                    }
                }, [a]), (0, r.jsx)("div", {
                    className: "animate-fade-in mt-20",
                    children: t
                })
            }
        },
        9434: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => i
            });
            var r = a(2596),
                s = a(9688);

            function i() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, s.QP)((0, r.$)(t))
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [503, 766, 441, 684, 358], () => t(2411)), _N_E = e.O()
    }
]);