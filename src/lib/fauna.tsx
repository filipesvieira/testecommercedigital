import { GraphQLClient, gql } from 'graphql-request'
const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
    headers: {
        // authorization: `Bearer ${process.env.FAUNA_ADMIN_KEY}`,
        authorization: `Bearer fnAEktQ-Y1ACQaaQ297SLkqeZYKw9qSDWmVsl5i-`,
    },
})
import React, { useEffect, useState } from 'react';
import AsyncLocalStorage from "@createnextapp/async-local-storage";

export default class fauna extends React.Component {

    listStoresEntries = () => {
        const query = gql`
            query Entries($size: Int) {
                allStores(_size: $size) {
                    data {
                        _id
                    }
                }
            }
        `
        let resp = graphQLClient.request(query, { size: 999 })
            .then((data) => {
                // console.log('GET GRAPHQL ', data)
                resp = data;
            })
        return resp
    }
}
