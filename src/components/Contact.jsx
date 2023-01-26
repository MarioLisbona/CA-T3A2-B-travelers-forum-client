import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import SocialMedia from './SocialMedia'

const Contact = () => {

  return (
    <>
      <HeroImage heroClass={'contact'} />
        <div className="container">
          <Header 
            headingText={"Connect with us at the links below"}
            bodyText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor ipsum iusto nisi eveniet, aspernatur sed officiis voluptate tenetur veniam, placeat doloribus vel illo laudantium recusandae quis porro est soluta. Reprehenderit quo voluptas minus, provident nisi, aspernatur, voluptatibus accusantium illo dolorum autem possimus quisquam sed quas consequatur quos non ex."}
            btnText={'View all Contact Information'}
          />
        <SocialMedia />
        </div>
    </>
  )
}

export default Contact