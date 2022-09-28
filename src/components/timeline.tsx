import { Row, Column } from 'native-base'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PostListItem from 'app/components/post-list-item'
import Post from 'app/models/post'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'App'

const spacing = 6

const styles = StyleSheet.create({
    post: {
        marginBottom: spacing,
    },
    leftColumn: {
        marginTop: spacing,
        marginLeft: spacing,
        marginRight: spacing / 2,
    },
    rightColumn: {
        marginTop: spacing * 4,
        marginLeft: spacing / 2,
        marginRight: spacing
    }
})

type Props = {
    posts: Post[]
}

export default function Timeline({ posts }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <Row w="full">
            <Column style={styles.leftColumn} alignItems="center" flex={1}>
                {
                    posts.filter((val, index, arr) => index % 2 == 0).map(post => {
                        return (
                            <PostListItem
                                key={post.id}
                                onPress={() => navigation.navigate('Post', { post: post })}
                                style={styles.post}
                                id={post.id}
                                title={post.title}
                                image={post.media[0].url}
                                alt="image" />
                        )
                    })
                }
            </Column>
            <Column style={styles.rightColumn} alignItems="center" flex={1}>
                {
                    posts.filter((val, index, arr) => index % 2 != 0).map(post => {
                        return (
                            <PostListItem
                                key={post.id}
                                onPress={() => navigation.navigate('Post', { post: post })}
                                style={styles.post}
                                id={post.id}
                                title={post.title}
                                image={post.media[0].url}
                                alt="image" />
                        )
                    })
                }
            </Column>
        </Row>
    )
}
