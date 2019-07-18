import React from 'react'

class Table extends React.Component {
    render() {

      const {characterData, removeCharacter} = this.props

      return (
        <table>
            <TableHeader></TableHeader>
            <TableBody characterData={characterData} removeCharacter={removeCharacter}></TableBody>
        </table>
      )
    }
  }
const TableBody = props => {
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

export default Table