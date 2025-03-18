import React, { useEffect } from "react";
import face from "./img/hezhao.jpg";
import "./App.css";

function App() {

  useEffect(() => {
    const headings = document.querySelectorAll("section[id] > h2");
    const navLinks = document.querySelectorAll(".nav-link");
    
    // 为导航链接添加自定义点击事件
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const targetHeading = targetSection.querySelector('h2');
        
        // 计算目标位置 - 定位到屏幕上方1/4处（比高亮触发点更靠上）
        const viewportHeight = window.innerHeight;
        const scrollPosition = targetHeading.getBoundingClientRect().top + window.scrollY - (viewportHeight * 1/3);
        
        // 平滑滚动到目标位置
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      });
    });
    
    function highlightNavOnScroll() {
      // 高亮触发点仍然保持在屏幕上方1/3处
      const viewportHeight = window.innerHeight;
      const triggerPoint = window.scrollY + (viewportHeight * 1/2);
      
      // 找出经过触发点的标题
      let activeHeading = null;
      
      headings.forEach(heading => {
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;
        
        if (headingTop <= triggerPoint && 
            headingTop + heading.parentElement.offsetHeight > window.scrollY) {
          activeHeading = heading;
        }
      });
      
      if (activeHeading) {
        const sectionId = activeHeading.parentElement.getAttribute("id");
        
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    }
    
    window.addEventListener("scroll", highlightNavOnScroll);
    highlightNavOnScroll();
    
    return () => {
      window.removeEventListener("scroll", highlightNavOnScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', function(){});
      });
    };
  }, []);
  


  return (
    
    <div className="App">
      <nav className="navbar">
  <ul>
    <li><a href="#about" className="nav-link">About Me</a></li>
    <li><a href="#job" className="nav-link">Job Intention</a></li>
    <li><a href="#study" className="nav-link">Recent Study plan</a></li>
    <li><a href="#education" className="nav-link">Education</a></li>
    <li><a href="#experience" className="nav-link">Professional Experience</a></li>
    <li><a href="#projects" className="nav-link">Projects</a></li>
    <li><a href="#skills" className="nav-link">Skills</a></li>
    <li><a href="#hobbies" className="nav-link">My Hobbies</a></li>
  </ul>
</nav>
      
      <header className="App-header">
        <img src={face} className="App-logo" alt="Dengsong Wang" />
        <br />
        <h1>Dengsong (Dylan) Wang</h1>
        <h2 style={{ marginTop: '10px' }}>王登崧</h2>
        <br />
        <p className="info-text">
          Email:&nbsp;
          <a href="mailto:dengsong.wang@mail.utoronto.ca" className="App-link">
            dengsong.wang@mail.utoronto.ca
          </a>
        </p>
        <p className="info-text">
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
        <p className="info-text">WeChat: wds2876803389</p>
        <p className="info-text">Discord: dylanwds</p>
        <p className="info-text">
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

      <section id="about" className="About-me">
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
          <br /><br />
          During my undergraduate years, I met many exceptional friends and my girlfriend 
          Sally, who added richness and color to my university life. Despite some ups 
          and downs, I successfully and joyfully completed my undergraduate program.
          <br /><br /> 
          In September 2023, I returned to Toronto, where my dream had began, and joined my dream school 
          from my high school days, the University of Toronto, to pursue the Master of Engineering 
          in Electrical and Computer Engineering.  As a newcomer, I am eager to meet more 
          classmates and industry experts, looking forward to learning and growing in this 
          new journey.
          <br /><br />
          If you are interested in my background, or would like to discuss academic and technical topics, 
          feel free to connect with me on email, WeChat or Discord. I look forward to interacting with you!
        </p>
        
      </section>
      <br />
      <br />
      

      <section id="job" className="WorkPlan">
        <h2>Job Intention</h2>
        <p>
        I will be graduating in December 2024 and am actively looking for full-time, 
        contract, or internship positions immediately afterward. Ideally, I'd like 
        to work in Ontario, preferably in the GTA area. I'm open to on-site, hybrid, 
        and remote works. <br /><br />
        The roles that best match my skills include data analyst/engineer, software 
        developer, NLP programmer, CUDA programmer, and cloud computing programmer.
        </p>
      </section>
      <br />
      <br />
      
      <section id="study" className="RecentStudy">
        <h2>Recent Study plan</h2>
        <p>
        Recently, I've been focusing on improve my SQL skills, starting with MySQL and planning 
        to transition to PostgreSQL soon. After building a solid foundation in MySQL, I believe the switch to 
        PostgreSQL will be efficient. To gain practical experience, I'm solving SQL problems on LeetCode, 
        which helps me understand real-world applications. As I approach graduation this December, I'm preparing to
         apply for roles such as data analyst, data engineer, or positions related to my background in NLP and CUDA programming.
         <br /><br />
        In my final semester, I'm also taking courses in NLP and Rust programming. By the end of December, 
        I expect to have gained more knowledge and valuable project experience in these areas, which 
        will guide my job search in related fields.
        </p>
      </section>
      <br />
      <br />
      

      <section id="education" className="Education">
  <h2>Education</h2>
  <div className="education-item">
    <h3>University of Toronto</h3>
    <p>MEng in Electrical & Computer Engineering, 2023 - 2024</p>
    <p>Courses taken:</p>
    <ul>
    
    <ul className="courses-list">
      <li>Machine learning</li>
      <li>NLP</li>
      <li>Rust software system</li>
      <li>Parallel programming</li>
      <li>CUDA programming</li>
      <li>Cloud computing</li>
    </ul>
    </ul>
    
  </div>
  <br />
  <div className="education-item">
  <h3>University of Ottawa</h3>
    <p>Honours Bachelor of Science, Computer Science (Data Science Option), 2019 - 2023</p>
  </div>
</section>
      <br />
      <br />
      

      <section id="experience" className="Professional-Experience">
        <h2>Professional Experience</h2>
        <div className="Experience-item">
          <h3>Tianjin Artificial Intelligence Innovation Center</h3>
          <p>Research Intern, May 2021 - Aug 2021, Tianjin, China</p>
          <ul>
    <ul className="courses-list">
      <li>Used python-based deep neural networks to study pupil fixation position recognition and trajectory judgement 
      in wearable eye-tracking devices, to improve the accuracy of user eye movement prediction.</li>
      <li>Successfully reduced deviation in gaze estimation to 50% in cross-subject conditions 
      through collaborative research; improved normality of newly collected eye images.</li>
      <li>Developed a function to pre-calibrate pupil position for pupil image collection program. </li>
      <li>Verified the effectiveness of Adaptive Batch Normalization (AdaBN) in improving accuracy of cross-subject gaze estimation. </li>
    </ul>
    </ul>


          <h3>Matrix Innovations</h3>
          <p>Junior Programmer, Oct 2022 - Nov 2022, Remote</p>
          <ul>
    <ul className="courses-list">
      <li>Developed an AI chatbot using OpenAI API technologies. </li>
      <li>Implemented ability for chatbot to provide specific answers when users ask questions about stocks and investments.</li>
      <li><a
              href="https://github.com/DengsongWang/GPT-3-chatbot"
              className="App-link"
              target="_blank"
            >
              github link
            </a></li>
    </ul>
    </ul>
        </div>
      </section>
      <br />
      <br />





      <section id="projects" className="Projects">
        <h2>Projects</h2>
        <div className="Project-item">
          <h3>Deep Learning, Python:</h3>
          <p>
            In the undergraduate graduation project, I used deep learning to study fake news detection, evaluating four models across nine social media datasets. Demonstrated superior performance of the BERT model on datasets like ISOT and FakeNews, highlighting the importance of preprocessing techniques and hyperparameter tuning in fake news detection and NLP applications.
            <br />
            <a
              href="https://github.com/DengsongWang/Honours-Project-code-files-"
              className="App-link"
              target="_blank"
            >
              github link
            </a>
          </p>

          <h3>CUDA</h3>
          <p>
            My team used the CUDA program to accelerate video encoding speed, and finally achieved up to 10 times improvement compared to the best CPU parallel algorithm Ffmpeg.
            <br />
            <a href="https://github.com/DengsongWang/ECE1782-Project/tree/main" className="App-link" target="_blank">
              github link
            </a>
          </p>
          <h3>3D Model Rendering</h3>
          <p>
          I Used Nerfstudio and 3D Gaussian to render a 3D model of a collection of images inside a room.
            <br />
            <a href="https://drive.google.com/file/d/1FgMqDFhKkjlSUYvebgTM1xfY6dEhZ_Rr/view?usp=drive_link" className="App-link" target="_blank">
              demo video
            </a>
          </p>
          <h3>Parallel Programming, C++:</h3>
          <p>
          My team used parallel programming methods to parallelize a Pac-Man game based on C++, transforming it into an automated game that accommodated multiple independent Pac-Men.
            <br />
            <a href="https://youtu.be/H49Ioxk-4nY" className="App-link" target="_blank">
              demo video
            </a>
          </p>
          <h3>HTML/CSS, JavaScript & React:</h3>
          <p>
            Designed a website for a virtual baking studio.
            <br />
            <a href="https://DengsongWang.github.io/s5" className="App-link" target="_blank">
              web link
            </a>
          </p>

          <h3>PostgreSQL:</h3>
          <p>
            My team designed and created dental clinic management system to help
            organization track appointments, staff information, patient
            information and inventories.
          </p>
        </div>
      </section>
      <br />
      <br />

      <section id="skills" className="Skills">
        <h2>Skills</h2>
        <h3>Technical Skills:</h3>
        <p>
        Python, SQL, Deep Learning, NLP, Machine learning, 
        CUDA programming, NLP, C/C++, Java, Data analysis, HTML, CSS, JavaScript, React, Node.js, Linux, Git, OpenAI API 
        </p>
        <h3>Language Skills:</h3>
        <p>Bilingual Fluency in Mandarin (Native) & English (Fluent)</p>
      </section>
      <br />
      <br />

      <section id="hobbies" className="My-Hobbies">
        <h2>My Hobbies</h2>
        <p>
          In sports, I like soccer, basketball, and snowboarding. My favorite
          soccer teams are Real Madrid and Manchester City, and players I'm fan of
          Messi, Modric, Bellingham and Haaland. In basketball, I don't have
          a particular team I like so much, but I like Kawhi Leonard. 
        </p> 
        <p> 
          In my leisure, I like gaming, murder mystery game (剧本杀), or exploring new restaurants in Toronto. 
          I play a lot of games, and recently I've been enjoying World of Warcraft, Baldur's Gate 3, TFT, Black Myth: Wukong. 
          Other games I love include Mount & Blade II: Bannerlord, Elden Ring, Cyberpunk, GTA 5, Euro Truck Simulator 2, 
          Red Dead Redemption II, and FIFA. I'm always open to playing or discussing any of these games with others!
        </p>
      </section>
      <div className="bottom-space"></div>
    </div>
  );
}



export default App;
