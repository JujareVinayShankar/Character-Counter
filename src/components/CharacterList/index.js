import './index.css'

const CharacterList = props => {
  const {characterDetails} = props
  const {userInput, characterCount} = characterDetails
  return (
    <li className="character-count">
      <p>{`${userInput}: ${characterCount}`}</p>
    </li>
  )
}

export default CharacterList
