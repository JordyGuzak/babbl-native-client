import Media from 'app/models/media'

type Post = {
    id: string,
    username: string,
    displayName: string,
    title: string,
    description: string,
    media: Media[]
}

export default Post
