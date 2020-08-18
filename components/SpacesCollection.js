import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

// Renders a list of spaces
export default SpacesCollection = props => {
    return (
        <FlatList
            data={props.collection}
            renderItem={
                ({ item }) => (
                    <Item
                        name={item.name}
                        count={item.current_count}
                        subtitle={`\nCapacity: ${item.capacity || 'Not Listed'} \nTimezone: ${item.time_zone}`} />
                )
            }
            keyExtractor={item => item.id}
            refreshing={props.fetchingStatus}
            onRefresh={props.onRefresh}
      />
    )
};


