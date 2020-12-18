import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform : capitalize
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid var(--lightBlue);
border-color:${props => 
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color:${props =>
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
background: transparent;
cursor:pointer;
transition : all 0.4s ease-in-out;
&:hover{
  background:${props => 
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}
`;
