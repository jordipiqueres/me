import React, { useState, useEffect } from "react";
import data from '../../data/header.json';
import Header from '../../components/Header';

const HeaderPage = () => {
  const [header, setHeaderValues] = useState(0)

  useEffect(() => {
    setHeaderValues(data.header)
  }, [data])

  return (
      <Header params={header}></Header>
  )
}
export default HeaderPage;