import parse from 'html-react-parser';

export const getReadMoreLessStripHTML = (html, limit) => {
    let strArray = parse(html)

    let wordCount = 0

    let breakPoint = 0

    console.log({ strArray })

    if (Array.isArray(strArray)) {

        strArray.forEach((elem, index) => {
            console.log({ elem, wordCount, limit, index })

            if (wordCount > limit) return

            let wordLength = (elem?.props?.children)? elem?.props?.children?.length : elem.length 

            wordCount += wordLength

            if (wordCount > limit) breakPoint = index
        })

        const exeededWordLimit = breakPoint !== 0

        const begin = exeededWordLimit ? strArray.slice(0, breakPoint) : strArray

        const end = exeededWordLimit ? strArray.slice(breakPoint) : ""

        return { begin, end, exeededWordLimit }
    }

    else if (typeof strArray === 'string' || strArray instanceof String) {
        wordCount = strArray.length

        if (wordCount > limit) breakPoint = limit

        const exeededWordLimit = breakPoint !== 0

        const begin = exeededWordLimit ? strArray.slice(0, breakPoint) : strArray

        const end = exeededWordLimit ? strArray.slice(breakPoint) : ""

        return { begin, end, exeededWordLimit }
    }
    
    else {
        return {begin: null, end: null, exceededWordLimit: null}
    }
} 