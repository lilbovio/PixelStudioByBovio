(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useScrollY.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollY",
    ()=>useScrollY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useScrollY() {
    _s();
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollY.useEffect": ()=>{
            let rafId;
            const handleScroll = {
                "useScrollY.useEffect.handleScroll": ()=>{
                    rafId = requestAnimationFrame({
                        "useScrollY.useEffect.handleScroll": ()=>{
                            setScrollY(window.scrollY);
                        }
                    }["useScrollY.useEffect.handleScroll"]);
                }
            }["useScrollY.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "useScrollY.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    cancelAnimationFrame(rafId);
                }
            })["useScrollY.useEffect"];
        }
    }["useScrollY.useEffect"], []);
    return scrollY;
}
_s(useScrollY, "eTR5W6wH45bVtWbD0ho0jkNrbDM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useReducedMotion() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
}
_s(useReducedMotion, "tilUXPeSe8dONgk/tIsbvS8xhS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Motion constants — Framer Motion variant definitions.
 *
 * Every animation in the site is built from these primitives.
 * Defining them here (not inline in components) ensures:
 *   1. Complete consistency across all animations
 *   2. Easy global tweaks — change timing here, updates everywhere
 *   3. reduced-motion detection is handled by AnimationWrapper,
 *      not by the individual variants
 *
 * See docs/MotionLanguage.md for the full specification.
 */ __turbopack_context__.s([
    "DURATION",
    ()=>DURATION,
    "EASE",
    ()=>EASE,
    "blurUp",
    ()=>blurUp,
    "cardHover",
    ()=>cardHover,
    "fadeIn",
    ()=>fadeIn,
    "fadeUp",
    ()=>fadeUp,
    "faqContent",
    ()=>faqContent,
    "faqIcon",
    ()=>faqIcon,
    "heroHeadline",
    ()=>heroHeadline,
    "heroParagraph",
    ()=>heroParagraph,
    "heroPrimaryBtn",
    ()=>heroPrimaryBtn,
    "heroSecondaryBtn",
    ()=>heroSecondaryBtn,
    "heroVisual",
    ()=>heroVisual,
    "hoverTransition",
    ()=>hoverTransition,
    "imageReveal",
    ()=>imageReveal,
    "mobileMenuOverlay",
    ()=>mobileMenuOverlay,
    "mobileMenuPanel",
    ()=>mobileMenuPanel,
    "modalContent",
    ()=>modalContent,
    "modalOverlay",
    ()=>modalOverlay,
    "navbarScrolled",
    ()=>navbarScrolled,
    "panelTransition",
    ()=>panelTransition,
    "projectCardHover",
    ()=>projectCardHover,
    "revealTransition",
    ()=>revealTransition,
    "scaleUp",
    ()=>scaleUp,
    "slideUp",
    ()=>slideUp,
    "staggerContainer",
    ()=>staggerContainer,
    "staggerContainerFast",
    ()=>staggerContainerFast,
    "staggerContainerSlow",
    ()=>staggerContainerSlow,
    "toastEnter",
    ()=>toastEnter,
    "whatsappButton",
    ()=>whatsappButton
]);
const DURATION = {
    instant: 0.10,
    fast: 0.15,
    normal: 0.24,
    medium: 0.35,
    slow: 0.50,
    deliberate: 0.70
};
const EASE = {
    /** General UI transitions — feels natural */ smooth: [
        0.25,
        0.46,
        0.45,
        0.94
    ],
    /** Scroll reveals — fast start, gentle landing into place */ outExpo: [
        0.16,
        1.00,
        0.30,
        1.00
    ],
    /** Panel open/close, modal transitions */ inOut: [
        0.40,
        0.00,
        0.20,
        1.00
    ]
};
const revealTransition = {
    duration: DURATION.slow,
    ease: EASE.outExpo
};
const hoverTransition = {
    duration: DURATION.fast,
    ease: EASE.smooth
};
const panelTransition = {
    duration: DURATION.medium,
    ease: EASE.inOut
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: DURATION.slow,
            ease: EASE.outExpo
        }
    }
};
const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.medium,
            ease: EASE.smooth
        }
    }
};
const blurUp = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: DURATION.deliberate,
            ease: EASE.outExpo
        }
    }
};
const slideUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.slow,
            ease: EASE.outExpo
        }
    }
};
const scaleUp = {
    hidden: {
        opacity: 0,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: DURATION.medium,
            ease: EASE.outExpo
        }
    }
};
const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.05
        }
    }
};
const staggerContainerFast = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.02
        }
    }
};
const staggerContainerSlow = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.10,
            delayChildren: 0.1
        }
    }
};
/* ─────────────────────────────────────────────────────────────────
   HERO SEQUENCE VARIANTS
   Used in HeroSection for the progressive content reveal.
   Each element has its own delay — the container does not stagger.
   ───────────────────────────────────────────────────────────────── */ const heroItemTransition = (delay)=>({
        duration: DURATION.slow,
        ease: EASE.outExpo,
        delay
    });
