export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.15,
        }
    }
}

export const staggerHeroContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.45,
            delayChildren: 0.45,
        }
    }
}

export const fadeInDown = {
    initial: {
        y: -25,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        // transition: { type: 'spring', velocity: 2 }
        transition: { 
            type: 'tween', 
            duration: 0.65
        },
        // transition: { ease: 'easeInOut', duration: 0.65 } 
        // transition: { type: 'tween', duration: 0.1 } ori
        // transition:{ type: "spring", stiffness: 280, }
    }
}

export const fadeInUpwards = {
    initial: {
        y: 40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 0.95 
        },
    }
}

export const fadeLTR = {
    initial: {
        x: -40,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 0.95
        },
    }
}

export const fadeRTL = {
    initial: {
        x: 40,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 0.95 
        },
    }
}

// "linear"
// "easeIn", "easeOut", "easeInOut"
// "circIn", "circOut", "circInOut"
// "backIn", "backOut", "backInOut"
// "anticipate"

export const ketupat = {
    initial: {
        y: -80,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 0.9 
        },
        // transition: { type: 'spring', stiffness: 120, damping: 5, restDelta: 0.001 }
        // transition: { ease: 'easeInOut', duration: 0.6 } 
        // transition: { type: 'tween', duration: 0.1 } ori
        // transition:{ type: "spring", stiffness: 280, }
    }
}

export const light = {
    initial: {
        y: -70,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 0.9 
        },
        // transition: { type: 'spring', velocity: 2, stiffness: 480, }
        // transition: { ease: 'easeInOut', duration: 0.6 } 
        // transition: { type: 'tween', duration: 0.1 } ori
        // transition:{ type: "spring", stiffness: 280, }
    }
}