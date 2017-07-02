import React from 'react'
import { links } from 'helpers'

import Button from 'components/controls/Button'


const CreateDealButton = (props) => (
  <Button to={links.abs.createDeal} {...props}>Create deal</Button>
)

export default CreateDealButton
