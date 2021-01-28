(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{312:function(e,a,t){"use strict";t.r(a);var o=t(32),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-develop-a-dapp-on-vechain-i-：intro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-develop-a-dapp-on-vechain-i-：intro"}},[e._v("#")]),e._v(" How To Develop a DApp on VeChain (I)：Intro")]),e._v(" "),t("p",[e._v("Recently I have been working on a DApp tool on VeChain. However, I searched a lot but couldn't find any hands-on tutorial for developers. I decided to go for it and shed some light on this topic. In this tutorial, I will walk through with you guys about "),t("em",[e._v("how to")]),e._v(" build up an ERC20 VIP180 standard token transfer web page** on VeChain.")]),e._v(" "),t("p",[e._v("This tutorial splits into 3 parts, the topics are:")]),e._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/tutorials/how-to-develop-a-dapp-on-vechain-1.html"}},[e._v("Intro")]),e._v(".")],1)]),e._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/tutorials/how-to-develop-a-dapp-on-vechain-2.html"}},[e._v("Setup & Walk Around")]),e._v(".")],1)]),e._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/tutorials/how-to-develop-a-dapp-on-vechain-3.html"}},[e._v("Components & Coding")]),e._v(".")],1)])]),e._v(" "),t("p",[e._v("Ready? Let us get our hands dirty! 😉")]),e._v(" "),t("h2",{attrs:{id:"what-is-dapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-dapp"}},[e._v("#")]),e._v(" What is DApp?")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2000/1*qpy5NueXgD2PJFJWupJP5g.jpeg",alt:""}})]),e._v(" "),t("p",[e._v("Many people ask me as a blockchain developer, what is a "),t("em",[t("strong",[e._v("DApp")])]),e._v("? In one of my simpler version of the answers, “"),t("strong",[e._v("DApp = Web + Blockchain")]),e._v("”. Yep, the current web technologies are still heavily used. We simply move some data and authentications onto the blockchain, that’s it. It’s the same idea behind "),t("a",{attrs:{href:"https://github.com/ethereum/web3.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web3.js"),t("OutboundLink")],1),e._v(", as well as the "),t("a",{attrs:{href:"https://www.npmjs.com/package/@vechain/connex",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connex.js"),t("OutboundLink")],1),e._v(" we will be talking about later.")]),e._v(" "),t("p",[e._v("To answer that, we first look at what a traditional "),t("em",[t("strong",[e._v("web application")])]),e._v(" looks like:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/3528/1*tY6R3nkcaTEEDNFR4RD49g.jpeg",alt:"Web app: client, server and database."}}),t("em",[e._v("Web app: client, server and database.")])]),e._v(" "),t("h3",{attrs:{id:"what-s-web-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-web-application"}},[e._v("#")]),e._v(" What’s Web Application?")]),e._v(" "),t("p",[e._v("A "),t("em",[t("strong",[e._v("web application")])]),e._v(" in a simplified scenario is a typical client-server application. It contains several critical parts:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Client")]),e._v(": web browsers.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Server")]),e._v(": operates the database, serves the clients data.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Database")]),e._v(": stores the data as valuable assets. 😛")])])]),e._v(" "),t("p",[e._v("Interestingly, in a web application, "),t("em",[t("strong",[e._v("data is at the core heart")])]),e._v(". It flows, displayed, transformed and stored in the system. End users view the data from the web pages on the browsers.")]),e._v(" "),t("p",[e._v("A web application also has several characteristics in common:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The server interfaces with the database, "),t("em",[t("strong",[e._v("not")])]),e._v(" clients.")])]),e._v(" "),t("li",[t("p",[e._v("The database is hidden and holds "),t("em",[t("strong",[e._v("valuable")])]),e._v(" assets.")])]),e._v(" "),t("li",[t("p",[e._v("The user has** "),t("em",[e._v("no direct control")]),e._v("** of the data, only the server can. 😛")])])]),e._v(" "),t("p",[e._v("So blockchain promises the future of “"),t("strong",[e._v("Users in charge of their data")]),e._v("”, what does a DApp look like exactly?")]),e._v(" "),t("p",[e._v("Simple. It looks like a web app, except we have one add-on: Blockchain.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/3536/1*2AOjTQhr1lRlXs7JQiQ9YA.jpeg",alt:"DApp: Web + Blockchain"}}),t("em",[e._v("DApp: Web + Blockchain")])]),e._v(" "),t("h3",{attrs:{id:"what-is-dapp-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-dapp-2"}},[e._v("#")]),e._v(" What is DApp?")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("DApp")])]),e._v(" is an application that is backed up by a distributed blockchain service. To make an analog to the web apps we use today, "),t("em",[t("strong",[e._v("DApp relies partially on blockchain data")])]),e._v(" but still is a web application (or web page).")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Client: Browser/IoT devices.")])]),e._v(" "),t("li",[t("p",[e._v("Server: Serves code fragments or static assets like images.")])]),e._v(" "),t("li",[t("p",[e._v("Blockchain: "),t("strong",[e._v("Partial replacement")]),e._v(" of database, stores/processes critical user data.")])])]),e._v(" "),t("blockquote",[t("p",[e._v("A public blockchain is a openly readable, slow, expensive database running by a network consists of hundreds of nodes.")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("DApp")])]),e._v(" also has several characteristics in common:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("DApp interfaces with "),t("strong",[e._v("both")]),e._v(" blockchain and traditional server.")])]),e._v(" "),t("li",[t("p",[e._v("The blockchain "),t("strong",[e._v("cannot")]),e._v(" be easily shut down as it contains multiple nodes.")])]),e._v(" "),t("li",[t("p",[e._v("The user can "),t("strong",[e._v("directly control")]),e._v(" data on the blockchain via DApp.")])])]),e._v(" "),t("p",[e._v("Great, now you know what does a DApp do and where the data is coming from, let us focus on how to write one.")]),e._v(" "),t("h2",{attrs:{id:"write-a-dapp-sync-and-connex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#write-a-dapp-sync-and-connex"}},[e._v("#")]),e._v(" Write a DApp: Sync and Connex")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/4256/1*rbq_5MkZBujA3qDGsvsvWw.png",alt:"Sync: Browser of VeChain apps."}}),t("em",[e._v("Sync: Browser of VeChain apps.")])]),e._v(" "),t("blockquote",[t("p",[t("em",[t("strong",[e._v("DApp")])]),e._v(" shall both know how to communicate with traditional server backend as well as read/write from a blockchain network. "),t("strong",[e._v("Connex.js")]),e._v(" helps with the blockchain part, makes the developer life easier.")])]),e._v(" "),t("p",[e._v("VeChain published "),t("strong",[e._v("Connex.js")]),e._v(" to substitute "),t("strong",[e._v("Web3.js")]),e._v(" in Ethereum. It is a huge step from Web3 and I am glad to use it in my first VeChain project:")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://env.vechain.org",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Sync")]),t("OutboundLink")],1),e._v(": Web browser of VeChain apps.")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/@vechain/connex",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Connex.js")]),t("OutboundLink")],1),e._v(": Standard Javascript library that helps to communicate with VeChain, "),t("em",[t("strong",[e._v("included")])]),e._v(" in Sync.")])])]),e._v(" "),t("h2",{attrs:{id:"token-transfer-a-simple-dapp-in-javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-transfer-a-simple-dapp-in-javascript"}},[e._v("#")]),e._v(" Token Transfer: A Simple DApp in Javascript")]),e._v(" "),t("p",[e._v("Starting from the next article, we will start to build a demo DApp named as “Token Transfer”. We will use an existing smart contract on VeChain as the data source**. "),t("strong",[e._v("And I will help you to familiar with the environment")]),e._v(" 😗")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("How to read data from a VeChain blockchain smart contract.")])]),e._v(" "),t("li",[t("p",[e._v("How to display data to the user.")])]),e._v(" "),t("li",[t("p",[e._v("How to update data on blockchain via Javascript calls.")])])]),e._v(" "),t("p",[e._v("With the help of "),t("strong",[e._v("Connex")]),e._v(" in the "),t("strong",[e._v("Sync")]),e._v(" browser, we will do it in the blink of an eye! Follow the hands-on tutorials below to start coding! 😝")])])}),[],!1,null,null,null);a.default=n.exports}}]);