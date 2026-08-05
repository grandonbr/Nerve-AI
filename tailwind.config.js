tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-container-low": "#0d1c2d",
                "tertiary-fixed": "#e5e1e4",
                "on-primary-container": "#006970",
                "secondary-container": "#7000ff",
                "secondary-fixed": "#e9ddff",
                "on-primary": "#00363a",
                "primary": "#dbfcff",
                "primary-fixed-dim": "#00dbe9",
                "secondary-fixed-dim": "#d1bcff",
                "on-secondary-fixed-variant": "#5700c9",
                "on-secondary-container": "#ddcdff",
                "error": "#ffb4ab",
                "error-container": "#93000a",
                "inverse-surface": "#d4e4fa",
                "on-primary-fixed-variant": "#004f54",
                "on-error-container": "#ffdad6",
                "on-surface": "#d4e4fa",
                "on-secondary": "#3c0090",
                "on-surface-variant": "#b9cacb",
                "secondary": "#d1bcff",
                "on-primary-fixed": "#002022",
                "tertiary-fixed-dim": "#c8c6c8",
                "surface-container-highest": "#273647",
                "on-tertiary-fixed-variant": "#474649",
                "on-background": "#d4e4fa",
                "surface-variant": "#273647",
                "tertiary-container": "#dbd8db",
                "surface": "#051424",
                "inverse-primary": "#006970",
                "tertiary": "#f8f4f7",
                "inverse-on-surface": "#233143",
                "primary-container": "#00f0ff",
                "on-tertiary-fixed": "#1c1b1d",
                "primary-fixed": "#7df4ff",
                "on-tertiary-container": "#5f5e60",
                "surface-tint": "#00dbe9",
                "on-secondary-fixed": "#23005b",
                "surface-bright": "#2c3a4c",
                "background": "#051424",
                "on-error": "#690005",
                "surface-dim": "#051424",
                "on-tertiary": "#313032",
                "surface-container-high": "#1c2b3c",
                "outline-variant": "#3b494b",
                "surface-container-lowest": "#010f1f",
                "outline": "#849495",
                "surface-container": "#122131"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                gutter: "24px",
                "margin-mobile": "20px",
                "container-max": "1280px",
                "section-gap": "120px",
                base: "8px"
            },
            fontFamily: {
                "display-lg-mobile": ["Geist"],
                "headline-md": ["Geist"],
                "body-lg": ["Inter"],
                "display-lg": ["Geist"],
                "label-sm": ["JetBrains Mono"],
                "body-md": ["Inter"]
            },
            fontSize: {
                "display-lg-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "headline-md": ["32px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],
                "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" }],
                "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
                "label-sm": ["12px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
                "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" }]
            }
        }
    }
};
