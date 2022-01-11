import styled from 'styled-components';

const MunuButton = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  z-index: 999;
`;

const SidebarContainer = styled.section`
  width: 200px;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: white;
  padding: 8px;
  display: flex;
  flex-direction: columm;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
`;

const SidebarList = styled.ul`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0;
  padding: 0;
  li {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 14px;
    color: #e64398;
    list-style: none;
    padding: 8px;
    border-bottom: solid 1px #12c998;
  }
`;

export { MunuButton, SidebarContainer, SidebarList };
