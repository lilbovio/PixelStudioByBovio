module.exports = [
"[project]/components/common/AnimationWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationWrapper",
    ()=>AnimationWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-ssr] (ecmascript)");
/**
 * AnimationWrapper — scroll-triggered entrance animation.
 *
 * The universal adapter between Server Components and Framer Motion.
 * All scroll-reveal animations in the site flow through this component.
 *
 * How it works:
 *   1. Receives children from a Server Component
 *   2. Wraps them in a Framer Motion element with named variants
 *   3. Triggers via whileInView with a configurable viewport threshold
 *   4. Respects prefers-reduced-motion — renders children statically
 *
 * Delay implementation:
 *   We inject `delay` directly into the variant's `transition` object
 *   via the `custom` prop + a factory variant. This avoids the conflict
 *   between `animate` and `whileInView` that would break the scroll trigger.
 *
 * Usage:
 *   <AnimationWrapper variant="fadeUp" delay={0.1}>
 *     <ServiceCard ... />
 *   </AnimationWrapper>
 */ 'use client';
;
;
;
;
;
// ─── Variant factories ─────────────────────────────────────────
// Each factory accepts `custom` (the delay value) so the transition
// delay is injected cleanly without conflicting with whileInView.
const variantFactories = {
    fadeUp: (delay)=>({
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DURATION"].slow,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"].outExpo,
                    delay
                }
            }
        }),
    fadeIn: (delay)=>({
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DURATION"].medium,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"].smooth,
                    delay
                }
            }
        }),
    blurUp: (delay)=>({
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DURATION"].deliberate,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"].outExpo,
                    delay
                }
            }
        }),
    scaleUp: (delay)=>({
            hidden: {
                opacity: 0,
                scale: 0.96
            },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DURATION"].medium,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"].outExpo,
                    delay
                }
            }
        }),
    slideUp: (delay)=>({
            hidden: {
                opacity: 0,
                y: 40
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DURATION"].slow,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"].outExpo,
                    delay
                }
            }
        })
};
function AnimationWrapper({ variant = 'fadeUp', delay = 0, threshold = 0.15, once = true, className, children, as = 'div' }) {
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Reduced motion: render statically, fully visible, no animation
    if (shouldReduce) {
        const Tag = as;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/common/AnimationWrapper.tsx",
            lineNumber: 98,
            columnNumber: 12
        }, this);
    }
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"][as];
    const variants = variantFactories[variant](delay);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
        variants: variants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once,
            amount: threshold
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/common/AnimationWrapper.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_common_AnimationWrapper_tsx_0cxd273._.js.map