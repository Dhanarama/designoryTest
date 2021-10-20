import React from 'react';
import styled from 'styled-components';

import example_equipment_filter from './screenshots/example-equipment-filter.png';
import example_select_options from './screenshots/example-select-options.png';
import example_font_styling from './screenshots/example-font-styling.png';

const Title = styled.h1`
    font-size: 2rem;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    border: solid 2px #030912;
`;

const ColorSwatch = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.color || 'white'};
    box-shadow: 1px 1px 0 grey;
`;
const ColorSquare = ({ color }) => (
    <code>
        {color} <ColorSwatch color={color} />
    </code>
);

const Article = styled.article`
    padding: 0 0.5rem;
    margin: 0 auto;
    max-width: 800px;
`;

export default function Instructions() {
    return (
        <Article>
            <Title>Hello!</Title>
            <p>
                For this exercise, you'll need to build a React component that
                we'll call <code>EquipmentFilter</code>. When it is completed,
                it will look like this:
            </p>
            <Image src={example_equipment_filter} alt="Example Image" />
            <p>Font sizing information is shown below:</p>
            <Image
                style={{ width: '580px' }}
                src={example_font_styling}
                alt="Font Sizing"
            />
            <p>
                This component accepts an array of objects to display Equipment
                Tiles. Each Tile will need to display:
            </p>
            <ul>
                <li>Tag</li>
                <li>Model</li>
                <li>Serial Number</li>
                <li>Count of Associated Devices</li>
                <li>
                    An exclamation point (!) if the equipment is in an Error
                    state
                </li>
            </ul>
            <p>
                Each Tile will need to be clickable. For this demo, clicking on
                the Tile should navigate the user to{' '}
                <u>
                    #/equipment/get/<code>$id</code>
                </u>
                , where <code>$id</code> is the ID of the equipment received
                from the API. The last tile will always link to{' '}
                <u>#/equipment/add</u>.
            </p>
            <p>
                The <em>Filter By Tag</em> dropdown in the upper right corner
                should be a native <code>&lt;select&gt;</code> element. It
                should show all available Tags. When selected, it should filter
                the visible Tiles by the chosen Tag.
            </p>
            <Image src={example_select_options} alt="Example Select Options" />
            <p>
                To start, simply click the <em>Fork</em> button in the upper
                right of this Sandbox and start creating!
            </p>
            <p>Other requirements include:</p>
            <ul>
                <li>
                    Data should be fetched asynchronously at runtime from the
                    following API endpoint:
                    <br />
                    <code>
                        <a href="https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2">
                            https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2
                        </a>
                    </code>
                </li>
                <li>
                    Styling should be done with{' '}
                    <a href="https://styled-components.com/">
                        <code>styled-components</code>
                    </a>
                    .
                </li>
                <li>
                    No external CSS frameworks can be used, such as Bootstrap,
                    Bulma, Tailwind, Foundation, etc..
                </li>
                <li>
                    The design should be responsive. Use your best judgement for
                    how things will respond on smaller devices.
                </li>
                <li>
                    You are strongly encouraged to <strong>not</strong> use any
                    media queries to make the component be responsive.
                </li>
                <li>
                    Color palette will be:
                    <ul>
                        <li>
                            <ColorSquare color="#13315C" /> - Blue
                        </li>
                        <li>
                            <ColorSquare color="#134074" /> - Light Blue
                        </li>
                        <li>
                            <ColorSquare color="#030912" /> - Black
                        </li>
                        <li>
                            <ColorSquare color="#171D25" /> - Gray
                        </li>
                        <li>
                            <ColorSquare color="#EEF4ED" /> - Off White
                        </li>
                        <li>
                            <ColorSquare color="#FCFDFC" /> - White
                        </li>
                    </ul>
                </li>
                <Image src="https://media.giphy.com/media/wvWJOoYmFnSp2/giphy.gif" />
            </ul>
        </Article>
    );
}
