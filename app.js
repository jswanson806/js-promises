// Part 1: Number Facts

// 1
// let url = 'http://numbersapi.com/87?json'
// let res = axios.get(url);
// res.then(data => console.log(data))
// res.catch(err => console.log("REJECTED!", err))


//2
// const list = document.querySelector('#num-facts');
// let url = `http://numbersapi.com/87,90,101,30?json`

// axios.get(url)
//     .then(factsArr => {
//         for(const [key,value] of Object.entries(factsArr.data)){
//             const li = document.createElement('li');
//             li.innerHTML = `${value}`;
//             list.append(li)
//         }
//     })
//     .catch(err => console.log(err))


//3
// const list = document.querySelector('#num-facts');
// let url = `http://numbersapi.com/2?json`
// let fourNumFacts = []

// for (let i = 0; i <= 4; i++) {
//     fourNumFacts.push(axios.get(url));
// }

// Promise.all(fourNumFacts)
//     .then(resArr => {
//         for(res of resArr){
//             console.log(res.data
//                 )
//         }
//     })
//     .catch(err => (console.log(err)))



// Part 2: Deck of Cards

// 1
// let deck_url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


// axios.get(deck_url)
//     .then(res => {
//         let deck_id = res.data.deck_id
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//     })
//     .catch(err => console.log(err))

// 2
// let deck_url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


// axios.get(deck_url)
//     .then(res => {
//         let deck_id = res.data.deck_id;
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//         let deck_id = res.data.deck_id;
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//     })
//     .catch(err => console.log(err))

//3

// let deck_id = null

// axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

//     .then(res => {
//         deck_id = res.data.deck_id;
//         console.log('deck_id: ', deck_id)

//     })

//     .catch(err => console.log(err));


// $('#draw-card').on("click", function() {
    

//     axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)

//         .then(res => {
//             if(res.data.remaining > 0) {
//                 $('.card-container').empty()
//                 console.log(`${res.data.cards[0].value} ` + 'of' + ` ${res.data.cards[0].suit}`)
//                 // create div to hold card
//                 let div = document.createElement('div')
//                 div.classList.add('card-container')
//                 // create image and set src to card image
//                 let img = document.createElement('img');
//                 img.src = res.data.cards[0].image;

//                 document.body.append(div)
//                 //append img to div
//                 div.append(img)

//             } else {
//                 let btn = document.getElementById('draw-card');
//                 btn.style.display = "none";
//             }
//         })

// .catch(err => console.log(err));

// })

