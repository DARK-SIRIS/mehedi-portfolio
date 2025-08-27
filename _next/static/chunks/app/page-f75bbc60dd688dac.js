(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        285: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => d
            });
            var r = a(5155);
            a(2115);
            var s = a(9708),
                i = a(2085),
                n = a(9434);
            let l = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
                    variant: a,
                    size: i,
                    asChild: d = !1,
                    ...o
                } = e, c = d ? s.DX : "button";
                return (0, r.jsx)(c, {
                    "data-slot": "button",
                    className: (0, n.cn)(l({
                        variant: a,
                        size: i,
                        className: t
                    })),
                    ...o
                })
            }
        },
        2053: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => h
            });
            var r = a(5155),
                s = a(285),
                i = a(6695),
                n = a(2523),
                l = a(2115),
                d = a(9434);

            function o(e) {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("textarea", {
                    "data-slot": "textarea",
                    className: (0, d.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
                    ...a
                })
            }
            var c = a(488),
                m = a(4416),
                x = a(9099),
                u = a(2894);

            function h() {
                let [e, t] = (0, l.useState)({
                    name: "",
                    email: "",
                    message: ""
                }), a = e => {
                    let {
                        name: a,
                        value: r
                    } = e.target;
                    t(e => ({ ...e,
                        [a]: r
                    }))
                };
                return (0, r.jsx)("section", {
                    className: "py-20  mx-auto  bg-muted/30",
                    id: "contact",
                    children: (0, r.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 lg:px-0",
                        children: [(0, r.jsx)("h2", {
                            className: "text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl",
                            children: "Get In Touch"
                        }), (0, r.jsx)("p", {
                            className: "text-muted-foreground max-w-2xl mb-8",
                            children: "Have a question or want to work together? Feel free to reach out!"
                        }), (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: [(0, r.jsxs)(i.Zp, {
                                children: [(0, r.jsxs)(i.aR, {
                                    children: [(0, r.jsx)(i.ZB, {
                                        children: "Send a Message"
                                    }), (0, r.jsx)(i.BT, {
                                        children: "Fill out the form below and I‘ll get back to you as soon as possible."
                                    })]
                                }), (0, r.jsx)(i.Wu, {
                                    children: (0, r.jsxs)("form", {
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        className: "space-y-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [(0, r.jsx)("label", {
                                                htmlFor: "name",
                                                className: "text-sm font-medium",
                                                children: "Name"
                                            }), (0, r.jsx)(n.p, {
                                                id: "name",
                                                name: "name",
                                                placeholder: "Your name",
                                                value: e.name,
                                                onChange: a,
                                                required: !0
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [(0, r.jsx)("label", {
                                                htmlFor: "email",
                                                className: "text-sm font-medium",
                                                children: "Email"
                                            }), (0, r.jsx)(n.p, {
                                                id: "email",
                                                name: "email",
                                                type: "email",
                                                placeholder: "your.email@example.com",
                                                value: e.email,
                                                onChange: a,
                                                required: !0
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [(0, r.jsx)("label", {
                                                htmlFor: "message",
                                                className: "text-sm font-medium",
                                                children: "Message"
                                            }), (0, r.jsx)(o, {
                                                id: "message",
                                                name: "message",
                                                placeholder: "Your message",
                                                value: e.message,
                                                onChange: a,
                                                required: !0,
                                                className: "min-h-32"
                                            })]
                                        }), (0, r.jsx)(s.$, {
                                            type: "submit",
                                            className: "w-full",
                                            children: "Send Message"
                                        })]
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "space-y-6",
                                children: (0, r.jsxs)(i.Zp, {
                                    children: [(0, r.jsx)(i.aR, {
                                        children: (0, r.jsx)(i.ZB, {
                                            children: "Contact Information"
                                        })
                                    }), (0, r.jsx)(i.Wu, {
                                        children: (0, r.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [(0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-medium",
                                                    children: "Email"
                                                }), (0, r.jsx)("a", {
                                                    href: "mailto:hello@example.com",
                                                    className: "text-muted-foreground hover:text-brand",
                                                    children: "mehediimun@gmail.com"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-medium",
                                                    children: "Location"
                                                }), (0, r.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Dhaka,Bangladesh"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-medium",
                                                    children: "Social"
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex space-x-4 mt-2",
                                                    children: [(0, r.jsx)("a", {
                                                        href: "https://www.facebook.com/mehediimun",
                                                        target: "_blank",
                                                        className: "text-muted-foreground hover:text-brand",
                                                        children: (0, r.jsx)(c.A, {})
                                                    }), (0, r.jsx)("a", {
                                                        href: "https://x.com/mehediimun",
                                                        target: "_blank",
                                                        className: "text-muted-foreground hover:text-brand",
                                                        children: (0, r.jsx)(m.A, {})
                                                    }), (0, r.jsx)("a", {
                                                        href: "https://github.com/mehedi-imun",
                                                        target: "_blank",
                                                        className: "text-muted-foreground hover:text-brand",
                                                        children: (0, r.jsx)(x.A, {})
                                                    }), (0, r.jsx)("a", {
                                                        href: "https://www.linkedin.com/in/mehedi-imun/",
                                                        target: "_blank",
                                                        className: "text-muted-foreground hover:text-brand",
                                                        children: (0, r.jsx)(u.A, {})
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        2523: (e, t, a) => {
            "use strict";
            a.d(t, {
                p: () => i
            });
            var r = a(5155);
            a(2115);
            var s = a(9434);

            function i(e) {
                let {
                    className: t,
                    type: a,
                    ...i
                } = e;
                return (0, r.jsx)("input", {
                    type: a,
                    "data-slot": "input",
                    className: (0, s.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t),
                    ...i
                })
            }
        },
        2693: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => u
            });
            var r = a(5155),
                s = a(285),
                i = a(6695),
                n = a(2115),
                l = a(9434),
                d = a(9165);
            let o = (0, n.memo)(e => {
                let {
                    blur: t = 0,
                    inactiveZone: a = .7,
                    proximity: s = 0,
                    spread: i = 20,
                    variant: o = "default",
                    glow: c = !1,
                    className: m,
                    movementDuration: x = 2,
                    borderWidth: u = 1,
                    disabled: h = !0
                } = e, p = (0, n.useRef)(null), g = (0, n.useRef)({
                    x: 0,
                    y: 0
                }), f = (0, n.useRef)(0), b = (0, n.useCallback)(e => {
                    p.current && (f.current && cancelAnimationFrame(f.current), f.current = requestAnimationFrame(() => {
                        var t, r;
                        let i = p.current;
                        if (!i) return;
                        let {
                            left: n,
                            top: l,
                            width: o,
                            height: c
                        } = i.getBoundingClientRect(), m = null != (t = null == e ? void 0 : e.x) ? t : g.current.x, u = null != (r = null == e ? void 0 : e.y) ? r : g.current.y;
                        e && (g.current = {
                            x: m,
                            y: u
                        });
                        let h = [n + .5 * o, l + .5 * c];
                        if (Math.hypot(m - h[0], u - h[1]) < .5 * Math.min(o, c) * a) return void i.style.setProperty("--active", "0");
                        let f = m > n - s && m < n + o + s && u > l - s && u < l + c + s;
                        if (i.style.setProperty("--active", f ? "1" : "0"), !f) return;
                        let b = parseFloat(i.style.getPropertyValue("--start")) || 0,
                            v = (180 * Math.atan2(u - h[1], m - h[0]) / Math.PI + 90 - b + 180) % 360 - 180;
                        (0, d.i)(b, b + v, {
                            duration: x,
                            ease: [.16, 1, .3, 1],
                            onUpdate: e => {
                                i.style.setProperty("--start", String(e))
                            }
                        })
                    }))
                }, [a, s, x]);
                return (0, n.useEffect)(() => {
                    if (h) return;
                    let e = () => b(),
                        t = e => b(e);
                    return window.addEventListener("scroll", e, {
                        passive: !0
                    }), document.body.addEventListener("pointermove", t, {
                        passive: !0
                    }), () => {
                        f.current && cancelAnimationFrame(f.current), window.removeEventListener("scroll", e), document.body.removeEventListener("pointermove", t)
                    }
                }, [b, h]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: (0, l.cn)("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", c && "opacity-100", "white" === o && "border-white", h && "!block")
                    }), (0, r.jsx)("div", {
                        ref: p,
                        style: {
                            "--blur": "".concat(t, "px"),
                            "--spread": i,
                            "--start": "0",
                            "--active": "0",
                            "--glowingeffect-border-width": "".concat(u, "px"),
                            "--repeating-conic-gradient-times": "5",
                            "--gradient": "white" === o ? "repeating-conic-gradient(\n                  from 236.84deg at 50% 50%,\n                  var(--black),\n                  var(--black) calc(25% / var(--repeating-conic-gradient-times))\n                )" : "radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),\n                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),\n                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), \n                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),\n                repeating-conic-gradient(\n                  from 236.84deg at 50% 50%,\n                  #dd7bbb 0%,\n                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),\n                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), \n                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),\n                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))\n                )"
                        },
                        className: (0, l.cn)("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity", c && "opacity-100", t > 0 && "blur-[var(--blur)] ", m, h && "!hidden"),
                        children: (0, r.jsx)("div", {
                            className: (0, l.cn)("glow", "rounded-[inherit]", 'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]', "after:[border:var(--glowingeffect-border-width)_solid_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-300", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]")
                        })
                    })]
                })
            });
            o.displayName = "GlowingEffect";
            var c = a(6874),
                m = a.n(c);
            let x = [{
                id: 1,
                title: "getting-started-with-nextjs",
                description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
                tags: ["Next.js", "TypeScript", "Tailwind"],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                link: "/projects/1"
            }, {
                id: 2,
                title: "Portfolio Website",
                description: "A responsive portfolio website with dark/light theme toggle.",
                tags: ["React", "Framer Motion", "Tailwind"],
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
                link: "/projects/portfolio"
            }, {
                id: 3,
                title: "Blog Platform",
                description: "A minimal blog platform with markdown support.",
                tags: ["Next.js", "MDX", "Tailwind"],
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
                link: "/projects/blog-platform"
            }];

            function u() {
                return (0, r.jsx)("section", {
                    className: "py-20 max-w-7xl mx-auto px-4 lg:px-0 ",
                    id: "projects",
                    children: (0, r.jsxs)("div", {
                        className: "page-container",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-col md:flex-row items-start md:items-center justify-between mb-12",
                            children: [(0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h2", {
                                    className: "text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl",
                                    children: "Featured Projects"
                                }), (0, r.jsx)("p", {
                                    className: "text-muted-foreground max-w-2xl",
                                    children: "Check out some of my recent work."
                                })]
                            }), (0, r.jsx)(s.$, {
                                variant: "outline",
                                asChild: !0,
                                className: "mt-4 md:mt-0",
                                children: (0, r.jsx)(m(), {
                                    href: "/projects",
                                    children: "View All Projects"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: x.map(e => (0, r.jsxs)(i.Zp, {
                                className: " hover:shadow-md transition-shadow relative",
                                children: [(0, r.jsx)(o, {
                                    spread: 40,
                                    glow: !0,
                                    disabled: !1,
                                    proximity: 64,
                                    inactiveZone: .01
                                }), (0, r.jsx)("div", {
                                    className: "aspect-video relative overflow-hidden",
                                    children: (0, r.jsx)("img", {
                                        src: e.image,
                                        alt: e.title,
                                        className: "object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                    })
                                }), (0, r.jsxs)(i.aR, {
                                    children: [(0, r.jsx)(i.ZB, {
                                        children: e.title
                                    }), (0, r.jsx)(i.BT, {
                                        children: e.description
                                    })]
                                }), (0, r.jsx)(i.Wu, {
                                    children: (0, r.jsx)("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: e.tags.map(e => (0, r.jsx)("span", {
                                            className: "text-xs px-2 py-1 bg-muted rounded-md",
                                            children: e
                                        }, e))
                                    })
                                }), (0, r.jsx)(i.wL, {
                                    children: (0, r.jsx)(s.$, {
                                        variant: "outline",
                                        asChild: !0,
                                        className: "w-full",
                                        children: (0, r.jsx)(m(), {
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
        3359: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => d
            });
            var r = a(5155),
                s = a(9434),
                i = a(9165),
                n = a(1216),
                l = a(2115);

            function d(e) {
                let {
                    tools: t
                } = e;
                return t.map((e, t) => (0, r.jsxs)(m, {
                    className: "relative",
                    children: [(0, r.jsx)(x, {
                        children: e.category
                    }), (0, r.jsx)(u, {
                        showGradient: !0,
                        children: (0, r.jsx)(o, {
                            children: e.items.map((e, t) => (0, r.jsx)("div", {
                                children: (0, r.jsx)(h, {
                                    className: "h-20 w-20 circle-1",
                                    children: e.icon
                                })
                            }, t))
                        })
                    })]
                }, t))
            }
            let o = e => {
                    let {
                        children: t
                    } = e, a = [1, 1.1, 1], s = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"], n = [
                        [".circle-1", {
                            scale: a,
                            transform: s
                        }, {
                            duration: .8
                        }],
                        [".circle-2", {
                            scale: a,
                            transform: s
                        }, {
                            duration: .8
                        }],
                        [".circle-3", {
                            scale: a,
                            transform: s
                        }, {
                            duration: .8
                        }],
                        [".circle-4", {
                            scale: a,
                            transform: s
                        }, {
                            duration: .8
                        }],
                        [".circle-5", {
                            scale: a,
                            transform: s
                        }, {
                            duration: .8
                        }]
                    ];
                    return (0, l.useEffect)(() => {
                        (0, i.i)(n, {
                            repeat: 1 / 0,
                            repeatDelay: 1
                        })
                    }, []), (0, r.jsxs)("div", {
                        className: " overflow-hidden h-full relative flex items-center justify-center",
                        children: [(0, r.jsx)(c, {}), (0, r.jsx)("div", {
                            className: " flex flex-wrap gap-4 justify-center items-center",
                            children: t
                        }), (0, r.jsx)("div", {
                            className: "h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move",
                            children: (0, r.jsx)("div", {
                                className: "w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10",
                                children: (0, r.jsx)(c, {})
                            })
                        })]
                    })
                },
                c = () => {
                    let e = () => 2 * Math.random() - 1,
                        t = () => Math.random(),
                        a = () => Math.random();
                    return (0, r.jsx)("div", {
                        className: "absolute inset-0",
                        children: [...Array(12)].map((s, i) => (0, r.jsx)(n.P.span, {
                            animate: {
                                top: "calc(".concat(100 * a(), "% + ").concat(e(), "px)"),
                                left: "calc(".concat(100 * a(), "% + ").concat(e(), "px)"),
                                opacity: t(),
                                scale: [1, 1.2, 0]
                            },
                            transition: {
                                duration: 2 * a() + 4,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            style: {
                                position: "absolute",
                                top: "".concat(100 * a(), "%"),
                                left: "".concat(100 * a(), "%"),
                                width: "2px",
                                height: "2px",
                                borderRadius: "50%",
                                zIndex: 1
                            },
                            className: "inline-block bg-black dark:bg-white"
                        }, "star-".concat(i)))
                    })
                },
                m = e => {
                    let {
                        className: t,
                        children: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, s.cn)("max-w-sm w-full mx-auto p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group", t),
                        children: a
                    })
                },
                x = e => {
                    let {
                        children: t,
                        className: a
                    } = e;
                    return (0, r.jsx)("h3", {
                        className: (0, s.cn)("text-lg font-semibold text-gray-800 dark:text-white py-2", a),
                        children: t
                    })
                },
                u = e => {
                    let {
                        className: t,
                        children: a,
                        showGradient: i = !0
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, s.cn)("h-[15rem] md:h-[20rem] rounded-xl z-40", t, i && "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"),
                        children: a
                    })
                },
                h = e => {
                    let {
                        className: t,
                        children: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, s.cn)("h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]\n    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]\n    ", t),
                        children: a
                    })
                }
        },
        6496: (e, t, a) => {
            Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.bind(a, 3359)), Promise.resolve().then(a.bind(a, 2053)), Promise.resolve().then(a.bind(a, 2693)), Promise.resolve().then(a.bind(a, 9979)), Promise.resolve().then(a.bind(a, 8016))
        },
        6695: (e, t, a) => {
            "use strict";
            a.d(t, {
                BT: () => d,
                Wu: () => o,
                ZB: () => l,
                Zp: () => i,
                aR: () => n,
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

            function n(e) {
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

            function l(e) {
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

            function d(e) {
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

            function o(e) {
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
        8016: (e, t, a) => {
            "use strict";
            a.d(t, {
                Timeline: () => d
            });
            var r = a(5155),
                s = a(5360),
                i = a(4297),
                n = a(1216),
                l = a(2115);
            let d = e => {
                let {
                    data: t
                } = e, a = (0, l.useRef)(null), d = (0, l.useRef)(null), [o, c] = (0, l.useState)(0);
                (0, l.useEffect)(() => {
                    a.current && c(a.current.getBoundingClientRect().height)
                }, [a]);
                let {
                    scrollYProgress: m
                } = (0, s.L)({
                    target: d,
                    offset: ["start 10%", "end 50%"]
                }), x = (0, i.G)(m, [0, 1], [0, o]), u = (0, i.G)(m, [0, .1], [0, 1]);
                return (0, r.jsxs)("div", {
                    className: "w-full bg-white dark:bg-neutral-950 font-sans ",
                    ref: d,
                    children: [(0, r.jsxs)("div", {
                        className: "max-w-7xl mx-auto py-20 ",
                        children: [(0, r.jsx)("h2", {
                            className: "text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl",
                            children: "Work Experience"
                        }), (0, r.jsx)("p", {
                            className: "text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm",
                            children: "My professional journey and career highlights."
                        })]
                    }), (0, r.jsxs)("div", {
                        ref: a,
                        className: "relative max-w-7xl mx-auto pb-20",
                        children: [t.map((e, t) => (0, r.jsxs)("div", {
                            className: "flex justify-start pt-10 md:gap-10",
                            children: [(0, r.jsxs)("div", {
                                className: "sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full",
                                children: [(0, r.jsx)("div", {
                                    className: "h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center",
                                    children: (0, r.jsx)("div", {
                                        className: "h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
                                    })
                                }), (0, r.jsx)("h3", {
                                    className: "hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ",
                                    children: e.title
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative pl-20 pr-4 md:pl-4 w-full",
                                children: [(0, r.jsx)("h3", {
                                    className: "md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500",
                                    children: e.title
                                }), e.content, " "]
                            })]
                        }, t)), (0, r.jsx)("div", {
                            style: {
                                height: o + "px"
                            },
                            className: "absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ",
                            children: (0, r.jsx)(n.P.div, {
                                style: {
                                    height: x,
                                    opacity: u
                                },
                                className: "absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                            })
                        })]
                    })]
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
        },
        9979: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => y
            });
            var r = a(5155),
                s = a(285),
                i = a(2115),
                n = a(1724),
                l = a(3494),
                d = a(1216),
                o = a(9434);
            let c = e => {
                    let {
                        words: t,
                        className: a,
                        filter: s = !0,
                        duration: c = .5
                    } = e, [m, x] = (0, n.l)(), u = t.split(" ");
                    return (0, i.useEffect)(() => {
                        x("span", {
                            opacity: 1,
                            filter: s ? "blur(0px)" : "none"
                        }, {
                            duration: c || 1,
                            delay: (0, l.y)(.2)
                        })
                    }, [m.current]), (0, r.jsx)("div", {
                        className: (0, o.cn)("font-bold", a),
                        children: (0, r.jsx)("div", {
                            className: "mt-4",
                            children: (0, r.jsx)("div", {
                                className: " dark:text-white text-black text-2xl leading-snug tracking-wide",
                                children: (0, r.jsx)(d.P.div, {
                                    ref: m,
                                    children: u.map((e, t) => (0, r.jsxs)(d.P.span, {
                                        className: "dark:text-white text-black opacity-0",
                                        style: {
                                            filter: s ? "blur(10px)" : "none"
                                        },
                                        children: [e, " "]
                                    }, e + t))
                                })
                            })
                        })
                    })
                },
                m = e => {
                    let {
                        words: t,
                        className: a,
                        cursorClassName: s
                    } = e, i = t.map(e => ({ ...e,
                        text: e.text.split("")
                    }));
                    return (0, r.jsxs)("div", {
                        className: (0, o.cn)("flex space-x-1 my-6", a),
                        children: [(0, r.jsxs)(d.P.div, {
                            className: "overflow-hidden pb-2",
                            initial: {
                                width: "0%"
                            },
                            whileInView: {
                                width: "fit-content"
                            },
                            transition: {
                                duration: 2,
                                ease: "linear",
                                delay: 1
                            },
                            children: [(0, r.jsxs)("div", {
                                className: "text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold",
                                style: {
                                    whiteSpace: "nowrap"
                                },
                                children: [(0, r.jsx)("div", {
                                    children: i.map((e, t) => (0, r.jsxs)("div", {
                                        className: "inline-block",
                                        children: [e.text.map((t, a) => (0, r.jsx)("span", {
                                            className: (0, o.cn)("dark:text-white text-black ", e.className),
                                            children: t
                                        }, "char-".concat(a))), "\xa0"]
                                    }, "word-".concat(t)))
                                }), " "]
                            }), " "]
                        }), (0, r.jsx)(d.P.span, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .8,
                                repeat: 1 / 0,
                                repeatType: "reverse"
                            },
                            className: (0, o.cn)("block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500", s)
                        })]
                    })
                };
            var x = a(6766),
                u = a(6874),
                h = a.n(u),
                p = a(2942),
                g = a(5699),
                f = a(5333),
                b = a(3943),
                v = a(4297),
                j = a(9165);
            let w = e => {
                    let {
                        className: t,
                        children: a
                    } = e, s = (0, p.d)(0), n = (0, p.d)(0), l = (0, i.useRef)(null), c = (0, g.E)(), [m, x] = (0, i.useState)({
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }), u = (0, f.V)(s), h = (0, f.V)(n), w = {
                        stiffness: 100,
                        damping: 20,
                        mass: .5
                    }, N = (0, b.z)((0, v.G)(n, [-300, 300], [25, -25]), w), y = (0, b.z)((0, v.G)(s, [-300, 300], [-25, 25]), w), k = (0, b.z)((0, v.G)(s, [-300, 0, 300], [.8, 1, .8]), w), _ = (0, b.z)((0, v.G)(s, [-300, 0, 300], [.2, 0, .2]), w);
                    return (0, i.useEffect)(() => {
                        let e = () => {
                            x({
                                top: -window.innerHeight / 2,
                                left: -window.innerWidth / 2,
                                right: window.innerWidth / 2,
                                bottom: window.innerHeight / 2
                            })
                        };
                        return e(), window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, r.jsxs)(d.P.div, {
                        ref: l,
                        drag: !0,
                        dragConstraints: m,
                        onDragStart: () => {
                            document.body.style.cursor = "grabbing"
                        },
                        onDragEnd: (e, t) => {
                            document.body.style.cursor = "default", c.start({
                                rotateX: 0,
                                rotateY: 0,
                                transition: {
                                    type: "spring",
                                    ...w
                                }
                            });
                            let a = u.get(),
                                r = h.get(),
                                s = Math.min(.8, Math.sqrt(a * a + r * r) / 1e3);
                            (0, j.i)(t.point.x, t.point.x + .3 * a, {
                                duration: .8,
                                ease: [.2, 0, 0, 1],
                                bounce: s,
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                mass: .8
                            }), (0, j.i)(t.point.y, t.point.y + .3 * r, {
                                duration: .8,
                                ease: [.2, 0, 0, 1],
                                bounce: s,
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                mass: .8
                            })
                        },
                        style: {
                            rotateX: N,
                            rotateY: y,
                            opacity: k,
                            willChange: "transform"
                        },
                        animate: c,
                        whileHover: {
                            scale: 1.02
                        },
                        onMouseMove: e => {
                            var t, a;
                            let {
                                clientX: r,
                                clientY: i
                            } = e, {
                                width: d,
                                height: o,
                                left: c,
                                top: m
                            } = null != (a = null == (t = l.current) ? void 0 : t.getBoundingClientRect()) ? a : {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            };
                            s.set(r - (c + d / 2)), n.set(i - (m + o / 2))
                        },
                        onMouseLeave: () => {
                            s.set(0), n.set(0)
                        },
                        className: (0, o.cn)("relative w-80 overflow-hidden  bg-gradient-to-br from-muted/30 to-transparent border border-[ff914d] backdrop-blur-sm aspect-square rounded-lg flex items-center justify-center text-6xl", t),
                        children: [a, (0, r.jsx)(d.P.div, {
                            style: {
                                opacity: _
                            },
                            className: "pointer-events-none absolute inset-0 bg-white select-none "
                        })]
                    })
                },
                N = e => {
                    let {
                        className: t,
                        children: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, o.cn)("[perspective:3000px] ", t),
                        children: a
                    })
                };

            function y() {
                let e = e => t => {
                    t.preventDefault();
                    let a = document.getElementById(e);
                    a && a.scrollIntoView({
                        behavior: "smooth"
                    })
                };
                return (0, r.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 lg:px-0 ",
                    children: (0, r.jsx)("section", {
                        className: "min-h-[90vh] flex flex-wrap items-center ",
                        children: (0, r.jsx)("div", {
                            className: "page-container",
                            children: (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                                children: [(0, r.jsxs)("div", {
                                    className: "animate-slide-down space-y-6",
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsxs)("p", {
                                            className: "inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-muted/30 text-[#ff914d] mb-4",
                                            children: [(0, r.jsx)("span", {
                                                className: "animate-pulse mr-1",
                                                children: "●"
                                            }), " Available"]
                                        })
                                    }), (0, r.jsxs)("h1", {
                                        className: "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight",
                                        children: [(0, r.jsx)("span", {
                                            className: "block",
                                            children: "Hello, I'm"
                                        }), (0, r.jsx)("span", {
                                            className: "bg-gradient-to-r from-[#ff914d] to-orange-400 bg-clip-text text-transparent",
                                            children: (0, r.jsx)(m, {
                                                words: [{
                                                    text: "Mehedi"
                                                }, {
                                                    text: "Imun.",
                                                    className: "text-[#ff914d] dark:text-[#ff914d]"
                                                }]
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "text-xl md:text-2xl text-muted-foreground max-w-2xl",
                                        children: (0, r.jsx)(c, {
                                            duration: 1,
                                            words: "A Full stack developer who creates modern, responsive,    and user-friendly web applications that bring ideas to life."
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-wrap gap-4 pt-4",
                                        children: [(0, r.jsx)(s.$, {
                                            asChild: !0,
                                            size: "lg",
                                            className: "shadow-lg shadow-[#ff914d]/20 hover:shadow-[#ff914d]/40 transition-all",
                                            children: (0, r.jsx)(h(), {
                                                href: "#projects",
                                                onClick: e("projects"),
                                                children: "View My Work"
                                            })
                                        }), (0, r.jsx)(s.$, {
                                            variant: "outline",
                                            asChild: !0,
                                            size: "lg",
                                            className: "group",
                                            children: (0, r.jsxs)(h(), {
                                                href: "#contact",
                                                onClick: e("contact"),
                                                children: ["Get In Touch", (0, r.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "ml-1 transition-transform group-hover:translate-x-1",
                                                    children: [(0, r.jsx)("path", {
                                                        d: "M5 12h14"
                                                    }), (0, r.jsx)("path", {
                                                        d: "m12 5 7 7-7 7"
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "hidden lg:block relative animate-slide-up",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-[#ff914d]/20 to-transparent rounded-lg blur-3xl opacity-100 -z-10"
                                    }), (0, r.jsx)("div", {
                                        className: "bg-gradient-to-br from-muted/30 to-transparent border border-[ff914d] backdrop-blur-sm aspect-square rounded-lg flex items-center justify-center text-6xl",
                                        children: (0, r.jsxs)("div", {
                                            className: " flex h-full w-full items-center justify-center overflow-hidden ",
                                            children: [(0, r.jsxs)(N, {
                                                className: "relative flex min-h-full w-full items-center justify-center overflow-clip",
                                                children: [
                                                    [{
                                                        title: "React",
                                                        image: "https://i.ibb.co.com/93wSjCPM/IMG-2129-removebg-preview.png",
                                                        className: "absolute top-90 left-[10%] rotate-[-5deg]"
                                                    }, {
                                                        title: "Next.js",
                                                        image: "https://i.ibb.co.com/93wSjCPM/IMG-2129-removebg-preview.png",
                                                        className: "absolute top-80 left-[25%] rotate-[-7deg]"
                                                    }, {
                                                        title: "Python",
                                                        image: "https://i.ibb.co.com/93wSjCPM/IMG-2129-removebg-preview.png",
                                                        className: "absolute top-90 left-[40%] rotate-[8deg]"
                                                    }].map(e => (0, r.jsx)(w, {
                                                        className: e.className,
                                                        children: (0, r.jsx)(x.default, {
                                                            src: e.image,
                                                            alt: e.title,
                                                            className: "pointer-events-none relative z-10 w-80 h-80 object-cover",
                                                            width: 800,
                                                            height: 800
                                                        })
                                                    }, e.title)), (0, r.jsx)(x.default, {
                                                        src: "https://i.ibb.co.com/93wSjCPM/IMG-2129-removebg-preview.png",
                                                        width: 900,
                                                        height: 900,
                                                        alt: "Picture of the author"
                                                    })
                                                ]
                                            }), (0, r.jsx)("div", {
                                                className: "absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-[#ff914d]/40 to-transparent rounded-full blur-sm",
                                                children: " "
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [503, 766, 52, 441, 684, 358], () => t(6496)), _N_E = e.O()
    }
]);