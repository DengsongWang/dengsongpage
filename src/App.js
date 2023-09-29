import face from "./img/hezhao.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={face} className="App-logo" />
        <h1>
          Dengsong (Dylan) Wang
          <br />
          王登崧
        </h1>
        <p>
          Email:&nbsp;
          <a href="mailto:dengsong.wang@mail.utoronto.ca" className="App-link">
            dengsong.wang@mail.utoronto.ca
          </a>
        </p>
        <p>
          LinkedIn:&nbsp;
          <a
            href="https://www.linkedin.com/in/dengsong-wang-2451bb1ab/"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dengsong Wang
          </a>
        </p>
        <p>WeChat: wds2876803389</p>
        <p>Discord: dylanwds</p>
      </header>

      <section className="About-me">
        <h2>About Me</h2>
        <p>
          Yo! My name is Wang Dengsong, or you can call me by my English name
          Dylan, many of my Chinese friends like to call me "Dailan", which is
          also a homophonic of Dylan. I am from Tianjin, China, where I spent
          the first 16 years of my life before moving to Canada on my own. I
          went to high school in Toronto for two years ("Father John Redmond"
          and "Bond Academy") and then went to the University of Ottawa for my
          undergraduate degree. I started out in Mechanical Engineering, but
          soon realized that I wasn't cut out for it, so I switched to CS with
          little hesitation. Overall, I'm very happy with and enjoy my major,
          and I love the city of Ottawa. I also met a lot of nice friends and my
          girlfriend Sally (Love you!). I had a lot of ups and downs, but
          overall I had a great time finishing my undergraduate program! Now,
          I've returned to Toronto, where my dream began, and have joined my
          dream school from high school days, the University of Toronto,
          embarking on a brand new challenge. Having just arrived, I'm keen on
          getting to know more classmates, experts, or bros to hang out with.
          So, since you've landed on my homepage, why not add me on WeChat or
          Discord and let's be friends!
        </p>
        <p>
          Yo！我叫王登崧，或者你可以叫我的英文名Dylan。许多我的朋友都喜欢叫我“呆蓝”，也就是Dylan的谐音。我来自中国天津，在那里度过了我人生的前16年，之后独自来到了加拿大。我在多伦多上了两年高中（分别在Father
          John Redmond和Bond
          Academy），之后去了渥太华大学读本科。我在一开始选的是机械工程，但是很快我就意识到我不是这块料，所以几乎没有犹豫转到了CS。总的来说，我很满意也很喜欢我的专业，也很喜欢渥太华这个城市。我也遇到了许多很nice的朋友，以及我的女朋友杉杉
          (亲亲)。虽然经历了不少坎坷，但是总的来说还是很快乐地读完了本科！现在，我又回到了多伦多，这个梦开始的地方，来到了我高中时的梦校多伦多大学，开始了一段全新的挑战。刚到这里，很希望多认识一些同学，大佬，或者玩伴。所以，既然你都看到我的主页了，那就加我的微信或者discord，交个朋友！
        </p>
      </section>
      <br />
      <br />
      

      <section className="RecentArea">
        <h2>Recent Study/Research Interest</h2>
        <p>
          My recent focus areas of study are C++, Parallel Programming,
          Cuda, and Machine Learning. I am actively working on acquiring
          foundational knowledge in C++ and will soon begin practicing on
          LeetCode for hands-on coding experience. This will set the groundwork
          for advanced techniques in Cuda and Parallel Programming. I anticipate
          completing a course project this semester that involves parallelizing
          an existing or unfinished project, which will significantly enhance my
          parallel programming skills.
        </p>
      </section>
      <br />
      <br />
      

      <section className="Education">
        <h2>Education</h2>
        <p>
          <b>University of Toronto</b>, MEng in Electrical & Computer
          Engineering, 2023 - 2024
        </p>
        <p>
          <b>University of Ottawa</b>, Honours Bachelor of Science, Computer
          Science (Data Science Option), 2019 - 2023
        </p>
      </section>
      <br />
      <br />
      

      <section className="Professional-Experience">
        <h2>Professional Experience</h2>
        <div className="Experience-item">
          <h3>Tianjin Artificial Intelligence Innovation Center</h3>
          <p>Research Intern, May 2021 - Aug 2021, Tianjin, China</p>
          <p>
            ● Utilized Python-based deep neural networks to study pupil fixation
            position recognition and trajectory judgement in wearable
            eye-tracking devices, enhancing accuracy of user eye movement
            predictions.
            <br />● Verified effectiveness of Adaptive Batch Normalization
            (AdaBN) in improving accuracy of cross-subject gaze estimation.
            <br />● Developed Android Studio-based function to pre-calibrate
            pupil position for pupil image collection program.
            <br />● Successfully reduced deviation in gaze estimation to 50% in
            cross-subject condition through in-depth collaborative research;
            improved normality of newly collected eye images.
          </p>

          <h3>Matrix Innovations</h3>
          <p>Junior Programmer, Oct 2022 - Nov 2022, Remote</p>
          <p>
            ● Collaborated with programming team to develop AI chatbot using
            OpenAI API technologies.
            <br />● Implemented ability for chatbot to provide specific answers
            when users ask questions about stocks and investments.
            <br />
            <a
              href="https://github.com/DengsongWang/GPT-3-chatbot"
              className="App-link"
            >
              https://github.com/DengsongWang/GPT-3-chatbot
            </a>
          </p>
        </div>
      </section>
      <br />
      <br />

      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project-item">
          <h3>Python (Deep Learning):</h3>
          <p>
            In the honours project, used deep learning to study fake news
            detection, evaluating four models across nine social media datasets.
            Demonstrated superior performance of the BERT model on datasets like
            ISOT and FakeNews, highlighting the importance of preprocessing
            techniques and hyperparameter tuning in fake news detection and NLP
            applications.
            <br />
            <a
              href="https://github.com/DengsongWang/Honours-Project-code-files-"
              className="App-link"
            >
              https://github.com/DengsongWang/Honours-Project-code-files-
            </a>
          </p>

          <h3>HTML/CSS, JavaScript & React:</h3>
          <p>
            Designed functional websites for virtual baking studio and
            veterinary hospital.
            <br />
            <a href="https://DengsongWang.github.io/s5" className="App-link">
              https://DengsongWang.github.io/s5
            </a>
          </p>

          <h3>Java (Android Studio):</h3>
          <p>
            Designed online service application for virtual vehicle rental
            company.
          </p>

          <h3>PostgreSql:</h3>
          <p>
            Designed and created dental clinic management system to help
            organization track appointments, staff information, patient
            information and inventories.
          </p>
        </div>
      </section>
      <br />
      <br />

      <section className="Skills">
        <h2>Skills</h2>
        <h3>Technical Proficiencies:</h3>
        <p>
          Python, Deep Learning, Java, C++, HTML, CSS, JavaScript, React,
          PostgreSQL, Android Studio, Linux, Firebase, Git, Quartus, OpenAI &
          JSON
        </p>
        <h3>Language Proficiencies:</h3>
        <p>Bilingual Fluency in Mandarin (Native) & English (Fluent)</p>
      </section>
      <br />
      <br />

      <section className="My-Hobbies">
        <h2>My Hobbies</h2>
        <p>
          In sports, I like soccer, basketball, and snowboarding. My favorite
          soccer teams are Barcelona and Manchester City, and players I'm fan of
          Messi, Modric (surprising?), and Haaland. In basketball, I don't have
          a particular team I like so much, but I like Kawhi Leonard. My
          basketball playing style on the court resembles Jason Kidd who can't
          dribble (not much of an aggressor). In my leisure, I enjoy gaming,
          driving, or exploring new restaurants in Toronto I haven't tried. My
          current dream is to land a decent-paying job after graduation, earn
          enough to upgrade to a fiercer car, and still have time to play
          basketball with friends.
        </p>
      </section>
    </div>
  );
}

export default App;
