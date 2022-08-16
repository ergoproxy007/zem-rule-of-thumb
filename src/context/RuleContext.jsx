import { createContext, useEffect, useState } from 'react';
import { VotesModel } from 'model/votes.model';
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

    const handleSaveVote = (votesGaugeBar) => {
        const voteStore = new VotesModel(votesGaugeBar.positive, votesGaugeBar.negative, votesGaugeBar.id).build();
        const valueToStorage = JSON.stringify(voteStore);
        localStorage.setItem(`voteStore-${voteStore.id}`, valueToStorage);
    }

    const updateRecords = (characters) => {
        setRecords(characters);
    }

    const restoreVotesSaved = (characters) => {
        if (characters) {
            return characters?.map((element) => {
                const voteStore = JSON.parse(localStorage.getItem(`voteStore-${element.id}`));
                if (voteStore) {
                    element.votes = {positive: voteStore.positive, negative: voteStore.negative};
                }
                return element;
           });
        }
        return characters;
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
            return restoreVotesSaved(array);
        }
        return restoreVotesSaved(characters);
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
