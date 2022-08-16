import { differenceInDays, differenceInMonths } from 'date-fns';

export const diffInText = (dateTo, dateFrom) => {
    const objDate = { mainNumber: null, text: null }
    try {
        const diffDays = differenceInDays(dateTo, dateFrom)
        if (diffDays >= 0 && diffDays < 31) {
          objDate.mainNumber = diffDays + 1
          objDate.text = 'days'
        } else {
          const dif = differenceInMonths(dateTo, dateFrom)
          if (dif >= 0 && dif <= 12) {
            objDate.mainNumber = dif + 1
            objDate.text = 'months'
          } else {
            const years = Math.floor(dif / 12)
            const months = (dif -1 ) - (years * 12)
            objDate.mainNumber = -1 * (years + 1)
            if (months !== 0) {
              console.log("year", years);
              objDate.text = (years+1) === -1 ? `year ${months} months` : `years ${months} months`
            } else {
              objDate.text = (years+1) === -1 ? 'year' : 'years'
            }
          }
        }
    } catch (e) {
        console.error(e)
    }
    return objDate
}
