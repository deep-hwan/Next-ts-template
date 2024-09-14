export function useMoment(dateParam: string | Date) {
    const date = new Date(dateParam)

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const formattedMonth = month >= 10 ? month : `0${month}`
    const formattedDay = day >= 10 ? day : `0${day}`

    return {
        format: (
            typeParam:
                | 'yyyy'
                | 'yyyy.mm'
                | 'yyyy.mm.dd'
                | 'yyyy-mm'
                | 'yyyy-mm-dd'
                | 'yyyy년'
                | 'yyyy년mm월'
                | 'yyyy년mm월dd일',
        ) => {
            const type = typeParam ?? 'yyyy.mm.dd'

            if (type === 'yyyy') return `${year}`

            if (type === 'yyyy.mm') return `${year}.${formattedMonth}`

            if (type === 'yyyy.mm.dd') return `${year}.${formattedMonth}.${formattedDay}`

            if (type === 'yyyy-mm') return `${year}-${formattedMonth}`

            if (type === 'yyyy-mm-dd') return `${year}-${formattedMonth}-${formattedDay}`

            if (type === 'yyyy년') return `${year}년`

            if (type === 'yyyy년mm월') return `${year}년 ${formattedMonth}월`

            if (type === 'yyyy년mm월dd일') return `${year}년 ${formattedMonth}월 ${formattedDay}일`
        },

        formatDetail: (typeParam: 'yyyy.mm.dd' | 'yyyy-mm-dd') => {
            const type = typeParam ?? 'yyyy.mm.dd'

            const hours = date.getHours()
            const minutes = date.getMinutes()

            const formattedHours = hours >= 10 ? hours : `0${hours}`
            const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`

            if (type === 'yyyy.mm.dd')
                return `${year}.${formattedMonth}.${formattedDay} ${formattedHours}:${formattedMinutes}`

            if (type === 'yyyy-mm-dd')
                return `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}`
        },

        fromNow: () => {
            const nowDate = new Date(dateParam)
            const milliSeconds = new Date().getTime() - nowDate.getTime()

            const seconds = milliSeconds / 1000
            if (seconds < 60) return `방금 전`
            const minutes = seconds / 60
            if (minutes < 60) return `${Math.floor(minutes)}분 전`
            const hours = minutes / 60
            if (hours < 24) return `${Math.floor(hours)}시간 전`
            const days = hours / 24
            if (days < 7) return `${Math.floor(days)}일 전`
            const weeks = days / 7
            if (weeks < 5) return `${Math.floor(weeks)}주 전`
            const months = days / 30
            if (months < 12) return `${Math.floor(months)}개월 전`
            const years = days / 365
            return `${Math.floor(years)}년 전`
        },

        date,
    }
}
