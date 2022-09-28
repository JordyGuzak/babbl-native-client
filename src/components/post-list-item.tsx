import React from 'react'
import { Pressable, Box, Image, Row, Icon, useColorModeValue, IPressableProps } from 'native-base'
import { StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import Label from 'app/components/label'
import { SharedElement } from 'react-navigation-shared-element'

interface Props extends IPressableProps {
    id: string,
    image: string,
    alt: string,
    title: string,
    style: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    imageContainer: {
        position: 'relative',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
        width: '100%',
        paddingTop: '178%',
    },
    sharedElement: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        padding: 8,
    },
    icon: {
        marginRight: 4,
        marginLeft: 8,
    },
    stats: {
        marginRight: 8,
        marginBottom: 8,
        opacity: 0.48,
        justifyContent: 'flex-end'
    },
    statLabel: {
        fontSize: 11
    }
})

export default function PostListItem(props: Props) {
    return (
        <Pressable {...props} style={[styles.container, props.style]} bg={useColorModeValue('warmGray.50', 'primary.900')}>
            <Box style={styles.imageContainer}>
                <SharedElement id={props.id} style={styles.sharedElement}>
                    <Image style={styles.image} alt="image" source={{ uri: props.image }} resizeMode="cover" />
                </SharedElement>
            </Box>
            <Label style={styles.title}>{props.title}</Label>
            <Row style={styles.stats}>
                <Row alignItems="center">
                    <Icon size="xs" style={styles.icon} as={FontAwesome} name="comments" />
                    <Label style={styles.statLabel}>1337</Label>
                </Row>
                <Row alignItems="center">
                    <Icon size="xs" style={styles.icon} as={AntDesign} name="heart" />
                    <Label style={styles.statLabel}>214</Label>
                </Row>
                <Row alignItems="center">
                    <Icon size="xs" style={styles.icon} as={AntDesign} name="sharealt" />
                    <Label style={styles.statLabel}>11</Label>
                </Row>
            </Row>
        </Pressable>
    )
}
