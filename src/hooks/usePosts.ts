import { request } from "@/api"
import { Post } from "@/types/Post"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
      async function getPosts() {
          try {
             const response = await request<Post[]>('GET', '/posts')

             const allPosts = response.data
        
             setPosts(allPosts)
          } catch (error) {
            if (error instanceof AxiosError) {
                console.error("Erro ao buscar os posts:", error.response?.data);
            } else {
                console.error("Erro desconhecido:", error);
            }
          }
      } 
      getPosts()
    }, [])

    return {
        posts
    }
}