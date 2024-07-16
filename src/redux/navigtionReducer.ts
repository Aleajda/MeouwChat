

type FriendType = {
    name: string;
    imgSrc: string;
};

type DefaultStateType = {
    Friends: FriendType[];
};

let defaultState: DefaultStateType = {
    Friends: [
        { name: "Barsik", imgSrc: "https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg" },
        { name: "Barsik", imgSrc: "https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg" },
        { name: "Barsik", imgSrc: "https://cs6.livemaster.ru/storage/51/8d/e9304e78c01418b5ea956d3be36a.jpg" },
        { name: "Persik", imgSrc: "https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg" },
        { name: "Persik", imgSrc: "https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg" },
        { name: "Persik", imgSrc: "https://static.life.ru/publications/2023/9/11/812587366614.6013.jpg" }
    ]
};

const navigationReducer = (state: DefaultStateType = defaultState, action: any) => {
    return state;
};

export default navigationReducer;