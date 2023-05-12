import useDonuts from '../../lib/hooks/useDonut.js'
import style from './Catalogue.module.css'

export const Catalogue = () => {
  const { donuts, isLoading, error } = useDonuts()

  console.log(donuts)

  return (
    <>
      <div className={style.container}>
        {donuts.map(donut => (
          <div className={style.donutItem} key={donut.id}>
            <p>{donut.name}</p>
            <img src={donut.image_url} />
            <ul>
              {donut.types.map(type => (
                <li key={type.id}>{type.title}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className={style.donutBox}></div>
      </div>
    </>
  )
}
