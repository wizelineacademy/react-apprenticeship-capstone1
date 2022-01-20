import React from "react";
import { screen, render } from "@testing-library/react";

import VideoCard from "./VideoCard.component";

const MockVideoData = {
    id: 123,
    title: 'Title test',
    description: 'Description test',
    thumbnail: 'Url Test'
}

beforeEach(()=> {
    render(<VideoCard videoData={MockVideoData}/>);
})

test('Video Card must print a Title, a Description,', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src','Url Test');
    expect(screen.getByText('Title test')).toBeInTheDocument();
    expect(screen.getByText('Description test')).toBeInTheDocument();
})

