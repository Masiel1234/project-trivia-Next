import Button from "./Button";
import {render} from '@testing-library/react'
test('button test first', () => {
const {getByTestId} = render(
    <Button name="" variant="primary" to=""/>
    
)
const button = getByTestId("button");
screen.debug();
expect(button).toBeInTheDocument();
})