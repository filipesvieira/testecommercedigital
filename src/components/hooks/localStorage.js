import React, { useEffect, useState } from 'react';
import AsyncLocalStorage from "@createnextapp/async-local-storage";

export default class localStorage extends React.Component {

    getItemLocalStorage = async (key) =>  {
        let item = await AsyncLocalStorage.getItem(key);
        return item;
    };

    setItemLocalStorage = async (key, value) => {
        let item = await AsyncLocalStorage.setItem(key, value);;
        return item;
    };

    clearLocalStorage = async () => {
        let item = await AsyncLocalStorage.clearStorage();
        return item;
    };

}
