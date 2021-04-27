import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <>
      <Seo title={"Not Found"} />
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry!{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Page not found. (We're musicians, not web developers...mostly.)
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </>
  )
}

export default NotFoundPage
