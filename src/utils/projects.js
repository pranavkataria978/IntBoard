import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/projects');


export function decodeProjects(fileName){

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

export function getProjectFiles(){
    return fs.readdirSync(postsDirectory);
}

export function getAllProjects(){

    const postFiles = getProjectFiles();
    const allPosts = postFiles.map(postFile => {
        return decodeProjects(postFile);
    });


    return allPosts;
}

export function getOpenProjects(){

    const allPosts = getAllProjects();
    const featuredPosts = allPosts.filter(post => post.status === 'In Progress');

    return featuredPosts;
}