import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  return (
    <div>
      {/** search section */}
      <SearchSection />
      {/** template list */}
      <TemplateListSection />
    </div>
  )
}

export default Dashboard