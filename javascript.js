let randomString = ["hello" , "this is the secondstring" , "but this is title " , "all these are just a for test" , "hello world again" , "title1" ,"title3" , "title8" , "test3","test1" ,"hello" , "this is the secondstring" , "97ut this is title " , "all tasfse are just a for test" , "hello woasfdd again" , "tsfetle1" ,"tiafsele3" , "tafsee8" , "j;aoisjfe","jpoiasjfe"  ];

let createmultipledivsRandomly = (Arr) => {
    let quary = "";
    for(let i = 1 ; i < 20 ; i++){
        let key = Math.floor(Math.random() *(19 - 0) + 0);
        //console.log(i);
        quary += '<div> <img src="https://source.unsplash.com/random/400x400/?img='+i+'" loading="eager" alt=""><h1>'+Arr[key]+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque, tempora porro officia debitis harum, non nisi incidunt necessitatibus odio maxime reiciendis, facere velit voluptatum corrupti alias reprehenderit illo? Accusantium.</p></div>';
    }
    document.querySelectorAll('body > section')[0].innerHTML = quary;
}

createmultipledivsRandomly(randomString);


let createmultipledivs = (Arr) => {
    let quary = "";
    for(let i = 0 ; i < 20 ; i++){
        let key = Math.floor(Math.random() *(19 - 0) + 0);
        //console.log(i);
        quary += '<div> <img src="https://source.unsplash.com/random/400x400/?img='+i+'" loading="eager" alt=""><h1>'+Arr[i]+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque, tempora porro officia debitis harum, non nisi incidunt necessitatibus odio maxime reiciendis, facere velit voluptatum corrupti alias reprehenderit illo? Accusantium.</p></div>';
    }
    document.querySelectorAll('body > section')[0].innerHTML = quary;
}
window.onload = () => {
    document.querySelectorAll('body > section > div').forEach(element => {
        element.className ='animationAfterLoading';
    });
}

let sortingTheSectionListUpOrDown = (StartWithUpOrDown) => {
    let sortedArray;
    if (StartWithUpOrDown == 1){
        sortedArray = randomString.sort()
        createmultipledivs(sortedArray);
        return ;
    }
    sortedArray = randomString.sort((a, b) =>  b.localeCompare(a));
    
    createmultipledivs(sortedArray);
    console.log(sortedArray);
}