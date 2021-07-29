import React from 'react'

export default function Character({ title, children } = {}) {
  return (
    <div className="character">
      <section>
        {title ? <h3 className="title">{title}</h3> : null}
        <div className="character__container">{children}</div>
      </section>
    </div>
  )
}
