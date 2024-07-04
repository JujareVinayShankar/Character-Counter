import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterList from '../CharacterList'
import './index.css'

class CharacterCounter extends Component {
  state = {
    characterList: [],
    userInput: '',
  }

  changeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  setCount = event => {
    event.preventDefault()

    const {userInput, characterList} = this.state
    const newItem = {
      id: uuidv4(),
      userInput,
      characterCount: userInput.length,
    }

    this.setState(prevState => ({
      characterList: [...prevState.characterList, newItem],
      userInput: '',
    }))
    console.log(characterList)
  }

  render() {
    const {characterList, userInput} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="left-container">
            <div className="left-heading-container">
              <h1 className="left-container-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {characterList.length === 0 ? (
              <div className="no-user-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-user-image"
                />
              </div>
            ) : (
              <ul className="count-container">
                {characterList.map(each => (
                  <CharacterList key={each.id} characterDetails={each} />
                ))}
              </ul>
            )}
          </div>
          <div className="right-container">
            <form onSubmit={this.setCount} className="form">
              <h1 className="right-heading">Character Counter</h1>
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter the characters here"
                  value={userInput}
                  onChange={this.changeUserInput}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
