import { createContext, useEffect, useState } from 'react';

const initialState = { amount: 0 };

export const RuleContext = createContext(initialState);

/**
 * define the global state for main features concerns the users, products, reedemptions 
 * @returns context created
 */
export const RuleProvider = ({ children }) => {
    const [amount, setAmount] = useState(initialState.amount);

    const updateAmount = (valueAmount) => {
        setAmount(valueAmount);
    }

    const contextValue = {
        data: {
            amount
        },
        mutations: {
            updateAmount
        }
    };
    return (
        <RuleContext.Provider value={contextValue}>
            { children }
        </RuleContext.Provider>
    );
};
