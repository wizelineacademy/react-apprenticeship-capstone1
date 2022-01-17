import styled from 'styled-components';

export const VideoPlayContent = styled.div`
    background: white;
    text-align: justify;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 20px;
    margin-left: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 1070px)  {
        background: white;
        text-align: justify;
        margin-bottom: 20px;
        margin-left: 0px;
    }

    @media (max-width: 400px) {
        background: white;
        text-align: justify;
        margin-bottom: 20px;
        margin-left: 0px;
    }
`;

export const VideoPlayCard = styled.div`
    display: flex;
    margin-left: 10px;

    > iframe {
        width: 700px;
    }

    @media (max-width: 1070px)  {
        background: black;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 0px;
    }

    @media (max-width: 400px)  {
        background: black;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 0px;
        width: 400px;
        height: 200px;

        > iframe{
            width: 400px;
        }
}
`;

export const VideosGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;


    :after {
        content: "";
        display: table;
        clear: both;
    }

    @media (max-width: 1070px)  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 250px;
        margin-left: 250px;
    }

    @media (max-width: 400px)  {
        display: flex;
        justify-content: center;
        margin: 0 20px;
        margin-right: 0px;
    }
`;

export const VideoPlayContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1070px)  {
        display: inline;
        margin-bottom: 20px;
    }

    @media (max-width: 400px)  {
        display: inline;
        margin-bottom: 20px;
        width: 400px;   
    }
`;
