import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const HomePage = () => {
  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab') || 'currently'

  const validTabs = ['currently', 'history']
  const activeTab = validTabs.includes(tab) ? tab : 'currently'

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/home?tab=currently">Currently</Link> |{' '}
        <Link to="/home?tab=history">History</Link>
      </nav>
      {activeTab === 'currently' ? (
        <div>Showing Currently Tab Content</div>
      ) : (
        <div>Showing History Tab Content</div>
      )}
    </div>
  )
}

export default HomePage
