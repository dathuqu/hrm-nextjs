import * as React from 'react'

import { User } from '../../types'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.email}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail