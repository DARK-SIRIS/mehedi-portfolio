(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [831], {
        285: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => d
            });
            var a = r(5155);
            r(2115);
            var i = r(9708),
                n = r(2085),
                s = r(9434);
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
                } = e, c = d ? i.DX : "button";
                return (0, a.jsx)(c, {
                    "data-slot": "button",
                    className: (0, s.cn)(o({
                        variant: r,
                        size: n,
                        className: t
                    })),
                    ...l
                })
            }
        },
        901: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = r(8229)._(r(2115)).default.createContext(null)
        },
        1569: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useRouter", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let a = r(2115),
                i = r(901);

            function n() {
                return (0, a.useContext)(i.RouterContext)
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1893: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => g
            });
            var a = r(5155),
                i = r(2115),
                n = r(285),
                s = r(2523),
                o = r(6874),
                d = r.n(o),
                l = r(6695);

            function c(e) {
                let {
                    post: t
                } = e;
                return (0, a.jsxs)(l.Zp, {
                    className: "overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col",
                    children: [(0, a.jsxs)(l.aR, {
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground mb-1",
                            children: [(0, a.jsx)("span", {
                                children: t.date
                            }), (0, a.jsx)("span", {
                                children: "•"
                            }), (0, a.jsx)("span", {
                                children: t.readTime
                            })]
                        }), (0, a.jsx)(l.ZB, {
                            className: "line-clamp-2",
                            children: (0, a.jsx)(d(), {
                                href: "/blog/".concat(t.slug),
                                className: "hover:text-brand",
                                children: t.title
                            })
                        }), (0, a.jsx)(l.BT, {
                            className: "flex flex-wrap gap-2 mt-2",
                            children: t.tags.map(e => (0, a.jsx)("span", {
                                className: "text-xs px-2 py-1 bg-muted rounded-md",
                                children: e
                            }, e))
                        })]
                    }), (0, a.jsx)(l.Wu, {
                        className: "flex-grow",
                        children: (0, a.jsx)("p", {
                            className: "text-muted-foreground line-clamp-3",
                            children: t.excerpt
                        })
                    }), (0, a.jsx)(l.wL, {
                        children: (0, a.jsx)(n.$, {
                            variant: "outline",
                            asChild: !0,
                            className: "w-full",
                            children: (0, a.jsx)(d(), {
                                href: "/blog/".concat(t.slug),
                                children: "Read More"
                            })
                        })
                    })]
                })
            }
            var u = r(8932);
            let m = [{
                    id: "1",
                    title: "Getting Started with Next.js",
                    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
                    date: "May 2, 2025",
                    readTime: "5 min read",
                    slug: "getting-started-with-nextjs",
                    tags: ["Next.js", "React", "Tutorial"]
                }, {
                    id: "2",
                    title: "Why I Switched to Tailwind CSS",
                    excerpt: "After years of using traditional CSS and various preprocessors, I made the switch to Tailwind CSS. Here's why.",
                    date: "April 28, 2025",
                    readTime: "7 min read",
                    slug: "why-i-switched-to-tailwind-css",
                    tags: ["CSS", "Tailwind", "Web Development"]
                }, {
                    id: "3",
                    title: "Creating Smooth Animations with Framer Motion",
                    excerpt: "Learn how to add beautiful animations to your React applications using Framer Motion.",
                    date: "April 21, 2025",
                    readTime: "6 min read",
                    slug: "creating-smooth-animations-with-framer-motion",
                    tags: ["React", "Animation", "Framer Motion"]
                }, {
                    id: "4",
                    title: "Building a Custom React Hook",
                    excerpt: "A step-by-step guide to creating your own custom React hooks for reusable logic.",
                    date: "April 15, 2025",
                    readTime: "8 min read",
                    slug: "building-a-custom-react-hook",
                    tags: ["React", "Hooks", "JavaScript"]
                }, {
                    id: "5",
                    title: "Understanding TypeScript Generics",
                    excerpt: "A deep dive into TypeScript generics and how they can make your code more flexible and reusable.",
                    date: "April 7, 2025",
                    readTime: "10 min read",
                    slug: "understanding-typescript-generics",
                    tags: ["TypeScript", "JavaScript", "Programming"]
                }, {
                    id: "6",
                    title: "The Future of Web Development",
                    excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
                    date: "March 29, 2025",
                    readTime: "9 min read",
                    slug: "the-future-of-web-development",
                    tags: ["Web Development", "Trends", "Technology"]
                }],
                p = Array.from(new Set(m.flatMap(e => e.tags)));

            function g() {
                let [e, t] = (0, i.useState)(""), [r, o] = (0, i.useState)([]), d = m.filter(t => {
                    let a = t.title.toLowerCase().includes(e.toLowerCase()) || t.excerpt.toLowerCase().includes(e.toLowerCase()),
                        i = 0 === r.length || r.some(e => t.tags.includes(e));
                    return a && i
                }), l = e => {
                    o(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                };
                return (0, a.jsx)(u.A, {
                    children: (0, a.jsxs)("div", {
                        className: "max-w-7xl mx-auto py-12",
                        children: [(0, a.jsx)("h1", {
                            className: "text-4xl font-bold mb-8",
                            children: "Blog"
                        }), (0, a.jsxs)("div", {
                            className: "mb-8",
                            children: [(0, a.jsx)(s.p, {
                                type: "text",
                                placeholder: "Search articles...",
                                value: e,
                                onChange: e => t(e.target.value),
                                className: "mb-4"
                            }), (0, a.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: p.map(e => (0, a.jsx)(n.$, {
                                    variant: r.includes(e) ? "default" : "outline",
                                    size: "sm",
                                    onClick: () => l(e),
                                    children: e
                                }, e))
                            })]
                        }), 0 === d.length ? (0, a.jsx)("div", {
                            className: "text-center py-12",
                            children: (0, a.jsx)("p", {
                                className: "text-xl text-muted-foreground",
                                children: "No articles found matching your criteria."
                            })
                        }) : (0, a.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: d.map(e => (0, a.jsx)(c, {
                                post: e
                            }, e.id))
                        })]
                    })
                })
            }
        },
        2523: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => n
            });
            var a = r(5155);
            r(2115);
            var i = r(9434);

            function n(e) {
                let {
                    className: t,
                    type: r,
                    ...n
                } = e;
                return (0, a.jsx)("input", {
                    type: r,
                    "data-slot": "input",
                    className: (0, i.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t),
                    ...n
                })
            }
        },
        5583: (e, t, r) => {
            e.exports = r(1569)
        },
        5817: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 1893))
        },
        6695: (e, t, r) => {
            "use strict";
            r.d(t, {
                BT: () => d,
                Wu: () => l,
                ZB: () => o,
                Zp: () => n,
                aR: () => s,
                wL: () => c
            });
            var a = r(5155);
            r(2115);
            var i = r(9434);

            function n(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "card",
                    className: (0, i.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t),
                    ...r
                })
            }

            function s(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "card-header",
                    className: (0, i.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t),
                    ...r
                })
            }

            function o(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "card-title",
                    className: (0, i.cn)("leading-none font-semibold", t),
                    ...r
                })
            }

            function d(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "card-description",
                    className: (0, i.cn)("text-muted-foreground text-sm", t),
                    ...r
                })
            }

            function l(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "card-content",
                    className: (0, i.cn)("px-6", t),
                    ...r
                })
            }

            function c(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    "data-slot": "card-footer",
                    className: (0, i.cn)("flex items-center px-6 [.border-t]:pt-6", t),
                    ...r
                })
            }
        },
        8932: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var a = r(5155),
                i = r(2115),
                n = r(5583);

            function s(e) {
                let {
                    children: t
                } = e, r = (0, n.useRouter)();
                return (0, i.useEffect)(() => {
                    let e = () => {
                        if (r && r.asPath.includes("#")) {
                            let e = r.asPath.split("#")[1],
                                t = document.getElementById(e);
                            t && setTimeout(() => {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 100)
                        } else r && "/" === r.pathname && window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    };
                    return e(), null == r || r.events.on("routeChangeComplete", e), () => {
                        null == r || r.events.off("routeChangeComplete", e)
                    }
                }, [r]), (0, a.jsx)("div", {
                    className: "animate-fade-in mt-20",
                    children: t
                })
            }
        },
        9434: (e, t, r) => {
            "use strict";
            r.d(t, {
                cn: () => n
            });
            var a = r(2596),
                i = r(9688);

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, i.QP)((0, a.$)(t))
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [503, 441, 684, 358], () => t(5817)), _N_E = e.O()
    }
]);