/*
This is a book grid component that uses CSS
to handle the spacing of the data into a grid.
It is also responsive
*/

import styled from 'styled-components'

const BookGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(320px,1fr))

`

export default BookGrid