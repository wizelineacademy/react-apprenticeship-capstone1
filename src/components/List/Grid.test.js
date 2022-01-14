import MockData from '../../data/youtube-videos-mock.json'

const numItems = MockData.items.length;

describe('Number of texst', () =>{
    test('Number of items=  25', () => {
        expect(numItems).toBe(25);
    });

    test('Number of items to be greater than or equal to 25', () => {
        expect(numItems).toBeGreaterThanOrEqual(25);
    });
})