## Answer the question

#### Summary of the project and the problem you are solving

Arbitration service based on smart contracts and Reputation System. In case of conflict situations customers can open a dispute in our arbitration system. The arbitrators/judges stake their reputation and arbitrators reward distribution depending on it. So they are motivated to resolve a dispute fairly.

#### Brief background on the team and how you came up with the idea

Most of us met the day before the hackathon. We thought about the way that people interact with assets on the real market. But what about the blockchain?
 
During market research we came to safe deal/escrow services that are currently implemented on the freelance. In case of disputes such services engage an expert, who solves the dispute. This solutions however have huge disadvantages:
 
 - You have to transfer your deposits on freelance servers\bank accounts
 - Those experts are not motivated to solve disputes fairly (they are not involved in the matter personally)
 - Commission fees are too high (~10% )  
 
We decided that this service can be massively improved thanks to reputation system, blockchain and smart contracts, so that:
 
 - Judges will resolve the disputes fairly 
 - The system trust will increase
 - The power centralization issue will be solved
 
 
## Background

| Name | Role | Background | 
| ---- | ---- | ---------- |
|  Nikolaev Alexander | Business development | Co-founder of blockchain startup Dolphin.bi, Experienced Smart Contract Developer, HSE Fintech accelerator graduate |
| Ivanov Pavel | Front-end developer | Over 7 years of exp in Front-End Development, ex CoFounder of Leading Online journalism startup |
| Shevtsov Alexander | Smart-contract developer | Currently mastering Math in HSE |
| Kaizer Denis | Back-end developer | Developing an trading bot for crypto invest fund, Developing an Asset management platform for crypto market, Master Degree in Math, HSE |
| Manzyuk Vladimir | System/ Business analyst | System Analyst with 8 years of experience, ex CoFounder of multi media startup tvevt.com Kaggle.com Passioner Participater with top results |


## How is it innovative ?

In the absence of trust, public blockchains typically require additional mechanisms to arbitrate disputes among participants and protect the integrity of the data. This adds complexity to the whole system. 

Besides, there is no central authority.
The framework we are building is based on  smart contracts, reputation system and modified form of  liquid democracy. 

Our main goal is  to build an arbitration mechanism for Decentralized Economy that will  be customizable, trustworthy and  easy to implement in current and future ecosystems and Dapps.


## What tool(s) / platform(s) do you use?

 
| Entity | Technologies |
| ---- | ---- |
| Smart contract | [Solidity + Truffle](https://github.com/ForsetiTeam/SmartContracts) |
| Front-end | [React.js + Redux + Metamask](https://github.com/ForsetiTeam/ForsetiTeam) |
| Back-end | [Telegram chat bot + node.js backend](https://github.com/ForsetiTeam/Blockjudje_Telegram-bot) |
| Blockchain | [Ethereum, Qtum](https://github.com/ForsetiTeam/qtumRealisation) |
| Other | [Toshi ethereum token browser+ docker](https://github.com/ForsetiTeam/Token-Browser-Toshi-Implementation) |


## What was the biggest obstacle that your team overcame ?

Web3py - not enough documentation, outdated, bug reports, not informative at all.
 
There is no light Node for ethereum to work with  

Wasted 3 hours of debugging asynchronous  solidity code because we just forgot to increase gas limit for a transaction  
 
 


# Front-End

[Forseti site](http://forseti.im/)

### Expirience

Pavel Ivanov: *It was an excellent experience of getting acquainted with the technologies of managing crypto-currencies. I met Ethereum, Ktum, Metamask, Pari, Ropsten. Sometimes I had a headache about how it works, especially when I recieved hash sum from service and needed to encode it to array and then convert from bytes and then to associative array with :D I like such brain#*

### Project

#### Techniques

- Universal architecture
  - code shared across platforms (browser, server)
  - universal data fetching
- Functional works (immutability)
- Advanced performance with pure components
- Well tuned dev stack

#### Architecture

- `bin` - compiling and serve files
- `client` - client files
- `config` - settings
- `local_modules` - additional modules
- `shared` - universal files
  - `components` - reusable components or partials
  - `containers` - Root, App, Providers, etc
  - `layouts` - mark up layouts - wrappers for pages (check routes)
  - `pages` - pages are leafs in routes
  - `helpers` - util / helpers
  - `redux`
    - `actions` - Redux actions
    - `contracts` - ETH Contracts
    - `core` - setup Redux
    - `reducers` - Redux [Redaction] reducers
  - `routes`
- `webpack`

### Getting Started

#### Setup

```
git clone https://github.com/amijkko/ForsetiTeam.git
cd ForsetiTeam
npm start
```

#### Tasks

```
npm run <task>
```

* `clean` - remove compile files
* `dev` - start server in development mode (via nodemon)
* `build` - assembly files for client in *production* mode



