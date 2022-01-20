import React from "react";
import { screen, render } from "@testing-library/react";

import HomeVideoGrid from "./HomeVideoGrid.component";

const videos = [
    {
        id: 123,
        title: '1 Title test',
        description: '1 Description test',
        thumbnail: '1 Url Test'
    },
    {
        id: 345,
        title: '2 Title test',
        description: '2 Description test',
        thumbnail: '2 Url Test'
    }
]



beforeEach(()=> {
    render(<HomeVideoGrid videoList={videos}/>);
})

test('has same amount of cards as videos are provided', () => {
    expect(screen.getAllByTestId('VideoCard')).toHaveLength(2);
})