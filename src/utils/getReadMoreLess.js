import parse from 'html-react-parser';

export const getReadMoreLessStripHTML = (html, limit) => {
    let strArray = parse(html)

    let wordCount = 0

    let breakPoint = 0

    strArray.forEach((elem, index) => {
        console.log({ elem, wordCount, limit, index })

        if (!(elem?.props?.children) || wordCount > limit) return

        let wordLength = elem?.props?.children?.length

        wordCount += wordLength

        if (wordCount > limit) breakPoint = index
    })

    const exeededWordLimit = breakPoint !== 0

    const begin = strArray.slice(0, breakPoint)

    const end = strArray.slice(breakPoint)

    return { begin, end, exeededWordLimit }
} 