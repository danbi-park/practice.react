import './App.css';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './component/Posts';
import Pagination from './component/Pagination';


const App = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1); 
	const [limit, setLimit] = useState(10);
  const offset = (currentPage - 1) * limit;

  //컴포넌트가 마운트, 업데이트 될 때마다 실행됨 
  useEffect( () => {

    //게시글을 가져오는 함수
    const fetchPosts = async () => {
      setLoading(true); 
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); //axios로 dummies 가져옴
      setPosts(res.data);  //posts에 저장
      setLoading(false);
    }

    fetchPosts();

  }, []); //무한루프를 막기 위해 뒤에 빈배열 추가 

  console.log(posts);

  //현재 페이지 구하기
  const indexOfLastPost = currentPage * limit;
  const indexOfFirstPost = indexOfLastPost - limit;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //페이지 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const setLimited = (number) => setLimit(number);

 return ( 
    <div>
      <Posts posts={currentPosts} loading={loading} limit={limit} setLimit={setLimit}  />
      <Pagination limit={limit} totalPosts={posts.length} paginate={paginate}  />
      {/* paginate={paginate} */}
    </div>
   	)
}
  

export default App;

