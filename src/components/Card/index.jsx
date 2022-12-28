import React from 'react'

import { Container, Label } from './styles'

function Card() {
  return (
    <Container>
        <header>
            <Label color={'#7159c1'} />
        </header>
        <p>
            Fazer migração com servidor
        </p>
        <img src='https://cdn.shopify.com/s/files/1/2910/3910/products/882b4962797bd4e007c28b017509ee1b_1024x1024.png?v=1624047693' alt='Custom profile' />
    </Container>
  )
}

export default Card