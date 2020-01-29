import style from '@emotion/styled';

import { Link } from 'gatsby';

const ReadLink = style(Link)`
    display: inline-block;
    font-size: 0.875rem;
    border: .1em solid darkslategray;
    padding: .5em;
    text-decoration: none;

    :visited {
        color: Tomato;
    }
    :hover {
        background-color: darkslategray;
        color: white;
    }
`;

export default ReadLink;
