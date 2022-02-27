import { formatRelative, subDays } from 'date-fns'

export const moment = (date:Date) => {
    const newDate = new Date(date)
    return formatRelative(subDays(newDate, 3), new Date())
}