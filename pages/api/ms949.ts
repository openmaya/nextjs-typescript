import { NextApiRequest, NextApiResponse } from 'next'
import Router from 'next/router'
import iconv from 'iconv-lite';
import React, { useEffect } from "react";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.url);
  const urlObject = new URL(req.url, 'http://${request.headers.host}');
  const q = urlObject.searchParams.get('q');
  console.log(q);
  
  const urlBase = 'http://cafe.naver.com/joonggonara.cafe?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=10050146%26search.searchBy=1%26search.query=';
  const ms949String = q && escape(iconv.encode(q, 'EUC-KR').toString('binary'))
  
  res.writeHead(301, {
	  Location: urlBase + ms949String
  });
  res.end();
  //res.status(200).json({url: urlBase + ms949String});
}

