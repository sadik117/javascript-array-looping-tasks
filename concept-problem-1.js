// উপরে এর  এরে  থেকে  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

var friends = ["rahim", "abul", "karim", "abdul", "HeroAlom", "saduchor", "ZayedKhan" ];

let bigFriend = friends[0]

for(let i = 0; i < friends.length; i++){
    const element = friends[i];

    if( element.length > bigFriend.length){
        bigFriend = element;
    }
}
console.log(bigFriend)