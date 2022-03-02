import React from 'react'
import Link from 'next/link'

import { User } from '../../types'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/user/[id]" as={`/user/${data.id}`}>
    <a>
      {data.id}: {data.email}
    </a>
  </Link>
)

export default ListItem