const heroHeadline = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: 'blur(6px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: heroItemTransition(0.10)
    }
};
const heroParagraph = {
    hidden: {
        opacity: 0,
        y: 18,
        filter: 'blur(4px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: heroItemTransition(0.22)
    }
};
const heroPrimaryBtn = {
    hidden: {
        opacity: 0,
        y: 14
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: heroItemTransition(0.34)
    }
};
const heroSecondaryBtn = {
    hidden: {
        opacity: 0,
        y: 14
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: heroItemTransition(0.42)
    }
};
const heroVisual = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: DURATION.deliberate,
            ease: EASE.outExpo,
            delay: 0.50
        }
    }
};
const navbarScrolled = {
    top: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0px)',
        borderBottomColor: 'rgba(229, 231, 235, 0)',
        boxShadow: 'none'
    },
    scrolled: {
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(12px)',
        borderBottomColor: 'rgba(229, 231, 235, 0.5)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    }
};
const modalOverlay = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: DURATION.fast,
            ease: EASE.smooth
        }
    }
};
const modalContent = {
    hidden: {
        opacity: 0,
        scale: 0.96,
        y: 12
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: DURATION.medium,
            ease: EASE.outExpo
        }
    },
    exit: {
        opacity: 0,
        scale: 0.96,
        y: 8,
        transition: {
            duration: DURATION.fast,
            ease: EASE.smooth
        }
    }
};
const mobileMenuOverlay = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: DURATION.fast,
            ease: EASE.smooth
        }
    }
};
const mobileMenuPanel = {
    hidden: {
        opacity: 0,
        y: -8
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.medium,
            ease: EASE.outExpo
        }
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: {
            duration: DURATION.fast,
            ease: EASE.inOut
        }
    }
};
const faqContent = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth,
            delay: 0.05
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: DURATION.fast,
            ease: EASE.smooth
        }
    }
};
const faqIcon = {
    closed: {
        rotate: 0
    },
    open: {
        rotate: 180,
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    }
};
const whatsappButton = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 16
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: DURATION.medium,
            ease: EASE.outExpo
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 16,
        transition: {
            duration: DURATION.fast,
            ease: EASE.smooth
        }
    }
};
const cardHover = {
    rest: {
        y: 0,
        boxShadow: 'var(--shadow-soft)',
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    },
    hover: {
        y: -4,
        boxShadow: 'var(--shadow-medium)',
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    }
};
const projectCardHover = {
    rest: {
        y: 0,
        boxShadow: 'var(--shadow-soft)',
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    },
    hover: {
        y: -6,
        boxShadow: 'var(--shadow-elevated)',
        transition: {
            duration: DURATION.normal,
            ease: EASE.smooth
        }
    }
};
const imageReveal = {
    hidden: {
        opacity: 0,
        y: 12,
        filter: 'blur(6px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: DURATION.deliberate,
            ease: EASE.outExpo
        }
    }
};
const toastEnter = {
    hidden: {
        opacity: 0,
        y: 16,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: DURATION.medium,
            ease: EASE.outExpo
        }
    },
    exit: {
        opacity: 0,
        y: 8,
        transition: {
            duration: DURATION.fast,
            ease: EASE.smooth
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Navigation items — used by FloatingNavbar, MobileMenu, and Footer.
 *
 * To add, remove, or reorder navigation links, update this array.
 * Both the desktop and mobile menus render from this single source.
 *
 * Note: FAQ is intentionally omitted — it is a homepage section, not a page.
 */ __turbopack_context__.s([
    "navCTA",
    ()=>navCTA,
    "navItems",
    ()=>navItems
]);
const navItems = [
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Work',
        href: '/work'
    },
    {
        label: 'Process',
        href: '/process'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
const navCTA = {
    label: 'Start a Project'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/whatsapp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_WHATSAPP_MESSAGE",
    ()=>DEFAULT_WHATSAPP_MESSAGE,
    "buildWhatsAppURL",
    ()=>buildWhatsAppURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * WhatsApp utility — single source of truth for all CTA links.
 *
 * Every "Start a Project" / "Contact on WhatsApp" button in the site
 * calls buildWhatsAppURL(). Updating the number or message here updates
 * every CTA simultaneously.
 *
 * Phone number format: international, no +, no spaces (e.g. 5233293915329)
 * See .env.local for the value.
 */ const WHATSAPP_NUMBER = ("TURBOPACK compile-time value", "5233293915329") ?? '';
const DEFAULT_WHATSAPP_MESSAGE = `Hello Pixel Studio by Bovio,

I found your website and I'm interested in discussing a project for my business.

I would like to receive more information.

Thank you.`;
function buildWhatsAppURL(message = DEFAULT_WHATSAPP_MESSAGE) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/NavLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * NavLink — navigation link with animated underline on hover/active.
 *
 * Motion spec:
 *   - Underline grows from left to right on hover (scaleX 0→1)
 *   - Active page underline is always visible (accent color)
 *   - Text color transitions from muted → primary on hover
 *   - Duration: 150ms ease-smooth
 *
 * Used in FloatingNavbar (desktop) and MobileMenu.
 * Not used for the CTA button — that uses the Button component.
 */ 'use client';
;
;
;
function NavLink({ href, children, onClick, className, size = 'desktop' }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = pathname === href || href !== '/' && pathname.startsWith(href);
    if (size === 'mobile') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onClick: onClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('block w-full', 'type-heading-md text-text-primary', 'py-4 border-b border-border', 'transition-colors duration-fast ease-smooth', isActive ? 'text-accent' : 'hover:text-text-muted', className),
            "aria-current": isActive ? 'page' : undefined,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/navigation/NavLink.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Layout — 'group' enables the underline's group-hover
        'group relative inline-flex flex-col items-center', // Typography — slightly tighter for premium nav feel
        'type-btn', // Color transition
        'transition-colors duration-fast ease-smooth', isActive ? 'text-text-primary font-medium' : 'text-text-muted hover:text-text-primary', className),
        "aria-current": isActive ? 'page' : undefined,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute -bottom-0.5 left-0 h-px w-full origin-left', 'bg-accent', 'transition-transform duration-fast ease-smooth', isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')
            }, void 0, false, {
                fileName: "[project]/components/navigation/NavLink.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navigation/NavLink.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(NavLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavLink;
var _c;
__turbopack_context__.k.register(_c, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/icons/Logomark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logomark",
    ()=>Logomark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Logomark — the Pixel Studio by Bovio wordmark, inlined as SVG.
 *
 * Mark: a 2×2 grid of squares — a literal "pixel" abstraction.
 * Wordmark: "pixel" (medium weight) + "studio" (extrabold) spaced apart.
 *
 * Two schemes:
 *   dark  — for light backgrounds (default)
 *   light — for dark backgrounds (navbar scrolled, footer)
 *
 * Fully accessible — renders as a labelled span.
 * Zero network request — inline SVG.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
// ─── Pixel mark SVG ───────────────────────────────────────────
// A 2×2 grid of rounded squares — references both "pixel" and
// the precision / grid-based nature of digital design.
function PixelMark({ scheme }) {
    const isLight = scheme === 'light';
    const fill = isLight ? 'rgba(255,255,255,0.90)' : 'var(--color-text-primary)';
    const fillMuted = isLight ? 'rgba(255,255,255,0.35)' : 'var(--color-text-muted)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        className: "shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "0",
                width: "8",
                height: "8",
                rx: "2",
                fill: fill
            }, void 0, false, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "0",
                width: "8",
                height: "8",
                rx: "2",
                fill: fill
            }, void 0, false, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "10",
                width: "8",
                height: "8",
                rx: "2",
                fill: fillMuted
            }, void 0, false, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "10",
                width: "8",
                height: "8",
                rx: "2",
                fill: fillMuted,
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/Logomark.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = PixelMark;
function Logomark({ variant = 'mark', scheme = 'dark', className }) {
    const isLight = scheme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-2.5 select-none', className),
        "aria-label": "Pixel Studio by Bovio",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PixelMark, {
                scheme: scheme
            }, void 0, false, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-baseline gap-1 leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('tracking-tight', isLight ? 'text-white/80' : 'text-text-muted'),
                        style: {
                            fontSize: 'inherit',
                            fontWeight: 500,
                            letterSpacing: '-0.02em'
                        },
                        children: "pixel"
                    }, void 0, false, {
                        fileName: "[project]/components/icons/Logomark.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('tracking-tight', isLight ? 'text-white' : 'text-text-primary'),
                        style: {
                            fontSize: 'inherit',
                            fontWeight: 800,
                            letterSpacing: '-0.03em'
                        },
                        children: "studio"
                    }, void 0, false, {
                        fileName: "[project]/components/icons/Logomark.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            variant === 'full' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('type-label', isLight ? 'text-white/35' : 'text-text-disabled'),
                style: {
                    marginLeft: '2px'
                },
                children: "by bovio"
            }, void 0, false, {
                fileName: "[project]/components/icons/Logomark.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/Logomark.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c1 = Logomark;
var _c, _c1;
__turbopack_context__.k.register(_c, "PixelMark");
__turbopack_context__.k.register(_c1, "Logomark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Button — primary interactive element.
 *
 * Visual upgrade:
 *   primary   — rich near-black, warm off-white text, ultra-tight radius,
 *               layered shadow, smooth press state
 *   secondary — glass surface with warm border, frost hover effect
 *   ghost     — text only, clean hover with accent underline
 *
 * Polymorphic: pass `href` to render as Next.js Link.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
;
// ─── Styles ───────────────────────────────────────────────────
const base = [
    // Layout
    'relative inline-flex items-center justify-center gap-2',
    // Typography
    'type-btn whitespace-nowrap',
    // Shape
    'rounded-lg',
    // Interaction
    'select-none cursor-pointer',
    // Transition
    'transition-all duration-fast ease-smooth',
    // Focus
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-40',
    'aria-disabled:pointer-events-none aria-disabled:opacity-40'
];
const variants = {
    primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Rich dark background with warm off-white text
    'bg-btn-primary text-text-inverse', // Subtle inset highlight gives a "carved" premium feel
    'shadow-[0_1px_3px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]', 'border border-transparent', // Hover: lighter + lift
    'hover:-translate-y-px hover:bg-btn-primary-hover', 'hover:shadow-[0_4px_12px_rgba(0,0,0,0.20),0_1px_3px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]', // Press
    'active:translate-y-0 active:scale-[0.98] active:shadow-none'),
    secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Glass surface
    'bg-surface/80 text-text-primary border border-border', 'backdrop-blur-sm', 'shadow-soft', // Hover: tighten border, slight bg
    'hover:bg-bg-secondary hover:border-border-strong', 'hover:shadow-medium', 'active:scale-[0.98]'),
    ghost: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-transparent text-text-muted border border-transparent', 'hover:text-text-primary hover:bg-bg-secondary', 'active:scale-[0.98]')
};
const sizes = {
    sm: 'h-9  px-4   text-[0.875rem]',
    md: 'h-11 px-5',
    lg: 'h-12 px-7   text-base'
};
// ─── Spinner ──────────────────────────────────────────────────
function Spinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        className: "size-4 animate-spin",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c = Spinner;
function Button(props) {
    const { variant = 'primary', size = 'md', loading = false, disabled = false, icon, iconPosition = 'left', className, children, href, ...rest } = props;
    const isDisabled = disabled || loading;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], sizes[size], className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 148,
                columnNumber: 19
            }, this),
            !loading && icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            !loading && icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    if (href !== undefined) {
        const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('wa.me');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            "aria-disabled": isDisabled,
            target: isExternal ? '_blank' : undefined,
            rel: isExternal ? 'noopener noreferrer' : undefined,
            ...rest,
            children: content
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        disabled: isDisabled,
        "aria-disabled": isDisabled,
        "aria-busy": loading,
        ...rest,
        children: content
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_c1 = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Spinner");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Logomark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/Logomark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * MobileMenu — full-screen slide-down drawer for mobile navigation.
 *
 * Motion spec:
 *   - Overlay fades in (opacity 0→1, 240ms)
 *   - Panel slides down from -8px + fades in (350ms outExpo)
 *   - Exit is faster (150ms)
 *
 * Accessibility:
 *   - id="mobile-menu" matches aria-controls on the hamburger button
 *   - role="dialog" + aria-modal="true" + aria-label
 *   - Focus trap — Tab cycles within the open menu
 *   - ESC closes the menu
 *   - Backdrop click closes the menu
 *   - Focus returns to the hamburger button on close
 *
 * Client Component — manages open/close state and keyboard interactions.
 */ 'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function MobileMenu({ isOpen, onClose }) {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const whatsappUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildWhatsAppURL"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // ── Close menu on route change ────────────────────────────
    // Handles the case where a NavLink navigates to a new page while
    // the menu is open — ensures the drawer closes even if onClick
    // was not fired (e.g., keyboard navigation, programmatic routing).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            if (isOpen) onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MobileMenu.useEffect"], [
        pathname
    ]);
    // ── Focus management ──────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            if (isOpen) {
                const timer = setTimeout({
                    "MobileMenu.useEffect.timer": ()=>closeButtonRef.current?.focus()
                }["MobileMenu.useEffect.timer"], 50);
                return ({
                    "MobileMenu.useEffect": ()=>clearTimeout(timer)
                })["MobileMenu.useEffect"];
            }
        }
    }["MobileMenu.useEffect"], [
        isOpen
    ]);
    // ── ESC key ───────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            const handleKeyDown = {
                "MobileMenu.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && isOpen) onClose();
                }
            }["MobileMenu.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "MobileMenu.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["MobileMenu.useEffect"];
        }
    }["MobileMenu.useEffect"], [
        isOpen,
        onClose
    ]);
    // ── Body scroll lock ──────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenu.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "MobileMenu.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["MobileMenu.useEffect"];
        }
    }["MobileMenu.useEffect"], [
        isOpen
    ]);
    // ── Focus trap ────────────────────────────────────────────
    const handleTabKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenu.useCallback[handleTabKey]": (e)=>{
            if (e.key !== 'Tab') return;
            const panel = e.currentTarget;
            const focusable = panel.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!first || !last) return;
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }["MobileMenu.useCallback[handleTabKey]"], []);
    const noMotion = shouldReduce;
    const overlayV = noMotion ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    } : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileMenuOverlay"];
    const panelV = noMotion ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    } : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileMenuPanel"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: overlayV,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    className: "fixed inset-0 z-overlay bg-black/40 md:hidden",
                    "aria-hidden": "true",
                    onClick: onClose
                }, "menu-overlay", false, {
                    fileName: "[project]/components/navigation/MobileMenu.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    id: "mobile-menu",
                    variants: panelV,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Navigation menu",
                    onKeyDown: handleTabKey,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 inset-x-0 z-modal', 'glass border-b border-border-subtle shadow-elevated', 'md:hidden', 'focus:outline-none'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 h-16 border-b border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: onClose,
                                    "aria-label": "Pixel Studio by Bovio — Home",
                                    className: "text-[1.125rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Logomark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logomark"], {
                                        variant: "mark",
                                        scheme: "dark"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/MobileMenu.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/MobileMenu.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: closeButtonRef,
                                    onClick: onClose,
                                    "aria-label": "Close navigation menu",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center size-10 rounded-md', 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary', 'transition-colors duration-fast ease-smooth', 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/MobileMenu.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/MobileMenu.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation/MobileMenu.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Mobile navigation",
                            className: "px-5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                    href: item.href,
                                    size: "mobile",
                                    onClick: onClose,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/navigation/MobileMenu.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/MobileMenu.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: whatsappUrl,
                                variant: "primary",
                                size: "lg",
                                className: "w-full",
                                "aria-label": "Start a project on WhatsApp",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navCTA"].label
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/MobileMenu.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navigation/MobileMenu.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, "menu-panel", true, {
                    fileName: "[project]/components/navigation/MobileMenu.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/navigation/MobileMenu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(MobileMenu, "aZF51ma2AOVAPlHx04HiQ9ZvikY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/FloatingNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNavbar",
    ()=>FloatingNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollY.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation/MobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Logomark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/Logomark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * FloatingNavbar — sticky floating glass navigation.
 *
 * Design:
 *   - At scroll 0: transparent, no border, full-width
 *   - After 20px: transforms into a centred floating pill/card
 *     with glass background, subtle shadow, and rounded corners
 *   - The "floating pill" effect is achieved by adding horizontal
 *     margin + border-radius once scrolled — not a simple bg fade
 *
 * Motion spec:
 *   - Background, shadow, radius all animate via CSS transitions
 *   - 240ms ease-smooth — barely noticeable, feels physical
 *
 * Layout:
 *   - Logo left, nav links centered, CTA right
 *   - Mobile: logo left, hamburger right
 */ 'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function FloatingNavbar() {
    _s();
    const scrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollY"])();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasScrolled = scrollY > 20;
    const whatsappUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildWhatsAppURL"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('sr-only focus:not-sr-only', 'fixed top-4 left-4 z-tooltip', 'bg-surface border border-border rounded-md px-4 py-2', 'type-btn text-text-primary shadow-elevated', 'focus-visible:outline-2 focus-visible:outline-accent'),
                children: "Skip to main content"
            }, void 0, false, {
                fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 inset-x-0 z-sticky', 'flex justify-center', 'pointer-events-none'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                    variants: shouldReduce ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarScrolled"],
                    animate: hasScrolled ? 'scrolled' : 'top',
                    initial: "top",
                    role: "banner",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Full width at top, shrinks to pill when scrolled
                    'pointer-events-auto w-full', 'transition-all duration-normal ease-smooth', hasScrolled ? 'mt-3 mx-4 md:mx-6 lg:mx-8 rounded-2xl glass shadow-navbar' : 'border-b border-transparent', shouldReduce && hasScrolled && 'bg-surface/80 backdrop-blur-md border border-border/50'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mx-auto w-full px-4 sm:px-5', !hasScrolled && 'max-w-container px-5 sm:px-8 lg:px-12'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-14 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    "aria-label": "Pixel Studio by Bovio — Home",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-[1rem] focus-visible:outline-2 focus-visible:outline-offset-4', 'focus-visible:outline-accent rounded-sm'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Logomark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logomark"], {
                                        variant: "mark",
                                        scheme: "dark"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Main navigation",
                                    className: "hidden md:flex items-center gap-7",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                            href: item.href,
                                            children: item.label
                                        }, item.href, false, {
                                            fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: whatsappUrl,
                                            variant: "primary",
                                            size: "sm",
                                            className: "hidden sm:inline-flex",
                                            "aria-label": "Start a project on WhatsApp",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navCTA"].label
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": menuOpen ? 'Close navigation menu' : 'Open navigation menu',
                                            "aria-expanded": menuOpen,
                                            "aria-controls": "mobile-menu",
                                            onClick: ()=>setMenuOpen(true),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('md:hidden flex items-center justify-center size-9 rounded-lg', 'text-text-muted hover:text-text-primary hover:bg-bg-secondary', 'transition-colors duration-fast ease-smooth', 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                size: 18,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenu"], {
                isOpen: menuOpen,
                onClose: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/navigation/FloatingNavbar.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FloatingNavbar, "ew8paICGffLcfzCSv6rb8floVbg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollY"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = FloatingNavbar;
var _c;
__turbopack_context__.k.register(_c, "FloatingNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/WhatsAppButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppButton",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollY.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * WhatsAppButton — floating sticky CTA button.
 *
 * Motion spec (docs/MotionLanguage.md):
 *   - Appears after the user scrolls 300px (per spec)
 *   - Enter: scales up from 0.8 + fades in + rises 16px (350ms outExpo)
 *   - Exit:  scales down + fades out (150ms)
 *
 * Positioning: fixed bottom-right, z-floating (50)
 * Size: 56×56px minimum touch target
 *
 * Accessibility:
 *   - aria-label explains the destination precisely
 *   - Opens WhatsApp in a new tab
 *   - icon is aria-hidden (label carries the meaning)
 */ 'use client';
;
;
;
;
;
;
;
function WhatsAppButton() {
    _s();
    const scrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollY"])();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const isVisible = scrollY > 300;
    const whatsappUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildWhatsAppURL"])();
    const variants = shouldReduce ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    } : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappButton"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            href: whatsappUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Start a conversation on WhatsApp",
            variants: variants,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Position + layer
            'fixed bottom-6 right-6 z-floating', // Size — meets 56px minimum touch target
            'size-14', // Shape + color
            'rounded-full bg-[#25D366]', // Icon color
            'text-white', // Layout
            'flex items-center justify-center', // Premium shadow
            'shadow-[0_4px_16px_rgba(37,211,102,0.35),0_2px_6px_rgba(0,0,0,0.12)]', // Hover
            'hover:-translate-y-0.5', 'hover:shadow-[0_6px_24px_rgba(37,211,102,0.45),0_2px_8px_rgba(0,0,0,0.14)]', // Transition
            'transition-all duration-fast ease-smooth', // Focus
            'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#25D366]'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                size: 26,
                strokeWidth: 1.75,
                "aria-hidden": "true",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/common/WhatsAppButton.tsx",
                lineNumber: 75,
                columnNumber: 11
            }, this)
        }, "whatsapp-fab", false, {
            fileName: "[project]/components/common/WhatsAppButton.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/WhatsAppButton.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(WhatsAppButton, "q54Yjh53+Ts7Wgmm0k3aUSeVVZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollY"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0yoel7b._.js.map