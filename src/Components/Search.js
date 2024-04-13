import React, { useEffect, useState } from 'react'
import { InputBase, Box, styled, Typography, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getProducts } from './Login/Api';
import { useNavigate } from 'react-router-dom';


const InputStyleBox = styled(Box)`
background:white;
margin:20px;
width:38%;
display:flex;
padding-left:20px
`
const InputStyle = styled(InputBase)`
width:100%
`
const ListWrapper = styled(List)`
position:absolute;
 color:black;
  margin-top:35px;
 background:white;
 margin-left:-20px;
 cursor:pointer
`

function Search() {
  const [products, setproducts] = useState([])
  const [inputText, setinputText] = useState()

  const navigate=useNavigate()

  async function getproducts() {
    let response = await getProducts()
    setproducts(response.data)
  }
  useEffect(() => {
    getproducts()
  },[])

  function handleChange(text) {
    setinputText(text)
  }
  return (
    <>
      <InputStyleBox>
        <InputStyle placeholder='Search for products, brands and more'
          onChange={(e) => { handleChange(e.target.value) }}
        />
        <SearchIcon style={{ color: "blue", padding: "5px" }} />

        {
          inputText ?
            <ListWrapper>
              {
                products.filter((product) =>
                  product.title.longTitle.toLowerCase().includes(inputText.toLowerCase())).map(product =>
                    <ListItem onClick={()=>{navigate(`/Details/${product.id}`); setinputText("")}}>
                      {product.title.longTitle}
                    </ListItem>
                  )
                
              }

            </ListWrapper>
            : ""}

      </InputStyleBox>
    </>
  )
}

export default Search