export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.25,
        }
    }
}

export const fadeInDown = {
    initial: {
        y: -70,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        // transition: { type: 'spring', velocity: 2 }
        transition: { type: 'tween', duration: 1.2 },
        // transition: { ease: 'easeInOut', duration: 0.65 } 
        // transition: { type: 'tween', duration: 0.1 } ori
        // transition:{ type: "spring", stiffness: 280, }
    }
}

export const fadeInUpwards = {
    initial: {
        y: 170,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        // transition: { type: 'spring', velocity: 2 }
        transition: { type: 'tween', duration: 1.2 },
        // transition: { ease: 'easeInOut', duration: 0.65 } 
        // transition: { type: 'tween', duration: 0.1 } ori
        // transition:{ type: "spring", stiffness: 280, }
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
        transition: { type: 'tween', duration: 0.9 },
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
        transition: { type: 'tween', duration: 0.9 },
        // transition: { type: 'spring', velocity: 2, stiffness: 480, }
        // transition: { ease: 'easeInOut', duration: 0.6 } 
        // transition: { type: 'tween', duration: 0.1 } ori
        // transition:{ type: "spring", stiffness: 280, }
    }
}