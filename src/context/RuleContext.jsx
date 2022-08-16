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
    const [dataApplied, setDataApplied] = useState(false);

    const handleSaveVote = (id, positive, negative) => {
        const voteStore = {
            positive: positive,
            negative: negative
          };
        localStorage.setItem(`voteStore-${id}`, JSON.stringify(voteStore));
    }

    const updateRecords = (characters) => {
        setRecords(characters);
    }

    const getCharactersUpdated = (characters) => {
        if (characters?.data && characters.data.length > 0) {
            const array = [];
            characters.data.forEach(element => {
                const object = initialState.pictures.find(picture => picture.name === element.picture);
                if (object) {
                    element.picture = object.src;
                }
                array.push(element);
            });
            return array;
        }
        return characters;
    }

    useEffect(() => {
        (async () => {
            if (!dataApplied && data) {
                setRecords(data);
                setDataApplied(true);
            }
        })()
    }, [records]);

    const contextValue = {
        data: {
            records
        },
        mutations: {
            getCharactersUpdated,
            handleSaveVote,
            updateRecords
        }
    };
    return (
        <RuleContext.Provider value={contextValue}>
            { children }
        </RuleContext.Provider>
    );
};
