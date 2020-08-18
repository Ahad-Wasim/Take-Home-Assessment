import React, { useEffect, useRef, useState } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default Item = props => {
    // avoid animation on initial render
    const [isNotBeginning, setBeginningStatus] = useState(false);
    // store the animation reference here
    const AnimationRef = useRef(null);
    useEffect(() => {
        if(AnimationRef && isNotBeginning) {
            AnimationRef.current.shake();
        }
        setBeginningStatus(true);
    }, [props.count]);
    const RightElement = (
        <TouchableWithoutFeedback>
            <Animatable.View ref={AnimationRef} style={styles.badge}>
                <Text style={styles.countText}>{props.count}</Text>
            </Animatable.View>
        </TouchableWithoutFeedback>
    );

    return (
        <ListItem
            bottomDivider
            title={props.name}
            subtitle={props.subtitle}
            rightElement={RightElement}
        />
    )
};

const styles = StyleSheet.create({
    badge: {
        width: 50,
        backgroundColor: '#2587dc',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    countText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
})