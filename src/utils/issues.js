import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const issuesDirectory = path.join(process.cwd(), 'src/content/Issues/');

export function decodeIssues(fileName){

    const postSlug = fileName.replace(/\.md$/, ''); 
    const fullPath = path.join(issuesDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContent);

    const decodedPost = {
        slug: postSlug,
        ...data,    
        content
    };

    return decodedPost;
}

export function getIssuesFiles(){

    return fs.readdirSync(issuesDirectory);
}

export function getOpenIssues(){
    
        const postFiles = getIssuesFiles();
        const allPosts = postFiles.map(postFile => {
            return decodeIssues(postFile);
        });
        const openIssues = allPosts.filter(post => post.status === 'Open');
    
        return openIssues;
}

export function getAllIssues(){

    const postFiles = getIssuesFiles();
    const allPosts = postFiles.map(postFile => {
        return decodeIssues(postFile);
    });


    return allPosts;
}