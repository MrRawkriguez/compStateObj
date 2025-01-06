import { useState } from 'react'
import './App.css'
import avatar from './assets/user.png'
import StarImage from './StarImage'

function App() {

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  })

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })
  }

  return (
    <main>
      <article className='card'>
        <img
          src={avatar}
          className='avatar'
          alt='User profile picture of John Doe'
        />
        <div className='info'>
          <StarImage
            isFilled={contact.isFavorite}
            toggleFavorite={toggleFavorite}
          />
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
