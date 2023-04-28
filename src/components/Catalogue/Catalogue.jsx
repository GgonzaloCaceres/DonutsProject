import styles from './Catalogue.module.css'
import useDonuts from '../../lib/hooks/useDonut.js'

export const Catalogue = () => {
  const { donuts, isLoading, error } = useDonuts()

  console.log(donuts)

  return (
    <>
      {donuts.map(donut => (
        <p key={donut.id}>
          <img src={donut.image_url} />
          {donut.name}
          {donut.description}
          {Object.keys(donut).map(donutProp => (
            <span key={donutProp}> {donut[donutProp]}</span>
          ))}
        </p>
      ))}
    </>
  )
}
