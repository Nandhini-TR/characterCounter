import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {characterCounterList: [], words: '', length: 0, id: ''}

  onChangeText = event => {
    this.setState({words: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {words} = this.state

    if (words.trim().length > 0) {
      const newWordsList = {
        id: uuidv4(),
        words,
        length: words.length,
      }

      this.setState(prevState => ({
        characterCounterList: [...prevState.characterCounterList, newWordsList],
        words: '',
        length: 0,
      }))
    }
  }

  render() {
    const {characterCounterList, words} = this.state

    const isEmpty = characterCounterList.length === 0

    return (
      <div className="character-counter-container">
        <div className="count-bg-container">
          <div className="count-heading-container">
            <h1 className="count-heading">
              Count the characters like a Boss..
            </h1>
            <div className="count-details-container">
              {isEmpty ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              ) : (
                <ul className="words-list">
                  {characterCounterList.map(eachItem => (
                    <li key={eachItem.id} className="words-item">
                      <p className="words">{`${eachItem.words}: ${eachItem.length}`}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="character-bg-container">
          <h1 className="character-heading">Character Counter</h1>
          <form className="input-container">
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="text-input"
              onChange={this.onChangeText}
              value={words}
            />
            <button
              type="submit"
              className="add-button"
              onSubmit={this.onClickAdd}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
