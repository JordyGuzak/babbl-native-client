import React, { useEffect, useState } from 'react'
import {
    Column,
    useColorModeValue,
    ScrollView,
} from 'native-base'

import ThemeToggle from 'app/components/theme-toggle'
import AnimatedColorBox from 'app/components/animated-color-box'
import Post from 'app/models/post'
import PostService from 'app/services/post-service'
import Timeline from 'app/components/timeline'

export default function MainScreen() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        PostService.getPosts().then(response => setPosts(response ?? []))
    }, [posts])

    return (
        <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'primary.900')} w="full" pt={4} safeArea>
            <ScrollView>
                <Column alignItems="center">
                    <ThemeToggle />
                    <Timeline posts={posts} />
                </Column>
            </ScrollView>
        </AnimatedColorBox>
    )
}
