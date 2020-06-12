---
title: '두종류의 Pre-Rendering'
date: '2020-05-29'
---

Next.js는 두개의 pre-rendering이 있음 : **언제** HTML을 생성하는지에 따라 **Static Generation**, **Server-side Rendering** 이 있음.

- **Static Generation** **빌드타임**에 생성. 생성된 HTML은 사용자 요청시마다 _재사용_.
- **Server-side Rendering** **요청시 마다** 생성.

중요한건 각페이지별로 여러분이 **선택** 할 수 있다는 것. "하이브리드" Next.js 앱을 만들수 있음.
