import Router from 'next/router'
import iconv from 'iconv-lite';
import React, { useEffect } from "react";

export default function Ms949({ q, redirectUrl }) {
	useEffect(() => {
		//window.location.href = redirectUrl;
 	});

  return (
	q 
	  ? <a href={redirectUrl} >{q}</a>
	  : <p>쿼리입력이 필요합니다</p>
  )
}

export async function getServerSideProps(context) {
  const { q } = context.query;
  const urlBase = 'http://cafe.naver.com/joonggonara.cafe?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=10050146%26search.searchBy=1%26search.query=';
  const ms949String = q && escape(iconv.encode(q, 'EUC-KR').toString('binary'))
  
  return {
    props: {
	    q : q || null, 
	    redirectUrl: urlBase + ms949String
    }
  }
}
