window.MathJax = {
    TeX:
    {
        Macros: {
            bm: ["\\boldsymbol #1",1],
            dd: ["\\mathrm d^{#1}", 1, ""],
            diff: ["\\frac{\\dd {#1}}{\\dd {#2}}", 2],
            diag: "\\operatorname{diag}",
            diam: "\\operatorname{diam}",
            dist: "\\operatorname{dist}",
            dt: "\\ \\mathrm d t",
            dx: "\\ \\mathrm d x",
            dy: "\\ \\mathrm d y",
            dz: "\\ \\mathrm d z",
            eps: "\\varepsilon",
            mdiff: ["\\frac{\\dd[#2]#1}{\\dd #3^{#2}}", 3],
            rank: "{\\operatorname{rank}}",
            sgn: "{\\operatorname{sign}}",

            abs: ["{|#1|}", 1],
            Abs: ["{\\left|#1\\right|}", 1],
            norm: ["{\\| #1 \\|}", 1],
            Norm: ["{\\left\\| #1 \\right\\|}", 1],

            set: ["\\{#1\\}", 1],
            openSet: "\\!\\left\\{\\left.",
            closeSet: "\\right.\\right\\}\\!",
            Set: ["\\openSet #1 \\closeSet", 1],
            sth: "\\,|\\,",
            Sth: "\\right| \\left.",
            setcomp: ["{\\overline{{#1}}}", 1],
            closure: ["{\\setcomp{#1}}", 1],
            zeroset: "{\\set 0}",
            minuszero: "{\\setminus\\zeroset}",
            Minuszero: "{\\!\\setminus\\!\\zeroset}",

            id: "{\\operatorname{id}}",
            im: "{\\operatorname{im}}",
            longto: "\\longrightarrow",
            inv: "^{-1}",
            inverse: ["{#1}\\inv", 1],
            fn: ["#1 \\colon #2 \\longto", 2],
            fnm: ["\\fn{#1}{#2} #3, \\quad #4 \\longmapsto", 4],

            grad: "{\\operatorname{grad}}",
            div: "{\\operatorname{div}}",
            rot: "{\\operatorname{rot}}",
            curl: "{\\operatorname{curl}}",
            Laplace: "{\\mathop{}\\!\\mathbin\\bigtriangleup}",

            bsd: "{\\operatorname{bsd}}",
            extp: "{\\bigwedge\\nolimits}",
            H: "H_{DR}",

            supp: "{\\operatorname{supp}}",
            trace: "{\\operatorname{trace}}"
        }
    }
};
