import React from 'react';

function useLocalStorage(itemName, initialValue) {

    // manejo de loading y error en un solo estado
    // const [dataStatus, setDataStatus] = React.useState({loading: true, error:false})

    const [error, setError] = React.useState(false);
    const [loading, setloading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parseItem = [];
                } else {
                    parseItem = JSON.parse(localStorageItem);
                }

                setItem(parseItem);
                setloading(false);

            } catch (error) {
                setError(error);
            }

        }, 1000)
    });


    const saveItem = (newTodos) => {
        try {
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newTodos);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };