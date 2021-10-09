import React, { useState, useCallback } from 'react'
import Head from './head'
import RegisteredData from './registereddata'

const Dummy = () => {
  const registerObj = {
    userFirstname: '',
    userLastname: '',
    dateOfBirth: '',
    password: '',
    passwordConfirm: ''
  }

  const [mainObj, setInputText] = useState(registerObj)
  const [isDataShowd, setIsDataShowd] = useState(false)

  const inputChange = (e) => {
    setInputText({ ...mainObj, [e.target.name]: e.target.value })
  }

  const changeDataShow = useCallback(() => {
    setIsDataShowd(!isDataShowd)
  }, [isDataShowd])

  const clearFormAndDataHide = useCallback(() => {
    setInputText({ ...registerObj })
    setIsDataShowd(false)
  }, [registerObj, setIsDataShowd])
  return (
    <div>
      <Head title="Hello" />
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-blue-200 rounded shadow p-6 m-60 w-full lg:w-3/4 lg:max-w-lg">
          <form className="flex flex-col">
            <input
              onChange={inputChange}
              value={mainObj.userFirstname}
              className="my-2 pl-2 rounded-sm bg-gray-300"
              name="userFirstname"
              type="text"
              placeholder="Write your first Name"
            />
            <input
              onChange={inputChange}
              value={mainObj.userLastname}
              className="my-2 pl-2 rounded-sm bg-gray-300"
              name="userLastname"
              type="text"
              placeholder="Write Last Name"
            />
            <input
              onChange={inputChange}
              value={mainObj.dateOfBirth}
              className="my-2 pl-2 rounded-sm bg-gray-300"
              name="dateOfBirth"
              type="text"
              placeholder="DD-MM-YYYY"
            />
            <input
              onChange={inputChange}
              value={mainObj.password}
              className="my-2 pl-2 rounded-sm bg-gray-300"
              name="password"
              type="password"
              placeholder="Write password"
            />
            <input
              onChange={inputChange}
              value={mainObj.passwordConfirm}
              className="my-2 pl-2 rounded-sm bg-gray-300"
              name="passwordConfirm"
              type="password"
              placeholder="Re-type password"
            />
            <div className="flex justify-around">
              <button
                className="w-2/6 flex items-center justify-center rounded-md focus:ring-4 focus:ring-green-500"
                name="submit"
                type="button"
                onClick={changeDataShow}
              >
                Submit
              </button>
              <button
                className="w-1/6 flex items-center justify-center rounded-md focus:ring-4 focus:ring-red-300"
                name="button-clear"
                type="button"
                onClick={clearFormAndDataHide}
              >
                Clear
              </button>
            </div>
          </form>
          {console.log('isDataShowd', isDataShowd)}
        </div>
        {isDataShowd && (
          <RegisteredData
            mainObj={mainObj}
            isDataShowd={isDataShowd}
            setIsDataShowd={setIsDataShowd}
          />
        )}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
