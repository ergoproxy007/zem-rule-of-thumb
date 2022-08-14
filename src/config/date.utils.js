import { differenceInDays, differenceInMonths } from 'date-fns';

export const diffInText = (dateTo, dateFrom) => {
    const objDate = { mainNumber: null, text: null }
    try {
        const diffDays = differenceInDays(dateTo, dateFrom)
        if (diffDays < 31) {
          objDate.mainNumber = diffDays + 1
          objDate.text = 'days'
        } else {
          const dif = differenceInMonths(dateTo, dateFrom)
          if (dif <= 12) {
            objDate.mainNumber = dif + 1
            objDate.text = 'months'
          } else {
            const years = Math.floor(dif / 12)
            const months = dif - years * 12
            objDate.mainNumber = years
            if (months !== 0) {
              objDate.text = `years ${months} months`
            } else {
              objDate.text = 'years'
            }
          }
        }
    } catch (e) {
        console.error(e)
    }
    return objDate
}
