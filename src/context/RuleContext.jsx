import { createContext, useEffect, useState } from 'react';
import kanye from 'assets/img/kanye.png';
import mark from 'assets/img/mark.png';
import malala from 'assets/img/malala.png';
import cristina from 'assets/img/cristina.png';
import greta from 'assets/img/greta.png';
import elon from 'assets/img/elon.png';
import data from 'assets/data.json';

const initialState = { pictures: [
    { name: 'kanye.png', src: kanye },
    { name: 'mark.png', src: mark },
    { name: 'malala.png', src: malala },
    { name: 'cristina.png', src: cristina },
    { name: 'greta.png', src: greta },
    { name: 'elon.png', src: elon },
] };

export const RuleContext = createContext(initialState);

/**
 * define the global state for main features concerns with the characters 
 * @returns context created
 */
export const RuleProvider = ({ children }) => {
    const [records, setRecords] = useState([]);

    const getCharactersUpdated = (characters) => {
        const array = [];
        if (characters?.data && characters.data.length > 0) {
            characters.data.forEach(element => {
                const object = initialState.pictures.find(picture => picture.name === element.picture);
                if (object) {
                    element.picture = object.src;
                }
                array.push(element);
            });
        }
        return array;
    }

    useEffect(() => {
        (async () => {
            if (data) {
                setRecords(data);
            }
        })()
    }, [records]);

    const contextValue = {
        data: {
            records
        },
        mutations: {
            getCharactersUpdated
        }
    };
    return (
        <RuleContext.Provider value={contextValue}>
            { children }
        </RuleContext.Provider>
    );
};
