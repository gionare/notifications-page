import styled from "styled-components";

const StyledHeader = styled.div`
  /* HEADER */
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 20px 15px;
  }

  .notifications {
    width: 127px;
    height: 25px;
    margin: 0 9px 0 0;
    font-size: 20px;
    font-weight: 800;
    text-align: left;
    color: #1c202b;
  }

  .header .rectangle {
    padding: 4px 11px 2px;
    border-radius: 6px;
    background-color: #0a327b;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
  }

  .mark-all-as-read {
    width: 101px;
    height: 18px;
    margin: 6px 0 3px 80px;
    font-size: 13px;
    font-weight: 500;
    text-align: right;
    color: #5e6778;
    /* border: solid; */
  }
  .mark-all-as-read:hover {
    color: #0a327b;
    background-color: #dfe7f2;
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-align: center;
  }
`;

export { StyledHeader };
