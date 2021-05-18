export const loginFieldStagger = {
    initial:{
        opacity:0,
    },
    active:{
        opacity:1,
        transition:{
            staggerChildren:5,
            delayChildren:1
        }
    }
}
export const field = {
    initial:{
        opacity:0,
        y:100
    },
    active:{
        opacity:1,
        y:0
    }
}