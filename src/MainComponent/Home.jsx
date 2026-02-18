import PortfolioSection from "../Shared/Components/PortflioSection";
import PortfolioSection2 from "../Shared/Components/PortfolioSection2";
import PortfolioSection3 from "../Shared/Components/PortfolioSection3";
import ExperienceSection from "../Shared/Components/ExperienceSection";
import SkillSection from "../Shared/Components/SkillSection";
import About from "../Shared/Components/About";
import Section from "../Shared/Section";

function Home({ sectionRefs }) {
  const { homeRef, projectRef, skillsRef, aboutRef } = sectionRefs || {};

    return (
      <>
        <div className="">
          <section ref={homeRef}>
            <Section />
          </section>

          <section ref={projectRef}>
            <ExperienceSection />
            <PortfolioSection />
            <PortfolioSection2 />
            <PortfolioSection3 />
          </section>

          <section ref={skillsRef}>
            <SkillSection />
          </section>

          <section ref={aboutRef}>
            <About />
          </section>
        </div>
      </>
    );
  }
  
  export default Home;