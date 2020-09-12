import React from 'react'

import Box from '@material-ui/core/Box'
import FamilyTree from '@mui-treasury/components/chart/family'
import Avatar from '@material-ui/core/Avatar'
import { useConfirm } from 'material-ui-confirm'
import { Tooltip } from '@material-ui/core'

type Person = {
  displayName: string
  photoURL?: string
  description?: string

  spouse?: Person
  children?: Person[]
}

type FamilyProps = {
  data: Person
}
const Family: React.FC<FamilyProps> = ({ data }) => {
  const confirm = useConfirm()
  const handleClick = ({ title, description }: any) => {
    confirm({ title, description })
  }

  return (
    <Box>
      <FamilyTree
        // stretchIndexes={[2]}
        tree={data}
        renderContent={(props: any) => {
          return (
            <Tooltip title={props.displayName}>
              <Avatar
                src={props.photoURL}
                style={{
                  cursor: 'pointer',
                  width: 60,
                  height: 60,
                }}
                onClick={() => {
                  handleClick({
                    title: props.displayName,
                    description: props.description
                  })
                }}
              />
            </Tooltip>
          )
        }}
      />
    </Box>
  )
}
export default Family
