import { createContext } from 'react'

const OrderHistoryData = createContext({
    showHistory: false,
    showHistoryHandler: () => {},
    filterYearHandler: () => {},
    filterYear: null,
    filterYearData: null,
})

export default OrderHistoryData