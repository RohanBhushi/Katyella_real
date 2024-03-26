

import Topblock from "./Topblock"
import Footer from "../FootPart/Footer"
import Header from "../Components/Header"
import ArticleBody from "./ArticleBody"

const Articles = () => {
  return (
    <div className="articles">
        <Header />
        <Topblock pageheading={"Articles"} />
        <ArticleBody />
        <Footer />
    </div>
  )
}

export default Articles