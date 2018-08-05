import React from 'react';
import PropTypes from 'prop-types';

const App = ()=> {
  const profiles =[
    {name: "Taro", age:10},
    {name: "Hanako", age:5},
    {name: "hoz"}
  ]
  return (
    <div>
    {
      profiles.map((profile, index) =>{
        console.log('hoz'+index);
        return <User name={profile.name} age={profile.age} hoz={"hoz"} key={index}/>
      })

    }
    </div>
  )
}
const User = (props)=> {
  return <div>Hi!I am {props.name}, and {props.age}才！, and {props.hoz}</div>
}

//PropTypesで型を定義する
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
