// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {tabId, displayText} = tabDetails
  const activeClassName = isActive ? 'active-tab-btn' : ''
  const sendTabId = () => onClickTab(tabId)

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={sendTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
