// const page = (
//     <div>
//         <h2>I am loving it</h2>
//     </div>
// )

// // ReactDOM.createroot(document.getElementById('root')).render(page)  use react 18
// ReactDOM.render(page, document.getElementById('root'))

// const page = (
//   <div>
//     <img width="250px" src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"></img>
//     <h1>Fun Facts About React</h1>
//     <ul>
//         <li>Was first realsed in 2013</li>
//         <li>Was created by Jordan Walke</li>
//         <li>Has 100k stars on GitHub</li>
//         <li>Is maintained by FaceBook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )
// ReactDOM.render(page, document.getElementById('root'))

function Header() {
    return (
      <header>
        <nav className = "nav-bar">
          <img
            className = "image"
            src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
          ></img>
          <ul className = "nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    );
}

function MainContent() {
    return (
        <div className = "mainCon">
            <h2>I am very exicted to learn React</h2>
            <ul>
              <li>It's very exciting </li>
              <li>Feeling like I'am doing something</li>
            </ul>
        </div>
    );
}

function Footer() {
    return (
        <footer className = "footer">
            <small>© 20xx development. All rights reserved.</small>
        </footer>
    )
}

function SamplePage() {
    return (
      <div className = "main">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
}

ReactDOM.render(<SamplePage />, document.getElementById('root'))