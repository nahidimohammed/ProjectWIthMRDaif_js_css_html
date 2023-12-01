let randomString = ["hello" , "this is the secondstring" , "but this is title " , "all these are just a for test" , "hello world again" , "title1" ,"title3" , "title8" , "test3","test1" ,"helluo" , "this is the secondstrafing" , "97ut this iwes title " , "all tasfse are just a foegrr test" , "hello woasfdd345 again" , "tsfe245tle1" ,"tiafselwr43254e3" , "tafscvpee8" , "j;aa;sofkoisjfe","jpoijasefoiasjfe"  ];

let createmultipledivsRandomly = (Arr) => {
    let quary = "";
    for(let i = 1 ; i < 20 ; i++){
        let key = Math.floor(Math.random() *(19 - 0) + 0);
        //console.log(i);
        quary += '<div> <img src="https://source.unsplash.com/random/350x350/?img='+i+'" loading="eager" alt=""><h1>'+Arr[key]+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque, tempora porro officia debitis harum, non nisi incidunt necessitatibus odio maxime reiciendis, facere velit voluptatum corrupti alias reprehenderit illo? Accusantium.</p></div>';
    }
    document.querySelectorAll('body > section')[0].innerHTML = quary;
}

createmultipledivsRandomly(randomString);


let createmultipledivs = (Arr) => {
    let quary = "";
    for(let i = 0 ; i < 20 ; i++){
        let key = Math.floor(Math.random() *(19 - 0) + 0);
        //console.log(i);
        quary += '<div> <img src="https://source.unsplash.com/random/350x350/?img='+i+'" loading="eager" alt=""><h1>'+Arr[i]+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque, tempora porro officia debitis harum, non nisi incidunt necessitatibus odio maxime reiciendis, facere velit voluptatum corrupti alias reprehenderit illo? Accusantium.</p></div>';
    }
    document.querySelectorAll('body > section')[0].innerHTML = quary;
}

let createmultipledivsIndex = (Arr , listOfIndexs) => {
    let quary = "";
    for(let i = 0 ; i < 20 ; i++){
        let key = Math.floor(Math.random() *(19 - 0) + 0);
        //console.log(i);
        quary += '<div> <img src="https://source.unsplash.com/random/350x350/?img='+listOfIndexs[i]+'" loading="eager" alt=""><h1>'+Arr[i]+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque, tempora porro officia debitis harum, non nisi incidunt necessitatibus odio maxime reiciendis, facere velit voluptatum corrupti alias reprehenderit illo? Accusantium.</p></div>';
    }
    document.querySelectorAll('body > section')[0].innerHTML = quary;
}


window.onload = () => {
    document.querySelectorAll('body > section > div').forEach(element => {
        element.className ='animationAfterLoading';
    });
}



let sortingTheSectionListUpOrDown = (StartWithUpOrDown) => {
    let sortedArray = randomString.slice();

    sortedArray.sort();

    let listOfIndexs = [];

    if (StartWithUpOrDown == 1){
        sortedArray.forEach(item => {
            randomString.forEach(items => {
                if (item == items){
                    listOfIndexs.push(randomString.indexOf(items));

                    //listOfIndexs.push(randomString.indexOf(items));
                    
                }
            })
        })
        createmultipledivsIndex(sortedArray,listOfIndexs);
        return ;
    }
    sortedArray = randomString.sort((a, b) =>  b.localeCompare(a));
    sortedArray.forEach(item => {
        randomString.forEach(items => {
            if (item == items){
                listOfIndexs.push(randomString.indexOf(items));

                //listOfIndexs.push(randomString.indexOf(items));
                
            }
        })
    })
    
    createmultipledivsIndex(sortedArray,listOfIndexs);
}
// clicking the sorting btn

document.querySelectorAll('body > header > div > button')[0].addEventListener('click',  () => {
    sortingTheSectionListUpOrDown(0);

    document.querySelectorAll('body > section > div').forEach(element => {
        element.className ='animationAfterLoading';
    });
});
// clicking the sorting btn
document.querySelectorAll('body > header > div > button')[1].addEventListener('click',  () => {
    sortingTheSectionListUpOrDown(1);
    document.querySelectorAll('body > section > div').forEach(element => {
        element.className ='animationAfterLoading';
    });
});

