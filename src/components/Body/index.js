// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="navbar-bg">
      <h2>Left Navbar Menu</h2>
      <ul className="list-container">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  const renderRightNavBar = () => (
    <div className="navbar-bg">
      <h2>Right Navbar</h2>
      <p className="right-bar-element">Ad 1</p>
      <p className="right-bar-element">Ad 2</p>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do elusmod
      </p>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showRightNavbar, showLeftNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar ? renderLeftNavbar() : null}
            {showContent ? renderContent() : null}
            {showRightNavbar ? renderRightNavBar() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
