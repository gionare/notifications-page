import styled from "styled-components";

const StyledHeader = styled.div`
  /* HEADER */
  .header {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
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
    padding: 1px 11px 4px;
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
`;

export { StyledHeader };
