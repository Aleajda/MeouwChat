import profileReducer, { addPostActionCreator } from "./profileReducer";
import React from "react";


test('profile add post test', () => {
    let action = addPostActionCreator("Hi, Aleajda");
    let state = {
        MyPostsData: [
            { likes: "18", message: "MEU MEU MEU" },
            { likes: "6", message: "MEOW WORLD" },
            { likes: "15", message: "I MEOW YOU" }
        ]
    }
    let newState = profileReducer(state, action);

    expect(newState.MyPostsData.length).toBe(4);
  });