// Defaults
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
// Components
import { View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { SpacesCollection } from './components';

import { getSpaces, updateSpacesCount } from './actions/spaces';
import { connectToWebsocket } from './actions/websocket';

const Root = (props) => {

    // store the websocket reference
    const ws = useRef(null);

    // bootstrap api calls
    useEffect(() => {
        props.getSpaces();
        props.connectToWebsocket()
    }, []);

    // initialize websocket
    useEffect(() => {
        if(props.websocketURL !== '') {
            ws.current = new WebSocket(props.websocketURL);

            ws.current.onopen = (event) => {
                console.log('websocket has opened', event);
            }

            ws.current.onerror = (error) => {
                console.log('websocket has errored', error);
            }

            ws.current.onmessage = (e) => {
                const data = JSON.parse(e.data);
                // check to see if we have data coming back from the sockets response
                if(data && data.payload) {
                    props.updateSpacesCount(data.payload.space_id, data.payload.count)
                }
            };
            
            // close socket when component unmounts
            return () => {
                console.log('component is unmounting');
                ws.current.close();
            } 
        }
    }, [props.websocketURL]);

    return (
        <View style={styles.spaceCollectionContainer}>
            <SpacesCollection
                fetchingStatus={props.fetchingSpaceStatus}
                collection={props.spaceCollection}
                onRefresh={props.getSpaces}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    spaceCollectionContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

const mapStateToProps = state => {
    return {
        spaceCollection: state.spacesReducer.spaceCollection,
        fetchingSpaceStatus: state.spacesReducer.fetchingSpaceStatus,
        websocketURL: state.websocketReducer.url
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getSpaces,
        connectToWebsocket,
        updateSpacesCount
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Root)
