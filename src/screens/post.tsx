import { Column, Image, useColorModeValue } from 'native-base'
import { Image as ReactImage } from 'react-native'
import { useEffect, useState } from 'react'
import type { NativeStackScreenProps } from 'react-native-screens/native-stack'

import Label from 'app/components/label'
import AnimatedColorBox from 'app/components/animated-color-box'
import PostService from 'app/services/post-service'
import Post from 'app/models/post'
import { RootStackParamList } from 'App'
import { SharedElement } from 'react-navigation-shared-element'

type Props = NativeStackScreenProps<RootStackParamList, 'Post'>

export default function PostScreen({ route }: Props) {
    const { post } = route.params
    const image = post.media[0]
    const aspectRatio = image.dimensions.width / image.dimensions.height

    return (
        <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'primary.900')} w="full" pt={4} safeArea>
            <Column>
                <SharedElement id={post.id}>
                    <Image alt="post image" width={"full"} style={{ aspectRatio: aspectRatio }} source={{ uri: image.url }} />
                </SharedElement>
                <Label>{post.title}</Label>
            </Column>
        </AnimatedColorBox>
    )
}
