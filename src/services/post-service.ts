import Post from 'app/models/post'
import data from 'app/data/posts.json'

class PostService {
    private posts: Post[]

    constructor() {
        this.posts = data;
    }

    async findById(id: string) {
        return this.posts.find(p => p.id === id)
    }

    async getPosts() {
        await this.timeout(1000)
        return this.posts
    }

    timeout(ms: number) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
}

const postService = new PostService()

export default postService
