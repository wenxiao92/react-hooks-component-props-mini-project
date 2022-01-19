import React from "react";
import Article from "./Article";

function ArticleList(articleProp){
    console.log(articleProp.posts)
    const articleList = articleProp.posts.map((eachArticle) => (
         <Article
            key={eachArticle.id}
            title={eachArticle.title}
            date={eachArticle.date}
            preview={eachArticle.preview}
            minutes={eachArticle.minutes}/>


    ));

    return (
    <main> {articleList} </main>
    )
}

// Alternative solution where grabbing the prop that already has the 3 objects as opposed to use multiple dot notations
// function ArticleList({ posts }) {
//     const articles = posts.map((post) => (
//       <Article
//         key={post.id}
//         title={post.title}
//         date={post.date}
//         preview={post.preview}
//         minutes={post.minutes}
//       />
//     ));
//     return <main>{articles}</main>;
//   }

export default ArticleList;