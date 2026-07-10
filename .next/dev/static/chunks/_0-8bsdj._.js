(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Section — full-width section wrapper with responsive vertical rhythm.
 *
 * Every homepage section and inner-page section uses this component.
 * It controls:
 *   - Background colour (white / gray / dark) — the alternation rhythm
 *   - Vertical padding via the section-padding utility class
 *   - Anchor IDs for nav scroll-to links
 *
 * Background alternation sequence (from docs/DesignSystem.md §12):
 *   Hero, Trust Badges, Solution, Featured Work, Why Us  →  white
 *   Problem, Services, Process, FAQ                      →  gray
 *   Final CTA, Footer                                    →  dark
 *
 * Accessibility:
 *   - Renders as <section> with an optional aria-labelledby for screen readers
 *   - Pass `labelledBy` with the id of the section's heading
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
// ─── Styles ───────────────────────────────────────────────────
const variantClasses = {
    white: 'section-white',
    gray: 'section-gray',
    dark: 'section-dark'
};
const paddingClasses = {
    default: 'section-padding',
    none: '',
    'top-only': 'pt-section-sm sm:pt-section-md lg:pt-section-lg xl:pt-section-xl',
    'bottom-only': 'pb-section-sm sm:pb-section-md lg:pb-section-lg xl:pb-section-xl'
};
function Section({ variant = 'white', padding = 'default', id, labelledBy, className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        "aria-labelledby": labelledBy,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(variantClasses[variant], paddingClasses[padding], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/layout/Section.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Container — max-width wrapper with responsive horizontal padding.
 *
 * Every section's content lives inside a Container.
 * This is the only place max-width is set — never on sections directly.
 *
 * Max-width: 1280px (--spacing-container)
 * Padding:
 *   Mobile  →  px-5  (20px)
 *   Tablet  →  px-8  (32px)
 *   Desktop →  px-12 (48px)
 *
 * The `narrow` prop constrains to ~720px reading width for text-heavy pages.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
function Container({ narrow = false, className, children, as: Tag = 'div' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mx-auto w-full px-5 sm:px-8 lg:px-12', narrow ? 'max-w-reading' : 'max-w-container', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/layout/Container.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/WhatsAppCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppCTA",
    ()=>WhatsAppCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * WhatsAppCTA — inline call-to-action link that opens WhatsApp.
 *
 * Different from WhatsAppButton (the floating FAB).
 * This is an inline element used inside sections:
 *   - Hero primary button
 *   - Final CTA section button
 *   - Footer contact link
 *   - Navigation CTA (delegates to Button component)
 *
 * It wraps the Button component with the WhatsApp URL pre-wired,
 * so callers don't need to construct the URL themselves.
 *
 * Usage:
 *   <WhatsAppCTA label="Start a Project" size="lg" />
 *   <WhatsAppCTA label="Message us on WhatsApp" variant="secondary" />
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
;
;
;
function WhatsAppCTA({ label = 'Start a Project', variant = 'primary', size = 'md', className, message, icon, iconPosition }) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildWhatsAppURL"])(message);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        href: url,
        variant: variant,
        size: size,
        className: className,
        icon: icon,
        iconPosition: iconPosition,
        "aria-label": `${label} — opens WhatsApp`,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/common/WhatsAppCTA.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = WhatsAppCTA;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/WhatsAppCTA.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * HeroSection — first impression, above the fold.
 *
 * Design direction:
 *   - Maximum whitespace, editorial composition
 *   - Large, tight headline with negative letter-spacing
 *   - Ambient top glow (hero-glow class) for subtle depth
 *   - Abstract browser mockup on the right — premium, not generic
 *   - Floating glass stat cards for social proof without fake testimonials
 *
 * Layout:
 *   Mobile:  text → visual stacked, text always first
 *   Desktop: 2-column, 52/48 split — text left, visual right
 */ 'use client';
;
;
;
;
;
;
;
;
// ─── Static variants for reduced motion ───────────────────────
const staticVisible = {
    hidden: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
    }
};
// ─── Hero Visual ──────────────────────────────────────────────
// Premium browser mockup communicating "polished digital product"
// without relying on real client assets.
function HeroVisual() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-[540px] mx-auto lg:mx-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -inset-12 pointer-events-none",
                style: {
                    background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(29,78,216,0.07) 0%, transparent 70%)'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/HeroSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-2xl overflow-hidden border border-border bg-surface",
                style: {
                    boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-4 py-3 bg-bg-secondary border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-full bg-[#FF5F57]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-full bg-[#FEBC2E]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-full bg-[#28C840]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 ml-3 h-6 rounded-md bg-bg-tertiary border border-border flex items-center px-3 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-success opacity-60",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "type-body-sm text-text-disabled select-none",
                                        children: "pixelstudiobybovio.lat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pt-5 pb-6 bg-bg space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2.5 w-20 rounded-sm bg-text-primary/70"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 w-10 rounded-sm bg-bg-tertiary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 w-10 rounded-sm bg-bg-tertiary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 w-10 rounded-sm bg-bg-tertiary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-16 rounded-md bg-btn-primary/85"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-4/5 rounded-md bg-text-primary/12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-3/5 rounded-md bg-text-primary/12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-2/5 rounded-md bg-text-primary/08"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-full rounded-sm bg-bg-tertiary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-11/12 rounded-sm bg-bg-tertiary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-3/4 rounded-sm bg-bg-tertiary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-9 w-28 rounded-lg bg-btn-primary/85"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-9 w-22 rounded-lg border border-border"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-3 pt-2",
                                children: [
                                    1,
                                    0.65,
                                    0.40
                                ].map((opacity, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-border bg-surface p-3 space-y-2.5",
                                        style: {
                                            opacity
                                        },
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-lg bg-accent-muted"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 w-4/5 rounded-sm bg-bg-tertiary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 w-full rounded-sm bg-bg-tertiary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 w-2/3 rounded-sm bg-bg-tertiary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroSection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-4 -right-4 lg:-right-8 flex items-center gap-3 pl-3 pr-4 py-3 rounded-xl border border-border/70 bg-surface shadow-elevated",
                "aria-hidden": "true",
                style: {
                    backdropFilter: 'blur(12px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-8 h-8 rounded-lg bg-success/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 11L6.5 7.5L9 10L13 5",
                                stroke: "#059669",
                                strokeWidth: "1.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/HeroSection.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroSection.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "type-body-sm font-medium text-text-primary leading-none mb-0.5",
                                children: "Conversion +42%"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "type-body-sm text-text-disabled leading-none",
                                children: "after redesign"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroSection.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-3 -left-3 lg:-left-6 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/70 bg-surface shadow-elevated",
                "aria-hidden": "true",
                style: {
                    backdropFilter: 'blur(12px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex -space-x-1.5",
                        children: [
                            '#111110',
                            '#1d4ed8',
                            '#6c6c68'
                        ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full border-2 border-surface flex items-center justify-center",
                                style: {
                                    backgroundColor: c
                                }
                            }, i, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroSection.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "type-body-sm text-text-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-text-primary font-medium",
                                children: "5 projects"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            " launched"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroSection.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/HeroSection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = HeroVisual;
function HeroSection() {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const vEyebrow = shouldReduce ? staticVisible : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroParagraph"];
    const vHeadline = shouldReduce ? staticVisible : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroHeadline"];
    const vParagraph = shouldReduce ? staticVisible : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroParagraph"];
    const vCTA = shouldReduce ? staticVisible : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroPrimaryBtn"];
    const vMicro = shouldReduce ? staticVisible : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSecondaryBtn"];
    const vVisual = shouldReduce ? staticVisible : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroVisual"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "hero",
        variant: "white",
        padding: "default",
        labelledBy: "hero-heading",
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 hero-glow pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/HeroSection.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 lg:gap-8 items-center py-8 lg:py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-7 order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: vEyebrow,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "inline-flex",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface shadow-soft type-body-sm text-text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-success",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 12,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            "Digital Design Studio · Guadalajara, Mexico"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/HeroSection.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HeroSection.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    id: "hero-heading",
                                    variants: vHeadline,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "type-hero text-text-primary",
                                    children: [
                                        "Design that",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/HeroSection.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this),
                                        "builds trust"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/HeroSection.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: vParagraph,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "type-body-lg text-text-muted max-w-[480px]",
                                    children: "We design and build modern websites that help businesses earn trust, attract customers and grow."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HeroSection.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: vCTA,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "flex flex-col sm:flex-row gap-3 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppCTA"], {
                                            label: "Start a Project",
                                            size: "lg",
                                            message: "Hello Pixel Studio by Bovio, I found your website and I'm interested in discussing a project. I would like to get a quote.",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HeroSection.tsx",
                                                lineNumber: 251,
                                                columnNumber: 23
                                            }, this),
                                            iconPosition: "right"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/HeroSection.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            href: "#work",
                                            variant: "secondary",
                                            size: "lg",
                                            children: "See Our Work"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/HeroSection.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/HeroSection.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: vMicro,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "type-body-sm text-text-disabled",
                                    children: "No commitment required · Free consultation · Response within 24h"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HeroSection.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/HeroSection.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: vVisual,
                            initial: "hidden",
                            animate: "visible",
                            className: "order-2 flex justify-center lg:justify-end",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroVisual, {}, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/HeroSection.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/HeroSection.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/HeroSection.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/HeroSection.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = HeroSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroVisual");
__turbopack_context__.k.register(_c1, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/AnimationWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationWrapper",
    ()=>AnimationWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].slow,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].outExpo,
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].medium,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].smooth,
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].deliberate,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].outExpo,
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].medium,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].outExpo,
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].slow,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].outExpo,
                    delay
                }
            }
        })
};
function AnimationWrapper({ variant = 'fadeUp', delay = 0, threshold = 0.15, once = true, className, children, as = 'div' }) {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Reduced motion: render statically, fully visible, no animation
    if (shouldReduce) {
        const Tag = as;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/common/AnimationWrapper.tsx",
            lineNumber: 98,
            columnNumber: 12
        }, this);
    }
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as];
    const variants = variantFactories[variant](delay);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
        variants: variants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once,
            amount: threshold
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/common/AnimationWrapper.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(AnimationWrapper, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = AnimationWrapper;
var _c;
__turbopack_context__.k.register(_c, "AnimationWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/StaggerWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaggerWrapper",
    ()=>StaggerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * StaggerWrapper — staggers entrance animations across a list of children.
 *
 * Wraps a list container in a stagger parent. Each direct child animates
 * in sequence with a configurable delay between items.
 *
 * Architecture:
 *   StaggerWrapper (motion parent — controls stagger timing)
 *     └─ child 1 (AnimationWrapper or motion element)
 *     └─ child 2
 *     └─ child 3
 *
 * The children must be wrapped in an element that accepts variants.
 * Typically used with AnimationWrapper as children, or with
 * motion.li / motion.div elements that use the named variants.
 *
 * When reduced motion is active: stagger delay is set to 0ms,
 * so all children appear simultaneously.
 *
 * Usage:
 *   <StaggerWrapper>
 *     {services.map((s) => (
 *       <AnimationWrapper key={s.id} variant="fadeUp" as="li">
 *         <ServiceCard service={s} />
 *       </AnimationWrapper>
 *     ))}
 *   </StaggerWrapper>
 */ 'use client';
;
;
;
;
// ─── Variant map ──────────────────────────────────────────────
const containerVariants = {
    fast: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainerFast"],
    normal: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
    slow: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainerSlow"]
};
function StaggerWrapper({ speed = 'normal', className, children, as = 'div' }) {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as];
    // When motion is reduced: render immediately with no stagger
    if (shouldReduce) {
        const Tag = as;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/common/StaggerWrapper.tsx",
            lineNumber: 78,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
        variants: containerVariants[speed],
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/common/StaggerWrapper.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(StaggerWrapper, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = StaggerWrapper;
var _c;
__turbopack_context__.k.register(_c, "StaggerWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/icons/DynamicIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicIcon",
    ()=>DynamicIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/lucide-react.js [app-client] (ecmascript)");
/**
 * DynamicIcon — renders a Lucide icon by name string.
 *
 * All services, process steps, and why-us items store icon names
 * as strings from the Lucide icon library. This component resolves
 * the name at runtime using dynamic import from lucide-react.
 *
 * Why not static imports?
 *   All icon names live in constants/ files. They may be added or changed
 *   without code changes. Dynamic resolution keeps the constants clean.
 *
 * Fallback: if the icon name is not found, renders nothing.
 *
 * This is a Client Component because lucide-react icons are runtime objects.
 * The component is a thin leaf — the overhead is minimal.
 *
 * Usage:
 *   <DynamicIcon name="layout-template" size={24} />
 *   <DynamicIcon name="shield-check" size={20} strokeWidth={1.5} />
 */ 'use client';
;
;
// ─── Name → PascalCase conversion ─────────────────────────────
function toPascalCase(name) {
    return name.split('-').map((part)=>part.charAt(0).toUpperCase() + part.slice(1)).join('');
}
function DynamicIcon({ name, ...props }) {
    const pascalName = toPascalCase(name);
    // lucide-react exports icons as named exports — access via index
    // Double-cast through unknown to satisfy strict TS: LucideIcons' own types
    // don't match the generic ComponentType<LucideProps> index signature exactly.
    const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[pascalName];
    if (!Icon) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        ...props
    }, void 0, false, {
        fileName: "[project]/components/icons/DynamicIcon.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
_c = DynamicIcon;
var _c;
__turbopack_context__.k.register(_c, "DynamicIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>Heading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Heading — semantic heading element with decoupled visual size.
 *
 * This component exists to enforce correct heading hierarchy without
 * coupling the visual size to the semantic level.
 *
 * Example: A card title is visually a heading-md, but semantically
 * it may be an h3 inside a section that already has an h2. This
 * component expresses both independently.
 *
 * Usage:
 *   <Heading level={2} size="xl">Our Services</Heading>
 *   <Heading level={3} size="md">Landing Pages</Heading>
 *   <Heading level={2} size="hero" className="text-center">...</Heading>
 *
 * Accessibility:
 *   - `level` sets the HTML element (h1–h6)
 *   - One h1 per page — enforced by discipline, not by this component
 *   - Never skip heading levels
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
// ─── Maps ─────────────────────────────────────────────────────
/** Maps level → default size when `size` prop is not passed */ const defaultSizes = {
    1: 'hero',
    2: 'xl',
    3: 'lg',
    4: 'md',
    5: 'sm',
    6: 'sm'
};
const sizeClasses = {
    hero: 'type-hero',
    display: 'type-display',
    xl: 'type-heading-xl',
    lg: 'type-heading-lg',
    md: 'type-heading-md',
    sm: 'type-heading-sm'
};
const colorClasses = {
    primary: 'text-text-primary',
    inverse: 'text-text-inverse',
    muted: 'text-text-muted',
    inherit: 'text-inherit'
};
function Heading({ level, size, color = 'primary', balance = true, className, children, id }) {
    const Tag = `h${level}`;
    const resolvedSize = size ?? defaultSizes[level];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[resolvedSize], colorClasses[color], balance && 'text-balance', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Heading.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c = Heading;
var _c;
__turbopack_context__.k.register(_c, "Heading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * SectionHeader — standardised section introduction block.
 *
 * Visual upgrade:
 *   - Eyebrow label uses a refined small-caps style with left border accent
 *   - Headline uses improved letter-spacing from upgraded type tokens
 *   - Subheadline gets generous line-height and max-width constraint
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Heading.tsx [app-client] (ecmascript)");
;
;
;
function SectionHeader({ label, headline, subheadline, align = 'left', headingId, scheme = 'light', className }) {
    const isCentered = align === 'center';
    const isDark = scheme === 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-5', isCentered && 'items-center text-center', className),
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center', isCentered && 'justify-center'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-2 type-label', isDark ? 'text-white/45' : 'text-text-muted'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-1.5 h-1.5 rounded-full shrink-0', isDark ? 'bg-white/30' : 'bg-accent/50'),
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/SectionHeader.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        label
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/SectionHeader.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/SectionHeader.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                level: 2,
                size: "xl",
                id: headingId,
                color: isDark ? 'inverse' : 'primary',
                className: isCentered ? 'mx-auto' : undefined,
                children: headline
            }, void 0, false, {
                fileName: "[project]/components/layout/SectionHeader.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            subheadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('type-body-lg max-w-[600px]', isDark ? 'text-white/50' : 'text-text-muted', isCentered && 'mx-auto'),
                children: subheadline
            }, void 0, false, {
                fileName: "[project]/components/layout/SectionHeader.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/SectionHeader.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cards/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * ProjectCard — displays a project with image, tags, title and description.
 *
 * Used in FeaturedWorkSection (homepage) and /work page.
 *
 * When the user clicks the card, it opens ProjectModal (managed by FeaturedWorkSection).
 * Client Component — manages onClick and image error state.
 *
 * Image: Next.js <Image> with fill layout inside an aspect-ratio container.
 * Falls back to a styled gradient placeholder if:
 *   - no coverImage is provided
 *   - the image file is not found (404 — e.g., concept projects with no assets yet)
 *
 * The gradient uses the project's first palette color when available.
 */ 'use client';
;
;
;
// ─── Image placeholder ────────────────────────────────────────
function ImagePlaceholder({ project }) {
    // Use the first palette color as the gradient seed, falling back to tokens
    const baseColor = project.palette?.[0] ?? '#f3f4f6';
    const midColor = project.palette?.[1] ?? '#e5e7eb';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center gap-2",
        style: {
            background: `linear-gradient(135deg, ${baseColor}22 0%, ${midColor}44 100%)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "type-body-sm text-text-muted font-medium",
                children: project.industry
            }, void 0, false, {
                fileName: "[project]/components/cards/ProjectCard.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "type-body-sm text-text-disabled",
                children: "Preview coming soon"
            }, void 0, false, {
                fileName: "[project]/components/cards/ProjectCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cards/ProjectCard.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = ImagePlaceholder;
function ProjectCard({ project, onOpen, className }) {
    _s();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showImage = !!project.coverImage && !imgError;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group flex flex-col overflow-hidden rounded-xl', 'bg-surface border border-border shadow-soft', 'transition-all duration-normal ease-smooth', 'hover:-translate-y-1 hover:shadow-elevated hover:border-border-strong', 'cursor-pointer', className),
        onClick: (e)=>onOpen(project, e.currentTarget),
        onKeyDown: (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen(project, e.currentTarget);
            }
        },
        tabIndex: 0,
        role: "button",
        "aria-label": `View ${project.title} project details`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-video overflow-hidden bg-bg-tertiary",
                children: [
                    showImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: project.coverImage,
                        alt: `${project.title} preview`,
                        fill: true,
                        className: "object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]",
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                        onError: ()=>setImgError(true)
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImagePlaceholder, {
                        project: project
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    project.isConceptProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm border border-border type-body-sm text-text-muted",
                            children: "Design Concept"
                        }, void 0, false, {
                            fileName: "[project]/components/cards/ProjectCard.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cards/ProjectCard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 p-5 flex-1",
                children: [
                    project.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: project.tags.filter((t)=>t !== 'Design Concept').map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2.5 py-1 rounded-full bg-bg-secondary type-body-sm text-text-muted border border-border",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/components/cards/ProjectCard.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "type-body-sm text-text-muted",
                        children: project.industry
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "type-heading-sm text-text-primary group-hover:text-accent transition-colors duration-normal",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "type-body text-text-muted leading-relaxed line-clamp-2 flex-1",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "type-body-sm text-text-disabled group-hover:text-text-secondary transition-colors duration-fast",
                        children: "View details →"
                    }, void 0, false, {
                        fileName: "[project]/components/cards/ProjectCard.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cards/ProjectCard.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cards/ProjectCard.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c1 = ProjectCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImagePlaceholder");
__turbopack_context__.k.register(_c1, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/ProjectModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectModal",
    ()=>ProjectModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * ProjectModal — full-screen project detail overlay.
 *
 * Motion spec (docs/MotionLanguage.md):
 *   - Overlay fades in/out (opacity, 240ms)
 *   - Panel scales up from 0.96 + fades + slight y rise (350ms outExpo)
 *   - Exit mirrors enter (reversed, faster)
 *
 * Accessibility:
 *   - role="dialog" + aria-modal="true"
 *   - aria-labelledby pointing to the project title
 *   - Focus trap: first focusable element receives focus on open
 *   - ESC key closes
 *   - Backdrop click closes
 *   - Focus returns to trigger element on close
 *   - Body scroll locked while open
 */ 'use client';
;
;
;
;
;
;
function ProjectModal({ project, isOpen, onClose, triggerRef }) {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleId = 'modal-title';
    // ── Lock body scroll ──────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectModal.useEffect": ()=>{
            if (isOpen) {
                const scrollY = window.scrollY;
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollY}px`;
                document.body.style.width = '100%';
            } else {
                const scrollY = document.body.style.top;
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                if (scrollY) window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            }
            return ({
                "ProjectModal.useEffect": ()=>{
                    document.body.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.top = '';
                    document.body.style.width = '';
                }
            })["ProjectModal.useEffect"];
        }
    }["ProjectModal.useEffect"], [
        isOpen
    ]);
    // ── Focus management ──────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectModal.useEffect": ()=>{
            if (isOpen) {
                // Small delay allows the animation to begin before stealing focus
                const timer = setTimeout({
                    "ProjectModal.useEffect.timer": ()=>closeButtonRef.current?.focus()
                }["ProjectModal.useEffect.timer"], 50);
                return ({
                    "ProjectModal.useEffect": ()=>clearTimeout(timer)
                })["ProjectModal.useEffect"];
            } else {
                // Return focus to the element that opened the modal
                triggerRef?.current?.focus();
            }
        }
    }["ProjectModal.useEffect"], [
        isOpen,
        triggerRef
    ]);
    // ── ESC key ───────────────────────────────────────────────
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectModal.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Escape') onClose();
        }
    }["ProjectModal.useCallback[handleKeyDown]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectModal.useEffect": ()=>{
            if (isOpen) {
                document.addEventListener('keydown', handleKeyDown);
                return ({
                    "ProjectModal.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
                })["ProjectModal.useEffect"];
            }
        }
    }["ProjectModal.useEffect"], [
        isOpen,
        handleKeyDown
    ]);
    // ── Focus trap ────────────────────────────────────────────
    const handleTabKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectModal.useCallback[handleTabKey]": (e)=>{
            if (e.key !== 'Tab') return;
            const focusable = e.currentTarget.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
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
    }["ProjectModal.useCallback[handleTabKey]"], []);
    // Overlay/panel animation variants — instant when reduced motion
    const overlayVariants = shouldReduce ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    } : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalOverlay"];
    const panelVariants = shouldReduce ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    } : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalContent"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: overlayVariants,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    className: "fixed inset-0 z-overlay bg-black/50 backdrop-blur-sm",
                    "aria-hidden": "true",
                    onClick: onClose
                }, "modal-overlay", false, {
                    fileName: "[project]/components/common/ProjectModal.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: panelVariants,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": titleId,
                    onKeyDown: handleTabKey,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-x-4 top-[5vh] bottom-[5vh]', 'sm:inset-x-8 md:inset-x-[10%] lg:inset-x-[15%] xl:inset-x-[20%]', 'z-modal overflow-y-auto overscroll-contain', 'bg-surface rounded-xl shadow-elevated', 'focus:outline-none'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 flex justify-end p-4 bg-surface/80 backdrop-blur-sm border-b border-border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: closeButtonRef,
                                onClick: onClose,
                                "aria-label": "Close project details",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center size-9 rounded-md', 'text-text-muted hover:text-text-primary hover:bg-bg-secondary', 'transition-colors duration-fast ease-smooth', 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/common/ProjectModal.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/common/ProjectModal.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 sm:p-8 lg:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "type-label text-text-muted mb-2",
                                            children: project.industry
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: titleId,
                                            className: "type-heading-xl text-text-primary",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "type-body-lg text-text-muted mt-3 max-w-[640px]",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                project.coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 overflow-hidden rounded-xl bg-bg-secondary aspect-video",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.coverImage,
                                        alt: `${project.title} — desktop preview`,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/ProjectModal.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "type-heading-sm text-text-primary mb-2",
                                                    children: "Business Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "type-body text-text-muted",
                                                    children: project.goal
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        project.features && project.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "type-heading-sm text-text-primary mb-2",
                                                    children: "Key Features"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1",
                                                    children: project.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "type-body text-text-muted flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": "true",
                                                                    className: "text-accent mt-0.5",
                                                                    children: "·"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 27
                                                                }, this),
                                                                f
                                                            ]
                                                        }, f, true, {
                                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this),
                                        project.palette && project.palette.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "type-heading-sm text-text-primary mb-3",
                                                    children: "Color Palette"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: project.palette.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "size-8 rounded-md border border-border shadow-soft",
                                                            style: {
                                                                backgroundColor: color
                                                            },
                                                            title: color,
                                                            "aria-label": color
                                                        }, color, false, {
                                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        project.mobileImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "type-heading-sm text-text-primary mb-3",
                                                    children: "Mobile View"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-hidden rounded-lg bg-bg-secondary max-w-[160px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: project.mobileImage,
                                                        alt: `${project.title} — mobile preview`,
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/common/ProjectModal.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/ProjectModal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/ProjectModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/common/ProjectModal.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, "modal-content", true, {
                    fileName: "[project]/components/common/ProjectModal.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/common/ProjectModal.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(ProjectModal, "t2KghVml7wFEEs9d6OIOtfhTHNo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ProjectModal;
var _c;
__turbopack_context__.k.register(_c, "ProjectModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Project data — displayed in the Work section and /work page.
 *
 * BrandGuidelines §12: At launch, conceptual projects are used.
 * These are design concepts clearly presented as such — never as
 * fake client testimonials. The PRD explicitly mandates this.
 *
 * Each concept demonstrates design quality across a different industry.
 * Images live in public/images/projects/[slug]/
 *
 * To add a real client project:
 * 1. Add preview images to public/images/projects/[slug]/
 * 2. Set isConceptProject: false
 * 3. Add the object to this array
 * 4. The /work page and sitemap.ts update automatically
 */ __turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: 'aroma-coffee',
        title: 'Aroma Coffee',
        industry: 'Food & Beverage',
        description: 'A premium digital experience for a specialty coffee shop focused on communicating craftsmanship, origin and community.',
        goal: 'Build a website that converts curious visitors into loyal customers — by making the coffee experience feel tangible before they walk through the door.',
        coverImage: '/images/projects/aroma-coffee/cover.webp',
        mobileImage: '/images/projects/aroma-coffee/mobile.webp',
        tags: [
            'Landing Page',
            'Brand Identity',
            'Design Concept'
        ],
        palette: [
            '#1A1209',
            '#C8A87A',
            '#F5F0E8',
            '#3D2B1A'
        ],
        features: [
            'Full-screen hero with product photography',
            'Menu showcase with seasonal highlights',
            'Story section communicating origin and craft',
            'WhatsApp reservation integration',
            'Location & hours block with Google Maps embed'
        ],
        isConceptProject: true
    },
    {
        slug: 'nova-dental',
        title: 'Nova Dental',
        industry: 'Healthcare',
        description: 'A clean, trustworthy website for a modern dental clinic designed to reduce appointment anxiety and increase new patient bookings.',
        goal: 'Increase online appointment requests by making the clinic feel approachable, professional and easy to contact.',
        coverImage: '/images/projects/nova-dental/cover.webp',
        mobileImage: '/images/projects/nova-dental/mobile.webp',
        tags: [
            'Business Website',
            'Healthcare',
            'Design Concept'
        ],
        palette: [
            '#F8FAFF',
            '#2563EB',
            '#1E3A5F',
            '#64748B'
        ],
        features: [
            'Services overview with procedure descriptions',
            'Before/after gallery with smooth transitions',
            'Team section with doctor profiles',
            'WhatsApp appointment booking',
            'FAQ section addressing common patient concerns'
        ],
        isConceptProject: true
    },
    {
        slug: 'forma-studio',
        title: 'Forma Studio',
        industry: 'Architecture & Design',
        description: 'A minimal, portfolio-driven website for an architecture studio where the work speaks — and the design never competes with it.',
        goal: 'Position the studio as a premium practice and attract higher-value residential and commercial project inquiries.',
        coverImage: '/images/projects/forma-studio/cover.webp',
        mobileImage: '/images/projects/forma-studio/mobile.webp',
        tags: [
            'Portfolio',
            'Personal Brand',
            'Design Concept'
        ],
        palette: [
            '#F7F6F4',
            '#1C1C1C',
            '#A89880',
            '#E8E4DC'
        ],
        features: [
            'Full-bleed project gallery with horizontal scroll',
            'Project detail pages with photography focus',
            'Studio manifesto section',
            'Awards and press mentions',
            'Contact form with project brief intake'
        ],
        isConceptProject: true
    },
    {
        slug: 'apex-fitness',
        title: 'Apex Fitness',
        industry: 'Health & Wellness',
        description: 'A bold but refined website for a premium fitness center that communicates energy, discipline and results.',
        goal: 'Drive membership sign-ups by communicating the premium experience and community the gym offers.',
        coverImage: '/images/projects/apex-fitness/cover.webp',
        mobileImage: '/images/projects/apex-fitness/mobile.webp',
        tags: [
            'Business Website',
            'Health & Wellness',
            'Design Concept'
        ],
        palette: [
            '#0A0A0A',
            '#E8FF00',
            '#1A1A1A',
            '#F5F5F5'
        ],
        features: [
            'Hero section with video background',
            'Class schedule with filter by category',
            'Trainer profiles and credentials',
            'Membership plans comparison table',
            'WhatsApp trial pass booking'
        ],
        isConceptProject: true
    },
    {
        slug: 'meridian-law',
        title: 'Meridian Law',
        industry: 'Legal',
        description: 'An authoritative yet approachable website for a law firm that handles commercial and corporate cases — built to convert high-value leads.',
        goal: 'Establish credibility and generate qualified consultation requests from business clients.',
        coverImage: '/images/projects/meridian-law/cover.webp',
        mobileImage: '/images/projects/meridian-law/mobile.webp',
        tags: [
            'Business Website',
            'Professional Services',
            'Design Concept'
        ],
        palette: [
            '#1A1A2E',
            '#C9A84C',
            '#F4F4F0',
            '#2D2D44'
        ],
        features: [
            'Practice areas with detailed service pages',
            'Attorney profiles with expertise highlights',
            'Case results and testimonials section',
            'Blog for legal insights',
            'Secure contact form with confidentiality notice'
        ],
        isConceptProject: true
    },
    {
        slug: 'lucia-beauty',
        title: 'Lucía Beauty Studio',
        industry: 'Beauty & Wellness',
        description: 'An elegant, personal website for a high-end beauty studio — designed to attract premium clientele and simplify booking.',
        goal: 'Communicate luxury positioning and convert website visitors into booked appointments.',
        coverImage: '/images/projects/lucia-beauty/cover.webp',
        mobileImage: '/images/projects/lucia-beauty/mobile.webp',
        tags: [
            'Landing Page',
            'Personal Brand',
            'Design Concept'
        ],
        palette: [
            '#FDF6F0',
            '#C9967A',
            '#2C2C2C',
            '#F0E6DC'
        ],
        features: [
            'Service menu with pricing and descriptions',
            'Before/after portfolio gallery',
            'Online booking integration',
            'Instagram feed embed',
            'Gift card section'
        ],
        isConceptProject: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/FeaturedWorkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedWorkSection",
    ()=>FeaturedWorkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/AnimationWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$StaggerWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/StaggerWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cards/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/ProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/WhatsAppCTA.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * FeaturedWorkSection — portfolio showcase.
 *
 * Objection answered: "Can I see examples of your work?"
 * Section background: white (section-white)
 *
 * Zero-state: When projects array is empty (at launch), shows an honest
 * empty state message — no fake projects, no placeholders.
 * The empty state communicates "actively building" rather than "nothing to show".
 *
 * When projects exist:
 *   - Grid of ProjectCards
 *   - Clicking a card opens ProjectModal with full detail
 *   - Client Component (manages modal open/close state)
 *
 * Server Component outer wrapper, Client Component for modal state.
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
// ─── Empty State ──────────────────────────────────────────────
function EmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
        variant: "fadeUp",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-6 py-16 px-8 rounded-2xl border border-dashed border-border bg-bg-secondary text-center max-w-xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center w-14 h-14 rounded-full bg-surface border border-border text-text-muted",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        size: 24,
                        strokeWidth: 1.5,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "type-heading-sm text-text-primary",
                            children: "Projects in progress"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "type-body text-text-muted leading-relaxed",
                            children: "We are actively building client projects. Our portfolio will be published here as work is completed. In the meantime, we would love to hear about yours."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppCTA"], {
                    label: "Start Your Project",
                    size: "md",
                    message: "Hello Pixel Studio by Bovio, I'm interested in starting a project with you."
                }, void 0, false, {
                    fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
function FeaturedWorkSection() {
    _s();
    const [activeProject, setActiveProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ref to the card element that opened the modal — focus returns here on close
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasProjects = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length > 0;
    // Show max 6 on homepage
    const featured = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].slice(0, 6);
    function handleOpen(project, trigger) {
        triggerRef.current = trigger;
        setActiveProject(project);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                id: "work",
                variant: "white",
                labelledBy: "work-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
                                variant: "fadeUp",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                                    label: "Featured Work",
                                    headline: hasProjects ? 'Projects built for real businesses' : 'Design concepts',
                                    subheadline: hasProjects ? 'A selection of projects built for real businesses with real goals.' : 'A showcase of design concepts demonstrating what we build for our clients.',
                                    headingId: "work-heading"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            hasProjects ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$StaggerWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerWrapper"], {
                                as: "ul",
                                speed: "normal",
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: featured.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
                                        variant: "scaleUp",
                                        as: "li",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCard"], {
                                            project: project,
                                            onOpen: handleOpen
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    }, project.slug, false, {
                                        fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {}, void 0, false, {
                                fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectModal"], {
                project: activeProject,
                isOpen: activeProject !== null,
                onClose: ()=>setActiveProject(null),
                triggerRef: triggerRef
            }, void 0, false, {
                fileName: "[project]/components/sections/FeaturedWorkSection.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FeaturedWorkSection, "LFzzGTzNGeI5dkeDf75092H04vo=");
_c1 = FeaturedWorkSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "EmptyState");
__turbopack_context__.k.register(_c1, "FeaturedWorkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/FAQItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQItem",
    ()=>FAQItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.42.2_react_f3ba0e82349dc228ac700238c5269e02/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.511.0_react@19.2.7/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * FAQItem — single accordion item with smooth height animation.
 *
 * Motion spec (docs/MotionLanguage.md §8):
 *   - Height: 0 → auto via Framer Motion layout animation
 *   - Content opacity fades in after height opens
 *   - Icon rotates 180° on open
 *   - Duration: 350ms ease-in-out
 *   - Never snaps open — always smooth
 *
 * Accessibility:
 *   - Button has aria-expanded
 *   - Panel has role="region" and aria-labelledby pointing to the button
 *   - Only one item can be open at a time (controlled by parent FAQSection)
 *   - Fully keyboard navigable (Tab + Enter/Space)
 *
 * Reduced motion:
 *   - Height animation still runs (structural, not decorative)
 *   - Blur and opacity transitions are disabled
 */ 'use client';
;
;
;
;
;
function FAQItem({ item, isOpen, onToggle, index }) {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const buttonId = `faq-btn-${index}`;
    const panelId = `faq-panel-${index}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-border last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: buttonId,
                "aria-expanded": isOpen,
                "aria-controls": panelId,
                onClick: onToggle,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group w-full flex items-center justify-between gap-4', 'py-5 text-left', 'type-heading-sm text-text-primary', 'cursor-pointer', 'transition-colors duration-fast ease-smooth', 'hover:text-text-secondary', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/components/common/FAQItem.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        "aria-hidden": "true",
                        variants: shouldReduce ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqIcon"],
                        animate: isOpen ? 'open' : 'closed',
                        className: "shrink-0 text-text-muted transition-colors duration-fast group-hover:text-text-secondary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$511$2e$0_react$40$19$2e$2$2e$7$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 20,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/common/FAQItem.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/FAQItem.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/FAQItem.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    id: panelId,
                    role: "region",
                    "aria-labelledby": buttonId,
                    initial: {
                        height: 0
                    },
                    animate: {
                        height: 'auto',
                        transition: {
                            duration: shouldReduce ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].medium,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
                        }
                    },
                    exit: {
                        height: 0,
                        transition: {
                            duration: shouldReduce ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION"].fast,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE"].inOut
                        }
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$42$2e$2_react_f3ba0e82349dc228ac700238c5269e02$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: shouldReduce ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqContent"],
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        className: "type-body-lg text-text-muted pb-5 pr-10 leading-relaxed",
                        children: item.answer
                    }, void 0, false, {
                        fileName: "[project]/components/common/FAQItem.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                }, panelId, false, {
                    fileName: "[project]/components/common/FAQItem.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/FAQItem.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/FAQItem.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(FAQItem, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = FAQItem;
var _c;
__turbopack_context__.k.register(_c, "FAQItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/faqs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FAQ data — displayed in the FAQ section on the homepage.
 *
 * Each entry should address a real objection or concern a business owner has.
 * Keep answers concise, honest and reassuring.
 * Answers also feed the FAQPage JSON-LD schema in lib/structured-data.ts.
 */ __turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        id: 'cost',
        question: 'How much does a website cost?',
        answer: 'Every project is different, so pricing depends on the scope, complexity and timeline. We offer transparent quotes with no hidden fees. The best way to get an accurate estimate is to start a conversation — it takes less than five minutes.'
    },
    {
        id: 'timeline',
        question: 'How long does a project take?',
        answer: 'A landing page typically takes one to two weeks. A full business website usually takes two to four weeks. Timelines depend on feedback speed and project complexity. We always provide a clear schedule before we begin.'
    },
    {
        id: 'hosting',
        question: 'Do you provide hosting?',
        answer: 'Yes. We set up and configure hosting on reliable platforms like Vercel or Netlify. Your website will be fast, secure and always online. We can also work with your existing hosting if you prefer.'
    },
    {
        id: 'domain',
        question: 'Can you help with domains?',
        answer: 'Absolutely. We can help you register a domain, connect it to your new website and configure any DNS settings needed. If you already have a domain, we will handle the migration.'
    },
    {
        id: 'mobile',
        question: 'Will my website work on mobile devices?',
        answer: 'Every website we build is designed mobile-first. It will look and work beautifully on phones, tablets and desktop computers. Most of your customers are on mobile — so that is always our priority.'
    },
    {
        id: 'changes',
        question: 'Can I request changes?',
        answer: 'Yes. We include a revision period in every project so you can request adjustments before the final launch. After launch, changes can be handled through a maintenance agreement or billed per request.'
    },
    {
        id: 'seo',
        question: 'Will my website appear on Google?',
        answer: 'Every website we build includes solid SEO foundations — proper page structure, metadata, fast loading and mobile optimization. This gives you a strong starting point. Reaching the top of search results requires ongoing content and SEO work, which we can also help with.'
    },
    {
        id: 'maintenance',
        question: 'Do you provide maintenance after launch?',
        answer: 'Yes. We offer ongoing maintenance plans that cover updates, security monitoring, performance optimization and content changes. You can focus on your business while we keep your website running smoothly.'
    },
    {
        id: 'redesign',
        question: 'Can you redesign an existing website?',
        answer: 'Yes. If your current website feels outdated, slow or is not generating results, we can transform it into a modern experience that better represents your business. We will analyze what is working and improve everything else.'
    },
    {
        id: 'start',
        question: 'How do we start?',
        answer: 'Send us a message on WhatsApp. Tell us a little about your business and what you need. We will schedule a short discovery call, walk you through our process and put together a proposal. No commitment required.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/FAQSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.10_@babel+core@7._5c607d5a842f8065d15620f625dc6761/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/AnimationWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FAQItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/FAQItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/WhatsAppCTA.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$faqs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/faqs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * FAQSection — addresses common objections before they become blockers.
 *
 * Objection answered: "What about [specific concern]?"
 * Section background: gray (section-gray)
 *
 * State: tracks which FAQ item is currently open (only one at a time).
 * Must be a Client Component — manages the open accordion state.
 *
 * Layout: single column, max reading width.
 * Each item uses FAQItem which handles its own accordion animation.
 *
 * Accessibility:
 *   - Section is aria-labelledby the heading
 *   - Each FAQItem manages its own aria-expanded, role="region", etc.
 *   - The FAQ data also feeds the FAQPage JSON-LD schema
 */ 'use client';
;
;
;
;
;
;
;
;
function FAQSection() {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleToggle(id) {
        setOpenId((prev)=>prev === id ? null : id);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "faq",
        variant: "gray",
        labelledBy: "faq-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            narrow: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
                        variant: "fadeUp",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            label: "Common Questions",
                            headline: "Answers to what most people ask before getting in touch",
                            subheadline: "If your question is not here, ask us directly — we respond quickly.",
                            headingId: "faq-heading"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FAQSection.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FAQSection.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
                        variant: "fadeUp",
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-label": "Frequently asked questions",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$faqs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqs"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FAQItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQItem"], {
                                    item: item,
                                    isOpen: openId === item.id,
                                    onToggle: ()=>handleToggle(item.id),
                                    index: index
                                }, item.id, false, {
                                    fileName: "[project]/components/sections/FAQSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FAQSection.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FAQSection.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$AnimationWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
                        variant: "fadeUp",
                        delay: 0.15,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "type-body text-text-muted",
                                    children: "Still have questions?"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FAQSection.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$10_$40$babel$2b$core$40$7$2e$_5c607d5a842f8065d15620f625dc6761$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$WhatsAppCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppCTA"], {
                                    label: "Ask Us on WhatsApp",
                                    variant: "secondary",
                                    size: "sm",
                                    message: "Hello Pixel Studio by Bovio, I have a question about your services."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FAQSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/FAQSection.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FAQSection.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/FAQSection.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/FAQSection.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/FAQSection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(FAQSection, "Cc3RrB+G+FlU60T4PVhCtr70GIw=");
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0-8bsdj._.js.map