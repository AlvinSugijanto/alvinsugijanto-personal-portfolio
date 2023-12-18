import Spline from '@splinetool/react-spline';

import React, { useState, useEffect, useRef } from 'react'

const Avatar = () => {

  const [isLoading, setIsLoading] = useState(true);
  const object = useRef();



  return (

    <Spline scene="https://prod.spline.design/POyRV9TlyW0auk1N/scene.splinecode" />

  )
}

export default Avatar

