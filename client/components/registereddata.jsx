import React, { useMemo, useEffect } from 'react'

const RegisteredData = (props) => {
  const checkedMainObj = Object.values(props.mainObj).every((it) => it !== '')

  useEffect(() => {
    console.log(checkedMainObj)
    if (!checkedMainObj) {
      props.setIsDataShowd(!props.isDataShowdalse)
    }
  }, [checkedMainObj, props])

  const memoizedFunc = useMemo(
    () => Object.values(props.mainObj).map((it) => <li key={it}>{it}</li>),
    [props.mainObj]
  )
  return (
    <>
      {checkedMainObj && (
        <div className="bg-yellow-200 rounded shadow p-6 m-60 w-full lg:w-3/4 lg:max-w-lg">
          <ul>{memoizedFunc}</ul>
        </div>
      )}
    </>
  )
}

RegisteredData.propTypes = {}

export default React.memo(RegisteredData)
