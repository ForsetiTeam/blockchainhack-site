import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './InfoTable.scss'


@cssModules(styles)
export default class InfoTable extends Component {

  render() {
    const { columns, data, onRowClick } = this.props
    const dataExist = Boolean(data && data.length)

    return (
      <table styleName="infoTable">
        <thead>
          <tr>
            {
              columns.map(({ title }, index) => (
                <th key={index}>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            dataExist && data.map((rowData, rowIndex) => (
              <tr key={rowIndex} onClick={() => onRowClick(rowData)}>
                {
                  columns.map(({ name, render }, colIndex) => {
                    const cellValue = rowData[name]

                    return (
                      <td key={colIndex}>
                        {typeof render === 'function' ? render(cellValue, rowData) : cellValue}
                      </td>
                    )
                  })
                }
              </tr>
            ))
          }
          {
            !dataExist && (
              <tr styleName="noDataTR">
                <td colSpan={columns.length}>There are no data</td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
