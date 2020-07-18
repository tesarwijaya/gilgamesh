import React from 'react'
import {Button,Table} from 'react-bootstrap'

import isFavorite from '../../../libs/isFavorite'

function Favorite({detailModalHandler,favorites,favoriteAddHandler,favoriteRemoveHandler}) {
  return (
    <Table responsive style={{marginTop: 32, marginBottom: 32}}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Language</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {favorites.length > 0 ? (
          favorites.map(v => (
            <tr key={v.imdbID}>
              <td><Button onClick={() => detailModalHandler(v.imdbID)} variant="link">{v.Title}</Button></td>
              <td>{v.Year}</td>
              <td>{v.Language}</td>
              <td>
                {isFavorite(favorites, v.imdbID) ? (
                  <Button variant="outline-danger" onClick={favoriteRemoveHandler(v)}>Remove from My Favorite</Button>
                ) : (
                  <Button variant="outline-primary" onClick={favoriteAddHandler(v)}>Add to My Favorite</Button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{textAlign: "center"}}>
              You dont have Favorite Movie
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default Favorite