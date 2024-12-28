import { useState } from 'react'
import './App.css'
import avatar from './assets/user.png'
import starEmpty from './assets/star-empty.png'
import starFilled from './assets/star-filled.png'

function App() {

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  })

  function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })
  }

  let starIcon = contact.isFavorite ? starFilled : starEmpty

  return (
    <main>
      <article className='card'>
        <img
          src={avatar}
          className='avatar'
          alt='User profile picture of John Doe'
        />
        <div className='info'>
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
            className='favorite-button'
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className='favorite'
            />
          </button>
          <h2 className='name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='contact'>{contact.phone}</p>
          <p className='contact'>{contact.email}</p>
        </div>
      </article>
    </main>
  )
}

export default App
