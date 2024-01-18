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
        <p>
          GitHub:&nbsp;
          <a
            href="https://github.com/DengsongWang"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            DengsongWang
          </a>
        </p>

      </header>

      <section className="About-me">
        <h2>About Me</h2>
        <p>
          Hi! My name is Dengsong Wang, or you can call me by my English name
          Dylan. I was born and raised in Tianjin, China, where I spent 
          the first 16 years of my life. I then moved to Canada on my own and 
          completed my high school education at "Father John Redmond Catholic 
          Secondary School" and "Bond Academy" in Toronto. Subsequently, I attended 
          the University of Ottawa, initially majoring in Mechanical Engineering. 
          However, as I delved deeper, I realized that Computer Science was more 
          suited to my interests and skills, leading me to switch majors without 
          hesitation. I thoroughly enjoy my field of study and have found a sense 
          of belonging in the city of Ottawa.
        </p>
        <p>  
          During my undergraduate years, I met many exceptional friends and my girlfriend 
          Sally, who added richness and color to my university life. Despite some ups 
          and downs, I successfully and joyfully completed my undergraduate program.
        </p>
        <p>  
          In September 2023, I returned to Toronto, where my dream had began, and joined my dream school 
          from my high school days, the University of Toronto, to pursue the Master of Engineering 
          in Electrical and Computer Engineering.  As a newcomer, I am eager to meet more 
          classmates and industry experts, looking forward to learning and growing in this 
          new journey.
        </p>  
        <p>
          If you are interested in my background, or would like to discuss academic and technical topics, 
          feel free to connect with me on email, WeChat or Discord. I look forward to interacting with you!
        </p>
        
      </section>
      <br />
      <br />
      

      <section className="RecentArea">
        <h2>Recent Study/Research Interest</h2>
        <p>
          I have chosen a CUDA programming course and a cloud computing course for the Winter 2024 term. 
          At the same time, I will also focus on developing my skills in C and C++ languages, 
          which will help in understanding and mastering CUDA programming.
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
          <h3>Deep Learning, Python:</h3>
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

          <h3>Parallel Programming, C++:</h3>
          <p>
            Utilized parallel programming methods to parallelize a traditional Pac-Man game 
            based on C++ language, transforming it into an automated game that accommodated 
            multiple independent Pac-Men.
            <br />
            <a href="https://youtu.be/H49Ioxk-4nY" className="App-link">
              https://youtu.be/H49Ioxk-4nY
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

          <h3>Java:</h3>
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
          Python, Deep Learning, C, C++, Java, CUDA (in progress), HTML, CSS, JavaScript, React,
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
