import Images from "../images/shareImg";
import useValidation from "./validation/home";

const Home = () => {
  const { errors, register, handleSubmit } = useValidation();
  console.log(errors.root?.message);
  return (
    <>
      <body>
        <main className="wrapper flow-content__large">
          <div className="header-container wrapper">
            <nav className="nav-bar nav-bar__list align-center flex light-gray-color">
              <a href="">
                <img width="150px" src={Images.logo} alt="" />
              </a>
              <ul className="flex">
                <li>
                  <a className="nav-link" href="">
                    Features
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="">
                    Team
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="">
                    Sing in
                  </a>
                </li>
              </ul>
            </nav>
            <header className="header text-center wrapper">
              <div className="grid-content flow-content">
                <img src={Images.intro} alt="" />
                <h1>
                  All your files in one secure location, accessible anywhere.
                </h1>
                <p className="header-description grid-content">
                  Fylo stores all your most important files in one secure
                  location. Access them wherever you need, share and collaborate
                  with friends family, and co-workers.
                </p>
                <button className="button ff-raleway">Get Started</button>
              </div>
            </header>
          </div>

          <section className="showcases grid text-center">
            <article className="flow-content">
              <img src={Images.accessiblity} alt="" />
              <h1>Access your files, anywhere</h1>
              <p className="light-gray-color">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </article>
            <article className="flow-content">
              <img width="60px" src={Images.security} alt="" />
              <h1>Security you can trust</h1>
              <p className="light-gray-color">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </article>
            <article className="flow-content">
              <img src={Images.collabration} alt="" />
              <h1>Real-time collaboration</h1>
              <p className="light-gray-color">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </article>
            <article className="flow-content">
              <img src={Images.anyfile} alt="" />
              <h1>Store any type of file</h1>
              <p className="light-gray-color">
                Whether you're sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </article>
          </section>

          <section className="grid-col2-section grid align-center grid-breakout">
            <img src={Images.stayProductive} alt="" />
            <article className="flow-content">
              <h1 className="title-headings ff-raleway">
                Stay productive, wherever you are
              </h1>
              <p className="light-gray-color">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="light-gray-color">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <div className="documantion-link-wrapper flex align-center">
                <a className="documantion-link" href="">
                  See how Fylo works
                </a>
                <img src={Images.arrow} alt="" />
              </div>
            </article>
          </section>

          <section className="feedbacks flex grid-breakout contaxt-creator">
            <div className="feedback-card flow-content ">
              <p className="light-gray-color feedback-text">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <img className="quote" src={Images.quote} alt="" />
              <div className="flex feedback-profile align-center">
                <img src={Images.profile1} alt="" />
                <div className="profile-details">
                  <p className="fw-exterabold">Satish Patel</p>
                  <p className="profile-status light-gray-color">
                    Founder & CEO, Huddle
                  </p>
                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="feedback-card flow-content">
                <p className="feedback-text light-gray-color">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flex feedback-profile align-center light-gray-color">
                  <img src={Images.profile2} alt="" />
                  <div className="profile-details">
                    <p className="fw-exterabold">Bruce McKenzie</p>
                    <p className="profile-status light-gray-color">
                      Founder & CEO, Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="feedback-card flow-content">
                <p className="feedback-text light-gray-color">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flex feedback-profile align-center">
                  <img src={Images.profile3} alt="" />
                  <div className="profile-details">
                    <p className="fw-exterabold">Iva Boyd</p>
                    <p className="profile-status light-gray-color">
                      Founder & CEO, Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="flow-content wrapper footer">
            <div className="call-to-action text-center grid-content">
              <div className="flow-content call-to-action-text">
                <h1>Get Early Access Today</h1>
                <p>
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
                </p>

                <form
                  className="action contaxt-creator flex align-center"
                  onSubmit={handleSubmit(() => console.log("H"))}
                >
                  <input
                    {...register("email")}
                    placeholder="email@example.com"
                    className="action-input"
                    type="text"
                  />

                  <button
                    type="submit"
                    className="button ff-raleway action-button colored-button"
                  >
                    Get Started For Free
                  </button>
                </form>
                {errors.email && (
                  <p className="error-text ff-raleway">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="sukuna wrapper grid-breakout">
              <img width="150px" src={Images.logo} alt="" />
              <div className="footer-items-container align-center flex">
                <div className="flex align-center location">
                  <img className="location-img" src={Images.location} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="flex align-center contact">
                  <div className="flex">
                    <img src={Images.phone} alt="" />
                    <p>+1-543-123-4567</p>
                  </div>
                  <div className="flex align-center">
                    <img src={Images.email} alt="" />
                    <p>example@fylo.com</p>
                  </div>
                </div>
                <div className="footer-links grid grid-col2-section">
                  <div className="flex">
                    <a className="link" href="">
                      About Us
                    </a>
                    <a className="link" href="">
                      Jobs
                    </a>
                    <a className="link" href="">
                      Press
                    </a>
                    <a className="link" href="">
                      Blog
                    </a>
                  </div>
                  <div className="flex">
                    <a className="link" href="">
                      Contact us
                    </a>
                    <a className="link" href="">
                      Terms
                    </a>
                    <a className="link" href="">
                      Privacy
                    </a>
                  </div>
                </div>
                <div className="footer-icons flex">
                  <i
                    className="fa-brands fa-facebook-f"
                    style={{ color: "#ffffff" }}
                  ></i>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "#ffffff" }}
                  ></i>
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#ffffff" }}
                  ></i>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </>
  );
};

export default Home;
