// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showRightNavbar,
        showLeftNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = () => {
        onToggleShowContent(showContent)
        console.log(showContent)
      }

      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }

      const onClickRightNavbar = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <div className="configuration-bg">
          <h1 className="layout-heading">Layout</h1>
          <div className="layout-element-container">
            <input
              type="checkbox"
              id="content"
              onClick={onClickContent}
              value={showContent}
            />
            <label htmlFor="content" className="label-element">
              Content
            </label>
          </div>
          <div className="layout-element-container">
            <input
              type="checkbox"
              id="left"
              value={showLeftNavbar}
              onClick={onClickLeftNavbar}
            />
            <label htmlFor="left" className="label-element">
              Left Navbar
            </label>
          </div>
          <div className="layout-element-container">
            <input
              type="checkbox"
              id="right"
              value={showRightNavbar}
              onClick={onClickRightNavbar}
            />
            <label htmlFor="right" className="label-element">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
