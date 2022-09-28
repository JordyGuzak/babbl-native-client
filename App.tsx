import * as React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import AppContainer from 'app/components/app-container'
import MainScreen from 'app/screens/main'
import PostScreen from 'app/screens/post';
import Post from 'app/models/post';

export type RootStackParamList = {
    Home: undefined,
    Post: {
        post: Post,
    }
}

const MainStack = createSharedElementStackNavigator<RootStackParamList>()

export default function App() {
    const { Navigator, Screen } = MainStack
    return (
        <AppContainer>
            <Navigator
                initialRouteName="Home"
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,
                }}
            >
                <Screen name="Home" component={MainScreen} options={{ title: 'Timeline' }} />
                <Screen
                    name="Post"
                    component={PostScreen}
                    options={{ title: 'Post' }}
                    sharedElements={(route, otherRoute, showing) => {
                        return [route.params.post.id]
                    }}
                />
            </Navigator>
        </AppContainer>
    );
}
