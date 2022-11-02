import { CSSObject, ScrollArea } from '@mantine/core'
import { FunctionComponent, useState } from 'react'
import { colorLibrary } from '../Assets/_colorLibrary'
import { cssLibrary } from '../Assets/_cssLibrary'
import { iconLibrary } from '../Assets/_iconLibrary'
import { RichTextEditor } from '@mantine/rte'
import { IColumn, MyGrid, MyGridElement } from '../Components/MyGrid'

const Dashboard = () => {
  const initialValue = ``
  const [value, onChange] = useState(initialValue)

  console.log(value)

  function titleTemplate(title: React.ReactNode, icon: React.ReactNode) {
    return {
      colspan: 12,
      sx: {
        ...cssLibrary('FlexItemCenter'),
        ...cssLibrary('ShadowSm'),
        backgroundColor: colorLibrary('main-header-paper-outlet'),
        padding: 10,
        justifyContent: '',
        position: 'relative',
        color: colorLibrary('header-text'),
        borderRadius: 3,
      },
      Box: [
        {
          sx: { marginTop: 5 },
          child: icon,
        },
        {
          sx: { paddingLeft: 5 },
          child: title,
        },
      ],
    } as IColumn
  }

  const gridElement: MyGridElement[] = [
    {
      GridCol: [
        titleTemplate('Dashboard', iconLibrary('Dashboard', 'HeroSize')),
        {
          colspan: 12,
          sx: {
            ...cssLibrary('FlexItemCenter'),
            ...cssLibrary('ShadowSm'),
            backgroundColor: colorLibrary('side-bar'),
            padding: 10,
            justifyContent: '',
            marginTop: 10,
            position: 'relative',
            borderRadius: 3,
          },
          Button: [
            {
              disabled: true,
              sx: { ...(cssLibrary('Button')?.success as CSSObject) },
              icon: iconLibrary('Plus', 'ButtonSize'),
              label: 'Add',
            },
            {
              sx: { marginLeft: 10 },
              label: 'Add',
            },
          ],
        },
        {
          colspan: 12,
          Box: [
            {
              child: (
                <ScrollArea.Autosize maxHeight={400} sx={{ borderRadius: 5, ...cssLibrary('ShadowSm') }}>
                  <RichTextEditor value={value} onChange={onChange} id="rte" />
                </ScrollArea.Autosize>
              ),
            },
          ],
        },
      ],
    },
  ]

  return <MyGrid GridArrayObject={gridElement} />
}

export default Dashboard as FunctionComponent
