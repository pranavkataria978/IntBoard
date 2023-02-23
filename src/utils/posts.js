import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');


export function decodePosts(fileName){

    const postSlug = fileName.replace(/\.md$/, ''); // remove file extension for id
    const fullPath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContent);

    const decodedPost = {
        slug: postSlug,
        ...data,    
        content
    };

    return decodedPost;
}

export function getPostFiles(){
    return fs.readdirSync(postsDirectory);
}

export function getAllPosts(){

    const postFiles = getPostFiles();
    const allPosts = postFiles.map(postFile => {
        return decodePosts(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts(){

    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}